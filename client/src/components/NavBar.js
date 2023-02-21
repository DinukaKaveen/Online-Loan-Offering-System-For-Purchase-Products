import React from "react";
import { useLocation } from "react-router-dom";
import NavbarAdmin from "./admin/NavbarAdmin";
import NavbarCus from "./customer/NavbarCus";

export default function NavBar() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/RegisterCustomer" ||
    location.pathname === "/Purchases" ||
    location.pathname === "/Payments"
  ) {
    return <NavbarCus />;
  } else if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/Users" ||
    location.pathname === "/admin/Products"
  ) {
    return <NavbarAdmin />;
  }

  return <div></div>;
}
