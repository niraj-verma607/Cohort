const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    followee: {
      type: String,
    },
    status: {
      type: String,
      default: "pending", // pending, accepted, rejected
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "Status must be either pending, accepted, or rejected",
      },
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt fields to the schema
  },
);

followSchema.index({ follower: 1, followee: 1 }, { unique: true });
// This index ensures that a user cannot follow the same user more than once

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;
