const express = require("express");
const {
  createPostController,
  getPostsController,
  getPostDetailsController,
  likePostController,
  getFeedController,
} = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postRouter = express.Router();
const identifyUser = require("../middlewares/auth.middleware");

/**
 * @routes POST /api/posts [protected]
 * @description Create a new post
 *  req.body => { caption, image-file }
 */

postRouter.post(
  "/",
  identifyUser,
  upload.single("image"),
  createPostController,
); // upload.single("image") => multer middleware to handle single file upload with field name "image"

/**
 * @route GET /api/posts/ [protected]
 * @description Get all posts of the user that is requesting
 */
postRouter.get("/", identifyUser, getPostsController);

/**
 * @route GET /api/posts/details/:postid
 * @description return an detail about specific post with id also check whether the post belongs to the user that is requesting
 */

postRouter.get("/details/:postId", identifyUser, getPostDetailsController);

/**
 * @route POST /api/posts/like/:postId
 * @description Like a post with id.
 */

postRouter.post("/like/:postId", identifyUser, likePostController);

/**
 * @route GET /api/posts/feed
 * @description Get all the posts
 * @access Private
 */

postRouter.get("/feed", identifyUser, getFeedController);

module.exports = postRouter;
