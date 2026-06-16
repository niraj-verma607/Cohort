import { config } from "../config/config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const sendTokenResponse = async (user, res) => {
  const token = jwt.sign({ id: user._id }, config.JWT_SECRET_KEY);

};

export const registerUser = async (req, res) => {
  const { email, contact, password, fullname } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await userModel.create({
      email,
      contact,
      password,
      fullname,
    });

    
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
