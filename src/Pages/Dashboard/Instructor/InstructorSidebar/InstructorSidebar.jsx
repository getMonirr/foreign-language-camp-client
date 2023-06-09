
import { NavLink } from 'react-router-dom';

const InstructorSidebar = () => {
    return (
        <>
      <NavLink className="text-base" to="/dashboard/instructor-home">
        Instructor Home
      </NavLink>
      <NavLink className="text-base" to="/dashboard/add-class">
       Add a class
      </NavLink>
      <NavLink className="text-base" to="/dashboard/my-classes">
        My classes
      </NavLink>
    </>
    );
};

export default InstructorSidebar;