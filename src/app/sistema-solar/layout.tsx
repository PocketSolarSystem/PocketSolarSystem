// SistemaSolarLayout.js
import React from "react";
import Navbar from "../utilidades/ui/navbar";
import NavbarSistemaSolar from "../utilidades/ui/navbarSolarSystem";
import Footer from "../utilidades/ui/footer";
import { chakra, inter } from "../utilidades/ui/fonts";

export default function SistemaSolarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarSistemaSolar />
      {children}
    </div>
  );
}
