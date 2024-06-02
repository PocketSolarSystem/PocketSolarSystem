import React from "react";

const SkeletonCardGrid = () => {
  return (
    <div className="flex flex-wrap w-full">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="relative w-full pb-[150%] bg-gray-300 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardGrid;
