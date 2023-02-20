import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import HomeCus from "./components/customer/HomeCus";
import LoginCus from "./components/customer/LoginCus";
import Payments from "./components/customer/payments/Payments";
import Purchases from "./components/customer/purchases/Purchases";
import ViewProduct from "./components/customer/purchases/ViewProduct";
import RegisterCus from "./components/customer/RegisterCus";

export default function App() {

  return (
  
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<HomeCus />}></Route>
          <Route path="/RegisterCustomer" element={<RegisterCus />}></Route>
          <Route path="/LoginCustomer" element={<LoginCus />}></Route> 
          <Route path="/Purchases" element={<Purchases />}></Route>
          <Route path="/Payments" element={<Payments />}></Route>
          <Route path="/ViewProduct" element={<ViewProduct />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/admin/Users" element={<Users />}></Route>
          <Route path="/admin/Products" element={<Products />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
