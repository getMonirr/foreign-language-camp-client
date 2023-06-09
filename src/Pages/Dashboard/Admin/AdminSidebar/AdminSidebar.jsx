import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <NavLink className="text-base" to="/dashboard/admin-home">
        Admin Home
      </NavLink>
      <NavLink className="text-base" to="/dashboard/manage-classes">
        Manage Classes
      </NavLink>
      <NavLink className="text-base" to="/dashboard/manage-users">
        Manage Users
      </NavLink>
    </>
  );
};

export default AdminSidebar;
