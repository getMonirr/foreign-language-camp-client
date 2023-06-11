import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const InstructorSidebar = () => {
  return (
    <>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/my-classes">
          <FaUser className="mr-3" /> My Classes
        </NavLink>
      </li>
      <li className="my-nav pl-8">
        <NavLink className="text-base" to="/dashboard/add-class">
          <FaUser className="mr-3" /> Add Class
        </NavLink>
      </li>
    </>
  );
};

export default InstructorSidebar;
