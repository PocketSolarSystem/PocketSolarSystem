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
import SubscribeForm from "./newsletterForm";

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
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
            <Link
              className="link-underline link-underline-black flex items-center"
              href="/"
              rel="noreferrer"
            >
              <Image
                src="/logo-pocket-solar-system.png"
                alt="Logo de la aplicacion"
                title="Logo de la aplicacion"
                width={100}
                height={100}
                className="sm:hidden mb-6"
              />
            </Link>
          <h1 className="text-xl mb-4">
            <span>Pocket Solar System</span>
          </h1>
          <p>
            Pocket Solar System la aplicación web dónde podrás explorar el sistema solar, 
            ver las últimas fotos enviadas desde Marte, navegar entre los archivos de la NASA y 
            visualizar una imagen de nuestro que cambiará día tras día.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center justify-center md:justify-start">
          <h4 className="text-lg mb-4">Redes Sociales</h4>
          <div className="flex space-x-4">
            {linksRedes.map((link) => (
              <div
                key={link.id}
                className="cursor-pointer capitalize font-medium text-gray-500 
              hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link href={link.href} className={`cursor-pointer`}>
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
          <h4 className="text-lg mb-4">Contacto</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Av. de la
              Onu, 81, 28936 Móstoles, Madrid
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              pocketsolarsystem@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <SubscribeForm />
        <p className="text-sm mt-8">
          2024 Pocket Solar System. &nbsp;
          <Link href="/politica-de-privacidad">
            <span className="text-blue-500 underline">
              Política de privacidad y WCAG.
            </span>
          </Link>
        </p>
        <div className="flex justify-center items-center mt-4">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
