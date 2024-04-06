import Image from "next/image";
import Link from "next/link";

export function InicioEnlace(
  { srcImagen, textoEnlace, hrefEnlace }: 
  { srcImagen:string, textoEnlace: string, hrefEnlace:string }){
    return(
        <div className="mt-8 md:mt-16 relative md:mb-12">
          <Image
            src={srcImagen}
            width={970}
            height={537.6}
            alt="Landing page Saturn image"
            className="border-2 border-solid border-black skew-y-1 z-0"
          />

          <Link
            href={hrefEnlace} 
            className="absolute hidden md:block text-2xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6"
          >
            {textoEnlace}
          </Link>

          <Link
            href={hrefEnlace} 
            className="block md:hidden bg-white mt-7 p-2 text-center skew-y-2 hover:bg-gray-200 border border-black"
          >
            {textoEnlace}
          </Link>
        </div>
    )
}


