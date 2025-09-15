import React from "react";
import { Route, Routes } from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
