import React from "react";

const SkeletonNasaFileSearch = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
      {/* Título de la página */}
      <div className="bg-gray-300 h-12 w-3/4 mt-4 md:mb-5 animate-pulse"></div>

      {/* Formulario de búsqueda */}
      <div className="m-9 text-xl w-full flex flex-col items-center">
        <div className="bg-gray-300 h-6 w-1/4 mb-4 animate-pulse"></div>
        <div className=" inline-block border-2 border-black border-solid flex">
          <div className="bg-gray-300 h-10 w-full p-1 animate-pulse"></div>
          <div className="hidden md:inline-block bg-black">
            <div className="bg-gray-300 h-10 w-20 p-1 animate-pulse"></div>
          </div>
        </div>
        <div className="block md:hidden bg-black text-white p-1 mt-4 animate-pulse">
          <div className="bg-gray-300 h-10 w-20 animate-pulse"></div>
        </div>
      </div>

      {/* Texto condicional */}
      <div className="text-center bg-gray-300 h-6 w-3/4 animate-pulse mb-10"></div>

      {/* Grid de imágenes */}
      <div className="md:grid md:grid-cols-4 md:gap-10 items-center m-5 mt-6 w-full">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="mt-5">
            <div className="bg-gray-300 h-48 w-full rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkeletonNasaFileSearch;
