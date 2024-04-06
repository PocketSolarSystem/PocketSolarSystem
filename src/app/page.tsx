'use client'
import Typewriter from 'typewriter-effect';
import {InicioEnlace} from "./utilidades/ui/inicio-enlace";
import {InicioTexto} from './utilidades/ui/inicio-texto';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-36">
        <h1 className="text-4xl mt-4 md:mb-5 basis-40 md:basis-0 lg:basis-0">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString('Welcome to Pocket Solar System')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Bienvenidos a Pocket Solar System')
                  .start();
              }}
            />
        </h1>        

        <InicioEnlace
          srcImagen='/saturno-inicio.jpg'
          textoEnlace='Descubre la foto del día'
          hrefEnlace='fotodeldia'
        />

        <InicioTexto 
          titulo='¿Qué es Pocket Solar System?'
          texto='Pocket Solar System es una aplicación web que tiene como propósito satisfacer la curiosidad humana acerca del universo desde la comodidad de nuestro navegador web favorito. La aplicación se alimenta de la API pública de la NASA para ofrecernos información que implementamos con múltiples funcionalidades que descubrirás explorando el sitio web.'
        />

        <InicioEnlace 
          srcImagen='/apollo-inicio.jpg'
          textoEnlace='Explora el sistema solar en 3D'
          hrefEnlace='planetas'
        />

        <InicioTexto 
          titulo='Explora los planetas del sistema solar en tres dimensiones'
          texto='Los planetas de Pocket Solar System están desarrollados enteramente con JavaScript. 
          Gracias a la librería ThreeJS hemos podido crear todos los planetas de nuestro sistema en 3D.'
        />

        <InicioEnlace
          srcImagen='/launch-inicio.jpg'
          textoEnlace='Navega a través de los archivos de la NASA'
          hrefEnlace='buscadorNasa'
        />

        <InicioTexto 
          titulo='Pocket Solar System usa información enviada por la NASA'
          texto='La aplicación web se alimenta de la API pública de la NASA para ofrecernos información que implementamos con múltiples funcionalidades que descubrirás explorando el sitio web.'
        />
        
    </main>
  );
}
