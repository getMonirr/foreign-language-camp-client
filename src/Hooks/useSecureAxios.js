import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const secureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

const useSecureAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // for request
    secureAxios.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem("camp-access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // for response
    secureAxios.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 403) {
            // logout and navigate to login page
            await logOut();
            navigate("/login");
          }
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return secureAxios;
};

export default useSecureAxios;
