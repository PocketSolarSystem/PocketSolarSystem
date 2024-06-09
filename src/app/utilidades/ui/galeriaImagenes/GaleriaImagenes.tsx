"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const GaleriaImagenes = ({
  planetaNombre,
  imagenes,
  setUrlImagenMostrada,
}: {
  planetaNombre: string;
  imagenes: string[];
  setUrlImagenMostrada: Function;
}) => {
  return (
    <div className="bg-white py-4 pb-10">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-8">
          <div className="items-center gap-12">
            <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
              {planetaNombre}
            </h1>
            <div className="flex items-center gap-4">
              <Image
                src={
                  imagenes && imagenes.length > 0
                    ? "/imagen-32.png"
                    : "/placeholder.png"
                }
                width={16}
                height={16}
                alt={`Icono del planeta ${planetaNombre}`}
                title={`Icono del planeta ${planetaNombre}`}
              />
              <p>
                {imagenes && imagenes.length > 0
                  ? `${imagenes.length} IMÁGENES`
                  : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center md:mt-10">
            <Link
              href={`/sistema-solar/planetas/galeria?planeta=${planetaNombre}`}
              className="flex items-center"
            >
              <h1 className="font-semibold text-xl text-4x1 mb-4 text-center md:text-left md:ml-8">
                Ir a la galería
              </h1>
              <span className="relative bg-primary-color h-6 w-6 rounded-full flex items-center justify-center ml-2 mb-4">
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
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-6 xl:gap-8">
          {imagenes &&
            imagenes.map((imagen: string, index: number) => {
              if (index <= 1) {
                return null;
              }

              return (
                <div
                  key={index}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:cursor-pointer ${
                    index !== 4
                      ? "md:h-60"
                      : "md:col-span-3 md:row-span-2 md:h-full"
                  } `}
                  onClick={() => {
                    setUrlImagenMostrada(imagen);
                  }}
                >
                  <Image
                    src={imagen}
                    width={300}
                    height={200}
                    loading="lazy"
                    alt={`Foto ${index + 1} del planeta ${planetaNombre}`}
                    title={`Foto ${index + 1} del planeta ${planetaNombre}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
