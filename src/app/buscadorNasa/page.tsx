"use client";
import { useState, useEffect } from "react";
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { fetchBuscadorNasa } from "../utilidades/lib/apidata";
import { fetchBuscadorNasaPorPalabra } from "../utilidades/lib/apidata";
import { VisualizarImagen } from "../utilidades/ui/visualizarImagen/visualizarImagen";
import { traducirTexto } from "../utilidades/lib/apidata";

import SkeletonNasaFileSearch from "../utilidades/ui/esqueletoArchivosNasa/SkeletonNasaFileSearch";

export default function Buscador() {
  const [buscar, setBuscar] = useState("");
  const [textoBuscado, setTextoBuscado] = useState("");
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
  const [nasaId, setNasaId] = useState("");
  const [filtroArchivo, setFiltroArchivo] = useState("todos");

  const condicionalComponente = () => {
    if (textoBuscado && fotos.length > 0) {
      return `Mostrando ${fotos.length} resultados encontrados para "${textoBuscado}"`;
    } else if (!textoBuscado && fotos.length > 0) {
      return `Mostrando los ${fotos.length} primeros resultados por defecto`;
    } else if (!textoBuscado && fotos.length == 0) {
      return "Algo ha fallado en el servidor.";
    } else {
      return `No se han encontrado resultados para "${textoBuscado}".`;
    }
  };

  useEffect(() => {
    const getItems = async () => {
      setCargando(true);
      const objetoJSON = await fetchBuscadorNasa();
      const items = objetoJSON.collection.items;
      setFotos(items.slice(0, 20));
      setCargando(false);
    };
    getItems();
  }, []);

  async function realizarBusqueda(evento: any) {
    evento.preventDefault();
    setCargando(true);
    setTextoBuscado(buscar);
    let textoTraducido;
    buscar !== '' ? textoTraducido = await traducirTexto(buscar, 'en') : textoTraducido = '';
    const objetoJSON = await fetchBuscadorNasaPorPalabra(textoTraducido, filtroArchivo);
    const items = objetoJSON.collection.items;
    setFotos(buscar !== "" ? items : items.slice(0, 20));
    setCargando(false);
  }

  function seleccionarImagen(url: string, nasaId: string) {
    setUrlImagenMostrada(url);
    setNasaId(nasaId);
  }

  function validaArchivo(preview:any){
    if (preview.links && preview.data) {
      return(
        <div
          key={preview.data[0].nasa_id}
          className="mt-5 cursor-pointer"
          onClick={() => {
            seleccionarImagen(
              preview.links[0].href,
              preview.data[0].nasa_id
            );
          }}
        >
          <ImagenPreview
            nasaId={preview.data[0].nasa_id}
            imagenUrl={preview.links[0].href}
            titulo=""
            booleanVideo={preview.data[0].media_type === 'video' ? true : false}
          />
        </div>
      ); 
    }
  }

  if (cargando) {
    return <SkeletonNasaFileSearch />;
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
        <h1 className="text-4xl mt-4 md:mb-5 basis-40 md:basis-0 lg:basis-0">
          Buscador de archivos de la NASA
        </h1>
        <form
          className="m-9 text-xl"
          onSubmit={(evento) => {
            realizarBusqueda(evento);
          }}
        >
          <span className="mr-3">Buscador: </span>
          <div className=" inline-block border-2 border-black border-solid">
            <input
              type="text"
              id="inputBuscador"
              placeholder="ej: Marte o Mars"
              onChange={(evento) => {
                setBuscar(evento.target.value);
              }}
              className=" p-1 focus:outline-none"
              value={buscar}
            />
            <div className="hidden md:inline-block bg-black">
              <button
                type="submit"
                className="text-white p-1 hover:bg-zinc-900"
              >
                Buscar
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="block md:hidden bg-black text-white p-1 hover:bg-zinc-900"
          >
            Buscar
          </button>
          <div className="text-xl text-center mt-10">
          Filtrar busqueda por:<br className="md:hidden"/>
            <span className="mb-7 mt-7 hover:cursor-pointer md:mt-0 md:mb-0 md:ml-5 md:mr-5">
              <label htmlFor="optionImagenes" className="mr-1 hover:cursor-pointer">Imágenes</label>
              <input type="radio" value="image" className="hover:cursor-pointer" id="optionImagenes" onChange={(evento)=>{setFiltroArchivo(evento.target.value)}} checked={filtroArchivo === 'image'}/> 
            </span><br className="md:hidden"/>
            <span className="md:mr-5">
              <label htmlFor="optionVideos" className="mr-1 hover:cursor-pointer">Vídeos</label> 
              <input type="radio" value="video" className="hover:cursor-pointer" id="optionVideos" onChange={(evento)=>{setFiltroArchivo(evento.target.value)}} checked={filtroArchivo === 'video'}/> 
            </span><br className="md:hidden"/>          
            <span className="md:mr-5">
              <label htmlFor="optionTodos" className="mr-1 hover:cursor-pointer">Fotos y vídeos</label> 
              <input type="radio" value="todos" className="hover:cursor-pointer" id="optionTodos" onChange={(evento)=>{setFiltroArchivo(evento.target.value)}} checked={filtroArchivo === 'todos'}/> 
            </span><br className="md:hidden"/> 
          </div>
        </form>
        <div className="text-center">{condicionalComponente()}</div>

        <div className="md:grid md:grid-cols-4 md:gap-10 items-center m-5 mt-6">
          {fotos &&
            fotos.map((preview: any) => (
              validaArchivo(preview)
            ))}
        </div>
        <VisualizarImagen
          urlImagenMostrada={urlImagenMostrada}
          setUrlImagenMostrada={setUrlImagenMostrada}
          titulo="Buscador imagen"
          nasaId={nasaId}
          objetoInformacion={null}
          objetoRover={null}
        />
      </main>
    );
  }
}
