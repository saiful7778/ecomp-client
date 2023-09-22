import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductItem = ({ data }) => {
  const { id, image, price, title, rating } = data;
  const navigate = useNavigate();
  const addToCartBtn = () => {
    console.log('product id is ', id);
    navigate(`/products/${id}`)
  }
  return (
    <>
      <div className='flex flex-col gap-4 p-3 bg-gray-300 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-lg'>
        <div className="flex-1 space-y-2">
          <figure className='w-full h-40 bg-gray-50 border border-gray-400 dark:border-gray-600 p-6 rounded-lg'>
            <img className='w-full h-full object-contain' src={image} alt={`${title} image`} />
          </figure>
          <Link to={`/products/${id}`}>
            <h4 className='text-lg font-bold hover:underline'>{title}</h4>
          </Link>
          <div className=''>Price: <span className='text-sky-500 font-bold'>${price}</span></div>
          <div className="flex justify-between text-sm text-gray-500">
            <div>Rating: {rating.rate}</div>
            <div>Count: {rating.count}</div>
          </div>
        </div>
        <button onClick={addToCartBtn} className='p-3 font-bold capitalize bg-sky-400 text-gray-50 dark:bg-sky-600 rounded-lg hover:underline' type="button">add to cart</button>
      </div>
    </>
  )
}

ProductItem.propTypes = {
  data: PropTypes.object
}

export default ProductItem