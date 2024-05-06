import { fetchFotoDelDia } from "../utilidades/lib/apidata"
import Image from "next/image";

export default async function FotoDelDia(){
    const fotodeldia = await fetchFotoDelDia();

    if (fotodeldia) {
        let claseHdUrl;
        const mostrarFoto = () =>{
            if (fotodeldia.media_type === "video") {
                claseHdUrl = "hidden";
                return(
                    <iframe src={fotodeldia.url} width={400} height={400} className='md:block mr-2'/>
                )
            }else{
                return(
                    <Image
                    src = {fotodeldia.url} 
                    alt="Daily NASA Photo" 
                    width={400}
                    height={400}
                    className='md:block mr-2 border-solid border-black border-2'
                    />
                )
            }
        }
    
        return(
            <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
                <h1 className="text-3xl text-center ml-2 m-7 mt-4">Foto del día proporcionada por la NASA</h1>
                {mostrarFoto()}
                <div className="items-start">
                    <p className="mt-7">
                        <strong>¿Qué es la foto del día?</strong> La foto del día es una imagen de nuestro universo que proporciona la NASA diariamente. Gracias a su API pública podemos acceder a ella y visualizarla en nuestra aplicación web.
                    </p>
                    <p className="mt-7"><strong>Título de la foto:</strong> {fotodeldia.title}. </p>
                    <p className="mt-7"><strong>Descripción de la foto:</strong> {fotodeldia.explanation}. </p>
                    <p className={`mt-7 text-white text-center ${claseHdUrl}`}>
                        <a  className="bg-black hover:bg-slate-800 p-1" href={fotodeldia.hdurl} target="_blank" rel="noopener noreferrer">Pulsa aquí para abrir la imagen en máxima calidad.</a>
                    </p>
                </div>
            </main>
        )
    }else{
        return(
            <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
                <p>Algo ha fallado al recoger la foto</p>
            </main>
        )
    }
}