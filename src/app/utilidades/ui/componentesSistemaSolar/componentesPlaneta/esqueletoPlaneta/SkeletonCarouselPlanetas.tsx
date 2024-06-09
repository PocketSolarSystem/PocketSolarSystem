import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function SkeletonCarouselPlanetas() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skeletonItems = Array.from({ length: 5 });

  return (
    <div className="container mx-auto mt-8 relative z-0">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        itemClass="px-4"
        containerClass="mt-4"
      >
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="h-full bg-gray-300 p-4 rounded-lg shadow-lg text-center mx-2 animate-pulse"
          >
            <div className="w-full h-48 bg-gray-400 rounded-lg mx-auto"></div>
            <div className="h-6 bg-gray-400 rounded mt-4 mx-auto w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded mt-2 mx-auto w-2/3"></div>
            <div className="h-10 bg-gray-400 rounded mt-8 mx-auto w-1/2"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
