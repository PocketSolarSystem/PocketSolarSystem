import Image from "next/image";
import Link from "next/link";

export function ImagenPreview(
    {imagenUrl, nasaId}:
    {imagenUrl:string, nasaId:any}
){
    return(
        <div className="relative hover:scale-110 hover:shadow-slate-600 hover:shadow-lg">
            <Link
                href={`/buscadorNasa/${nasaId}`}
            >
                <Image 
                    width={250}
                    height={125}
                    src={imagenUrl}
                    alt="search photo"
                    className="border-solid border-black border-2"
                />
            </Link>
        </div>
    )
}