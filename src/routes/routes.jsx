import { createBrowserRouter } from "react-router-dom";

// layouts
import Mainlayout from "../layout/Mainlayout";

// pages
import Home from "../pages/Home";
import ErrorPage from "../pages/errorPage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";

// data loader
import { productItemDataLoader, productsDataLoader } from "../api/dataLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        loader: productsDataLoader,
        element: <Products />,
      },
      {
        path: "/products/:productId",
        loader: productItemDataLoader,
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
