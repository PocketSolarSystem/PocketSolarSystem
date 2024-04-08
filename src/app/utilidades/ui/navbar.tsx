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
  const links = [
    {
      id: 1,
      href: "/",
      linkName: "Inicio",
    },
    {
      id: 2,
      href: "/planetas",
      linkName: "Planetas",
      sublinks: [
        {
          id: 6,
          href: "/planetas/acerca-de-los-planetas",
          linkName: "Acerca de los Planetas",
        },
        { id: 7, href: "/planetas/mercurio", linkName: "Mercurio" },
        { id: 8, href: "/planetas/venus", linkName: "Venus" },
        { id: 9, href: "/planetas/tierra", linkName: "Tierra" },
        { id: 10, href: "/planetas/marte", linkName: "Marte" },
        { id: 11, href: "/planetas/jupiter", linkName: "Júpiter" },
        { id: 12, href: "/planetas/saturno", linkName: "Saturno" },
        { id: 13, href: "/planetas/urano", linkName: "Urano" },
        { id: 14, href: "/planetas/neptuno", linkName: "Neptuno" },
        {
          id: 15,
          href: "/planetas/pluton-y-planetas-enanos",
          linkName: "Plutón y Planetas Enanos",
        },
      ],
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

  useEffect(() => {
    const manejarClicBody = (event: MouseEvent) => {
      const cambiarDropdown = document.getElementById("planetaCambiarDropdown");
      if (
        !(event.target instanceof HTMLElement) ||
        (cambiarDropdown &&
          (event.target === cambiarDropdown ||
            event.target.closest("#planetaCambiarDropdown")))
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener("click", manejarClicBody);

    return () => {
      document.body.removeEventListener("click", manejarClicBody);
    };
  }, [isOpen]);

  const alternarDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-40 ">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-xl font-signature ml-2">
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
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 
          hover:scale-105 hover:text-white duration-200 link-underline relative"
          >
            {link.sublinks ? (
              <div>
                {/* Enlace de planetas */}
                <div id="planetaCambiarDropdown" onClick={alternarDropdown}>
                  {link.linkName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 inline-block ml-1 -mr-1 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
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
                {/* Contenido del desplegable */}
                {isOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {link.sublinks.map((sublink) => (
                        <a
                          key={sublink.id}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {sublink.linkName}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className={`${pathname === link.href ? "scale-105 text-white" : ""}`}
              >
                {link.linkName}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center text-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link.linkName === "Planetas" ? (
                <>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center"
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
                  {isOpen && link.sublinks && (
                    <ul className="mt-4 text-2xl">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.id}>
                          <Link
                            href={sublink.href}
                            className={`${pathname === sublink.href ? "scale-105 text-white" : ""}`}
                          >
                            <span className="text-center block">
                              {sublink.linkName}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
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
