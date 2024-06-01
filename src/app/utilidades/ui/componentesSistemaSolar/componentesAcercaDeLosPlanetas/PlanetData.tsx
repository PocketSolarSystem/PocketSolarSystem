import Image from "next/image";
import Link from "next/link";

interface Planet {
  nombre: string;
  imagenes: string[];
  facts: {
    Introduccion: string;
  };
}

interface PlanetDataProps {
  planetaData: Planet[];
}

const PlanetData = ({ planetaData }: PlanetDataProps) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-12">
    {planetaData.map((planeta: Planet, index: number) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row md:space-x-8 ${
          index % 2 === 0
            ? "md:flex-row-reverse md:space-x-reverse"
            : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2 md:flex-shrink-0">
          <Image
            src={
              planeta.imagenes && planeta.imagenes.length > 0
                ? planeta.imagenes[1]
                : ""
            }
            width={200}
            height={200}
            alt={`${planeta.nombre} Image`}
            className="w-full mb-4"
          />
        </div>
        <div className="md:w-1/2 md:order-2">
          <h2 className="text-2xl font-bold mb-2 text-gray-500 font-futuristic relative">
            <span className="absolute top-0 left-0.5 transform origin-top-left">
              /
            </span>
            {`0${index + 1}`}
          </h2>
          <h3 className="text-lg font-semibold mb-2">{`Datos sobre ${planeta.nombre}`}</h3>
          <div className="text-justify">
            <p>{planeta.facts.Introduccion}</p>
            <p>
              <Link
                href={planeta.nombre}
                className="block text-lg font-semibold py-2 mt-2 transition duration-300 flex items-center"
              >
                <span className="mr-2">{`Explora ${planeta.nombre}`}</span>
                <span className="relative inline-block bg-primary-color h-6 w-6 rounded-full flex items-center justify-center mr-2">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <circle cx="16" cy="16" r="16" fill="#FF0000" />
                    <path
                      d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PlanetData;
