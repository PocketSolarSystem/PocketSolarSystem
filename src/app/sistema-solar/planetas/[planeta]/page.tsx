"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { planetas } from "../../../utilidades/lib/dataPlanetas";
import SkeletonPlaneta from "@/app/utilidades/ui/componentesSistemaSolar/componentesPlaneta/esqueletoPlaneta/SkeletonPlaneta";
import GaleriaImagenes from "@/app/utilidades/ui/galeriaImagenes/GaleriaImagenes";
import { Planeta3d } from "@/app/utilidades/ui/planeta3d";
import { VisualizarImagen } from "@/app/utilidades/ui/visualizarImagen";

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
  const [urlImagenMostrada, setUrlImagenMostrada]  = useState("");
  const pathname = usePathname();
  const partesRuta = pathname.split("/");
  const planetaNombre = decodeURIComponent(partesRuta[3]);
  const styling = {
    backgroundImage: `url('/texturas/estrellas-textura.jpg')`,
  };

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
      <div className="container mx-auto pt-2 md:pt-8 mt-2">
        <p className="block text-3xl bg-white mb-2 p-2 text-center">
          {decodeURIComponent(planetaNombre)}
        </p>
        
        <VisualizarImagen urlImagenMostrada={urlImagenMostrada} setUrlImagenMostrada={setUrlImagenMostrada} titulo={planetaNombre} />
        
        <div className="flex flex-col items-center justify-center text-center ml-2 mb-12 bg-cover rounded-lg" style={styling}>
          <div className="lg:h-80 lg:w-80 h-40 w-40">
              <Planeta3d
                textura={`/texturas/${planetaNombre}-textura.jpg`}
              />
          </div>
        </div>
        <p className="mt-8 text-center">
          {planetaData.descripcion}
        </p>
        <h1 className="font-semibold text-xl text-4x1 mb-8 mt-12 text-center md:text-left md:ml-8">
              Explora más planetas del Sistema Solar
        </h1>
        <CarouselPlanetas planetas={planetas} />
          <div className="my-8 text-justify">
            <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8">
              Visión General Planeta {planetaNombre}
            </h1>
            <p>{planetaData.overview}</p>
            <GaleriaImagenes
              planetaNombre={planetaNombre}
              imagenes={planetaData.imagenes}
              setUrlImagenMostrada={setUrlImagenMostrada}
            />
            <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8">
              Cultura Pop
            </h1>
            <p>{planetaData.cultura_pop}</p>
            
          </div>
      </div>
    </main>
  );
}

export default Planeta;
