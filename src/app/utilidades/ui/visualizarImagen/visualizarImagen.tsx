"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchBuscadorNasaId } from "@/app/utilidades/lib/apidata";
import CerrarImagen from "./cerrarImagen";

export function VisualizarImagen({
  urlImagenMostrada,
  setUrlImagenMostrada,
  titulo,
  nasaId
}: {
  urlImagenMostrada: string;
  setUrlImagenMostrada: Function;
  titulo: string;
  nasaId:string;
}) {
  const [archivo, setArchivos] = useState([]);

  useEffect(() => {
    if (urlImagenMostrada !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // esto hay que dejarlo que es para que se vuelva a activar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [urlImagenMostrada]);

  useEffect(() => {
    console.log(nasaId);
    if (nasaId) {
      const getItems = async() =>{
        const objetoJSON = await fetchBuscadorNasaId(nasaId);
        const item = objetoJSON.collection.items;
        setArchivos(item);
      }
      getItems();
    }
  }, [nasaId]);

  function mostrarHtml(){
    if (nasaId) {
      return(
        <>
          {archivo && archivo.map((archivo:any)=>
            <div key={archivo.data[0].nasa_id} className="p-6 bg-white rounded-lg relative m-4 max-h-screen">
                <h1 className="text-4xl mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                    Información detallada acerca de {archivo.data[0].title}
                </h1>
                <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} />
                <div className="md:grid md:grid-cols-2 items-start">
                    <Image  
                        key={archivo.data[0].nasa_id}
                        src={archivo.links[0].href}
                        width={500}
                        height={500}
                        alt="detailed photo"
                        className='md:block mr-2 border-solid border-black border-2 rounded-lg'
                    />
                    <div className="col-start-2">
                        <h1 className="mt-12 mb-5"><strong>Titulo:</strong> {archivo.data[0].title}</h1>
                        <p className="mb-5"><strong>Descripción:</strong> {archivo.data[0].description}</p>
                        <p className="mb-5"><strong>Fecha del archivo: </strong>{archivo.data[0].date_created.split('T')[0]}</p>
                        <p className="mb-5"><strong>Centro: </strong>{archivo.data[0].center}</p>
                    </div>
                </div>
            </div>        
            )}
        </>
      );
    }else{
      return(
        <div className="relative">
          {urlImagenMostrada !== "" && (
            <Image
              src={urlImagenMostrada}
              width={500}
              height={500}
              alt={titulo}
              className="rounded-lg"
            />
          )}
          <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} />
        </div>
      )
    }
  }

  return (
    <div
      className={`fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 ${urlImagenMostrada !== "" ? "flex" : "hidden"} `}
    >
      {mostrarHtml()}
    </div>
  );
}
