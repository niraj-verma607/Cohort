import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: null,
    currency: null,
    items: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.currency = action.payload.currency;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    incrementCartItem: (state, action) => {
      const { productId, variantId } = action.payload;

      const item = state.items.find(
        (item) => item.product._id === productId && item.variant === variantId,
      );

      state.items = state.items.map((item) => {
        if (item.product._id === productId && item.variant === variantId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },

    decrementCartItem: (state, action) => {
      const { productId, variantId } = action.payload;

      const item = state.items.find(
        (item) => item.product._id === productId && item.variant === variantId,
      );

      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (i) => !(i.product._id === productId && i.variant === variantId),
        );
      } else {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(item.product._id === productId && item.variant === variantId),
      );
    },
  },
});

export const {
  setCart,
  addItem,
  incrementCartItem,
  decrementCartItem,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
