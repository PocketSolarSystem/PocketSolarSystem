import Image from "next/image";

export function ImagenPreview(
    {imagenUrl, nasaId}:
    {imagenUrl:string, nasaId:any}
){
    return(
        <div className="relative h-56 w-80">
            <Image 
                width={250}
                height={125}
                src={imagenUrl}
                alt={"search photo " + nasaId}
                className="inset-0 h-full w-full object-cover object-center border-solid border-black/75 border 
                rounded-lg transition hover:scale-105 hover:shadow-slate-600 hover:shadow-lg"
            />
        </div>
    );
}