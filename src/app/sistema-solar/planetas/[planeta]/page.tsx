"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { planetas } from "../../../utilidades/lib/dataPlanetas";
import Link from "next/link";
import SkeletonPlaneta from "@/app/utilidades/ui/componentesSistemaSolar/componentesPlaneta/esqueletoPlaneta/SkeletonPlaneta";
import GaleriaImagenes from "@/app/utilidades/ui/galeriaImagenes/GaleriaImagenes";

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
    return <SkeletonPlaneta />;
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
            <GaleriaImagenes
              planetaNombre={planetaNombre}
              imagenes={planetaData.imagenes}
            />
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
