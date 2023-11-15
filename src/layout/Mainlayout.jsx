import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

const Cart = createContext("");

const Mainlayout = () => {
  const [cartBox, setCartBox] = useState([]);
  const loading = useNavigation();
  return (
    <div className="main-bg">
      <div className="container w-4/5 mx-auto p-2">
        <Cart.Provider value={[cartBox, setCartBox]}>
          <Navbar />
          {loading.state === "loading" ? <LoadingSpinner /> : <Outlet />}
        </Cart.Provider>
      </div>
      <Footer />
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[60vh]">
      <div className="loader">
        <img src="/loader.gif" alt="loader animation" />
      </div>
    </div>
  );
};

export default Mainlayout;
export { Cart };
