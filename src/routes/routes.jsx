import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/errorPage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";

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
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: <Products />,
      },
      {
        path: "/products/:productId",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
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
