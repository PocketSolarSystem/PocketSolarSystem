import Image from "next/image"


export function ColumnaSelector({recogerPlaneta, listaPlanetas, segundaLista}:{recogerPlaneta:Function,listaPlanetas:Array<any>, segundaLista:boolean}){
    const condicionalClase = (indice:any) => {
        let clase = "text-center m-2 relative hover:cursor-pointer hover:scale-110"
        clase += listaPlanetas.length-1 == indice && segundaLista ? " col-start-2" : "";
        return clase;
    }
    
    return (
    <div className="grid grid-cols-2 gap-4 mt-8">
        {listaPlanetas.map((planeta, indice) => (
            <div key={indice} className={condicionalClase(indice)} onClick={() => {recogerPlaneta(planeta.nombre)}}>
                <Image
                    src={planeta.imagen}
                    alt={planeta.nombre}
                    width={330}
                    height={330}
                    className="rounded-full shadow-lg"
                />
                <h2 className="text-xl mt-4 absolute text-white inset-x-0 bottom-0">{planeta.nombre}</h2>
                {/* <p className="text-gray-700 text-sm">{planeta.descripcion}</p>
                <Link href="" className="">
                    <div className="border-black border-2 border-solid p-2 mt-10 hover:bg-gray-300 skew-y-1">
                        <span>
                            Visualiza {planeta.nombre} en 3D
                        </span>
                    </div>
                </Link> */}
            </div>
        ))}
    </div>)
}