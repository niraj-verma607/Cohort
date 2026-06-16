const crypto = require("crypto");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { email, username, password, bio, profileImage } = req.body;

  // Not Efficient way to check if user already exists by email or username

  //   const isUserExistsByEmail = await userModel.findOne({ email });

  //   if (isUserExistsByEmail) {
  //     return res
  //       .status(409)
  //       .json({ message: "User with this email already exists" });
  //   }

  //   const isUserExistsByUsername = await userModel.findOne({ username });

  //   if (isUserExistsByUsername) {
  //     return res
  //       .status(409)
  //       .json({ message: "User with this username already exists" });
  //   }

  // Efficient way to check if user already exists by email or username using $or operator
  const isUserAleradyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAleradyExists) {
    return res.status(409).json({
      message:
        "User already exists" +
        (isUserAleradyExists.email === email
          ? " Email already exits"
          : "username already exits"),
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    email,
    username,
    password: hash,
    bio,
    profileImage,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      { username: username }, //condition
      { email: email }, //condition
    ], //or operator takes array of conditions and returns the first one that matches
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValid = hash === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
