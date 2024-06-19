"use client";

import { useEffect, useState } from "react";
import { fetchFotosMarteFecha, fetchInformacionRover,fetchFotosMarteSol } from "../utilidades/lib/apidata";
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { VisualizarImagen } from "../utilidades/ui/visualizarImagen/visualizarImagen";
import Link from "next/link";

import SkeletonMarsGallery from "../utilidades/ui/esqueletoFotosMarte/SkeletonMarsGallery";

export default function FotosDeMarte() {
  const [cargando, setCargando] = useState(false);
  const [archivos, setArchivos] = useState<any | null>(null);
  const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [fechaBuscada, setFechaBuscada] = useState("");
  const [sol, setSol] = useState("");
  const [solBuscado, setSolBuscado] = useState("");
  const [objetoInformacion, setObjetoInformacion] = useState<any | null>(null);
  const [nombreRover, setNombreRover] = useState("Perseverance");

  useEffect(() => {
    const getItems = async () => {
      setCargando(true);
      const objetoJSONRover = await fetchInformacionRover(nombreRover);
      setFechaBuscada(objetoJSONRover.rover.max_date);
      setFechaSeleccionada(objetoJSONRover.rover.max_date);
      const objetoJSONFotos = await fetchFotosMarteFecha(objetoJSONRover.rover.max_date, nombreRover);
      const items = await objetoJSONFotos.photos;
      setArchivos(items);
      setCargando(false);
    };
    getItems();
  }, [nombreRover]);

  async function buscarPorFechaTerrestre() {
    setCargando(true);
    const objetoJSON = await fetchFotosMarteFecha(fechaSeleccionada, nombreRover);
    const items = await objetoJSON.photos;
    setFechaBuscada(fechaSeleccionada);
    setSolBuscado("");
    setArchivos(items);
    setCargando(false);
  }

  async function buscarPorSol() {
    setCargando(true);
    const objetoJSON = await fetchFotosMarteSol(sol, nombreRover);
    const items = await objetoJSON.photos;
    setSolBuscado(sol);
    setFechaBuscada("");
    setArchivos(items);
    setCargando(false);
  }

  async function busquedaRover(evento:any) {
    setCargando(true);
    setNombreRover(evento.target.value);
    const objetoJSONRover = await fetchInformacionRover(evento.target.value);
    setFechaBuscada(objetoJSONRover.rover.max_date);
    setFechaSeleccionada(objetoJSONRover.rover.max_date);
    const objetoJSONFotos = await fetchFotosMarteFecha(objetoJSONRover.rover.max_date, evento.target.value);
    const items = await objetoJSONFotos.photos;
    setArchivos(items);
    setCargando(false);
  }

  function condicionalCadena() {
    if (archivos.length > 0 && fechaBuscada !== "" && solBuscado === "") {
      return (
        <>
          Mostrando imágenes enviadas por el rover {nombreRover} en la siguiente fecha
          terrestre: {fechaBuscada}
        </>
      );
    } else if (archivos.length === 0 && fechaBuscada !== "") {
      return (
        <>
          No se han encontrado imágenes para la siguiente fecha terrestre:{" "}
          {fechaBuscada}
        </>
      );
    } else if (archivos.length > 0 && fechaBuscada === "" && solBuscado != "") {
      return <>Mostrando imágenes del día marciano: {solBuscado}</>;
    } else if (archivos.length === 0 && fechaBuscada === "" && solBuscado != "") {
      return (
        <>
          No se han encontrado imágenes imágenes del día marciano: {solBuscado}
        </>
      );
    }
  }

  if (cargando) {
    return (
      <SkeletonMarsGallery />
    );
  } else if (archivos) {
    return (
      <main className="flex min-h-screen flex-col items-center md:px-24 px-8 pb-12">
        <h1 className="text-4xl text-center mt-4 md:mb-9 basis-40 md:basis-0 lg:basis-0">
          Galería de imagenes enviadas desde Marte
        </h1>
        <div className="mb-5 text-center">
          <form
            className="mt-10 text-xl"
            onSubmit={() => {
              buscarPorFechaTerrestre();
            }}
          >
            <span className="mr-5">Buscar por fecha terrestre:</span>{" "}
            <br className="md:hidden" />
            <input
              type="date"
              className="border-2 border-black rounded-md p-1 mr-5"
              value={fechaSeleccionada}
              onChange={(evento) => {
                setFechaSeleccionada(evento.target.value);
              }}
            />
            <button className="rounded-md text-white p-1 bg-black hover:bg-zinc-700">
              Buscar
            </button>
          </form>
          <p className="md:text-sm text-xs text-gray-700 mt-7">
            Por defecto la aplicación filtra por la última fecha terrestre en la que el rover ha enviado imágenes.
          </p>
          <form
            className="mt-5 text-xl"
            onSubmit={() => {
              buscarPorSol();
            }}
          >
            <span className="mr-5">Buscar por días marcianos:</span>
            <input
              type="number"
              placeholder="1000"
              className="border-2 border-black rounded-md p-1 mr-5 w-40 md:w-auto"
              value={sol}
              onChange={(evento) => {
                setSol(evento.target.value);
              }}
            />
            <button
              className="rounded-md text-white p-1 bg-black hover:bg-zinc-700"
              type="submit"
            >
              Buscar
            </button>
          </form>
          <p className="md:text-sm text-xs text-gray-700 mt-7">
            Los días marcianos son el número de rotaciones que Marte ha
            realizado sobre su eje desde el aterrizaje del rover en el planeta.
          </p>
        </div>
        <div className="text-xl text-center mt-10">
          Selecciona un rover:<br className="md:hidden"/>
            <span className="mb-7 mt-7 hover:cursor-pointer md:mt-0 md:mb-0 md:ml-5 md:mr-5">
              <label htmlFor="optionPerseverance" className="mr-1 hover:cursor-pointer">Perseverance</label>
              <input type="radio" name="nombrePerseverance" value="Perseverance" id="optionPerseverance" className="hover:cursor-pointer" onChange={(evento)=>{busquedaRover(evento)}} checked={nombreRover === "Perseverance"}/> 
            </span><br className="md:hidden"/>
            <span className="md:mr-5">
              <label htmlFor="optionCuriosity" className="mr-1 hover:cursor-pointer">Curiosity</label> 
              <input type="radio" name="nombreRover" value="Curiosity" id="optionCuriosity" className="hover:cursor-pointer" onChange={(evento)=>{busquedaRover(evento)}} checked={nombreRover === "Curiosity"}/> 
            </span><br className="md:hidden"/>          
        </div>
        <p className="mt-5 bg-black text-white hover:bg-slate-700 p-1">
          <Link href="/fotosMarte/infoRovers">
            Descubre más acerca de los rovers
          </Link>
        </p>
        <p className="mt-20">{condicionalCadena()}</p>

        <div className="md:grid md:grid-cols-5 md:gap-10 items-center mt-6">
          {archivos &&
            archivos.map((archivo: any) => (
              <div
                key={archivo.id}
                className="mt-5 cursor-pointer"
                onClick={() => {
                  setUrlImagenMostrada(archivo.img_src);
                  setObjetoInformacion(archivo);
                }}
              >
                <ImagenPreview
                  key={"img-" + archivo.id}
                  imagenUrl={archivo.img_src}
                  nasaId={archivo.id}
                  titulo=""
                  booleanVideo={false}
                />
              </div>
            ))}
        </div>
        <VisualizarImagen
          urlImagenMostrada={urlImagenMostrada}
          setUrlImagenMostrada={setUrlImagenMostrada}
          titulo="Mars photo"
          nasaId=""
          objetoInformacion={objetoInformacion}
          objetoRover={null}
        />
      </main>
    );
  }
}
