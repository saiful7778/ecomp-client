import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/layout/Mainlayout";
import Home from "page/Home";
import ErrorPage from "page/errorPage";
import Products from "page/Products";
import ProductDetails from "page/ProductDetails";
import Contact from "page/Contact";

const router = createBrowserRouter([
  {
    path: "/ecommerce/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Products />
      },
      {
        path: '/products/:productId',
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <ProductDetails />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
]);

export default router;
