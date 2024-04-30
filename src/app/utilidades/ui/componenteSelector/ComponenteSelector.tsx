import { ColumnaSelector } from "./columnaSelector/ColumnaSelector"

export function ComponenteSelector({listaCortada1, listaCortada2}:{listaCortada1:Array<any>, listaCortada2:Array<any>}){
    return (
        <div className="hidden md:block mt-8 mb-8 p-2">
            <h2 className="text-2xl mt-8 mb-4 text-center">
                <strong>SELECCIONA UN PLANETA</strong>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
                <ColumnaSelector listaPlanetas={listaCortada1} segundaLista={false}/>
                <div className="text-center border-solid border-2 border-black">AQUÍ VA EL MODELO EN 3D</div>
                <ColumnaSelector listaPlanetas={listaCortada2} segundaLista={true}/>
            </div>
        </div>
    )
}