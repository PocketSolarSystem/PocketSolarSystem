import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
=======
import "./CarouselPlanetas.css"
import { ComponenteSelector } from "../componenteSelector/ComponenteSelector";
>>>>>>> a8bd0e7ab790a96fe2a3cbd2d0ad73309fb10de5

export function CarouselPlanetas() {
  const planetas = [
    {
      nombre: "Mercurio",
      descripcion: "El planeta más veloz.",
      imagen: "/mercurio-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/mercury",
    },
    {
      nombre: "Venus",
      descripcion: "La hermana gemela sobrecalentada de la Tierra.",
      imagen: "/venus-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/venus",
    },
    {
      nombre: "Tierra",
      descripcion: "Nuestro hogar.",
      imagen: "/tierra-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/earth",
    },
    {
      nombre: "Marte",
      descripcion: "El Planeta Rojo.",
      imagen: "/marte-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/mars",
    },
    {
      nombre: "Júpiter",
      descripcion: "Rey de los planetas.",
      imagen: "/jupiter-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/jupiter",
    },
    {
      nombre: "Saturno",
      descripcion: "La joya del sistema solar.",
      imagen: "/saturno-inicio.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/saturn",
    },
    {
      nombre: "Urano",
      descripcion: "El gigante de hielo original.",
      imagen: "/urano-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/uranus",
    },
    {
      nombre: "Neptuno",
      descripcion: "El planeta más lejano en nuestro sistema solar.",
      imagen: "/neptuno-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/neptune",
    },
    {
      nombre: "Plutón",
      descripcion: "Un pequeño mundo con un gran corazón.",
      imagen: "/pluton-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/jupiter",
    },
    {
      nombre: "Exoplanetas",
      descripcion: "Planetas más allá del sistema solar.",
      imagen: "/pluton-planeta.jpg",
      link: "https://eyes.nasa.gov/apps/solar-system/#/jupiter",
    },
  ];

<<<<<<< HEAD
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
    <div className="container mx-auto pt-8">
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
              width={300}
              height={300}
              className="mx-auto rounded-full"
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
              Visualiza {planeta.nombre} en 3D
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
=======
    const planetas = [
        {
            nombre: "Mercurio",
            descripcion: "El planeta más veloz.",
            imagen: "/mercurio-planeta.jpg",
        },
        {
            nombre: "Venus",
            descripcion: "La hermana gemela sobrecalentada de la Tierra.",
            imagen: "/venus-planeta.jpg",
        },
        {
            nombre: "Tierra",
            descripcion: "Nuestro hogar.",
            imagen: "/tierra-planeta.jpg",
        },
        {
            nombre: "Marte",
            descripcion: "El Planeta Rojo.",
            imagen: "/marte-planeta.jpg",
        },
        {
            nombre: "Júpiter",
            descripcion: "Rey de los planetas.",
            imagen: "/jupiter-planeta.jpg",
        },
        {
            nombre: "Saturno",
            descripcion: "La joya del sistema solar.",
            imagen: "/saturno-inicio.jpg",
        },
        {
            nombre: "Urano",
            descripcion: "El gigante de hielo original.",
            imagen: "/urano-planeta.jpg",
        },
        {
            nombre: "Neptuno",
            descripcion: "El planeta más lejano en nuestro sistema solar.",
            imagen: "/neptuno-planeta.jpg",
        },
        {
            nombre: "Plutón",
            descripcion: "Un pequeño mundo con un gran corazón.",
            imagen: "/pluton-planeta.jpg",
        },
        {
            nombre: "Exoplanetas",
            descripcion: "Planetas más allá del sistema solar.",
            imagen: "/pluton-planeta.jpg",
        },
    ];

    const listaPlanetasCortada = planetas.slice(0, (planetas.length/2));
    const listaPlanetasCortada2 = planetas.slice((planetas.length/2), planetas.length);

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
        <main>

            <ComponenteSelector listaOriginal={planetas} listaCortada1={listaPlanetasCortada} listaCortada2={listaPlanetasCortada2}/>
            
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
                        <div key={índice} className="bg-gray-100 p-8 rounded-lg shadow-lg text-center m-2">
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
                            className="bg-black text-white p-1 mt-8 hover:bg-slate-800">
                                Visualiza {planeta.nombre} en 3D
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </main>
        
    )
}
>>>>>>> a8bd0e7ab790a96fe2a3cbd2d0ad73309fb10de5
