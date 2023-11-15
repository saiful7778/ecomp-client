import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";
import { BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { navlinks } from "../../api/staticData";
import "./sharedStyle.css";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    setTheme((prop) => !prop);
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
  const renderNavlinks = navlinks?.map((nav) => (
    <li key={nav._id}>
      <NavLink
        className={({ isActive, isPending }) =>
          (isPending ? "pend" : isActive ? "active" : "") + " nav-link"
        }
        to={nav.path}
      >
        {nav.navName}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="flex items-center py-2">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-2xl">
              <span className="text-3xl font-bold italic underline text-blue-700">
                E
              </span>{" "}
              <span className="max-min-sm:hidden">comp</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ul className="md:flex hidden items-center gap-2">
            {renderNavlinks}
          </ul>
          <button
            onClick={() => setShowMobileMenu((prop) => !prop)}
            className="icon-btn md:hidden"
            type="button"
          >
            <LuMenuSquare size={20} />
          </button>
          <button onClick={handleTheme} className="icon-btn" type="button">
            {!theme ? <BiMoon /> : <BsFillSunFill />}
          </button>
          <div className="relative">
            <button onClick={handleCart} className="icon-btn" type="button">
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 ${
          showMobileMenu ? "right-0" : "-right-full"
        } z-[100] min-h-screen w-52 duration-300 container-bg p-2 md:hidden block`}
      >
        <button
          onClick={() => setShowMobileMenu((prop) => !prop)}
          className="icon-btn"
          type="button"
        >
          <AiOutlineCloseCircle size={20} />
        </button>
        <ul className="mt-4 space-y-3">{renderNavlinks}</ul>
      </div>
    </>
  );
};

export default Navbar;
