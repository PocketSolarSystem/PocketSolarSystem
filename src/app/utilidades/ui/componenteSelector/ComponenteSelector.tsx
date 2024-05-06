import { ColumnaSelector } from "./columnaSelector/ColumnaSelector"
import Image from "next/image";
import { useState } from "react";

export function ComponenteSelector({listaOriginal, listaCortada1, listaCortada2}:{listaOriginal:Array<any>, listaCortada1:Array<any>, listaCortada2:Array<any>}){

    const [planetaSeleccionado, setPlanetaSeleccionado] = useState([]);

    const recogerPlaneta = (nombre:string) =>{
        setPlanetaSeleccionado(listaOriginal.find((planeta) => planeta.nombre === nombre));
    }

    return (
        <div className="hidden md:block mt-8 mb-8 p-2">
            <h2 className="text-2xl mt-8 mb-4 text-center">
                <strong>SELECCIONA UN PLANETA</strong>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
                <ColumnaSelector planetaSeleccionadoNombre={Object.values(planetaSeleccionado)[0]} recogerPlaneta={recogerPlaneta} listaPlanetas={listaCortada1} segundaLista={false}/>
                <div className="text-center border-solid border-2 border-black">
                    {planetaSeleccionado.length != 0 && (
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl mt-8">{Object.values(planetaSeleccionado)[0]}</h1>
                            <Image 
                                src={Object.values(planetaSeleccionado)[2]}
                                width={400}
                                height={400}
                                alt="pruebaImagen"
                                className="m-8"
                            />
                            <p>{Object.values(planetaSeleccionado)[1]}</p>
                        </div>
                            
                    )}
                </div>
                <ColumnaSelector planetaSeleccionadoNombre={Object.values(planetaSeleccionado)[0]} recogerPlaneta={recogerPlaneta} listaPlanetas={listaCortada2} segundaLista={true}/>
            </div>
        </div>
    )
}