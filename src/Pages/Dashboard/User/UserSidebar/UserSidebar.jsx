import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <li className="my-nav">
        <NavLink className="text-base" to="/dashboard/user-home">
          Student Home
        </NavLink>
      </li>
      <li className="my-nav">
        <NavLink className="text-base my-nav" to="/dashboard/selected-classes">
          My Selected Classes
        </NavLink>
      </li>
      <li className="my-nav">
        <NavLink className="text-base" to="/dashboard/enrolled-classes">
          My Enrolled Classes
        </NavLink>
      </li>
      <li className="my-nav">
        <NavLink className="text-base" to="/dashboard/payment-history">
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default UserSidebar;
