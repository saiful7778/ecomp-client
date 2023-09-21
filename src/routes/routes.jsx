import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/layout/Mainlayout";
import Home from "page/Home";
import ErrorPage from "page/errorPage";
import Products from "page/Products";

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
        path: '/products',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Products />
      }
    ],
  },
]);

export default router;
