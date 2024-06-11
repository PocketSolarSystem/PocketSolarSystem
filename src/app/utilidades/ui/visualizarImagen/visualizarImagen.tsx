"use client";

import './visualizarImagen.css';
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchBuscadorNasaId } from "@/app/utilidades/lib/apidata";
import CerrarImagen from "./cerrarImagen";

export function VisualizarImagen({
  urlImagenMostrada,
  setUrlImagenMostrada,
  titulo,
  nasaId,
  objetoInformacion
}: {
  urlImagenMostrada: string;
  setUrlImagenMostrada: Function;
  titulo: string;
  nasaId:string;
  objetoInformacion:any;
}) {
  const [archivo, setArchivos] = useState<any | null>(null);

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
    if (nasaId) {
      const getItems = async() =>{
        const objetoJSON = await fetchBuscadorNasaId(nasaId);
        const item = objetoJSON.collection.items;
        setArchivos(item[0]);
      }
      getItems();
    }
  }, [nasaId]);

  function mostrarHtml(){
    if (nasaId && !objetoInformacion) {
      return(
        <>
          {archivo &&
            <div key={archivo.data[0].nasa_id} id="divImagenApi" className="p-6 bg-white rounded-lg relative m-4 md:max-h-screen max-w-96 md:max-w-screen-lg lg:max-w-screen-xl overflow-y-auto">
                <h1 className="text-4xl text-center mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
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
                        className='md:block mr-10 border-solid border-black border-2 rounded-lg'
                    />
                    <div className="col-start-2">
                        <h1 className="mt-2 mb-5"><strong>Titulo:</strong> {archivo.data[0].title}</h1>
                        <p className="mb-5"><strong>Descripción:</strong> {archivo.data[0].description}</p>
                        <p className="mb-5"><strong>Fecha del archivo: </strong>{archivo.data[0].date_created.split('T')[0]}</p>
                        <p className="mb-5"><strong>Centro: </strong>{archivo.data[0].center}</p>
                    </div>
                </div>
            </div>        
            }
        </>
      );
    }else if(!nasaId && objetoInformacion){
      return(
        <>
          <div key={objetoInformacion.id} id="divImagenApi" className="p-6 bg-white rounded-lg relative m-4 md:max-h-screen max-w-96 md:max-w-screen-lg lg:max-w-screen-xl overflow-y-auto">
              <h1 className="text-4xl text-center mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                  Información detallada de la imagen enviada por {objetoInformacion.rover.name}
              </h1>
              <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} />
              <div className="md:grid md:grid-cols-2 items-start">
                  <Image  
                      key={objetoInformacion.id}
                      src={objetoInformacion.img_src}
                      width={500}
                      height={500}
                      alt="detailed photo"
                      className='md:block mr-10 border-solid border-black border-2 rounded-lg'
                  />
                  <div className="col-start-2">
                      <h1 className="mt-2 mb-5"><strong>Nombre de la cámara: </strong>{objetoInformacion.camera.name}</h1>
                      <p className="mb-5"><strong>Nombre completo de la cámara: </strong>{objetoInformacion.camera.full_name}</p>
                      <p className="mb-5"><strong>Fecha terrestre de la imagen: </strong>{objetoInformacion.earth_date}</p>
                      <p className="mb-5"><strong>Día marciano de la imagen: </strong>{objetoInformacion.sol}</p>
                  </div>
              </div>
          </div>        
        </>
      );
    }else if(!nasaId && !objetoInformacion){
      return(
        <div className="relative">
          {urlImagenMostrada !== "" && (
            <Image
              src={urlImagenMostrada}
              width={500}
              height={500}
              alt={titulo}
              className="rounded-lg max-h-screen"
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
