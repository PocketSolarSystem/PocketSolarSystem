'use client';

import { fetchRovers } from "@/app/utilidades/lib/apidata";
import { useActionState, useEffect, useState } from "react";
import SkeletonNasaFileSearch from "@/app/utilidades/ui/esqueletoArchivosNasa/SkeletonNasaFileSearch";
import { ImagenPreview } from "@/app/utilidades/ui/buscadorNasa/ImagenPreview";
import { VisualizarImagen } from "@/app/utilidades/ui/visualizarImagen/visualizarImagen";

export default function InfoRovers(){
    const [cargando, setCargando] = useState(false);
    const [rovers, setRovers] = useState<any | null>(null);
    const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
    const [objetoRover, setObjetoRover] = useState<any | null>(null);

    useEffect(() => {
        const getItems = async() =>{
            setCargando(true);
            const objetoJSON = await fetchRovers();
            setRovers(objetoJSON.rovers);
            setCargando(false);
        }
        getItems();
    }, [])

    if (cargando) {
        return <SkeletonNasaFileSearch />;
    }else{
        return(
            <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
                <h1 className="text-4xl text-center mt-5 md:mb-16 basis-40 md:basis-0 lg:basis-0">
                    Selecciona un rover para saber más acerca de él
                </h1>

                <div className="md:grid md:grid-cols-2 md:gap-9 items-center mt-6">
                    {rovers &&
                    rovers.map((rover: any) => (
                        <div key={rover.id} className="text-center hover:cursor-pointer mb-5 md:mb-0" onClick={()=>{
                            setUrlImagenMostrada('/rovers/' + rover.name + '.jpg');
                            setObjetoRover(rover);
                            }}>
                            <ImagenPreview
                                imagenUrl={'/rovers/' + rover.name + '.jpg'}
                                nasaId={rover.id}
                                titulo={rover.name}
                            />
                        </div>
                    ))}
                </div>
                <VisualizarImagen 
                    urlImagenMostrada={urlImagenMostrada} 
                    setUrlImagenMostrada={setUrlImagenMostrada} 
                    titulo={objetoRover?.name}
                    nasaId="" 
                    objetoInformacion={null} 
                    objetoRover={objetoRover}
                />
            </main>
        );
    }
}