"use client";
import Image from "next/image";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { planetasEnanos } from "../../../utilidades/lib/dataDwarfPlanets";
import { Planeta3d } from "@/app/utilidades/ui/planeta3d";

export default function PlutonYPlanetasEnanos() {  
  const styling = {
    backgroundImage: `url('/texturas/estrellas-textura.jpg')`,
  };

  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
      <div className="container mx-auto pt-2 md:pt-8 mt-14 text-justify">
      <p className="block text-3xl mb-2 p-2 text-center">
            Plutón y planetas enanos
          </p>
      <div
          className="flex flex-col items-center justify-center text-center ml-2 mb-12 bg-cover rounded-lg"
          style={styling}
        >
          <div className="lg:h-80 lg:w-80 h-40 w-40">
            <Planeta3d textura='/texturas/Pluton-textura.jpg' />
            <p className="md:text-sm text-xs text-gray-400 mb-6">Textura semi-ficticia de Plutón</p>
          </div>
        </div>
        <p className="my-8">
          Nuestro sistema solar tiene cinco planetas enanos. En orden de
          distancia al Sol son: Ceres, Plutón, Haumea, Makemake y Eris.
        </p>

        <div className="mt-8">
          <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
            Visión general de los planetas enanos
          </h1>
          <p className="mb-4">
            Plutón y otros planetas enanos son bastante similares a los planetas
            regulares. Entonces, ¿cuál es la gran diferencia? La Unión
            Astronómica Internacional (IAU), una organización mundial de
            astrónomos, propuso la definición de planeta en 2006. Según la IAU,
            un planeta debe hacer tres cosas:
          </p>
          <ol className="list-decimal pl-12 mb-4">
            <li>
              Orbitar su estrella anfitriona (en nuestro sistema solar, eso es
              el Sol).
            </li>
            <li>Ser principalmente redondo.</li>
            <li>
              Ser lo suficientemente grande como para que su gravedad haya
              limpiado cualquier otro objeto de tamaño similar cerca de su
              órbita alrededor del Sol.
            </li>
          </ol>
          <p>
            Los planetas enanos como Plutón fueron definidos como objetos que
            orbitan al Sol y son casi redondos, pero no han podido limpiar su
            órbita de escombros. Hasta ahora, la IAU solo ha reconocido cinco
            planetas enanos. En orden de distancia al Sol son: Ceres, Plutón,
            Haumea, Makemake y Eris. Pero la IAU dice que puede haber muchos más
            planetas enanos, tal vez más de cien, esperando ser descubiertos.
          </p>
        </div>

        <CarouselPlanetas planetas={planetasEnanos} sonPlanetasEnanos={true}/>

        <div className="md:mx-32 mt-8">
          <h1 className="font-semibold text-xl text-3x1 mb-4 text-center md:text-left md:ml-8">
            Plutón: La Estrella de los Planetas Enanos
          </h1>
          <p className="mb-4">
            Plutón es, con mucho, el planeta enano más famoso. Descubierto por
            Clyde Tombaugh en 1930, Plutón fue considerado durante mucho tiempo
            el noveno planeta de nuestro sistema solar. Pero después de que
            otros astrónomos encontraron mundos intrigantes similares más
            adentro en el distante Cinturón de Kuiper, la IAU reclasificó a
            Plutón como planeta enano en 2006.
          </p>
          <div className="flex flex-col items-center justify-center mx-auto">
            <Image
              src="/planetas-enanos/dwarf-planets-signs.jpg"
              width={1200}
              height={200}
              alt="Landing page Saturn image"
              className="md:max-w-3xl max-w-xs mb-2"
            />
            <p className="md:text-sm text-xs text-gray-400 mb-6">
              Una imagen que muestra letreros apoyando a los planetas enanos.
            </p>
          </div>

          <p className="mb-4">
            Hubo una amplia indignación en nombre del planeta degradado. Los
            libros de texto fueron actualizados, e internet generó memes con
            Plutón pasando por una gama de emociones, desde la ira hasta la
            soledad.
          </p>
          <p className="mb-4">
            El 14 de julio de 2015, la nave espacial New Horizons de la NASA
            realizó su histórico vuelo a través del sistema de Plutón,
            proporcionando las primeras imágenes de cerca de Plutón y sus lunas,
            y recopilando otros datos que han transformado nuestra comprensión
            de estos mundos misteriosos en la frontera exterior del sistema
            solar.
          </p>
          <p className="mb-4">
            El planeta enano Ceres está más cerca de casa. Ceres es el objeto
            más grande en el cinturón de asteroides entre Marte y Júpiter, y es
            el único planeta enano ubicado en el sistema solar interno. Al igual
            que Plutón, Ceres también fue clasificado una vez como planeta.
            Ceres fue el primer planeta enano visitado por una nave espacial, la
            misión Dawn de la NASA.
          </p>
        </div>
      </div>
    </main>
  );
}
