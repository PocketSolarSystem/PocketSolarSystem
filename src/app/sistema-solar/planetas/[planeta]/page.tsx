"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { planetas } from "../../../utilidades/lib/dataPlanetas";

async function fetchPlanetaData(nombrePlaneta: string) {
  const response = await axios.get(
    `/api/planet/${encodeURIComponent(nombrePlaneta)}`
  );
  return response.data;
}

function Planeta() {
  const [planetaData, setPlanetaData] = useState<any>(null);
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
    return <p>Cargando...</p>;
  }

  if (!planetaData) {
    return <p>No se encontraron datos del planeta.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-24 md:px-24">
      <div className="container mx-auto pt-2 md:pt-8 mt-14">
        <div className="mb-8 relative">
          <p className="block font-bold text-3xl md:hidden bg-white mb-3 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black">
            {decodeURIComponent(planetaNombre)}
          </p>

          <Image
            src={
              planetaData.imagenes && planetaData.imagenes.length > 0
                ? planetaData.imagenes[0]
                : "/placeholder.png"
            }
            width={1200}
            height={800}
            alt={"Planet page " + decodeURIComponent(planetaNombre) + " image"}
            className="border-2 border-solid border-black skew-y-1 z-0"
          />

          <p className="absolute hidden md:block text-4xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6">
            {decodeURIComponent(planetaNombre)}
          </p>
        </div>
        <p className="mt-8">{planetaData.descripcion}</p>

        <CarouselPlanetas planetas={planetas} />

        {planetaData && (
          <div className="my-8">
            <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8">
              Visión General Planeta {decodeURIComponent(planetaNombre)}
            </h1>
            <p>{planetaData.overview}</p>

            <div className="bg-white h-screen h-full py-4 pb-10">
              <div className="mx-auto max-w-screen-2xl">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-8">
                  <div className="items-center gap-12">
                    <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
                      {decodeURIComponent(planetaNombre)}
                    </h1>
                    <div className="flex items-center gap-4">
                      <Image
                        src={
                          planetaData.imagenes &&
                          planetaData.imagenes.length > 0
                            ? planetaData.imagenes[0]
                            : "/placeholder.png"
                        }
                        width={16}
                        height={16}
                        alt="Landing page Saturn image"
                      />
                      <p>
                        {planetaData.imagenes && planetaData.imagenes.length > 0
                          ? `${planetaData.imagenes.length} IMAGENES`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-6 xl:gap-8">
                  {planetaData &&
                    planetaData.imagenes &&
                    planetaData.imagenes.map(
                      (imagen: string, index: number) => {
                        if (index <= 1) {
                          return null;
                        }

                        return (
                          <a
                            key={index}
                            href="#"
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
                              alt={`Photo ${index + 1}`}
                              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                          </a>
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
