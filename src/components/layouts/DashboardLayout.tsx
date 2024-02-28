import { Outlet } from "react-router-dom";
import MobileSidebar from "../Dashboard/MobileSidebar";
import Sidebar from "../Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72  ">
        <div>
          <MobileSidebar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
