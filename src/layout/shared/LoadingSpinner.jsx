import loderAnimation from "../../assets/img/loader.gif";
import "./sharedStyle.css";

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <img
        className="w-10 rounded"
        src={loderAnimation}
        alt="loader animation"
      />
    </div>
  );
};

export default LoadingSpinner;
