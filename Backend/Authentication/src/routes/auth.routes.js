const express = require("express");
const userModel = require("../config/models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(409).json({ message: "User already exists" });
  }
  const user = await userModel.create({
    name,
    email,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

authRouter.get("/get-me", async (req, res) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token that this is the same token that we generated in the register route

  const user = await userModel.findById(decoded.id); // Find the user by the id that we got from the token

  // console.log(decoded)

  res.status(200).json({
    message: "User fetched successfully ",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const isPasswordValid = hashedPassword === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    token,
  });
  
});

module.exports = authRouter;
