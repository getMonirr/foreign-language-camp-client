import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/admin-home">
          <FaUser className="mr-3" /> Admin Home
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/manage-classes">
          <FaUser className="mr-3" /> Manage Classes
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/manage-users">
          <FaUser className="mr-3" /> Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminSidebar;
