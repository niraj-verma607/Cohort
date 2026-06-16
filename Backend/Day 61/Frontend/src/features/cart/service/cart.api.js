import axios from "axios";

const cartApiInstance = axios.create({
  baseURL: "/api/cart",
  withCredentials: true,
});

export const additem = async ({ productId, variantId }) => {
  const response = await cartApiInstance.post(
    `/add/${productId}/${variantId}`,
    {
      quantity: 1,
    },
  );
  return response.data;
};

export const getCart = async () => {
  const response = await cartApiInstance.get("/");
  return response.data;
};

export const incrementCartItemQuantity = async ({ productId, variantId }) => {
  const response = await cartApiInstance.patch(
    `/quantity/increment/${productId}/${variantId}`,
  );
  return response.data;
};

export const decrementCartItemQuantity = async ({ productId, variantId }) => {
  const response = await cartApiInstance.patch(
    `/quantity/decrement/${productId}/${variantId}`,
  );
  return response.data;
};

export const deleteCartItem = async ({ productId, variantId }) => {
  const response = await cartApiInstance.delete(
    `/remove/${productId}/${variantId}`,
  );
  return response.data;
};
