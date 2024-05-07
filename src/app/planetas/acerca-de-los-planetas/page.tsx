"use client";
import Image from "next/image";
import Link from "next/link";
import { InicioTexto } from "@/app/utilidades/ui/inicio-texto";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ComponenteSelector } from "@/app/utilidades/ui/componenteSelector/ComponenteSelector";
import { planetas } from "../../utilidades/lib/dataPlanetas";
import { useEffect, useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function AcercaDeLosPlanetas() {
  const listaPlanetasCortada = planetas.slice(0, planetas.length / 2);
  const listaPlanetasCortada2 = planetas.slice(
    planetas.length / 2,
    planetas.length
  );

  const pathname = usePathname();
  const partesRuta = pathname.split("/");
  const planeta = partesRuta[2];
  const [planetaData, setPlanetaData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanetaData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/planets`);
        setPlanetaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos del planeta:", error);
      }
    };

    if (planeta && typeof window !== "undefined") {
      fetchPlanetaData();
    }
  }, [planeta]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <p>Cargando...</p>
      </main>
    );
  } else if (planetaData != null) {
    return (
      <main className="flex min-h-screen flex-col items-center md:p-12 p-8 pt-24">
        <h1 className="text-4xl mt-4 md:mb-5 md:basis-0 md:pt-12">
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
                  src={planeta.imagenes.length > 0 ? planeta.imagenes[1] : ""}
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
                        {/* Círculo rojo */}
                        <span className="absolute inset-0 bg-red-500 hover:bg-red-800 rounded-full"></span>
                        {/* Flecha blanca */}
                        <svg
                          className="h-4 w-4 text-white z-10"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="10" cy="10" r="8" fill="white" />
                          <path
                            fillRule="evenodd"
                            d="M13.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 11H5a1 1 0 010-2h6.586l-3.293-3.293a1 1 0 111.414-1.414l4 4z"
                            clipRule="evenodd"
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
  }
}
