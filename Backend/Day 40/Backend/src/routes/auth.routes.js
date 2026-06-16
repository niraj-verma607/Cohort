import { Router } from "express";
import {
    getMeController,
  loginController,
  registerController,
  verifyEmailController,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";
import { get } from "mongoose";
import { authUserMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", registerValidator, registerController);

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
authRouter.post("/login", loginValidator, loginController);

/**
 * @route GET /api/auth/get-me
 * @desc Get current user's information
 * @access Private
 */

authRouter.get("/get-me", authUserMiddleware, getMeController);

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
authRouter.get("/verify-email", verifyEmailController);
export default authRouter;
