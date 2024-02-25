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
          <Route path="/to_pay" exact element={<TopayPur />}></Route>

          <Route path="/login" exact element={<LoginCus />}></Route>
          <Route path="/" exact element={<HomeCus />}></Route>
          <Route path="/register-customer" element={<RegisterCus />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/view-product" element={<ViewProduct />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/edit-user/:id" element={<EditUser />}></Route>
          <Route path="/admin/user-purchases" element={<UserPurchases />}></Route>
          <Route path="/admin/user-payments" element={<UserPayments />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/new-product" element={<NewProduct />}></Route>
          <Route path="/admin/edit-product/:id" element={<EditProduct />}></Route>

          <Route path="/ToPay" element={<TopayPur />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
