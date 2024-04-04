'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const links = [
    {
      id: 1,
      href: "/",
      linkName: "Inicio"
    },
    {
      id: 2,
      href: "/planetas",
      linkName: "Planetas"
    },
    {
      id: 3,
      href: "/fotodeldia",
      linkName: "Foto del día"
    },
    {
      id: 4,
      href: "/fotosMarte",
      linkName: "Fotos de Marte"
    },
    {
      id: 5,
      href: "/buscadorNasa",
      linkName: "Buscador archivos NASA"
    },
  ];

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
            src="/logo-pocket-solar-system.jpg" 
            alt="Logo of the application" 
            width={70}
            height={70}
            className='hidden md:block mr-2 rounded-full'
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
            hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link 
              key={link.id}
              href={link.href}
              className={`${pathname ===  link.href ? 'scale-105 text-white' : ''}`}
            >
              {link.linkName}
            </Link>
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
              <Link 
                onClick={() => setNav(!nav)} 
                key={link.id}
                href={link.href}
                className={`${pathname ===  link.href ? 'scale-105 text-white' : ''}`}
              >
                {link.linkName} 
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;