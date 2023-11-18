import axiosSecure from "../config/axios.config";

export const phonesDataLoader = async (
  queryData,
  paginationData,
  setTotalItems
) => {
  const res = await axiosSecure(
    `/phones?page=${paginationData.currentPage}&size=${paginationData.itemPerPage}&type=${queryData.type}&sort=${queryData.dataSort}`
  );
  const totalResult = res.data.totalResult;
  // const count = res.data?.count;
  setTotalItems({ ...paginationData, totalItems: totalResult });
  return res.data;
};
export const productItemDataLoader = async ({ params }) => {
  const res = await axiosSecure(
    `https://fakestoreapi.com/phones/${params.productId}`
  );
  return res.data;
};
