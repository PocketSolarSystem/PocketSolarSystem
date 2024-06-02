import React from "react";

const SkeletonInicioTexto = () => {
  return (
    <div className="border-black border-solid border-2 text-center w-full p-4 mb-8">
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4 mx-auto animate-pulse"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonInicioTexto;
