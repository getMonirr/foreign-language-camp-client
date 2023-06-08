import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import DarkThemeProvider from "./Provider/DarkThemeProvider";
import AuthProvider from "./Provider/AuthProvider";

// tost import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <AuthProvider>
        <RouterProvider router={Routes} />
        <ToastContainer />
      </AuthProvider>
    </DarkThemeProvider>
  </React.StrictMode>
);
