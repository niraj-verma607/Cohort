const express = require("express");
const {
  createPostController,
  getPostsController,
  getPostDetailsController,
} = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postRouter = express.Router();
const identifyUser = require("../middlewares/auth.middleware");

// POST /api/posts [protected]
// req.body => { caption, image-file }

postRouter.post(
  "/",
  identifyUser,
  upload.single("image"),
  createPostController,
); // upload.single("image") => multer middleware to handle single file upload with field name "image"

/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/", identifyUser, getPostsController);

/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with id also check whether the post belongs to the user that is requesting
 */

postRouter.get("/details/:postId", identifyUser, getPostDetailsController);

module.exports = postRouter;
