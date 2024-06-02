import React from "react";

const SkeletonSolarSystemOverview = () => {
  return (
    <div className="my-8 text-justify w-full">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-8 mx-auto md:mx-0 animate-pulse"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonSolarSystemOverview;
