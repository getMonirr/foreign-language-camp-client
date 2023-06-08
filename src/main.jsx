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

// react query
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkThemeProvider>
        <AuthProvider>
          <RouterProvider router={Routes} />
          <ToastContainer />
        </AuthProvider>
      </DarkThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
