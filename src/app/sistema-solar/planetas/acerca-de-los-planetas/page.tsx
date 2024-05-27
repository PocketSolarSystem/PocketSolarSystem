"use client";
import Image from "next/image";
import Link from "next/link";
import { InicioTexto } from "@/app/utilidades/ui/inicio-texto";
import { usePathname } from "next/navigation";
import { ComponenteSelector } from "@/app/utilidades/ui/componenteSelector/ComponenteSelector";
import { planetas } from "../../../utilidades/lib/dataPlanetasSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

async function fetchPlanets() {
  const response = await axios.get("/api/planet");
  return response.data;
}

const AcercaDeLosPlanetas = () => {
  const [planetaData, setPlanetaData] = useState([]);
  const listaPlanetasCortada = planetas.slice(0, planetas.length / 2);
  const listaPlanetasCortada2 = planetas.slice(
    planetas.length / 2,
    planetas.length
  );

  useEffect(() => {
    const loadPlanets = async () => {
      try {
        const data = await fetchPlanets();
        setPlanetaData(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };
    loadPlanets();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center md:p-12 p-8 pt-16">
      <h1 className="md:text-4xl text-2xl md:mb-8 md:basis-0 md:pt-12 mt-20">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("About the Planets")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Sobre los Planetas")
              .start();
          }}
        />
      </h1>

      <div className="mb-8 mt-4 relative">
        <Image
          src={"/our-solar-system.jpg"}
          width={900}
          height={400}
          alt="About the Planets page Solar System image"
          className="border-2 border-solid border-black skew-y-1 z-0"
        />
      </div>

      <InicioTexto
        titulo="Nuestro Sistema Solar"
        texto="Está compuesto por ocho planetas y cinco planetas enanos,
          todos ubicados en un brazo espiral exterior de la Vía Láctea llamado
          el Brazo de Orión. Gracias a Pocket Solar System puedes navegar a través de los distintos planetas del sistema solar en tres dimensiones."
      />

      <ComponenteSelector
        listaOriginal={planetas}
        listaCortada1={listaPlanetasCortada}
        listaCortada2={listaPlanetasCortada2}
      />

      <div className="md:mx-32 mt-4">
        <p className="mb-4">
          El sistema solar tiene ocho planetas. Moviendo hacia afuera desde el
          Sol, los planetas son: Mercurio, Venus, Tierra, Marte, Júpiter,
          Saturno, Urano y Neptuno.
        </p>

        <p className="mb-4">
          Hay cinco planetas enanos oficialmente reconocidos en nuestro sistema
          solar. En orden de distancia desde el Sol son: Ceres, Plutón, Haumea,
          Makemake y Eris.
        </p>

        <p className="mb-4">
          El sistema solar puede dividirse en tres regiones: el sistema solar
          interno, el sistema solar externo, el Cinturón de Kuiper y la Nube de
          Oort.
        </p>

        <p className="mb-4">
          Los planetas internos y rocosos son Mercurio, Venus, Tierra y Marte.
          Estos mundos también son conocidos como planetas terrestres porque
          tienen superficies sólidas. Mercurio, Tierra y Marte están siendo
          actualmente explorados por sondas espaciales. Dos rovers están en la
          superficie de Marte. El rover de la NASA, Perseverance, aterrizó en
          Marte el 18 de febrero de 2021. Tres misiones están en desarrollo para
          regresar a Venus.
        </p>

        <p className="mb-4">
          Los planetas exteriores son los gigantes gaseosos Júpiter y Saturno, y
          los gigantes de hielo Urano y Neptuno. La nave espacial Juno de la
          NASA está en una misión extendida en Júpiter, y la misión JUICE de la
          ESA está en camino. La NASA también está construyendo Europa Clipper y
          Dragonfly para explorar lunas de Júpiter y Saturno.
        </p>

        <p className="mb-4">
          Más allá de Neptuno, una nueva clase de mundos más pequeños llamados
          planetas enanos dominan, incluyendo el favorito de toda la vida,
          Plutón. La nave espacial New Horizons de la NASA visitó Plutón en
          2015, y actualmente está explorando el Cinturón de Kuiper más allá de
          Plutón. Los otros planetas enanos son Ceres, Makemake, Haumea y Eris.
        </p>

        <p>
          Se han descubierto miles de planetas más allá de nuestro sistema
          solar. Los científicos los llaman exoplanetas (exo significa
          &quot;desde afuera&quot;).
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-center">
        Datos de los Planetas
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-12">
        {planetaData.map((planeta: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row space-x-8 ${
              index % 2 === 0
                ? "md:flex-row-reverse space-x-reverse"
                : "md:flex-row"
            }`}
          >
            {/* Imagen */}
            <div className="md:w-1/2 md:flex-shrink-0">
              <Image
                src={
                  planeta.imagenes && planeta.imagenes.length > 0
                    ? planeta.imagenes[1]
                    : ""
                }
                width={200}
                height={200}
                alt={`${planeta.nombre} Image`}
                className="w-full mb-4"
              />
            </div>
            {/* Texto */}
            <div className="md:w-1/2 md:order-2">
              <h2 className="text-2xl font-bold mb-2 text-gray-500 font-futuristic relative">
                <span className="absolute top-0 left-0.5 transform origin-top-left">
                  /
                </span>
                {`0${index + 1}`}
              </h2>
              {/* Número del planeta */}
              <h3 className="text-lg font-semibold mb-2">{`Datos sobre ${planeta.nombre}`}</h3>{" "}
              {/* Título del planeta */}
              <div>
                <p>{planeta.facts.Introduccion}</p>{" "}
                {/* Texto de introducción */}
                <p>
                  <Link
                    href={planeta.nombre}
                    className="block text-lg font-semibold py-2 mt-2 transition duration-300 flex items-center"
                  >
                    <span className="mr-2">{`Explora ${planeta.nombre}`}</span>
                    <span className="relative inline-block bg-primary-color h-6 w-6 rounded-full flex items-center justify-center mr-2">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <circle cx="16" cy="16" r="16" fill="#FF0000" />
                        <path
                          d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AcercaDeLosPlanetas;
