import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="pt-[96px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
