"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { planetas } from "../../../utilidades/lib/dataPlanetas";
import Link from "next/link";

interface PlanetaData {
  nombre: string;
  descripcion: string;
  overview: string;
  cultura_pop: string;
  imagenes: string[];
}

async function fetchPlanetaData(nombrePlaneta: string): Promise<PlanetaData> {
  const response = await axios.get(
    `/api/planet/${encodeURIComponent(nombrePlaneta)}`
  );
  return response.data;
}

function Planeta() {
  const [planetaData, setPlanetaData] = useState<PlanetaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const partesRuta = pathname.split("/");
  const planetaNombre = decodeURIComponent(partesRuta[3]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchPlanetaData(planetaNombre);
        setPlanetaData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos del planeta:", error);
        setLoading(false);
      }
    }

    loadData();
  }, [planetaNombre]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col justify-center items-center p-24">
        <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </main>
    );
  }

  if (!planetaData) {
    return <p>No se encontraron datos del planeta.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
      <div className="container mx-auto pt-2 md:pt-8 mt-14">
        <div className="mb-8 relative">
          <p className="block font-bold text-3xl md:hidden bg-white mb-3 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black">
            {planetaNombre}
          </p>

          <Image
            src={
              planetaData.imagenes && planetaData.imagenes.length > 0
                ? planetaData.imagenes[0]
                : "/placeholder.png"
            }
            width={1200}
            height={800}
            alt={`Imagen del planeta ${planetaNombre}`}
            title={`Imagen del planeta ${planetaNombre}`}
            className="border-2 border-solid border-black skew-y-1 z-0"
          />

          <p className="absolute hidden md:block text-4xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6">
            {planetaNombre}
          </p>
        </div>
        <p className="mt-8 text-left md:text-justify">
          {planetaData.descripcion}
        </p>

        <CarouselPlanetas planetas={planetas} />

        {planetaData && (
          <div className="my-8 text-justify">
            <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8">
              Visión General Planeta {planetaNombre}
            </h1>
            <p>{planetaData.overview}</p>

            <div className="bg-white h-screen h-full py-4 pb-10">
              <div className="mx-auto max-w-screen-2xl">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-8">
                  <div className="items-center gap-12">
                    <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
                      {planetaNombre}
                    </h1>
                    <div className="flex items-center gap-4">
                      <Image
                        src={
                          planetaData.imagenes &&
                          planetaData.imagenes.length > 0
                            ? "/imagen-32.png"
                            : "/placeholder.png"
                        }
                        width={16}
                        height={16}
                        alt={`Icono del planeta ${planetaNombre}`}
                        title={`Icono del planeta ${planetaNombre}`}
                      />
                      <p>
                        {planetaData.imagenes && planetaData.imagenes.length > 0
                          ? `${planetaData.imagenes.length} IMÁGENES`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:mt-10">
                    <Link
                      href={`/work-in-progress`}
                      className="flex items-center"
                    >
                      <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
                        Ir a la galería
                      </h1>
                      <span className="relative inline-block bg-primary-color h-6 w-6 rounded-full flex items-center justify-center ml-2 mb-4">
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <circle cx="16" cy="16" r="16" fill="#FF0000" />
                          <path
                            d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                            fill="#FFFFFF"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-6 xl:gap-8">
                  {planetaData.imagenes &&
                    planetaData.imagenes.map(
                      (imagen: string, index: number) => {
                        if (index <= 1) {
                          return null;
                        }

                        return (
                          <div
                            key={index}
                            className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${
                              index !== 4
                                ? "md:h-60"
                                : "md:col-span-3 md:row-span-2 md:h-full"
                            } `}
                          >
                            <Image
                              src={imagen}
                              width={300}
                              height={200}
                              loading="lazy"
                              alt={`Foto ${index + 1} del planeta ${planetaNombre}`}
                              title={`Foto ${index + 1} del planeta ${planetaNombre}`}
                              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>

            <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8 mt-96 md:mt-48">
              Cultura Pop
            </h1>
            <p>{planetaData.cultura_pop}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Planeta;
