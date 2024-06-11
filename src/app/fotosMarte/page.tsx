'use client';
import {useState, useEffect} from "react";
import { fetchFotosMarte } from "../utilidades/lib/apidata";
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { VisualizarImagen } from "../utilidades/ui/visualizarImagen/visualizarImagen";

export default function fotosDeMarte(){

    const [cargando, setCargando] = useState(false);
    const [archivos, setArchivos] = useState<any | null>(null);
    const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
    
    useEffect(() => {
        const getItems = async()=>{
            setCargando(true);
            const objetoJSON = await fetchFotosMarte();
            const items = objetoJSON.photos;
            setCargando(false);
            setArchivos(items)
        }
        getItems();
    },[]);
    
    if (cargando) {
        return (
            <main className="flex min-h-screen flex-col items-center mt-72">
              <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
              <div className="loader"></div>
            </main>
          );
    }else if (archivos){
        return(
            <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
                <div className="mb-5 text-center">
                <h1 className="text-4xl md:mb-9 basis-40 md:basis-0 lg:basis-0">
                    Galería de imagenes enviadas desde marte
                </h1>
                <p>
                    <span className="mr-5">
                        Buscar por fecha:
                    </span> 
                    <input type="date" className="border-2 border-black rounded-md p-1" id="" />
                </p>
                </div>
                
                <div className="md:grid md:grid-cols-5 md:gap-4 items-center mt-6">
                    {archivos && archivos.map((archivo:any)=>(
                        <div className="cursor-pointer" onClick={()=>{setUrlImagenMostrada(archivo.img_src)}}>
                            <ImagenPreview key={archivo.id} imagenUrl={archivo.img_src} nasaId={archivo.id}/>
                        </div>
                    ))}
                </div>
                <VisualizarImagen urlImagenMostrada={urlImagenMostrada} setUrlImagenMostrada={setUrlImagenMostrada} titulo="Mars photo" nasaId=""/>
            </main>
        );
    }
}