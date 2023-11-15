import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import LoadingSpinner from "./shared/LoadingSpinner";

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

export default Mainlayout;
export { Cart };
