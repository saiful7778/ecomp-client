import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/layout/Mainlayout";
import Home from "page/Home";
import ErrorPage from "page/errorPage";

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
    ],
  },
]);

export default router;
