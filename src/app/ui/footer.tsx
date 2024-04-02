'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="mb-2 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <Link href="/" className="link-underline" rel="noreferrer">
                <Image
                    src="/logo-pocket-solar-system.jpg" 
                    alt="Logo of the application" 
                    width={70}
                    height={70}
                    className='hidden md:block mr-2 rounded-full'
                />
            </Link>
        <div>
            <h1 className="px-4 text-xl font-signature">Pocket Solar System</h1>
            <p className="mt-2 px-4 text-sm">
                PSS enseña lo desconocido en el aire y el espacio, innova en beneficio de la humanidad e inspira 
                al mundo a través del descubrimiento.
            </p>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-white duration-200 link-underline">
            <p>Redes sociales</p>
          </div>
          <div className="px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-white duration-200 link-underline">
            <p>Newsletter</p>
          </div>
        </div>
      </div>
      <hr className="mt-8 md:mt-0 border-gray-600" />
        <div className="md:mb-4">
          <ul className="flex justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-white duration-200 link-underline py-6">
              <Link href="/terminos">Términos y Condiciones</Link>
            </li>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-white duration-200 link-underline py-6">
              <Link href="/privacidad">Política de Privacidad</Link>
            </li>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-white duration-200 link-underline py-6">
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Footer;
