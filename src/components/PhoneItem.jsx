import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PhoneItem = ({ itemData }) => {
  const {
    _id,
    phoneName,
    thumbnail,
    type,
    brandName,
    price,
    releaseData,
    androidVersion,
    osVersion,
    bodyWeight,
    bodyThickness,
    batteryCapacity,
    processor,
    ram,
    storage,
    memoryCard,
    disRes,
    disSize,
    camRes,
    review,
    productImages,
  } = itemData || {};
  const navigate = useNavigate();
  const addToCartBtn = () => {
    console.log("product id is ", _id);
    navigate(`/phones/${_id}`);
  };
  return (
    <>
      <div className="space-y-2 p-3 container-bg rounded-lg">
        <figure className="w-full h-48 overflow-hidden bg-gray-50 border border-color rounded-lg">
          <img
            className="w-full h-full object-contain"
            src={thumbnail}
            alt={`${phoneName} image`}
          />
        </figure>
        <Link to={`/phones/${_id}`}>
          <h5 className="text-2xl font-bold hover:underline">{phoneName}</h5>
        </Link>
        <div className="text-xl capitalize font-semibold text-sky-600">
          ${price}
        </div>
        <div className="grid grid-cols-2 text-sm text-gray-500 dark:text-gray-400">
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
        <div className="flex items-center justify-between">
          <button type="button">View details</button>
          <button
            onClick={addToCartBtn}
            className="p-3 font-bold capitalize text-gray-50 bg-sky-600 rounded-lg hover:underline"
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
