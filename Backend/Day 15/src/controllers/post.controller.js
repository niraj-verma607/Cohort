const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body);
  console.log(req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"), // Buffer of the file
    fileName: "Test File", // Name of the file
  });

  // console.log("File uploaded to ImageKit:", file);

  res.status(201).json({
    file,
  });
}

module.exports = {
  createPostController,
};
