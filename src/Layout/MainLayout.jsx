import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-9/12 w-11/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
