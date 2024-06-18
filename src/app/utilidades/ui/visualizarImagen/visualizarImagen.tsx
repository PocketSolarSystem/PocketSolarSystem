"use client";

import './visualizarImagen.css';
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchBuscadorNasaId } from "@/app/utilidades/lib/apidata";
import CerrarImagen from "./cerrarImagen";
import { traducirTexto } from '@/app/utilidades/lib/apidata';

export function VisualizarImagen({
  urlImagenMostrada,
  setUrlImagenMostrada,
  titulo,
  nasaId,
  objetoInformacion,
  objetoRover,
}: {
  urlImagenMostrada: string;
  setUrlImagenMostrada: Function;
  titulo: string;
  nasaId:string;
  objetoInformacion:any;
  objetoRover:any;
}) {
  const [archivo, setArchivos] = useState<any | null>(null);
  const [listaVideos, setlistaVideos] = useState<any | null>(null);
  const [cargando, setCargando] = useState(false);
  const [traducido, setTraducido] = useState(false);
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

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
        setCargando(true);
        const objetoJSON = await fetchBuscadorNasaId(nasaId);
        if (objetoJSON?.collection?.items) {
          const item = objetoJSON?.collection?.items;
          if (item[0]?.data[0].media_type === 'video') {
            const response = await fetch(item[0].href);
            const data = await response.json();
            setlistaVideos(data);
          }
          if (traducido === true && item[0]?.data[0]?.title && item[0]?.data[0]?.description) {
            setTitle(await traducirTexto(item[0].data[0].title, 'es'));
            setExplanation(await traducirTexto(item[0].data[0].description, 'es'));  
          }
          setArchivos(item[0]);
        }else{
          setArchivos(null);
          setTraducido(false);
        }
        setCargando(false);
      }
      getItems();
    }
  }, [nasaId, traducido, explanation]);
  
  function compruebaArchivo(archivo:any) {
    if (archivo.data[0].media_type === 'image'){
      return(
        <Image  
          key={archivo.data[0].nasa_id}
          src={archivo.links[0].href}
          width={500}
          height={500}
          alt="detailed photo"
          className='md:block mr-10 border-solid border-black border-2 rounded-lg'
        />
      );
    }else if(archivo.data[0].media_type === 'video' && listaVideos){
      const regex = /\.mp4$/;
      const videosFiltrados = listaVideos.filter((urlVideo:string) => regex.test(urlVideo)).map((urlVideo:string) => (
        <video key={archivo.data[0].nasa_id} id="video" width="600" height="520" controls className='md:block mr-10 border-solid border-black border-2 rounded-lg'>
          <source src={urlVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      ));
      if (videosFiltrados[0]) {
        return videosFiltrados[0];
      }else{
        return 'Error al cargar el contenido multimedia'
      }
    }
  }

  function mostrarHtml(){
    if (nasaId && archivo && !objetoInformacion && !objetoRover) {
      if (cargando) {
        return(
          <div className="flex min-h-screen flex-col items-center mt-72">
            <p className="text-3xl font-bold mb-4 text-gray-800 bg-white/75 rounded-lg p-1">Cargando...</p>
            <div className="loader"></div>
          </div>
        );
      }else{
        return(
          <>
            {archivo &&
              <div key={archivo.data[0].nasa_id} id="divImagenApi" className="p-6 bg-white rounded-lg relative m-4 md:max-h-screen max-w-96 md:max-w-screen-lg lg:max-w-screen-xl overflow-y-auto">
                  <h1 className="text-4xl text-center mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                      Información detallada acerca de {traducido ? title : archivo.data[0].title}
                  </h1>
                  <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} esVideo={archivo.data[0].media_type === 'video' ? true : false} setTraducido={setTraducido}/>
                  <div className='flex flex-col items-center'>
                    <button type="button" className="mt-4 mb-4 bg-black rounded-lg hover:bg-slate-700 text-white p-1" onClick={()=>{setTraducido(traducido ? false : true)}}> Ver texto {traducido ? 'original' : 'en español'}</button>
                  </div>
                  <div className="md:grid md:grid-cols-2 items-start">
                    {compruebaArchivo(archivo)}
                    <div className="col-start-2">
                        <h1 className="mt-2 mb-5"><strong>Titulo: </strong> {traducido ? title : archivo.data[0].title}</h1>
                        <p className="mb-5"><strong>Descripción: </strong> {traducido ? explanation : archivo.data[0].description}</p>
                        <p className="mb-5"><strong>Fecha del archivo: </strong>{archivo.data[0].date_created.split('T')[0]}</p>
                        <p className="mb-5"><strong>Centro: </strong>{archivo.data[0].center}</p>
                    </div>
                  </div>
              </div>        
              }
          </>
        );
      }
    
    }else if (!nasaId && !objetoInformacion && objetoRover){
      return(
        <>
          <div key={objetoRover.id} id="divImagenApi" className="p-6 bg-white rounded-lg relative m-4 md:max-h-screen max-w-96 md:max-w-screen-lg lg:max-w-screen-xl overflow-y-auto">
              <h1 className="text-4xl text-center mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                  Información detallada del rover {objetoRover.name}
              </h1>
              <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} esVideo={false} setTraducido={setTraducido}/>
              <div className="md:grid md:grid-cols-2 items-start">
                  <Image  
                      key={objetoRover.id}
                      src={`/rovers/${objetoRover.name}.jpg`}
                      width={500}
                      height={500}
                      alt="detailed photo"
                      className='md:block mr-10 border-solid border-black border-2 rounded-lg'
                  />
                  <div className="col-start-2">
                      <h1 className="mt-2 mb-5"><strong>Nombre del rover: </strong>{objetoRover.name}</h1>
                      <p className="mb-5"><strong>Fecha de despegue: </strong>{objetoRover.launch_date}</p>
                      <p className="mb-5"><strong>Fecha de aterrizaje: </strong>{objetoRover.landing_date}</p>
                      <p className="mb-5"><strong>Estado actual del rover: </strong>{objetoRover.status}</p>
                      <p className="mb-5"><strong>Último día marciano en el que ha enviado imágenes: </strong>{objetoRover.max_sol}</p>
                      <p className="mb-5"><strong>Último fecha terrestre en el que ha enviado imágenes: </strong>{objetoRover.max_date}</p>
                      <p className="mb-5"><strong>Imágenes totales enviadas: </strong>{objetoRover.total_photos}</p>
                  </div>
              </div>
          </div>        
        </>
      );
    }else if (!nasaId && objetoInformacion && !objetoRover){
      return(
        <>
          <div key={objetoInformacion.id} id="divImagenApi" className="p-6 bg-white rounded-lg relative m-4 md:max-h-screen max-w-96 md:max-w-screen-lg lg:max-w-screen-xl overflow-y-auto">
              <h1 className="text-4xl text-center mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                  Información detallada de la imagen enviada por {objetoInformacion.rover.name}
              </h1>
              <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} esVideo={false} setTraducido={setTraducido}/>
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
              width={800}
              height={800}
              alt={titulo}
              className="rounded-lg max-h-screen"
            />
          )}
          <CerrarImagen setUrlImagenMostrada={setUrlImagenMostrada} esVideo={false} setTraducido={setTraducido}/>
        </div>
      )
    }
  }

  return (
    <div
      className={`fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 ${urlImagenMostrada === "" || (!archivo && nasaId) ? "hidden" : "flex"} `}
    >
      {mostrarHtml()}
    </div>
  );
}
