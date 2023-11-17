import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhoneItem = ({ itemData }) => {
  const {
    _id,
    phoneName,
    thumbnail,
    type,
    brandName,
    price,
    processor,
    review,
  } = itemData || {};
  const addToCartBtn = () => {
    console.log("product id is ", _id);
    // navigate(`/phones/${_id}`);
  };
  return (
    <>
      <div className="p-3 container-bg rounded-lg shadow-lg">
        <figure className="w-full h-48 mb-2 overflow-hidden bg-gray-50 border border-color rounded-lg">
          <img
            className="w-full h-full object-contain"
            src={thumbnail}
            alt={`${phoneName} image`}
          />
        </figure>
        <Link to={`/phones/${_id}`}>
          <h5 className="text-2xl font-bold hover:underline">{phoneName}</h5>
        </Link>
        <div className="capitalize font-semibold">
          Price: <span className="text-sky-500 text-xl">${price}</span>
        </div>
        <div className="grid grid-cols-2 my-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            Type: <span className="capitalize font-semibold">{type}</span>
          </div>
          <div>
            Brand: <span className="capitalize font-semibold">{brandName}</span>
          </div>
          <div>
            Reviews : <span className="capitalize font-semibold">{review}</span>
          </div>
          <div className="col-span-2">
            Processor :{" "}
            <span className="capitalize font-semibold">{processor}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 mt-3">
          <Link
            to={`/phones/${_id}`}
            className="btn btn-pri w-full"
            type="button"
          >
            View details
          </Link>
          <button
            onClick={addToCartBtn}
            className="btn btn-pri-outline w-full"
            type="button"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

PhoneItem.propTypes = {
  itemData: PropTypes.object,
};

export default PhoneItem;
