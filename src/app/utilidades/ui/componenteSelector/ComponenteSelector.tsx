'use client';
import { ColumnaSelector } from "./columnaSelector/ColumnaSelector"
import { Planeta3d } from "@/app/utilidades/ui/planeta3d";
import { useState } from "react";

export function ComponenteSelector({listaOriginal, listaCortada1, listaCortada2}:{listaOriginal:Array<any>, listaCortada1:Array<any>, listaCortada2:Array<any>}){

    const styling = {
        backgroundImage: `url('/texturas/estrellas-textura.jpg')`,
    }

    const [planetaSeleccionado, setPlanetaSeleccionado] = useState([]);

    const recogerPlaneta = (nombre:string) =>{
        setPlanetaSeleccionado(listaOriginal.find((planeta) => planeta.nombre === nombre));
    }

    return (
        <div className="hidden md:block mt-16 mb-16 p-2">
            <h2 className="text-2xl mt-8 mb-4 text-center">
                <strong>SELECCIONA UN PLANETA</strong>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
                <ColumnaSelector planetaSeleccionadoNombre={Object.values(planetaSeleccionado)[0]} recogerPlaneta={recogerPlaneta} listaPlanetas={listaCortada1}/>
                <div className="flex flex-col items-center bg-cover rounded-lg" style={styling}>
                    <p className="text-white mt-4 text-2xl">{<strong>{Object.values(planetaSeleccionado)[0]}</strong>}</p>
                    <div className="h-80 w-80">
                        {planetaSeleccionado.length != 0 && (
                                <Planeta3d textura={`/texturas/${Object.values(planetaSeleccionado)[0]}-textura.jpg`} />
                        )}
                    </div>
                    
                </div>
                <ColumnaSelector planetaSeleccionadoNombre={Object.values(planetaSeleccionado)[0]} recogerPlaneta={recogerPlaneta} listaPlanetas={listaCortada2}/>
            </div>
        </div>
    )
}