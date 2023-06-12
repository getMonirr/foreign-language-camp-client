import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/admin-home">
          <RiAdminFill className="mr-3" /> Admin Home
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/manage-classes">
          <FaBook className="mr-3" /> Manage Classes
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/manage-users">
          <FaUsers className="mr-3" /> Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminSidebar;
