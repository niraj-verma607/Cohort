const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  if (followerUsername === followeeUsername) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }

  const isFloweeExists = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isFloweeExists) {
    return res.status(404).json({ message: "User to follow not found" });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You are already following ${followeeUsername}`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
    status: "pending",
  });

  res.status(201).json({
    message: `You are now following ${followeeUsername}`,
    followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isUserFollowing) {
    return res
      .status(200)
      .json({ message: `You are not following ${followeeUsername}` });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({ message: `You have unfollowed ${followeeUsername}` });
}

async function acceptRequestController(req, res) {
  const loggedInUser = req.user.username; // followee
  const followerUsername = req.params.username;

  const follow = await followModel.findOne({
    follower: followerUsername,
    followee: loggedInUser,
  });

  if (!follow) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  if (follow.followee !== loggedInUser) {
    return res.status(403).json({
      message: "Not allowed to accept this request",
    });
  }

  if (follow.status !== "pending") {
    return res.status(400).json({
      message: "Request already processed",
    });
  }

  follow.status = "accepted";
  await follow.save();

  res.json({
    message: "Follow request accepted",
    follow,
  });
}

async function rejectRequestController(req, res) {
  const loggedInUser = req.user.username;
  const followerUsername = req.params.username;

  const follow = await followModel.findOne({
    follower: followerUsername,
    followee: loggedInUser,
  });

  if (!follow) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  if (follow.status !== "pending") {
    return res.status(400).json({
      message: "Request already processed",
    });
  }

  follow.status = "rejected";
  await follow.save();

  res.json({
    message: "Follow request rejected",
    follow,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  acceptRequestController,
  rejectRequestController,
};
