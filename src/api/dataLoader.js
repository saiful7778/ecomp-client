import axiosSecure from "../config/axios.config";

export const productsDataLoader = async () => {
  const res = await axiosSecure("/phones");
  return res.data;
};
export const productItemDataLoader = async ({ params }) => {
  const res = await axiosSecure(
    `https://fakestoreapi.com/phones/${params.productId}`
  );
  return res.data;
};
