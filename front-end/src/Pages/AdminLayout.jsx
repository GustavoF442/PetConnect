import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-6 bg-[#f4f2fa] min-h-screen">
      <Outlet />
    </main>a
  </div>
);

export default AdminLayout;
 