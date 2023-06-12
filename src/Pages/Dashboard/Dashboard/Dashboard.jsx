import { Outlet } from "react-router-dom";
import CampContainer from "../../../components/Shared/CampContainer";
import { RiSideBarFill } from "react-icons/ri";
import BottomSidebar from "./SideBar/BottomSidebar";
import UpSidebar from "./SideBar/UpSidebar";
import Sidebar from "./SideBar/Sidebar";
import PageHeader from "../../../components/Shared/PageHeader/PageHeader";

const Dashboard = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <CampContainer>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <div>
              {/* <div className="bg-camp-primary h-20 flex justify-center items-center text-white sticky top-0">
                <h4>kisu ecte</h4>
              </div> */}
              <div className="ml-1">
                <PageHeader height="" />
              </div>
              <div className="bg-white p-8 min-h-[calc(100vh-80px)]">
                <Outlet />
              </div>
            </div>
            <label
              htmlFor="my-drawer"
              className="btn btn-primary bg-camp-primary border-camp-primary hover:bg-camp-secondary  hover:border-camp-primary drawer-button lg:hidden visible"
            >
              <RiSideBarFill className="h-6 w-6" style={{ fill: "white" }} />
            </label>
          </div>
          <div className="drawer-side dash-menu">
            <label htmlFor="my-drawer " className="drawer-overlay"></label>
            <ul className="menu pr-0 w-80  min-h-screen bg-camp-bg-2 text-white flex justify-between py-20">
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
    </div>
  );
};

export default Dashboard;
