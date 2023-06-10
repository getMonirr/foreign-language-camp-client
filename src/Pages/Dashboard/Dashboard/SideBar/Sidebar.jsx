import useRole from "../../../../Hooks/useRole";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";
import InstructorSidebar from "../../Instructor/InstructorSidebar/InstructorSidebar";
import UserSidebar from "../../User/UserSidebar/UserSidebar";
import "./Sidebar.css";

const Sidebar = () => {
  const { role } = useRole();

  return (
    <>
      {role === "admin" ? (
        <AdminSidebar />
      ) : role === "instructor" ? (
        <InstructorSidebar />
      ) : (
        <UserSidebar />
      )}
    </>
  );
};

export default Sidebar;
