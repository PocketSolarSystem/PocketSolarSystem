import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import "./CarouselPlanetas.css"

export function CarouselPlanetas(){

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
                <div key={índice} className="h-full bg-gray-100 p-8 rounded-lg shadow-lg text-center m-2">
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
    )
}