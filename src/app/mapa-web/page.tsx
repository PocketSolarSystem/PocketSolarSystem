import React from "react";
import Link from "next/link";

const MapaWeb = () => {
  return (
    <main className="md:px-12 px-8 pb-12">
      <div className="max-w-2xl mx-10 py-20">
        <h2 className="text-2xl font-bold mb-4">Mapa del Sitio</h2>
        <ul className="pl-4">
          <li className="mb-4">
            <Link href="/">
              <span className="font-bold text-xl text-blue-600 cursor-pointer hover:underline">
                Inicio
              </span>
            </Link>
            <ul className="pl-4">
              <li className="mb-2">
                <Link href="/sistema-solar">
                  <span className="font-bold text-lg text-gray-800 cursor-pointer hover:underline">
                    Sistema Solar
                  </span>
                </Link>
                <ul className="pl-4">
                  <li className="mb-1">
                    <Link href="/sistema-solar/planetas/acerca-de-los-planetas">
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        Acerca de los Planetas
                      </span>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/sistema-solar/planetas">
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        Planetas
                      </span>
                    </Link>
                  </li>
                  <ul className="pl-4">
                    <li className="mb-1">
                      <Link href="/sistema-solar/planetas/galeria">
                        <span className="text-gray-400 cursor-pointer hover:underline">
                          Galería
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <li className="mb-1">
                    <Link href="/sistema-solar/planetas/pluton-y-planetas-enanos">
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        Plutón y Planetas Enanos
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1">
                <Link href="/fotodeldia">
                  <span className="font-bold text-lg text-gray-800 cursor-pointer hover:underline">
                    Foto Del Día
                  </span>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/fotosMarte">
                  <span className="font-bold text-lg text-gray-800 cursor-pointer hover:underline">
                    Fotos De Marte
                  </span>
                </Link>
              </li>
              <ul className="pl-4">
                  <li className="mb-1">
                    <Link href="/fotosMarte/infoRovers">
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        infoRovers
                      </span>
                    </Link>
                  </li>
              </ul>
              <li className="mb-1">
                <Link href="/buscadorNasa">
                  <span className="font-bold text-lg text-gray-800 cursor-pointer hover:underline">
                    Buscador Archivos NASA
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MapaWeb;
