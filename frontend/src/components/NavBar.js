import React from "react";
import { useLocation } from "react-router-dom";
import NavbarAdmin from "./admin/NavbarAdmin";
import NavbarCus from "./customer/NavbarCus";

export default function NavBar() {
  
  const location = useLocation();

  if (
    location.pathname === "/home" ||
    location.pathname === "/register-customer" ||
    location.pathname === "/purchases"
  ) {

    return <NavbarCus />;

  } else if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/users" ||
    location.pathname === "/admin/products" ||
    location.pathname === "/admin/user-purchases" ||
    location.pathname === "/admin/user-payments" ||
    location.pathname === "/admin/new-product"
  ) {

    return <NavbarAdmin />;
    
  }

  return <div></div>;
}
