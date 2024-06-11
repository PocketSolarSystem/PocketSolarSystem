import Image from "next/image";


export default function ComponenteFotoDelDia({fotodeldia}:{fotodeldia:any}){
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
                <div className="items-start">
                    <p className="mt-7 text-center">
                        <strong>¿Qué es el vídeo del día?</strong> El vídeo del día muestra
                        unos fotogramas de nuestro universo, es proporcionado por la NASA 
                        eventualmente sustituyendo la foto del día.
                        Gracias a su API pública podemos acceder a él y visualizarla en
                        nuestra aplicación web.
                    </p>
                    <p className="mt-7">
                        <strong>Título del vídeo:</strong> {fotodeldia.title}.{" "}
                    </p>
                    <p className="mt-7">
                        <strong>Descripción del vídeo:</strong> {fotodeldia.explanation}.{" "}
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
                <div className="items-start">
                    <p className="mt-7">
                    <strong>¿Qué es la foto del día?</strong> La foto del día es una
                    imagen de nuestro universo que proporciona la NASA diariamente.
                    Gracias a su API pública podemos acceder a ella y visualizarla en
                    nuestra aplicación web.
                    </p>
                    <p className="mt-7">
                    <strong>Título de la foto:</strong> {fotodeldia.title}.{" "}
                    </p>
                    <p className="mt-7">
                    <strong>Descripción de la foto:</strong> {fotodeldia.explanation}.{" "}
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
};
