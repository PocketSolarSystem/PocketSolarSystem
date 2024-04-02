'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      
        <h1 className="text-4xl mt-7">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString('Welcome to Pocket Solar System')
                .pauseFor(4000)
                .deleteAll()
                .typeString('Bienvenidos a Pocket Solar System')
                .start();
            }}
          />
        </h1>
        <div>
          <Image
            src="/saturno-inicio.jpg"
            width={1200}
            height={672}
            alt="Landing page Saturn image"
            className="mt-20 skew-y-2 z-0"
          />
        </div>
        <h2 className="text-xl mt-20"><strong>¿Qué es Pocket Solar System?</strong></h2>
        <p className="items-start mt-4">
          Pocket Solar System es una aplicación web que tiene como propósito satisfacer la curiosidad humana acerca del universo desde la comodidad de nuestro navegador web favorito. La aplicación se alimenta de la API pública de la NASA para ofrecernos información que implementamos con múltiples funcionalidades que descubrirás explorando el sitio web. 
        </p>

    </main>
  );
}
