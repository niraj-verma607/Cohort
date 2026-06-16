const userModel = require("../models/user.model");
let jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");

let registerService = async (data) => {
  try {
    let { name, email, password } = data;

    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    let isExisted = await userModel.findOne({ email });

    if (isExisted) {
      throw new Error("User already exists with this email");
    }

    let hashPass = bcrypt.hashSync(password, 10);

    let newUser = await userModel.create({
      name,
      email,
      password: hashPass,
    });

    let accessToken = generateAccessToken(newUser._id);

    let refreshToken = generateRefreshToken(newUser._id);

    newUser.refreshToken = refreshToken;
    await newUser.save();

    return { accessToken, refreshToken, newUser };
  } catch (error) {
    throw new Error(error);
  }
};

let loginService = async (data) => {
  try {
    let { email, password } = data;

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    let isExisted = await userModel.findOne({ email });

    if (!isExisted) {
      throw new Error("Invalid credentials");
    }

    let hassPass = bcrypt.compareSync(password, isExisted.password);

    if (!hassPass) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    let accessToken = generateAccessToken(isExisted._id);

    let refreshToken = generateRefreshToken(isExisted._id);

    isExisted.refreshToken = refreshToken;
    await isExisted.save();

    return { accessToken, refreshToken, isExisted };
  } catch (error) {
    throw new Error(error);
  }
};

let getAccessTokenService = async (refreshToken) => {
  let decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  if (!decoded) {
    throw new Error("Unauthorized");
  }

  let user = await userModel.findById(decoded.id);

  if (refreshToken !== user.refreshToken) {
    throw new Error("Unauthorized");
  }

  let accessToken = generateAccessToken(user._id);

  return accessToken;
};

module.exports = {
  registerService,
  loginService,
  getAccessTokenService,
};
