import { Outlet } from "react-router-dom";
import CampContainer from "../../../components/Shared/CampContainer";
import { RiSideBarFill } from "react-icons/ri";
import Sidebar from "./SideBar/SideBar";
import UpSidebar from "./SideBar/UpSideBar";
import BottomSidebar from "./SideBar/BottomSidebar";

const Dashboard = () => {
  return (
    <CampContainer>
      <div className="drawer lg:drawer-open my-8">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="px-8">
            <Outlet />
          </div>
          <label
            htmlFor="my-drawer"
            className="btn btn-primary bg-camp-primary border-camp-primary hover:bg-camp-secondary  hover:border-camp-primary drawer-button lg:hidden visible"
          >
            <RiSideBarFill className="h-6 w-6" style={{ fill: "white" }} />
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu pr-0 w-80  min-h-[calc(100vh-100px)] bg-camp-primary text-white pl-16 flex justify-evenly">
            {/* Sidebar content here */}
            <div>
              <UpSidebar />
            </div>
            <div className="flex-col flex space-y-4">
              <Sidebar />
            </div>
            <div>
              <BottomSidebar />
            </div>
          </ul>
        </div>
      </div>
    </CampContainer>
  );
};

export default Dashboard;
