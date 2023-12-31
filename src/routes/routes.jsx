import { createBrowserRouter } from "react-router-dom";

// layouts
import Mainlayout from "../layout/Mainlayout";

// pages
import Home from "../pages/Home";
import ErrorPage from "../pages/errorPage";
import Phones from "../pages/Phones";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";

// data loader
import { productItemDataLoader } from "../api/dataLoader";

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
        path: "/phones",
        element: <Phones />,
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
