"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (nav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  const links = [
    {
      id: 1,
      href: "/",
      linkName: "Inicio",
    },
    {
      id: 2,
      href: "/sistema-solar",
      linkName: "Sistema Solar",
    },
    {
      id: 3,
      href: "/fotodeldia",
      linkName: "Foto del día",
    },
    {
      id: 4,
      href: "/fotosMarte",
      linkName: "Fotos de Marte",
    },
    {
      id: 5,
      href: "/buscadorNasa",
      linkName: "Buscador archivos NASA",
    },
  ];

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-50">
      <div>
        <h1 className="text-xl ml-2">
          <Link
            className="link-underline link-underline-black flex items-center"
            href="/"
            rel="noreferrer"
          >
            <Image
              src="/logo-pocket-solar-system.png"
              alt="Logo of the application"
              width={70}
              height={70}
              className="hidden md:block mr-2"
            />
            <span>Pocket Solar System</span>
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className={`nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:text-white duration-200 link-underline relative ${link.linkName != "Planetas" ? "hover:scale-105" : ""}`}
          >
            <Link
              href={link.href}
              className={`${pathname === link.href || pathname.split("/")[1] === link.href ? "scale-105 text-white" : ""}`}
            >
              {link.linkName}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="menu flex flex-col justify-center text-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link.linkName === "Planetas" ? (
                <>
                  <div
                    onClick={() => {
                      setIsOpen((prevState) => !prevState);
                    }}
                    className={`flex items-center justify-center ${isOpen ? "text-white" : ""}`}
                  >
                    <span className="text-center">{link.linkName}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 inline-block ml-1 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <Link
                  onClick={toggleNav}
                  key={link.id}
                  href={link.href}
                  className={`${pathname === link.href ? "scale-105 text-white" : ""}`}
                >
                  <span className="text-center block">{link.linkName}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
