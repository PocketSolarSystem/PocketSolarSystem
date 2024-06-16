import React from "react";

const SkeletonRoversInfo = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
      <h1 className="text-4xl text-center mt-5 md:mb-16 basis-40 md:basis-0 lg:basis-0">
        Selecciona un rover para saber más acerca de él
      </h1>

      <div className="md:grid md:grid-cols-2 md:gap-9 w-full items-center mt-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="text-center hover:cursor-pointer mb-5 md:mb-0 animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 rounded-md"></div>
            <div className="mt-4 h-6 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkeletonRoversInfo;
