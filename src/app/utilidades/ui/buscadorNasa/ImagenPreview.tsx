import Image from "next/image";

export function ImagenPreview(
    {imagenUrl, nasaId, titulo}:
    {imagenUrl:string, nasaId:any, titulo:string}
){
    return(
        <div className="relative h-56 transition hover:scale-105">
            <Image 
                width={250}
                height={125}
                src={imagenUrl}
                alt={"search photo " + nasaId}
                className="inset-0 h-full w-full object-cover object-center border-solid border-black/75 border 
                rounded-lg hover:shadow-slate-600 hover:shadow-lg"
            />
            <div className={`absolute bg-white text-black bottom-2 left-2 rounded-lg p-1 border-solid border-black/75 border ${titulo === "" ? "hidden" : ""}`}>{titulo}</div>
        </div>
    );
}