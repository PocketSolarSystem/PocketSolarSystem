"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./page.css";

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
    <main className="flex min-h-screen flex-col items-center p-8 pt-24 md:px-24">
      <div className="container mx-auto pt-8 pb-8">
        <div className="mb-8 relative">
          <Image
            src={"/our-solar-system.jpg"}
            width={1200}
            height={200}
            alt="Landing page Saturn image"
            className="border-2 border-solid border-black skew-y-1 z-0"
          />

          <p className="absolute hidden md:block text-4xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6">
            Los Planetas
          </p>

          <p className="block text-lg font-bold text-4xl md:hidden bg-white mt-3 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black">
            Los Planetas
          </p>
        </div>
        <p className="mb-8 mt-8">
          Nuestro sistema solar tiene ocho planetas y cinco planetas enanos,
          todos ubicados en un brazo espiral exterior de la Vía Láctea llamado
          el Brazo de Orión.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">DATOS DE LOS PLANETAS</h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {planetas.map((planeta, índice) => (
            <Link
              href={"/planetas/" + decodeURIComponent(planeta.nombre)}
              rel="noreferrer"
            >
              <div
                key={índice}
                className="bg-gray-100 p-8 rounded-lg shadow-lg"
              >
                <img
                  src={planeta.imagen}
                  alt={decodeURIComponent(planeta.nombre)}
                  className="mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">
                  {decodeURIComponent(planeta.nombre)}
                </h2>
                <p className="text-gray-700 text-sm">{planeta.descripcion}</p>
              </div>
            </Link>
          ))}
        </Carousel>

        <div className="m-8">
          <p className="mb-4">
            El sistema solar tiene ocho planetas. Moviendo hacia afuera desde el
            Sol, los planetas son: Mercurio, Venus, Tierra, Marte, Júpiter,
            Saturno, Urano y Neptuno.
          </p>

          <p className="mb-4">
            Hay cinco planetas enanos oficialmente reconocidos en nuestro
            sistema solar. En orden de distancia desde el Sol son: Ceres,
            Plutón, Haumea, Makemake y Eris.
          </p>

          <p className="mb-4">
            El sistema solar puede dividirse en tres regiones: el sistema solar
            interno, el sistema solar externo, el Cinturón de Kuiper y la Nube
            de Oort.
          </p>

          <p className="mb-4">
            Los planetas internos y rocosos son Mercurio, Venus, Tierra y Marte.
            Estos mundos también son conocidos como planetas terrestres porque
            tienen superficies sólidas. Mercurio, Tierra y Marte están siendo
            actualmente explorados por sondas espaciales. Dos rovers están en la
            superficie de Marte. El rover de la NASA, Perseverance, aterrizó en
            Marte el 18 de febrero de 2021. Tres misiones están en desarrollo
            para regresar a Venus.
          </p>

          <p className="mb-4">
            Los planetas exteriores son los gigantes gaseosos Júpiter y Saturno,
            y los gigantes de hielo Urano y Neptuno. La nave espacial Juno de la
            NASA está en una misión extendida en Júpiter, y la misión JUICE de
            la ESA está en camino. La NASA también está construyendo Europa
            Clipper y Dragonfly para explorar lunas de Júpiter y Saturno.
          </p>

          <p className="mb-4">
            Más allá de Neptuno, una nueva clase de mundos más pequeños llamados
            planetas enanos dominan, incluyendo el favorito de toda la vida,
            Plutón. La nave espacial New Horizons de la NASA visitó Plutón en
            2015, y actualmente está explorando el Cinturón de Kuiper más allá
            de Plutón. Los otros planetas enanos son Ceres, Makemake, Haumea y
            Eris.
          </p>

          <p>
            Se han descubierto miles de planetas más allá de nuestro sistema
            solar. Los científicos los llaman exoplanetas (exo significa "desde
            afuera").
          </p>
        </div>
      </div>
    </main>
  );
}
