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
    <div className="container mx-auto">
      <h2 className="text-3xl mt-8 mb-4 text-center font-bold">
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
        itemClass="px-4"
        containerClass="mt-4"
      >
        {planetas.map((planeta, índice) => (
          <div
            key={índice}
            className="h-full bg-gray-100 p-4 rounded-lg shadow-lg text-center mx-2"
          >
            <Image
              src={planeta.imagen}
              alt={planeta.nombre}
              width={planeta.nombre === "Saturno" ? 384 : 192}
              height={planeta.nombre === "Saturno" ? 384 : 192}
              className={`mx-auto rounded-full ${planeta.nombre === "Saturno" ? "md:pb-2.5 pb-5" : ""} ${planeta.nombre === "Haumea" ? "pb-3" : ""}`}
              priority
            />
            <h3 className="text-2xl mt-4 font-semibold">{planeta.nombre}</h3>
            <p className="text-gray-700 mt-2 text-xs sm:text-sm">
              {planeta.descripcion}
            </p>
            <Link
              href={planeta.link}
              className="block bg-black text-white py-2 px-4 mt-8 hover:bg-slate-800"
            >
              Explora {planeta.nombre}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
