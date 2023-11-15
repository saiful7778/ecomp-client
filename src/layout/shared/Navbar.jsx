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
  const [theme, setTheme] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    if (storeTheme === "dark") {
      document.body.classList.add("dark");
      setTheme(true);
    } else if (storeTheme === "light") {
      setTheme(false);
      document.body.classList.remove("dark");
    } else {
      setTheme(true);
      document.body.classList.add("dark");
    }
  }, []);
  const handleTheme = () => {
    setTheme((prop) => !prop);
    const bodyTheme = document.body.classList;
    if (bodyTheme.contains("dark")) {
      bodyTheme.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyTheme.add("dark");
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
          <ul className="res:flex hidden items-center gap-2">
            {renderNavlinks}
          </ul>
          <button
            onClick={() => setShowMobileMenu((prop) => !prop)}
            className="icon-btn res:hidden"
            type="button"
          >
            <LuMenuSquare size={20} />
          </button>
          <button onClick={handleTheme} className="icon-btn" type="button">
            {!theme ? <BiMoon size={20} /> : <BsFillSunFill size={20} />}
          </button>
          <div className="relative">
            <button onClick={handleCart} className="icon-btn" type="button">
              <AiOutlineShoppingCart size={20} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 ${
          showMobileMenu ? "right-0" : "-right-full"
        } z-[100] min-h-screen w-52 duration-300 container-bg p-2 res:hidden block`}
      >
        <button
          onClick={() => setShowMobileMenu((prop) => !prop)}
          className="icon-btn"
          type="button"
        >
          <AiOutlineCloseCircle size={20} />
        </button>
        <ul className="mt-4 divide-y divide-gray-400 dark:divide-gray-700 [&>*]:p-2">
          {renderNavlinks}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
