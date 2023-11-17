import axiosSecure from "../config/axios.config";

export const phonesDataLoader = async (
  currentPage,
  itemsPerPage,
  setTotalItems
) => {
  const res = await axiosSecure(
    `/phones?page=${currentPage}&size=${itemsPerPage}`
  );
  setTotalItems(res.data.totalResult);
  return res.data;
};
export const productItemDataLoader = async ({ params }) => {
  const res = await axiosSecure(
    `https://fakestoreapi.com/phones/${params.productId}`
  );
  return res.data;
};
