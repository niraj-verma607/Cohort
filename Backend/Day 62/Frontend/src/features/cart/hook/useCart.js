import {
  additem,
  getCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  deleteCartItem,
} from "../service/cart.api";
import { useDispatch } from "react-redux";
import {
  setCart,
  incrementCartItem,
  decrementCartItem,
  removeItem,
} from "../state/cart.slice";

export const useCart = () => {
  const dispatch = useDispatch();

  async function handleAddItem({ productId, variantId }) {
    const data = await additem({ productId, variantId });
    return data;
  }

  async function handleGetCart() {
    const data = await getCart();
    console.log(data);
    dispatch(setCart(data.cart));
  }

  async function handleIncrementCartItem({ productId, variantId }) {
    const data = await incrementCartItemQuantity({ productId, variantId });
    dispatch(incrementCartItem({ productId, variantId }));
  }

  async function handleDecrementCartItem({ productId, variantId }) {
    const data = await decrementCartItemQuantity({ productId, variantId });
    dispatch(decrementCartItem({ productId, variantId }));
  }

  async function handleDeleteCartItem({ productId, variantId }) {
    const data = await deleteCartItem({ productId, variantId });
    dispatch(removeItem({ productId, variantId }));
  }

  return {
    handleAddItem,
    handleGetCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
    handleDeleteCartItem,
  };
};
