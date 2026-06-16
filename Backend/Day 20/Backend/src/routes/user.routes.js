const express = require("express");
const {
  followUserController,
  unfollowUserController,
  acceptRequestController,
  rejectRequestController,
} = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");
const followModel = require("../models/follow.model");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser, followUserController);

/**
 * @route POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser, unfollowUserController);

userRouter.patch(
  "/follow/accept/:username",
  identifyUser,
  acceptRequestController,
);

userRouter.patch(
  "/follow/reject/:username",
  identifyUser,
  rejectRequestController,
);

module.exports = userRouter;
