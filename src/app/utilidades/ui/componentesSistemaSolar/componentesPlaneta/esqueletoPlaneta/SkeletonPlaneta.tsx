import React from "react";
import { SkeletonCarouselPlanetas } from "./SkeletonCarouselPlanetas";

const SkeletonPlaneta = () => {
  return (
    // Contenedor principal con clases para flexbox, mínima altura de pantalla y padding
    <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
      {/* Contenedor central con clases para ajustar márgenes y padding */}
      <div className="container mx-auto pt-2 md:pt-8 mt-14">
        {/* Sección del título y la imagen principal del planeta */}
        <div className="mb-8 relative">
          {/* Título para pantallas móviles */}
          <div className="block font-bold text-3xl md:hidden bg-gray-300 mb-3 p-2 text-center skew-y-1 animate-pulse w-1/2 mx-auto"></div>

          {/* Imagen principal simulada con un div */}
          <div className="w-full h-64 bg-gray-300 border-2 border-solid border-black skew-y-1 z-0 animate-pulse"></div>

          {/* Título para pantallas grandes, posicionado de forma absoluta */}
          <div className="absolute hidden md:block text-4xl bg-gray-300 mt-7 p-2 text-center skew-y-1 animate-pulse w-1/4 right-6 bottom-6"></div>
        </div>

        {/* Sección para la descripción del planeta */}
        <div className="mt-8 text-left md:text-justify">
          <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
        </div>

        <SkeletonCarouselPlanetas />

        {/* Sección para la visión general del planeta */}
        <div className="my-8 text-justify">
          <div className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8 bg-gray-300 h-8 w-1/2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
        </div>

        {/* Contenedor para la galería de imágenes */}
        <div className="bg-white h-full py-4 pb-10">
          <div className="mx-auto max-w-screen-2xl">
            {/* Encabezado de la galería con título e icono */}
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-8 w-full">
              <div className="items-center gap-12">
                <div className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8 bg-gray-300 h-8 w-1/2 animate-pulse"></div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 rounded-full h-16 w-16 animate-pulse"></div>
                  <div className="h-6 bg-gray-300 rounded w-16 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center md:mt-10">
                <div className="flex items-center">
                  <div className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8 bg-gray-300 h-8 w-32 animate-pulse"></div>
                  <div className="bg-primary-color h-6 w-6 rounded-full flex items-center justify-center ml-2 mb-4 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Grilla de imágenes de la galería */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-6 xl:gap-8">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-300 shadow-lg animate-pulse ${
                    index !== 5
                      ? "md:h-60"
                      : "md:col-span-3 md:row-span-2 md:h-full"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección adicional para la visión general del planeta */}
        <div className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8 mt-96 md:mt-48 bg-gray-300 h-8 w-1/2 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 mb-4 animate-pulse"></div>
      </div>
    </main>
  );
};

export default SkeletonPlaneta;
