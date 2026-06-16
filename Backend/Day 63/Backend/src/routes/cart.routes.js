import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {
  validateAddToCart,
  validateDecrementCartItemQuantity,
  validateIncrementCartItemQuantity,
} from "../validator/cart.validator.js";
import {
  addToCart,
  createOrderController,
  decrementCartItemQuantity,
  deleteCartItem,
  getCart,
  incrementCartItemQuantity,
  verifyOrderController,
} from "../controllers/cart.controller.js";

const router = express.Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @desc Add a product variant to the cart
 * @access Private
 * @argument productId - ID of the product to add
 * @argument variantId - ID of the product variant to add
 * @argument quantity - Quantity of the product variant to add (optional, default: 1)
 */
router.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddToCart,
  addToCart,
);

/**
 * @routes GET /api/cart/
 * @desc Get user's cart
 * @access Private
 */
router.get("/", authenticateUser, getCart);

/**
 * @route patch /api/cart/quantity/increment/:productId/:variantId
 * @desc Increment the quantity in cart by 1
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the product variant to update
 */
router.patch(
  "/quantity/increment/:productId/:variantId",
  authenticateUser,
  validateIncrementCartItemQuantity,
  incrementCartItemQuantity,
);

/**
 * @route patch /api/cart/quantity/decrement/:productId/:variantId
 * @desc Decrement the quantity in cart by 1
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the product variant to update
 */
router.patch(
  "/quantity/decrement/:productId/:variantId",
  authenticateUser,
  validateDecrementCartItemQuantity,
  decrementCartItemQuantity,
);

/**
 * @route DELETE /api/cart/remove/:productId/:variantId
 * @desc Remove a product variant from the cart
 * @access Private
 * @argument productId - ID of the product to remove
 * @argument variantId - ID of the product variant to remove
 */
router.delete(
  "/remove/:productId/:variantId",
  authenticateUser,
  deleteCartItem,
);

/**
 * @route POST /api/cart/payment/create/order
 * @desc Create an order for payment
 * @access Private
 * @argument amount - Amount for the order (in INR)
 */
router.post("/payment/create/order", authenticateUser, createOrderController);

router.post("/payment/verify/order", authenticateUser, verifyOrderController);

export default router;
