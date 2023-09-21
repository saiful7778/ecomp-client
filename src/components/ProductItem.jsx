import PropTypes from 'prop-types'

const ProductItem = ({ data }) => {
  const { id, image, price, title, rating } = data;
  const addToCartBtn = () => {
    console.log('product id is ', id);
  }
  return (
    <div className='p-3 border border-gray-600 rounded-lg'>
      <figure className='w-full h-52 bg-gray-50 p-3 rounded-lg'>
        <img className='w-full h-full object-contain' src={image} alt={`${title} image`} />
      </figure>
      <h4>{title}</h4>
      <div>{price}</div>
      <div className="flex justify-between">
        <div>Rating: {rating.rate}</div>
        <div>Count: {rating.count}</div>
      </div>
      <button onClick={addToCartBtn} type="button">Add to cart</button>
    </div>
  )
}

ProductItem.propTypes = {
  data: PropTypes.object
}

export default ProductItem