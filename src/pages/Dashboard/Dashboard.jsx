"use client";

import { useState } from "react";
import { Outlet } from "react-router";
import DashboardHeader from "./DashbaordHeader.jsx";
import SideBar from "./SideBar.jsx";

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex-1">
        <DashboardHeader setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
