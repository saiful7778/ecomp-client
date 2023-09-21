import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/layout/Mainlayout";
import Home from "page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
