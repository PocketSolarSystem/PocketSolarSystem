import Image from "next/image";
import Link from "next/link";

export function InicioEnlace(){
    return(
        <div className="relative">
          <Image
            src="/saturno-inicio.jpg"
            width={1200}
            height={672}
            alt="Landing page Saturn image"
            className="mt-12 skew-y-2 z-0"
          />

          <Link
            href={"fotodeldia"} 
            className="absolute hidden md:block text-2xl bg-white mt-7 p-2 text-center skew-y-2 hover:bg-gray-200 border border-black right-6 bottom-6"
          >
            Descubre la foto diaria de la NASA
          </Link>

          <Link
            href={"fotodeldia"} 
            className="block md:hidden bg-white mt-7 p-2 text-center skew-y-2 hover:bg-gray-200 border border-black"
          >
            Descubre la foto diaria de la NASA
          </Link>
        </div>
    )
}


