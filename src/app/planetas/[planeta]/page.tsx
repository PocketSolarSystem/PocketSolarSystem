"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Planeta = () => {
  const pathname = usePathname();
  const partesRuta = pathname.split("/");
  const planeta = partesRuta[2];
  const [planetaData, setPlanetaData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanetaData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/planets/name/${planeta}`
        );
        setPlanetaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos del planeta:", error);
      }
    };

    if (planeta && typeof window !== "undefined") {
      fetchPlanetaData();
    }
  }, [planeta]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <p>Cargando...</p>
      </main>
    );
  } else if (planetaData != null) {
    return (
      <main className="flex flex-col items-center min-h-screen p-12 pt-24 md:p-24">
        <h1 className="text-3xl md:text-4xl mb-8">{planeta}</h1>
        {planetaData && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-3xl">
            <p className="mb-4">
              <strong className="font-semibold">Nombre:</strong>{" "}
              {planetaData.nombre}
            </p>
            <p className="mb-4">
              <strong className="font-semibold">Descripción:</strong>{" "}
              {planetaData.descripcion}
            </p>
            <p className="mb-4">
              <strong className="font-semibold">Visión general:</strong>{" "}
              {planetaData.overview}
            </p>
            <p className="mb-4">
              <strong className="font-semibold">Cultura pop:</strong>{" "}
              {planetaData.cultura_pop}
            </p>
            <h2 className="text-xl font-semibold mb-2">Historias:</h2>
            <ul className="list-disc pl-6 mb-6">
              {planetaData.historias.map((historia: string, index: number) => (
                <li key={index}>{historia}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Hechos:</h2>
            <ul className="list-disc pl-6">
              {Object.entries(planetaData.facts).map(([key, value], index) => (
                <li key={index} className="mb-2">
                  <strong className="font-semibold">{key}:</strong>{" "}
                  {String(value)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    );
  }
};

export default Planeta;
