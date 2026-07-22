import "dotenv/config";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import Redis from "ioredis";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { User } from "./models/user.model.js";

// MONGODB Connection
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting with MongoDB : ", error);
  }
};

connectToDB();

// REDIS Connection
const redis = new Redis(process.env.REDIS_URI);

redis.once("ready", () => {
  console.log("Connected to Redis");
});

// Express App setup

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/user/:id", async (req, res) => {
  try {
    // Get user from redis if present
    const userFromCache = await redis.get(`user:${req.params.id}`);

    if (userFromCache) {
      res.json({
        message: "User fetched successfully from cache",
        data: JSON.parse(userFromCache),
      });
    }

    const user = await User.findOne({ _id: req.params.id });

    // Set user in redis if not cached in redis
    await redis.set(`user:${req.params.id}`, JSON.stringify(user), "EX", 3600);

    res.json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error fetching user",
      err,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error while creating user",
      err,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
