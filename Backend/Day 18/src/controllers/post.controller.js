const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

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

module.exports = {
  createPostController,
  getPostsController,
  getPostDetailsController,
};
