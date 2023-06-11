import { FaBookMedical, FaBookReader, FaPaypal } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <li className="my-nav pl-8">
        <NavLink className="text-base my-nav" to="/dashboard/selected-classes">
          <FaBookMedical className="mr-3" /> My Selected Classes
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/enrolled-classes">
          <FaBookReader className="mr-3" /> My Enrolled Classes
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/payment-history">
          <FaPaypal className="mr-3" /> Payment History
        </NavLink>
      </li>
    </>
  );
};

export default UserSidebar;
