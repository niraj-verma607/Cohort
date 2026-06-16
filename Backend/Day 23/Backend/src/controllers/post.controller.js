const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // console.log(req.body);
  // console.log(req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"), // Buffer of the file
    fileName: "Test File", // Name of the file
    folder: "Cohort-Insta-Clone",
  });

  // console.log("File uploaded to ImageKit:", file);

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id, // req.user is set by the identifyUser middleware and contains the decoded user information from the JWT token, including the user's id
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostsController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({ user: userId });

  res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;

  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const isValidUser = post.user.toString() === userId; //.toString() is used to convert the ObjectId to string for comparison

  if (!isValidUser) {
    return res
      .status(403)
      .json({ message: "Not authorized to view this post" });
  }

  res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
}

async function likePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: "Post liked successfully",
    like,
  });
}

async function getFeedController(req, res) {
  const user = req.user;

  const posts = await Promise.all(
    (await postModel.find().populate("user").lean()).map(async (post) => {
      //lean() is used to convert the Mongoose document to a plain JavaScript object, which allows us to add new properties like isLiked without any issues
      /**
       * typeof post => object
       */

      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      });

      post.isLiked = Boolean(isLiked);

      return post;
    }),
  );

  res.status(200).json({
    message: "Feed fetched successfully",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostsController,
  getPostDetailsController,
  likePostController,
  getFeedController,
};
