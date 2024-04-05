"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLock,
  faShieldAlt,
  faCheckCircle,
  faStar,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const linksMapa = [
    {
      id: 1,
      href: "/",
      linkName: "Inicio",
    },
    {
      id: 2,
      href: "/planetas",
      linkName: "Planetas",
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

  const linksRedes = [
    {
      id: 1,
      href: "/",
      linkName: "Facebook",
    },
    {
      id: 2,
      href: "/",
      linkName: "Twitter",
    },
    {
      id: 3,
      href: "/",
      linkName: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4">
          <div className="flex flex-col items-center justify-center md:justify-start">
            <Link
              className="link-underline link-underline-black flex items-center"
              href="/"
              rel="noreferrer"
            >
              <Image
                src="/logo-pocket-solar-system.png"
                alt="Logo of the application"
                width={100}
                height={100}
                className="sm:hidden mb-6"
              />
            </Link>
          </div>
          <h1 className="text-xl font-semibold mb-4">
            <span>Pocket Solar System</span>
          </h1>
          <p>
            Pocket Solar System enseña lo desconocido en el aire y el espacio,
            innova para el beneficio de la humanidad e inspira al mundo a través
            del descubrimiento.
          </p>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-4">Mapa del sitio</h4>
          <ul>
            {linksMapa.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer capitalize font-medium text-gray-500 
              hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  href={link.href}
                  className={`cursor-pointer ${pathname === link.href ? "scale-105 text-white" : ""}`}
                >
                  <span className="text-center">{link.linkName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
          <div className="flex space-x-4">
            {linksRedes.map((link) => (
              <div
                key={link.id}
                className="cursor-pointer capitalize font-medium text-gray-500 
              hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  href={link.href}
                  className={`cursor-pointer ${pathname === link.href ? "scale-105 text-white" : ""}`}
                >
                  {link.linkName === "Facebook" && (
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ fontSize: "1.8rem" }}
                    />
                  )}
                  {link.linkName === "Twitter" && (
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ fontSize: "1.8rem" }}
                    />
                  )}
                  {link.linkName === "Instagram" && (
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "1.8rem" }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Av. de la
              Onu, 81, 28936 Móstoles, Madrid
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              info@pocketsolarsystem.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; 2024 Pocket Solar System. Todos los derechos reservados.
        </p>
        <div className="mt-4">
          <p className="text-sm mb-2">
            Suscríbete a nuestra newsletter para recibir las últimas
            actualizaciones.
          </p>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ borderRightColor: "transparent" }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r-md focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
            >
              Suscribirse
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex flex-col items-center mr-4">
            <FontAwesomeIcon
              icon={faLock}
              size="2x"
              className="text-blue-500 mb-2"
            />
            <span className="text-xs hidden sm:inline-block">SSL/TLS</span>
          </div>
          <div className="flex flex-col items-center mr-4">
            <FontAwesomeIcon
              icon={faShieldAlt}
              size="2x"
              className="text-green-500 mb-2"
            />
            <span className="text-xs hidden sm:inline-block">PCI DSS</span>
          </div>
          <div className="flex flex-col items-center mr-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="2x"
              className="text-purple-500 mb-2"
            />
            <span className="text-xs hidden sm:inline-block">
              McAfee Secure
            </span>
          </div>
          <div className="flex flex-col items-center mr-4">
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              className="text-yellow-500 mb-2"
            />
            <span className="text-xs hidden sm:inline-block">Trustpilot</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCertificate}
              size="2x"
              className="text-red-500 mb-2"
            />
            <span className="text-xs hidden sm:inline-block">
              Norton Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
