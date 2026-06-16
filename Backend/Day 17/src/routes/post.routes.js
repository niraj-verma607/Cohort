const express = require("express");
const {
  createPostController,
  getPostsController,
  getPostDetailsController,
} = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

// POST /api/posts [protected]
// req.body => { caption, image-file }

postRouter.post("/", upload.single("image"), createPostController); // upload.single("image") => multer middleware to handle single file upload with field name "image"

/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/", getPostsController);

/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with id also check whether the post belongs to the user that is requesting
 */

postRouter.get("/details/:postId", getPostDetailsController);

module.exports = postRouter;
