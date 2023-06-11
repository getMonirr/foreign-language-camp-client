import { FaSignOutAlt, FaHome, FaBook, FaUserGraduate } from "react-icons/fa";
import CampBtn from "../../../../components/Shared/CampBtn";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { toast } from "react-toastify";

const BottomSidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // handle dashboard logout
  const handleDashboardLogOut = () => {
    logOut()
      .then(() => {
        toast.success("log out successful");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-center">
      <div className="divider after:bg-camp-secondary before:bg-camp-secondary"></div>
      <div>
        <li className="my-nav pl-8">
          <NavLink className="text-base" to="/">
            <FaHome className="mr-3" /> Home
          </NavLink>
        </li>
        <li className="my-nav pl-8">
          <NavLink className="text-base" to="/classes">
            <FaBook className="mr-3" /> Classes
          </NavLink>
        </li>
        <li className="my-nav pl-8">
          <NavLink className="text-base" to="/classes">
            <FaUserGraduate className="mr-3" /> Instructors
          </NavLink>
        </li>
        <div className="divider after:bg-camp-secondary before:bg-camp-secondary"></div>
      </div>
      <CampBtn handleOnClick={handleDashboardLogOut}>
        <FaSignOutAlt /> Sign Out
      </CampBtn>
    </div>
  );
};

export default BottomSidebar;
