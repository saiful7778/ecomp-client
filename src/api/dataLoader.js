import axiosSecure from "../config/axios.config";

export const phonesDataLoader = async (
  currentPage,
  itemsPerPage,
  setTotalItems,
  type
) => {
  const res = await axiosSecure(
    `/phones?page=${currentPage}&size=${itemsPerPage}&type=${type}`
  );
  const totalResult = res.data.totalResult;
  // const count = res.data.count;
  setTotalItems(totalResult);
  return res.data;
};
export const productItemDataLoader = async ({ params }) => {
  const res = await axiosSecure(
    `https://fakestoreapi.com/phones/${params.productId}`
  );
  return res.data;
};
