import Image from "next/image"

export function ColumnaSelector(
  {planetaSeleccionadoNombre, recogerPlaneta, listaPlanetas}
  :{planetaSeleccionadoNombre:string, recogerPlaneta:Function,listaPlanetas:Array<any>}){
    
    const condicionalClase = () => {
        let clase = "text-center m-2 relative hover:cursor-pointer hover:scale-110"
        return clase;
    }
    
    return (
    <div className="grid grid-cols-2 gap-4 mt-12">
        {listaPlanetas.map((planeta, indice) => (
            <div 
                key={indice} className={condicionalClase() + `${planetaSeleccionadoNombre === planeta.nombre ? " scale-110" : ""}`} 
                onClick={() => {
                    recogerPlaneta(planeta.nombre)
                }}>
                        <Image
                        src={planeta.imagen}
                        alt={planeta.nombre}
                        width={330}
                        height={330}
                        className={"rounded-full" + `${planetaSeleccionadoNombre !== planeta.nombre ? " grayscale" : " shadow-lg shadow-slate-900"}`}
                        />
                    
                <h2 className={`text-xl mt-4 absolute text-white inset-x-0 ${planetaSeleccionadoNombre ? "bottom-12" : "bottom-0"} `}>{planeta.nombre}</h2>
            </div>
        ))}
    </div>)
}
