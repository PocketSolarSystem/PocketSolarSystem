// SistemaSolarLayout.js
import React from "react";
import NavbarSistemaSolar from "../utilidades/ui/navbarSolarSystem";

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
