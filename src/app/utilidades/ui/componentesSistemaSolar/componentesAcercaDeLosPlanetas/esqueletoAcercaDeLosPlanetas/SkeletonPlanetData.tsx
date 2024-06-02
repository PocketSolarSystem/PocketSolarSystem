import React from "react";

const SkeletonPlanetData = () => {
  return (
    <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-1 md:gap-12">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row md:space-x-8 ${
            index % 2 === 0
              ? "md:flex-row-reverse md:space-x-reverse"
              : "md:flex-row"
          }`}
        >
          <div className="md:w-1/2 md:flex-shrink-0 ">
            <div className="w-full h-52 bg-gray-300 rounded mb-4 animate-pulse"></div>
          </div>
          <div className="md:w-1/2 md:order-2">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mt-4 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPlanetData;
