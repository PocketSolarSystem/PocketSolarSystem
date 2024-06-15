"use client";
import React from "react";
import { SkeletonCarouselPlanetas } from "../../componentesPlaneta/esqueletoPlaneta/SkeletonCarouselPlanetas";

const SkeletonPlutonYPlanetasEnanos = () => {
  return (
    <div className="container mx-auto pt-2 md:pt-8 mt-14 text-justify w-full">
      {/* Sección del encabezado con imagen y título */}
      <div className="mb-8 relative">
        <div className="block font-bold text-3xl md:hidden bg-gray-300 mb-3 p-2 text-center animate-pulse w-1/2 mx-auto"></div>
        <div className="w-full h-64 bg-gray-300 border-2 border-solid border-black z-0 animate-pulse"></div>
        <div className="absolute hidden md:block text-4xl bg-gray-300 mt-7 p-2 text-center animate-pulse w-1/4 right-6 bottom-6"></div>
      </div>

      {/* Sección de descripción */}
      <div className="my-8">
        <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
      </div>

      {/* Sección de visión general */}
      <div className="mt-8">
        <div className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8 bg-gray-300 h-8 w-1/2 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
      </div>

      {/* Carrusel de planetas enanos */}
      <SkeletonCarouselPlanetas />

      {/* Sección adicional de Pluto */}
      <div className="mt-8 w-full">
        <div className="font-semibold text-xl text-3x1 mb-4 text-center md:text-left md:ml-8 bg-gray-300 h-8 w-1/2 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
        <div className="flex flex-col items-center justify-center mb-4 mx-auto">
          <div className="h-96 bg-gray-300 rounded-lg mb-2 animate-pulse md:max-w-3xl w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonPlutonYPlanetasEnanos;
