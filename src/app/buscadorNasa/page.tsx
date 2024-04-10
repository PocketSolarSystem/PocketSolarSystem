'use client'
import Image from "next/image";
import { useState, useEffect } from "react"
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { fetchBuscadorNasa } from "../utilidades/lib/apidata";
import { fetchBuscadorNasaPorPalabra } from "../utilidades/lib/apidata";

export default function Buscador() {
    const [buscar, setBuscar] = useState("");
    const [buscando, setBuscando] = useState(false);
    const [fotos, setFotos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect( () => {
        const getItems = async()=>{
            setCargando(true);
            const objetoJSON = await fetchBuscadorNasa();
            const items = objetoJSON.collection.items;
            setFotos(items.slice(0,20));
            setCargando(false);
        }
        getItems();
    }, [])

    async function realizarBusqueda(evento:any){
        evento.preventDefault();
        setBuscando(true);
        setCargando(true);
        const objetoJSON = await fetchBuscadorNasaPorPalabra(buscar);
        const items = objetoJSON.collection.items;
        setFotos(items);
        setCargando(false);
        setBuscando(false);
    }

    if(cargando){ 
        return (
            <main className="flex min-h-screen flex-col justify-between p-24">
            <p>Cargando...</p>
            </main>  
        )
    }else{
        return (
            <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
                <h1 className="text-4xl mt-4 md:mb-5 basis-40 md:basis-0 lg:basis-0">
                    Bienvenidos al buscador de archivos de la NASA
                </h1>
                <form className="m-9 text-xl" onSubmit={(evento)=>{realizarBusqueda(evento)}}>
                    <span className="mr-3">Buscador: </span>
                    <div className=" inline-block border-2 border-black border-solid">
                        <input type="text" id="inputBuscador" placeholder="ej: Moon" 
                        onChange={(evento)=>{setBuscar(evento.target.value)}}
                        className=" p-1 focus:outline-none"/>
                        <div className="hidden md:inline-block bg-black">
                            <button type="submit"
                            className="text-white p-1 hover:bg-zinc-900">
                                Buscar
                            </button>
                        </div>
                    </div>
                    <button type="submit"
                        className="block md:hidden bg-black text-white p-1 hover:bg-zinc-900">
                            Buscar
                    </button>
                </form>

                <div className="md:grid md:grid-cols-4 items-start mt-6">
                    
                    {fotos && fotos.map((preview:any)=>
                        <div key={preview.data[0].nasa_id} className="p-4 text-center">
                            <ImagenPreview 
                                nasaId={preview.data[0].nasa_id}
                                imagenUrl={preview.links[0].href}
                            />
                        </div>
                    )}
                    
                </div>
                
            </main>
        )
    }
}