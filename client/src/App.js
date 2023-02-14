import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import NavbarCus from "./components/customer/NavbarCus";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarCus />
        <Routes>
          <Route path="/admin" element={<HomeAdmin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
