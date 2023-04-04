import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import HomeCus from "./components/customer/HomeCus";
import NewProduct from "./components/admin/NewProduct";
import EditUser from "./components/admin/EditUser";
import Products from "./components/admin/Products";
import EditProduct from "./components/admin/EditProduct";
import UserPayments from "./components/admin/UserPayments";
import UserPurchases from "./components/admin/UserPurchases";
import Users from "./components/admin/Users";
import LoginCus from "./components/customer/LoginCus";
import Payments from "./components/customer/payments/Payments";
import Purchases from "./components/customer/purchases/Purchases";
import ViewProduct from "./components/customer/purchases/ViewProduct";
import RegisterCus from "./components/customer/RegisterCus";
import NavBar from "./components/NavBar";
import TopayPur from "./components/customer/purchases/TopayPur";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LoginCus />}></Route>
          <Route path="/Home" exact element={<HomeCus />}></Route>
          <Route path="/RegisterCustomer" element={<RegisterCus />}></Route>
          <Route path="/Purchases" element={<Purchases />}></Route>
          <Route path="/Payments" element={<Payments />}></Route>
          <Route path="/ViewProduct" element={<ViewProduct />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/admin/Users" element={<Users />}></Route>
          <Route path="/admin/EditUser/:id" element={<EditUser />}></Route>
          <Route path="/admin/UserPurchases" element={<UserPurchases />}></Route>
          <Route path="/admin/UserPayments" element={<UserPayments />}></Route>
          <Route path="/admin/Products" element={<Products />}></Route>
          <Route path="/admin/NewProduct" element={<NewProduct />}></Route>
          <Route path="/admin/EditProduct/:id" element={<EditProduct />}></Route>

          <Route path="/ToPay" element={<TopayPur />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
