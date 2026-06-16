const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt fields to the schema
  },
);

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;
