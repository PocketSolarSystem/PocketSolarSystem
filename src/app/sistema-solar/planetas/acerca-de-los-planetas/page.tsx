"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/utilidades/ui/componentesSistemaSolar/Header";
import MainImage from "@/app/utilidades/ui/componentesSistemaSolar/MainImage";
import PlanetsOverview from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/PlanetsOverview";
import PlanetData from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/PlanetData";

import SkeletonHeader from "../../../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonHeader";
import SkeletonMainImage from "../../../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonMainImage";
import SkeletonInicioTexto from "@/app/utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonInicioTexto";
import SkeletonSolarSystemOverview from "../../../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonSolarSystemOverview";
import SkeletonPlanetData from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/esqueletoAcercaDeLosPlanetas/SkeletonPlanetData";
import SkeletonComponenteSelector from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/esqueletoAcercaDeLosPlanetas/SkeletonComponenteSelector";

async function fetchPlanets() {
  const response = await axios.get("/api/planet");
  return response.data;
}

const AcercaDeLosPlanetas = () => {
  const [planetaData, setPlanetaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlanets = async () => {
      try {
        const data = await fetchPlanets();
        setPlanetaData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching planetas:", error);
        setLoading(false);
      }
    };
    loadPlanets();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
      {loading ? (
        <>
          <SkeletonHeader />
          <SkeletonMainImage />
          <SkeletonInicioTexto />
          <SkeletonComponenteSelector />
          <SkeletonSolarSystemOverview />
          <h2 className="text-3xl font-bold mt-8 mb-4 text-center">
            Datos de los Planetas
          </h2>
          <SkeletonPlanetData />
        </>
      ) : (
        <>
          <Header
            englishText="About the Planets"
            spanishText="Sobre los Planetas"
          />
          <MainImage
            src="/our-solar-system.jpg"
            width={900}
            height={400}
            alt="About the Planets page Solar System image"
            title="Solar System"
          />
          <PlanetsOverview />
          <h2 className="text-3xl font-bold my-8 text-center">
            Datos de los Planetas
          </h2>
          <PlanetData planetaData={planetaData} />
        </>
      )}
    </main>
  );
};

export default AcercaDeLosPlanetas;
