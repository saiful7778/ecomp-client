export const productsDataLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
export const productItemDataLoader = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  return res.json();
};
