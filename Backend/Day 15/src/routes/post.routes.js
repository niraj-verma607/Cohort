const express = require("express");
const { createPostController } = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

// POST /api/posts [protected]
// req.body => { caption, image-file }

postRouter.post("/", upload.single("image"), createPostController); // upload.single("image") => multer middleware to handle single file upload with field name "image"

module.exports = postRouter;
