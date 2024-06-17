"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Cargando from "./loading";
import { VisualizarImagen } from "@/app/utilidades/ui/visualizarImagen/visualizarImagen";
interface Planet {
  _id: string;
  nombre: string;
  imagenes: string[];
}

const Galeria = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [showPlanetList, setShowPlanetList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
  const searchParams = useSearchParams();
  const planetaNombre = searchParams?.get("planeta");
  const planetListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("/api/planet");
        const planetData: Planet[] = response.data;
        setPlanets(planetData);

        if (planetaNombre) {
          const selected = planetData.find(
            (p: Planet) => p.nombre === planetaNombre
          );
          if (selected) {
            setSelectedPlanet(selected);
          }
        }
      } catch (error) {
        console.error("Error fetching planets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, [planetaNombre]);

  const handlePlanetClick = (planet: Planet) => {
    setSelectedPlanet(planet);
    setShowPlanetList(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      planetListRef.current &&
      !planetListRef.current.contains(event.target as Node)
    ) {
      setShowPlanetList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row my-8">
        {/* Lista de Planetas en pantallas grandes */}
        <div className="hidden md:block w-1/4 p-4">
          <h2 className="font-bold text-xl mb-4">Planetas</h2>
          <ul className="space-y-2">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <li key={index} className="animate-pulse">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </li>
                ))
              : planets.map((planet) => (
                  <li
                    key={planet._id}
                    className={`cursor-pointer hover:bg-gray-100 rounded p-2 ${selectedPlanet?.nombre == planet.nombre ? "bg-gray-100" : ""}`}
                    onClick={() => handlePlanetClick(planet)}
                  >
                    {planet.nombre}
                  </li>
                ))}
          </ul>
        </div>

        {/* Botón y Lista de Planetas en pantallas pequeñas */}
        <div
          ref={planetListRef}
          className="block md:hidden w-full md:w-1/4 p-4 z-10 relative"
        >
          <button
            onClick={() => setShowPlanetList(!showPlanetList)}
            className={`block md:hidden w-full bg-gray-200 text-left py-2 px-4 rounded-md focus:outline-none hover:ring hover:border-blue-300 ${
              showPlanetList ? "mb-2" : ""
            }`}
          >
            Selecciona un planeta
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 float-right transition-transform ${
                showPlanetList ? "-rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.292 6.293a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </button>
          <ul
            className={`absolute left-0 mt-2 w-full bg-white shadow-md ${
              showPlanetList ? "block" : "hidden"
            } md:hidden`}
          >
            {planets.map((planet) => (
              <li
                key={planet._id}
                className={`cursor-pointer hover:bg-gray-100 rounded p-2`}
                onClick={() => handlePlanetClick(planet)}
              >
                {planet.nombre}
              </li>
            ))}
          </ul>
        </div>

        {/* Galería de Imágenes */}
        <div className="w-full md:w-3/4 p-4">
          {selectedPlanet?.nombre ? (
            <h2 className="font-bold text-xl mb-4 text-center md:text-left">
              Galería de {selectedPlanet?.nombre}
            </h2>
          ) : (
            <h2 className="font-bold text-xl mb-4 text-center md:text-left">
              Galería
            </h2>
          )}
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Cargando />
            </div>
          ) : (
            <div
              className={`grid gap-4 ${selectedPlanet ? "md:grid-cols-3" : ""}`}
            >
              {selectedPlanet ? (
                selectedPlanet.imagenes.map(
                  (imagen, index) =>
                    index >= 0 && (
                      <div
                        key={index}
                        className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:cursor-pointer md:h-60`}
                        onClick={() => {
                          setUrlImagenMostrada(imagen);
                        }}
                      >
                        <Image
                          src={imagen}
                          loading="lazy"
                          alt={`Foto ${index + 1} del planeta ${selectedPlanet.nombre}`}
                          title={`Foto ${index + 1} del planeta ${selectedPlanet.nombre}`}
                          width={300}
                          height={200}
                          className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </div>
                    )
                )
              ) : (
                <p className="text-center">
                  Selecciona un planeta para ver sus imágenes.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <VisualizarImagen
        urlImagenMostrada={urlImagenMostrada}
        setUrlImagenMostrada={setUrlImagenMostrada}
        titulo="Imagen Galería"
        nasaId=""
        objetoInformacion={null}
        objetoRover={null}
      />
    </div>
  );
};

export default Galeria;
