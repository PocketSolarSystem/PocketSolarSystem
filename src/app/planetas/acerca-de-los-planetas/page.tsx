"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function AcercaDeLosPlanetas() {
  const planetas = [
    {
      nombre: "Mercurio",
      descripcion: "El planeta más veloz.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Venus",
      descripcion: "La hermana gemela sobrecalentada de la Tierra.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Tierra",
      descripcion: "Nuestro hogar.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Marte",
      descripcion: "El Planeta Rojo.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Júpiter",
      descripcion: "Rey de los planetas.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Saturno",
      descripcion: "La joya del sistema solar.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Urano",
      descripcion: "El gigante de hielo original.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Neptuno",
      descripcion: "El planeta más lejano en nuestro sistema solar.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Plutón",
      descripcion: "Un pequeño mundo con un gran corazón.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Exoplanetas",
      descripcion: "Planetas más allá del sistema solar.",
      imagen: "https://via.placeholder.com/150",
    },
  ];

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
    <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Los Planetas</h1>
        <p className="mb-4">
          Nuestro sistema solar tiene ocho planetas y cinco planetas enanos,
          todos ubicados en un brazo espiral exterior de la Vía Láctea llamado
          el Brazo de Orión.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">DATOS DE LOS PLANETAS</h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {planetas.map((planeta, índice) => (
            <div key={índice} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <img
                src={planeta.imagen}
                alt={planeta.nombre}
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{planeta.nombre}</h2>
              <p className="text-gray-700">{planeta.descripcion}</p>
            </div>
          ))}
        </Carousel>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Exoplanetas</h2>
          <p>Planetas fuera del sistema solar.</p>
        </div>

        <div className="mt-8">
          <p>
            El sistema solar tiene ocho planetas. Moviendo hacia afuera desde el
            Sol, los planetas son: Mercurio, Venus, Tierra, Marte, Júpiter,
            Saturno, Urano y Neptuno.
          </p>
          <p>
            Hay cinco planetas enanos oficialmente reconocidos en nuestro
            sistema solar. En orden de distancia desde el Sol son: Ceres,
            Plutón, Haumea, Makemake y Eris.
          </p>
          <p>
            El sistema solar puede dividirse en tres regiones: el sistema solar
            interno, el sistema solar externo, el Cinturón de Kuiper y la Nube
            de Oort.
          </p>
        </div>
      </div>
    </main>
  );
}
