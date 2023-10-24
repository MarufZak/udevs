import Image from "next/image";
import React from "react";
import DashboardSidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[56px_1fr] grid-rows-[56px_calc(100vh-56px)] h-screen overflow-hidden">
      <div className="grid place-items-center border border-border">
        <Image
          width={17}
          height={25}
          src="/logo.svg"
          alt="Udevs company logo"
        />
      </div>
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
