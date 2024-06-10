import Image from "next/image";
import Link from "next/link";

export function ImagenPreview(
    {imagenUrl, nasaId}:
    {imagenUrl:string, nasaId:any}
){
    return(
        <div className="relative">
            <Image 
                width={250}
                height={125}
                src={imagenUrl}
                alt={"search photo " + nasaId}
                className="border-solid border-black/75 border rounded-lg transition hover:scale-110 hover:shadow-slate-600 hover:shadow-lg"
            />
        </div>
    );
}