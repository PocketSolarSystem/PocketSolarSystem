import Image from "next/image"

export function ColumnaSelector({planetaSeleccionadoNombre, recogerPlaneta, listaPlanetas, segundaLista}:{planetaSeleccionadoNombre:string, recogerPlaneta:Function,listaPlanetas:Array<any>, segundaLista:boolean}){
    
    const condicionalClase = (indice:any) => {
        let clase = "text-center m-2 relative hover:cursor-pointer hover:scale-110"
        clase += listaPlanetas.length-1 == indice && segundaLista ? " col-start-2" : "";
        return clase;
    }
    
    return (
    <div className="grid grid-cols-2 gap-4 mt-8">
        {listaPlanetas.map((planeta, indice) => (
            <button 
                key={indice} className={condicionalClase(indice) + `${planetaSeleccionadoNombre === planeta.nombre ? " scale-110" : ""}`} 
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
                    
                
                <h2 className="text-xl mt-4 absolute text-white inset-x-0 bottom-0">{planeta.nombre}</h2>
            </button>
        ))}
    </div>)
}