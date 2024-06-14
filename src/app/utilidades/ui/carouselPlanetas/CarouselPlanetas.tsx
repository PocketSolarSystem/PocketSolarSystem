import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function CarouselPlanetas({ planetas }: { planetas: Array<any> }) {
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
        customButtonGroup={<CustomButtonGroup />}
      >
        {planetas.map((planeta, índice) => (
          <div
            key={índice}
            className="h-full bg-gray-100 p-4 rounded-lg shadow-lg text-center mx-2"
          >
            <div className="w-full h-[256px] relative flex items-center justify-center">
              <Image
                src={planeta.imagen}
                alt={planeta.nombre}
                title={planeta.nombre}
                width={planeta.nombre === "Saturno" ? 512 : 256}
                height={planeta.nombre === "Saturno" ? 512 : 256}
                className="rounded-t-lg"
                priority
              />
            </div>
            <h3 className="text-2xl mt-4 font-semibold">{planeta.nombre}</h3>
            <p className="text-gray-700 mt-2 text-sm">{planeta.descripcion}</p>
            <Link
              href={planeta.link}
              className="block bg-black text-white py-2 px-4 mt-8 hover:bg-slate-800 rounded-full"
            >
              Explora {planeta.nombre}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function CustomButtonGroup() {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        carouselRef.current.next();
      } else if (e.key === "ArrowLeft") {
        carouselRef.current.previous();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="custom-button-group">
      <button
        className="button z-10"
        onClick={() => carouselRef.current.previous()}
        style={{ zIndex: 1 }}
      >
        Prev
      </button>
      <button
        className="button z-10"
        onClick={() => carouselRef.current.next()}
        style={{ zIndex: 1 }}
      >
        Next
      </button>
    </div>
  );
}
