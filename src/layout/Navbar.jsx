import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { Cart } from "../layout/Mainlayout";
import uid from "../utility/uid";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartBox] = useContext(Cart);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      setTheme(true);
    } else {
      setTheme(false);
      document.body.classList.remove("dark");
    }
  }, []);
  const handleTheme = () => {
    setTheme(!theme);
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  const handleCart = () => {
    setShowCart(!showCart);
  };
  const renderCartItems = cartBox.map((ele) => (
    <div key={uid()}>{ele.title}</div>
  ));
  return (
    <nav className="flex items-center py-2">
      <div className="flex-1">
        <Link to="/">
          <h1 className="text-2xl">
            <span className="text-3xl font-bold italic underline text-blue-700">
              E
            </span>{" "}
            commerce
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <button onClick={handleTheme} className="ml-6 icon-btn" type="button">
          {!theme ? <BiMoon /> : <BsFillSunFill />}
        </button>
        <div className="relative">
          <button onClick={handleCart} className="ml-2 icon-btn" type="button">
            <AiOutlineShoppingCart />
          </button>
          {cartBox.length ? (
            <div className="absolute -top-2 -right-3 rounded-full text-xs bg-blue-500 text-gray-50 px-2 border border-gray-300">
              {cartBox.length}
            </div>
          ) : (
            ""
          )}
          {showCart && (
            <div className="absolute top-10 right-0">
              <div className="p-3 rounded-md bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 w-fit whitespace-nowrap">
                {renderCartItems}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
