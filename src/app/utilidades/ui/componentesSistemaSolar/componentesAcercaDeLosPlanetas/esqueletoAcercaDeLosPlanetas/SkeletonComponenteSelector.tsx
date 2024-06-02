import React from "react";

const SkeletonComponenteSelector = () => (
  <div className="hidden md:block">
    <h2 className="text-2xl mt-8 mb-4 text-center">
      <div className="h-6 bg-gray-300 rounded w-1/4 mx-auto animate-pulse"></div>
    </h2>
    <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-10 bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center bg-cover rounded-lg">
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
        <div className="lg:h-80 lg:w-80 h-40 w-40 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mt-4 animate-pulse"></div>
        <div className="h-10 bg-gray-300 rounded-full w-1/2 mt-4 animate-pulse"></div>
      </div>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-10 bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonComponenteSelector;
