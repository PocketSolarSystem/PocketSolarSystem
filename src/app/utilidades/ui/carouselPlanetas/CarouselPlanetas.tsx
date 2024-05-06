import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";

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
    <div className="sm:hidden container mx-auto pt-8">
      <h2 className="text-2xl mt-8 mb-4 text-center">
        <strong>NUESTROS PLANETAS</strong>
      </h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        itemClass=""
      >
        {planetas.map((planeta, índice) => (
          <div
            key={índice}
            className="bg-gray-100 p-8 rounded-lg shadow-lg text-center m-2"
          >
            <Image
              src={planeta.imagen}
              alt={planeta.nombre}
              width={300}
              height={300}
              className="mx-auto rounded-full"
            />
            <h2 className="text-xl mt-4">{planeta.nombre}</h2>
            <p className="text-gray-700 text-sm">{planeta.descripcion}</p>
            <Link
              href=""
              className="bg-black text-white p-1 mt-8 hover:bg-slate-800"
            >
              Visualiza {planeta.nombre} en 3D
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
