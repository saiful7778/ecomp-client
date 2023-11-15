import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./assets/css/style.css";
import StateData from "./hooks/StateData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateData>
      <RouterProvider router={router} />
    </StateData>
  </React.StrictMode>
);
