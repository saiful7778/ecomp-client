import { useLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import uid from "../utility/uid";

const Products = () => {
  const data = useLoaderData();
  const renderAllProducts = data.map((ele) => (
    <ProductItem key={uid()} data={ele} />
  ));
  return (
    <div>
      <h2 className="my-4 text-4xl font-medium">All products here:</h2>
      <div className="grid grid-cols-3 gap-4">{renderAllProducts}</div>
    </div>
  );
};

export default Products;
