import { fetchFotoDelDia } from "../lib/apidata"
import Image from "next/image";

export default async function FotoDelDia(){
    const fotodeldia = await fetchFotoDelDia();
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-signature ml-2 m-7 mt-4">Foto del día proporcionada por la NASA</h1>
            <Image
                src = {fotodeldia.url} 
                alt="Daily NASA Photo" 
                width={500}
                height={500}
                className='md:block mr-2'
            />
            <div className="items-start">
                <p className="mt-7">
                    <strong>¿Qué es la foto del día?</strong> La foto del día es una imagen de nuestro universo que proporciona la NASA diariamente, gracias a su API pública podemos acceder a ella y visualizarla en nuestra aplicación web.
                </p>
                <p className="mt-7"><strong>Título de la foto:</strong> {fotodeldia.title}. </p>
                <p className="mt-7"><strong>Descripción de la foto:</strong> {fotodeldia.explanation}. </p>
                <p className="mt-7 text-white">
                    <a  className="bg-black hover:bg-slate-800 p-0.5" href={fotodeldia.hdurl} target="_blank" rel="noopener noreferrer">Pulsa aquí para abrir la imagen en máxima calidad.</a>
                </p>
            </div>
        </main>
    )
}