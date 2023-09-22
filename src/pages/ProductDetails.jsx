import { useLoaderData } from "react-router-dom"
import { Cart } from "@/layout/Mainlayout";
import { useContext } from "react";

const ProductDetails = () => {
  const { image, title, description, price, rating } = useLoaderData();
  const [cartBox, setCartBox] = useContext(Cart);
  const handleCart = () => {
    setCartBox([...cartBox, { title: title, price: price }])
  }
  return (
    <div className="flex gap-4 mt-6">
      <div className="w-[45%]">
        <figure className="w-full h-fit p-16 bg-gray-50 rounded-lg mb-3">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </figure>
      </div>
      <div className="w-[55%] space-y-3">
        <h4 className='text-4xl font-bold'>{title}</h4>
        <p>{description}</p>
        <div className='text-2xl'>Price: <span className='text-sky-500 font-bold'>${price}</span></div>
        <div className="flex gap-7">
          <div>Rating: {rating.rate}</div>
          <div>Count: {rating.count}</div>
        </div>
        <button onClick={handleCart} className='px-6 py-3 font-bold bg-sky-400 text-gray-50 dark:bg-sky-600 rounded-lg' type="button">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetails