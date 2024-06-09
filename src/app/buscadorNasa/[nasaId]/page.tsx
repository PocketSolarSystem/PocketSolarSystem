'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchBuscadorNasaId } from "@/app/utilidades/lib/apidata";

export default function DetalleFoto(
    {params}:{params:any}
){
    const [archivo, setArchivos] = useState([]);
    const [cargando, setCargando] = useState(false);
    useEffect( () => {
        const getItems = async()=>{
            setCargando(true);
            const objetoJSON = await fetchBuscadorNasaId(params.nasaId);
            const item = objetoJSON.collection.items;
            setArchivos(item);
            setCargando(false);
        }
        getItems();
    }, []);

    if(cargando){ 
        return (
            <main className="flex min-h-screen flex-col justify-between p-24">
            <p>Cargando...</p>
            </main>  
        )
    }else if(archivo.length>0){
        let fechaCreacion:any;
        archivo.map((archivo:any)=>
            fechaCreacion = archivo.data[0].date_created.split('T')[0]
        )
        
        return(
            <main>
                {archivo && archivo.map((archivo:any)=>
                    <div key={archivo.data[0].nasa_id} className="min-h-screen p-12 pt-24 md:p-24">
                        <h1 className="text-4xl mt-4 mb-4 md:mb-8 basis-40 md:basis-0 lg:basis-0">
                            Información detallada acerca de {archivo.data[0].title}
                        </h1>
                        <div className="md:grid md:grid-cols-2 items-start">
                            <Image  
                                key={archivo.data[0].nasa_id}
                                src={archivo.links[0].href}
                                width={500}
                                height={500}
                                alt="detailed photo"
                                className='md:block mr-2 border-solid border-black border-2'
                            />
                            <div className="col-start-2">
                                <h1 className="mt-12 mb-5"><strong>Titulo:</strong> {archivo.data[0].title}</h1>
                                <p><strong>Descripción:</strong> {archivo.data[0].description}</p>
                                <p><strong>Fecha del archivo: </strong>{fechaCreacion}</p>
                                <p><strong>Centro: </strong>{archivo.data[0].center}</p>
                            </div>
                        </div>
                        
                        
                    </div>        
                    )}
            </main>
        )
    }
}