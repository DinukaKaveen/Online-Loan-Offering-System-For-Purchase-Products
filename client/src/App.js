import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import HomeCus from "./components/customer/HomeCus";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<HomeCus />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
