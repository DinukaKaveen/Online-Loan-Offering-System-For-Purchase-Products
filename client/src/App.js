import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarAdmin from "./components/admin/NavbarAdmin";
import NavbarCus from "./components/customer/NavbarCus";

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <NavbarCus/>
      <Routes>
        <Route path="/admin" element={<NavbarAdmin/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
