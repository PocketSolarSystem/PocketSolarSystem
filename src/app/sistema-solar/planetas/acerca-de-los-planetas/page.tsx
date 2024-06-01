"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/utilidades/ui/componentesSistemaSolar/Header";
import MainImage from "@/app/utilidades/ui/componentesSistemaSolar/MainImage";
import PlanetsOverview from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/PlanetsOverview";
import PlanetData from "@/app/utilidades/ui/componentesSistemaSolar/componentesAcercaDeLosPlanetas/PlanetData";

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
        console.error("Error fetching planets:", error);
        setLoading(false);
      }
    };
    loadPlanets();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
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
      <h2 className="text-3xl font-bold mt-8 mb-4 text-center">
        Datos de los Planetas
      </h2>
      {loading ? (
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
          <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </main>
      ) : (
        <PlanetData planetaData={planetaData} />
      )}
    </main>
  );
};

export default AcercaDeLosPlanetas;
