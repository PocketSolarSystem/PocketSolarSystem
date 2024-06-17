'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { traducirTexto } from "../../lib/apidata";

export default function ComponenteFotoDelDia({fotodeldia}:{fotodeldia:any}){
    const [traducido, setTraducido] = useState(false);
    const [titleTraducido, setResultTitle] = useState("");
    const [explanationTraducido, setResultExplanation] = useState("");
    const [cargando, setCargando] = useState(false);
    const title:string = fotodeldia.title
    const explanation:string = fotodeldia.explanation;   

    useEffect(()=>{
        const traducir = async()=>{
            try{
                if (traducido === true) {
                    setCargando(true);
                    setResultTitle(await traducirTexto(title, 'es'));
                    setResultExplanation(await traducirTexto(explanation, 'es'));  
                    setCargando(false);
                }
            }catch(error){
                console.error(error);
            }
        }
        traducir();
    }, [traducido, title, explanation]);

    if (cargando) {
        return(
          <main className="flex min-h-screen flex-col items-center mt-72">
            <p className="text-3xl font-bold mb-4 text-gray-800 bg-white/75 rounded-lg p-1">Cargando...</p>
            <div className="loader"></div>
          </main>
    );
    }else{
        if (fotodeldia.media_type === "video" ) {
            return (
                <>
                    <h1 className="text-3xl text-center ml-2 m-7 mt-4">
                        Vídeo del día proporcionada por la NASA
                    </h1>
                    <iframe
                        src={fotodeldia.url}
                        width={400}
                        height={400}
                        className="md:block mr-2"
                    />
                    <button type="button" className="mt-4 bg-black rounded-lg hover:bg-slate-700 text-white p-1" onClick={()=>{setTraducido(traducido ? false : true)}}> Ver texto {traducido ? 'original' : 'en español'}</button>
                    <div className="items-start">
                        <p className="mt-7">
                            <strong>¿Qué es el vídeo del día?</strong> El vídeo del día muestra
                            unos fotogramas de nuestro universo, es proporcionado por la NASA 
                            eventualmente sustituyendo la foto del día.
                            Gracias a su API pública podemos acceder a él y visualizarla en
                            nuestra aplicación web.
                        </p>
                        <p className="mt-7">
                            <strong>Título del vídeo:</strong> {!traducido ? title : titleTraducido}.{" "}
                        </p>
                        <p className="mt-7">
                            <strong>Descripción del vídeo:</strong> {!traducido ? explanation : explanationTraducido}.{" "}
                        </p>
                    </div>
            </>
              );
        } else {
            return (
                <>
                    <h1 className="text-3xl text-center ml-2 m-7 mt-4">
                        Foto del día proporcionada por la NASA
                    </h1>
                    <Image
                        src={fotodeldia.url}
                        alt="Daily NASA Photo"
                        width={400}
                        height={400}
                        className="md:block mr-2 border-solid border-black border-2"
                    />
                    <button type="button" className="mt-4 bg-black rounded-lg hover:bg-slate-700 text-white p-1" onClick={()=>{setTraducido(traducido ? false : true)}}> Ver texto {traducido ? 'original' : 'en español'}</button>
                    <div className="items-start">
                        <p className="mt-7">
                        <strong>¿Qué es la foto del día?</strong> La foto del día es una
                        imagen de nuestro universo que proporciona la NASA diariamente.
                        Gracias a su API pública podemos acceder a ella y visualizarla en
                        nuestra aplicación web.
                        </p>
                        <p className="mt-7">
                        <strong>Título de la foto:</strong> {!traducido ? title : titleTraducido}.{" "}
                        </p>
                        <p className="mt-7">
                        <strong>Descripción de la foto:</strong> {!traducido ? explanation : explanationTraducido}.{" "}
                        </p>
                        <p className={`mt-7 text-white text-center`}>
                        <a
                            className="bg-black hover:bg-slate-800 p-1"
                            href={fotodeldia.hdurl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Pulsa aquí para abrir la imagen en máxima calidad.
                        </a>
                        </p>
                    </div>
                </>
            );
        }
    }
};
