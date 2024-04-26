"use client";
import Image from "next/image";
import { CarouselPlanetas } from "@/app/utilidades/ui/carouselPlanetas/CarouselPlanetas";
import "react-multi-carousel/lib/styles.css";
import { InicioTexto } from "@/app/utilidades/ui/inicio-texto";

export default function AcercaDeLosPlanetas() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
      <h1 className="text-4xl mt-4 md:mb-5 basis-40 md:basis-0 lg:basis-0">
        Planetas
      </h1>

      <div className="mb-8 mt-4 relative">
        <Image
          src={"/our-solar-system.jpg"}
          width={900}
          height={400}
          alt="Landing page Saturn image"
          className="border-2 border-solid border-black skew-y-1 z-0"
        />
      </div>

      <InicioTexto
        titulo="El Sistema Solar"
        texto="Está compuesto por ocho planetas y cinco planetas enanos,
          todos ubicados en un brazo espiral exterior de la Vía Láctea llamado
          el Brazo de Orión. Gracias a Pocket Solar System puedes navegar a través de los distintos planetas del sistema solar en tres dimensiones."
      />

      <CarouselPlanetas />

      <div className="m-8">
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
    </main>
  );
}
