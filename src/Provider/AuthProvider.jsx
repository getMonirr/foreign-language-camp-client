import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer for auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      
      if (loggedUser) {
        const userInfo = {
          email: loggedUser?.email,
        };

        // jwt token
        axios
          .post(`${import.meta.env.VITE_API_LINK}/jwt`, userInfo)
          .then((res) => {
            const token = res?.data?.token;
            if (token) {
              localStorage.setItem("camp-access-token", token);
            } else {
              localStorage.removeItem("camp-access-token");
            }
          });
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // auth info
  const authInfo = {
    user,
    loading,
    googleSignIn,
    logOut,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
