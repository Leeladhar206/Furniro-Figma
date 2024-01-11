import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Shop } from "../pages/Shop";
import { SingleProduct } from "../pages/SingleProduct";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/singleProduct" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
};
