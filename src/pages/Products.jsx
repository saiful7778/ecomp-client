import { useLoaderData } from "react-router-dom"
import ProductItem from "com/ProductItem";
import uid from "@/utility/uid";

const Products = () => {
  const data = useLoaderData();
  const renderAllProducts = data.map((ele) => <ProductItem key={uid()} data={ele} />)
  return (
    <div>
      <h2 className="my-4 text-2xl font-medium">All products here:</h2>
      <div className="grid grid-cols-4 gap-2">
        {renderAllProducts}
      </div>
    </div>
  )
}

export default Products