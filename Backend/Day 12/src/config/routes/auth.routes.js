const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

// //api/auth/register (is api pe /register api access hoga)

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email }); //E method check karega ki same email se user already hai aa nahi

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User Already Exists with this email",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered",
    user,
    token,
  });
  user;
});

module.exports = authRouter;
