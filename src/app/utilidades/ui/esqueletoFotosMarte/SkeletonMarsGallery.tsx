import React from "react";

const SkeletonMarsGallery = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
      {/* Título de la página */}
      <div className="bg-gray-300 h-12 w-3/4 mt-4 md:mb-9 animate-pulse"></div>

      {/* Formulario de búsqueda y textos informativos */}
      <div className="mb-5 text-center w-full">
        {/* Buscar por fecha terrestre */}
        <div className="mt-10">
          <div className="bg-gray-300 h-6 w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-300 h-10 w-1/4 rounded-md animate-pulse mr-5"></div>
            <div className="bg-gray-300 h-10 w-1/6 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Texto informativo */}
        <div className="mt-7 bg-gray-300 h-6 w-3/4 mx-auto animate-pulse"></div>

        {/* Buscar por días marcianos */}
        <div className="mt-5">
          <div className="bg-gray-300 h-6 w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-300 h-10 w-1/6 rounded-md animate-pulse mr-5"></div>
            <div className="bg-gray-300 h-10 w-1/6 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Texto condicional */}
        <div className="mt-20 bg-gray-300 h-6 w-3/4 mx-auto animate-pulse"></div>
      </div>

      {/* Grid de imágenes */}
      <div className="md:grid md:grid-cols-5 md:gap-10 items-center mt-6 w-full">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="mt-5">
            <div className="bg-gray-300 h-48 w-full rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkeletonMarsGallery;
