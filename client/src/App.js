import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import HomeCus from "./components/customer/HomeCus";
import LoginCus from "./components/customer/LoginCus";
import RegisterCus from "./components/customer/RegisterCus";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<HomeCus />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/RegisterCustomer" element={<RegisterCus />}></Route>
          <Route path="/LoginCustomer" element={<LoginCus />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
