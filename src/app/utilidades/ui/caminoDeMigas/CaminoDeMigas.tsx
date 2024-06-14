"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname) {
    // Dividimos ruta
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    // Comprueba si la ruta tiene sistema-solar
    const isSistemaSolar =
      pathSegments.length >= 1 && pathSegments[0] === "sistema-solar";

    const breadcrumbs = pathSegments.map((segment, index) => {
      // Cambiamos los - por " "
      const formattedSegment = decodeURIComponent(
        segment.replace(/-/g, " ").toUpperCase()
      );
      const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSegments.length - 1;
      return (
        <React.Fragment key={segment}>
          <span className="mx-2">/</span>
          <Link href={segmentPath}>
            <span
              className={
                isLast ? "text-gray-800" : "hover:text-gray-800 cursor-pointer"
              }
            >
              {formattedSegment}
            </span>
          </Link>
        </React.Fragment>
      );
    });

    return (
      <nav
        className={`text-gray-500 text-sm ${isSistemaSolar ? "mt-36" : "mt-24"} ml-8`}
      >
        <Link href="/">
          <span className="hover:text-gray-800 cursor-pointer">INICIO</span>
        </Link>
        {breadcrumbs}
      </nav>
    );
  }
};

export default Breadcrumbs;
