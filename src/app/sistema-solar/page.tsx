"use client";
import Image from "next/image";
import Link from "next/link";
import { InicioTexto } from "@/app/utilidades/ui/inicio-texto";
import NavbarSolarSystem from "../utilidades/ui/navbarSolarSystem";
import Typewriter from "typewriter-effect";

export default function SistemaSolar() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-12 p-8 pt-24">
      <h1 className="md:text-4xl text-2xl mt-4 md:mb-5 md:basis-0 md:pt-12 mt-14">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Solar System Exploration")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Exploración del Sistema Solar")
              .start();
          }}
        />
      </h1>

      <div className="mb-8 mt-4 relative">
        <Image
          src={"/exploracion-sistema-solar.jpg"}
          width={900}
          height={400}
          alt="Solar System Exploration page Solar System Exploration image"
          className="border-2 border-solid border-black skew-y-1 z-0"
        />
      </div>

      <InicioTexto
        titulo="Nuestro Sistema Solar"
        texto="Acompáñanos mientras exploramos nuestro vecindario planetario: el Sol, planetas, lunas y millones de asteroides y cometas."
      />

      <div className="my-8">
        <h1 className="font-semibold text-xl text-4x1 mb-8 text-center md:text-left md:ml-8">
          Visión General del Sistema Solar
        </h1>
        <p className="mb-4">
          El sistema solar tiene una estrella, ocho planetas, cinco planetas
          enanos, al menos 290 lunas, más de 1.3 millones de asteroides y unos
          3,900 cometas. Se encuentra en un brazo espiral exterior de la galaxia
          Vía Láctea llamado el Brazo de Orión, o Espolón de Orión. Nuestro
          sistema solar orbita el centro de la galaxia a aproximadamente 515,000
          millas por hora (828,000 kilómetros por hora). Se tarda alrededor de
          230 millones de años en completar una órbita alrededor del centro
          galáctico.
        </p>
        <p className="mb-4">
          Lo llamamos sistema solar porque está compuesto por nuestra estrella,
          el Sol, y todo lo que está unido a ella por gravedad: los planetas
          Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno; los
          planetas enanos Plutón, Ceres, Makemake, Haumea y Eris, junto con
          cientos de lunas; y millones de asteroides, cometas y meteoroides.
        </p>
      </div>
    </main>
  );
}
