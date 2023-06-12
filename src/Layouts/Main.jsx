import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Headers/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import ScrollToTopFixed from "../components/Shared/ScrollToTopFixed";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopFixed />
    </>
  );
};

export default Main;
