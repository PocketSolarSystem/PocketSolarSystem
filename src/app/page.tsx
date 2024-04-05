'use client'
import Typewriter from 'typewriter-effect';
import {InicioEnlace} from "./utilidades/ui/inicio-enlace";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl mt-7 basis-40 md:basis-0 lg:basis-0">
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

        <InicioEnlace />

        <h2 className="text-xl mt-8">
          <strong>¿Qué es Pocket Solar System?</strong>
        </h2>
        <p className="items-start mt-4">
          Pocket Solar System es una aplicación web que tiene como propósito satisfacer la curiosidad humana acerca del universo desde la comodidad de nuestro navegador web favorito. La aplicación se alimenta de la API pública de la NASA para ofrecernos información que implementamos con múltiples funcionalidades que descubrirás explorando el sitio web. 
        </p>
        

    </main>
  );
}
