import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <NavLink className="text-base" to="/dashboard/user-home">
        Student Home
      </NavLink>
      <NavLink className="text-base" to="/dashboard/selected-classes">
        My Selected Classes
      </NavLink>
      <NavLink className="text-base" to="/dashboard/enrolled-classes">
        My Enrolled Classes
      </NavLink>
      <NavLink className="text-base" to="/dashboard/payment-history">
        Payment History
      </NavLink>
    </>
  );
};

export default UserSidebar;
