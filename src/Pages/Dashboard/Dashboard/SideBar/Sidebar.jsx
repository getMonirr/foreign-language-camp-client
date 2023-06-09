// import useRole from "../../../../Hooks/useRole";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";
import InstructorSidebar from "../../Instructor/InstructorSidebar/InstructorSidebar";
import UserSidebar from "../../User/UserSidebar/UserSidebar";
import "./Sidebar.css";

const Sidebar = () => {
  // const { role } = useRole();
  // console.log(role);
  const role = "admin";
  console.log(role);

  return (
    <>
      {role === "admin" ? (
        <AdminSidebar />
      ) : role === "instructor" ? (
        <InstructorSidebar />
      ) : role === "user" ? (
        <UserSidebar />
      ) : null}
    </>
  );
};

export default Sidebar;
