import Image from "next/image";
import Link from "next/link";

interface InicioEnlaceProps {
  srcImagen: string;
  textoEnlace: string;
  hrefEnlace?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
}

export function InicioEnlace({
  srcImagen,
  textoEnlace,
  hrefEnlace,
  width = 970, // Valor predeterminado para width
  height = 537.6, // Valor predeterminado para height
  alt = "Landing page Saturn image", // Valor predeterminado para alt
  title = "", // Valor predeterminado para title
}: InicioEnlaceProps) {
  return (
    <div className="mt-8 mb-8 md:mt-16 relative md:mb-12">
      <Image
        src={srcImagen}
        width={width}
        height={height}
        alt={alt}
        title={title}
        className="border-2 border-solid border-black skew-y-1 z-0"
      />

      {hrefEnlace ? (
        <>
          <Link
            href={hrefEnlace}
            className="absolute hidden md:block text-2xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6"
          >
            {textoEnlace}
          </Link>

          <Link
            href={hrefEnlace}
            className="block text-lg md:hidden bg-white mt-3 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black"
          >
            {textoEnlace}
          </Link>
        </>
      ) : (
        <>
          <p className="absolute hidden md:block text-2xl bg-white mt-7 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black right-6 bottom-6">
            {textoEnlace}
          </p>

          <p className="block text-lg md:hidden bg-white mt-3 p-2 text-center skew-y-1 hover:bg-gray-300 border-2 border-black">
            {textoEnlace}
          </p>
        </>
      )}
    </div>
  );
}
