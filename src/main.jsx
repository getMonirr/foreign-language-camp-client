import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import DarkThemeProvider from "./Provider/DarkThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <RouterProvider router={Routes} />
    </DarkThemeProvider>
  </React.StrictMode>
);
