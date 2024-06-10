"use client";
import { useState, useEffect } from "react";
import { ImagenPreview } from "../utilidades/ui/buscadorNasa/ImagenPreview";
import { fetchBuscadorNasa } from "../utilidades/lib/apidata";
import { fetchBuscadorNasaPorPalabra } from "../utilidades/lib/apidata";
import { VisualizarImagen } from "../utilidades/ui/visualizarImagen/visualizarImagen";

export default function Buscador() {
  const [buscar, setBuscar] = useState("");
  const [textoBuscado, setTextoBuscado] = useState("");
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [urlImagenMostrada, setUrlImagenMostrada] = useState("");
  const [nasaId, setNasaId] = useState("");

  const condicionalComponente = () => {
    if (textoBuscado && fotos.length > 0) {
      return `Mostrando ${fotos.length} resultados encontrados para "${textoBuscado}"`;
    } else if (!textoBuscado && fotos.length > 0) {
      return "Mostrando los 20 primeros resultados por defecto";
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
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setTextoBuscado(buscar);
    const objetoJSON = await fetchBuscadorNasaPorPalabra(buscar);
    const items = objetoJSON.collection.items;
    setFotos(items);
    setCargando(false);
  }

  function seleccionarImagen(url:string, nasaId:string){
    setUrlImagenMostrada(url);
    setNasaId(nasaId);
  }

  if (cargando) {
    return (
      <main className="flex min-h-screen flex-col items-center mt-72">
        <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
        <div className="loader"></div>
      </main>
    );
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
              placeholder="ej: Moon"
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
        </form>
        <div className="text-center">{condicionalComponente()}</div>

        <div className="md:grid md:grid-cols-4 md:gap-4 items-center mt-6">
          {fotos &&
            fotos.map((preview: any) => (
              <div key={preview.data[0].nasa_id} className="p-4 cursor-pointer" onClick={()=>{seleccionarImagen(preview.links[0].href, preview.data[0].nasa_id)}}>
                <ImagenPreview
                  nasaId={preview.data[0].nasa_id}
                  imagenUrl={preview.links[0].href}
                />
              </div>
            ))}
        </div>
        <VisualizarImagen urlImagenMostrada={urlImagenMostrada} setUrlImagenMostrada={setUrlImagenMostrada} titulo="Buscador imagen" nasaId={nasaId}/>
      </main>
    );
  }
}
