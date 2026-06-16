const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // console.log(req.body);
  // console.log(req.file);

  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token not provided, Unauthorized access" });
  }

  let decocded = null;

  // Verify the token and extract the user information and return 401 if the token is invalid or expired

  try {
    decocded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: " Unauthorized User" });
  }
  // console.log(decocded);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"), // Buffer of the file
    fileName: "Test File", // Name of the file
    folder: "Cohort-Insta-Clone",
  });

  // console.log("File uploaded to ImageKit:", file);

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decocded.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

module.exports = {
  createPostController,
};
