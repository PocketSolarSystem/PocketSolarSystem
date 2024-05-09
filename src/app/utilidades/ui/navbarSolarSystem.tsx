"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import "./navbar.css";
import axios from "axios";
import { AxiosError } from "axios";

const NavbarSolarSystem = () => {
  const [nav, setNav] = useState(false);
  const [isBodyClassSet, setIsBodyClassSet] = useState(false);

  useEffect(() => {
    if (nav !== isBodyClassSet) {
      if (nav) {
        document.body.classList.add("nav-open");
      } else {
        document.body.classList.remove("nav-open");
      }
      setIsBodyClassSet(nav);
    }
  }, [nav, isBodyClassSet]);

  const pathname = usePathname();

  type SolarSystemName = string;
  const [solarSystemNames, setSolarSystemNames] = useState<SolarSystemName[]>(
    []
  );

  type PlanetName = string;
  const [planetNames, setPlanetNames] = useState<PlanetName[]>([]);

  type MoonName = string;
  const [moonNames, setMoonNames] = useState<MoonName[]>([]);

  type AsteroidsCometsName = string;
  const [asteroidsCometsNames, setAsteroidsCometsNames] = useState<
    AsteroidsCometsName[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          solarSystemResponse,
          planetResponse,
          moonResponse,
          asteroidsCometsResponse,
        ] = await Promise.all([
          axios.get(`http://localhost:9000/api/solarSystems/names`),
          axios.get(`http://localhost:9000/api/planets/names`),
          axios.get(`http://localhost:9000/api/moons/names`),
          axios.get(`http://localhost:9000/api/asteroidComets/names`),
        ]);

        setSolarSystemNames(solarSystemResponse.data);
        setPlanetNames(planetResponse.data);
        setMoonNames(moonResponse.data);
        setAsteroidsCometsNames(asteroidsCometsResponse.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // El error es de tipo AxiosError
          if (error.response) {
            // La solicitud fue realizada y el servidor respondió con un estado de error
            console.error(
              "Error de respuesta del servidor:",
              error.response.data
            );
            // Aquí podrías mostrar un mensaje de error al usuario
          } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.error("Error de solicitud:", error.request);
          } else {
            // Ocurrió un error al configurar la solicitud
            console.error("Error:", error.message);
          }
        } else {
          // El error no es de tipo AxiosError
          console.error("Error desconocido:", error);
        }
      }
    };

    fetchData();
  }, []);

  const links = [
    {
      id: 1,
      href: "/sistema-solar",
      linkName: "Nuestro Sistema Solar",
      sublinks: [
        ...solarSystemNames.map((solarSystemName, index) => ({
          id: index + 5,
          href: `/sistema-solar/${solarSystemName}`,
          linkName: solarSystemName,
        })),
      ],
    },
    {
      id: 2,
      href: "/sistema-solar/planetas",
      linkName: "Planetas",
      sublinks: [
        {
          id: 9,
          href: "/sistema-solar/planetas/acerca-de-los-planetas",
          linkName: "Acerca de los Planetas",
        },
        ...planetNames.map((planetName, index) => ({
          id: index + 10,
          href: `/sistema-solar/planetas/${planetName}`,
          linkName: planetName,
        })),
        {
          id: 18,
          href: "/sistema-solar/planetas/pluton-y-planetas-enanos",
          linkName: "Plutón y Planetas Enanos",
        },
      ],
    },
    {
      id: 3,
      href: "/sistema-solar/lunas",
      linkName: "Lunas",
      sublinks: [
        {
          id: 19,
          href: "/sistema-solar/lunas/acerca-de-las-lunas",
          linkName: "Acerca de las Lunas",
        },
        ...moonNames.map((moonName, index) => ({
          id: index + 20,
          href: `/sistema-solar/lunas/${moonName}`,
          linkName: moonName,
        })),
      ],
    },
    {
      id: 4,
      href: "/sistema-solar/asteroides-cometas-meteoros",
      linkName: "Asteroides y Cometas",
      sublinks: [
        {
          id: 27,
          href: "/sistema-solar/asteroides-cometas-meteoros/acerca-de-asteroides-cometas-meteoros",
          linkName: "Acerca de Asteroides, Cometas y Meteoros",
        },
        ...asteroidsCometsNames.map((asteroidsCometsName, index) => ({
          id: index + 28,
          href: `/sistema-solar/asteroides-cometas-meteoros/${asteroidsCometsName}`,
          linkName: asteroidsCometsName,
        })),
      ],
    },
  ];

  // Inicializar isOpen con un objeto vacío en lugar de un array
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  // El primer useEffect solo se ejecuta una vez al montar el componente
  useEffect(() => {
    setIsOpen({});
  }, []);

  useEffect(() => {
    const manejarClickBody = (event: MouseEvent) => {
      Object.keys(isOpen).forEach((id) => {
        const linkId = parseInt(id);
        const cambiarDropdown = document.getElementById(
          `planetaCambiarDropdown-${linkId}`
        );
        if (
          !(event.target instanceof HTMLElement) ||
          (cambiarDropdown &&
            (event.target === cambiarDropdown ||
              event.target.closest(`#planetaCambiarDropdown-${linkId}`)))
        ) {
          return;
        }
        setIsOpen((prevState) => ({
          ...prevState,
          [linkId]: false,
        }));
      });
    };

    document.body.addEventListener("click", manejarClickBody);

    return () => {
      document.body.removeEventListener("click", manejarClickBody);
    };
  }, [isOpen]);

  const toggleDropdown = (id: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex justify-between items-center w-full h-10 px-4 text-white bg-gray-900 fixed top-0 left-0 z-40 mt-20">
      <ul className="hidden md:flex justify-center items-center flex-grow">
        {" "}
        {/* Cambiada la clase flex por flex-grow */}
        {links.map((link) => (
          <li
            key={link.id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white duration-200 link-underline relative"
          >
            {link.sublinks ? (
              <div className="relative">
                <div
                  id={`planetaCambiarDropdown-${link.id}`}
                  onClick={() => toggleDropdown(link.id)}
                  className={`hover:scale-105 ${pathname.split("/")[1] === link.href.split("/")[1] ? "scale-105 text-white" : ""}`}
                >
                  {link.linkName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 inline-block ml-1 -mr-1 transition-transform transform ${isOpen[link.id] ? "rotate-180" : ""}`}
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
                {isOpen[link.id] && (
                  <div className="absolute z-20 top-full left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.id}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {sublink.linkName}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className={`${pathname === link.href || pathname.split("/")[1] === link.href ? "scale-105 text-white" : ""}`}
              >
                {link.linkName}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
          nav
            ? document.body.classList.toggle("nav-open")
            : document.body.classList.remove("nav-open");
        }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="menu flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <div
                onClick={() => toggleDropdown(link.id)}
                className={`flex items-center justify-center ${isOpen[link.id] ? "text-white" : ""}`}
              >
                <span className="text-center">{link.linkName}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 inline-block ml-1 transition-transform transform ${isOpen[link.id] ? "rotate-180" : ""}`}
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
              {isOpen[link.id] && link.sublinks && (
                <ul className="mt-4 text-2xl">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.id}>
                      <Link
                        onClick={() => setNav(!nav)}
                        href={sublink.href}
                        className={`hover:text-white ${pathname === sublink.href ? "scale-105 text-white" : ""}`}
                      >
                        <span className="text-center block">
                          {sublink.linkName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarSolarSystem;