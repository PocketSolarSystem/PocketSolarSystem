'use client';

import { useEffect, useState } from "react";
import { fetchFotosMarteFecha } from "../utilidades/lib/apidata";
import { fetchFotosMarteSol } from "../utilidades/lib/apidata";
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { VisualizarImagen } from "../utilidades/ui/visualizarImagen/visualizarImagen";

export default function FotosDeMarte(){

    const [cargando, setCargando] = useState(false);
    const [archivos, setArchivos] = useState<any | null>(null);
    const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("2024-01-08");
    const [fechaBuscada, setFechaBuscada] = useState("2024-01-08");
    const [sol, setSol] = useState("");
    const [solBuscado, setSolBuscado] = useState("");
    
    useEffect(() => {
        const getItems = async()=>{
            setCargando(true);
            const objetoJSON = await fetchFotosMarteFecha(fechaSeleccionada);
            const items = objetoJSON.photos;
            setCargando(false);
            setArchivos(items);
        }
        getItems();
    },[]);

    async function buscarPorFechaTerrestre(){
        setCargando(true);
        const objetoJSON = await fetchFotosMarteFecha(fechaSeleccionada);
        const items = objetoJSON.photos;
        setFechaBuscada(fechaSeleccionada);
        setSol("");
        setArchivos(items);
        setCargando(false);
    }

    async function buscarPorSol(){
        setCargando(true);
        setSolBuscado(sol);
        const objetoJSON = await fetchFotosMarteSol(sol);
        const items = objetoJSON.photos;
        setFechaBuscada("");
        setArchivos(items);
        setCargando(false);
    }

    function condicionalCadena(){
        if (archivos.length > 0 && fechaBuscada !== "" && sol === "") {
            return(
                <>
                    Mostrando imágenes enviadas por el Curiosity en la siguiente fecha terrestre: {fechaBuscada}
                </>
            );
        }else if (archivos.length == 0 && fechaBuscada !== "") {
            return(
                <>
                    No se ha encontrado imágenes para la siguiente fecha terrestre: {fechaBuscada}
                </>
            );
        }else if(archivos.length > 0 && fechaBuscada === "" && sol != ""){
            return(
                <>
                    Mostrando imágenes del sol: {solBuscado}
                </>
            );
        }else if(archivos.length > 0 && fechaBuscada === "" && sol != ""){
            return(
                <>
                    No se ha encontrado imágenes imágenes del sol: {solBuscado}
                </>
            );
        }
    }
    
    if (cargando) {
        return (
            <main className="flex min-h-screen flex-col items-center mt-72">
              <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
              <div className="loader"></div>
            </main>
          );
    }else if (archivos){
        return(
            <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-12">
                <div className="mb-5 text-center">
                    <h1 className="text-4xl md:mb-9 basis-40 md:basis-0 lg:basis-0">
                        Galería de imagenes enviadas desde Marte
                    </h1>
                    <p className="mt-5 md:mt-10  text-xl">
                        <span className="mr-5">
                            Buscar por fecha terrestre:
                        </span> <br className="md:hidden"/>
                        <input type="date" className="border-2 border-black rounded-md p-1 mr-5" value={fechaSeleccionada} onChange={(evento)=>{setFechaSeleccionada(evento.target.value)}}/>
                        <button className="rounded-md text-white p-1 bg-black hover:bg-zinc-700" onClick={()=>{buscarPorFechaTerrestre()}}>Buscar</button>
                    </p>
                    <p className="mt-7">*Los días marcianos son las rotaciones que Marte ha realizado sobre su eje desde el aterrizaje del rover en el planeta*</p>
                    <p className="mt-5  text-xl">
                        <span className="mr-5">
                            Buscar por días marcianos:
                        </span>
                        <input type="text" placeholder="1000" className="border-2 border-black rounded-md p-1 mr-5 w-40 md:w-auto" value={sol} onChange={(evento)=>{setSol(evento.target.value)}}/>
                        <button className="rounded-md text-white p-1 bg-black hover:bg-zinc-700" onClick={()=>{buscarPorSol()}}>Buscar</button>
                    </p>
                    <p className="mt-20">
                       {condicionalCadena()}
                    </p>
                </div>
                
                <div className="md:grid md:grid-cols-5 md:gap-4 items-center mt-6">
                    {archivos && archivos.map((archivo:any)=>(
                        <div key={archivo.id} className="p-4 cursor-pointer" onClick={()=>{setUrlImagenMostrada(archivo.img_src)}}>
                            <ImagenPreview key={'img'+archivo.id} imagenUrl={archivo.img_src} nasaId={archivo.id}/>
                        </div>
                    ))}
                </div>
                <VisualizarImagen urlImagenMostrada={urlImagenMostrada} setUrlImagenMostrada={setUrlImagenMostrada} titulo="Mars photo" nasaId=""/>
            </main>
        );
    }
}