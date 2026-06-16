import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductDetails,
  getSellerProducts,
} from "../controllers/product.controller.js";
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import multer from "multer";
import { createProductValidator } from "../validator/product.validator.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const router = express.Router();

/**
 * @route POST /api/products
 * @desc Create a new product
 * @access Private (Seller only)
 */
router.post(
  "/",
  authenticateSeller,
  upload.array("images", 7),
  createProductValidator,
  createProduct,
);

/**
 * @route GET /api/products/seller
 * @desc Get all products
 * @access Private (Seller only)
 */
router.get("/seller", authenticateSeller, getSellerProducts);

/**
 * @route GET /api/products
 * @desc Get all products (Public)
 * @access Public
 */
router.get("/", getAllProducts);

/**
 * @route GET /api/products/detail/:id
 * @desc Get product details by ID (Public)
 * @access Public
 */

router.get("/detail/:id", getProductDetails);

export default router;
