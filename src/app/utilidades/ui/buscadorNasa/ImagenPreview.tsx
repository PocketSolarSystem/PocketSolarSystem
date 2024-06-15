import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export function ImagenPreview(
    {imagenUrl, nasaId, titulo, booleanVideo}:
    {imagenUrl:string, nasaId:any, titulo:string, booleanVideo:boolean}
){
    return(
        <div className="relative h-56 transition hover:scale-105">
            <Image 
                width={1080}
                height={920}
                src={imagenUrl}
                alt={"search photo " + nasaId}
                className="inset-0 h-full w-full object-cover object-center border-solid border-black/75 border 
                rounded-lg hover:shadow-slate-600 hover:shadow-lg"
            />
            <FontAwesomeIcon icon={faPlay} className={`absolute right-1/2 top-1/2 transform translate-x-1/2 bg-white/85 p-3 rounded-lg ${booleanVideo ? '' : 'hidden'}`}/>
            <div className={`absolute bg-white text-black bottom-2 left-2 rounded-lg p-1 border-solid border-black/75 border ${titulo === "" ? "hidden" : ""}`}>{titulo}</div>
        </div>
    );
}
