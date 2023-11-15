import axiosSecure from "../config/axios.config";

export const productsDataLoader = async () => {
  const res = await axiosSecure("/products");
  return res.data;
};
export const productItemDataLoader = async ({ params }) => {
  const res = await axiosSecure(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  return res.data;
};
