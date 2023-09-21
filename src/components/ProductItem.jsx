import PropTypes from 'prop-types'

const ProductItem = ({ data }) => {
  const { id, image, price, title, rating } = data;
  const addToCartBtn = () => {
    console.log('product id is ', id);
  }
  return (
    <div className='flex flex-col gap-4 p-3 bg-gray-300 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-lg'>
      <div className="flex-1 space-y-2">
        <figure className='w-full h-40 bg-gray-50 border border-gray-400 dark:border-gray-600 p-6 rounded-lg'>
          <img className='w-full h-full object-contain' src={image} alt={`${title} image`} />
        </figure>
        <h4 className='text-lg font-bold'>{title}</h4>
        <div className=''>Price: <span className='text-sky-500 font-bold'>${price}</span></div>
        <div className="flex justify-between text-sm text-gray-500">
          <div>Rating: {rating.rate}</div>
          <div>Count: {rating.count}</div>
        </div>
      </div>
      <button onClick={addToCartBtn} className='p-3 font-bold bg-sky-400 dark:bg-sky-600 rounded-lg hover:underline' type="button">Add to cart</button>
    </div>
  )
}

ProductItem.propTypes = {
  data: PropTypes.object
}

export default ProductItem