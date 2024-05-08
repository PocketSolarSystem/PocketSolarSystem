import Image from "next/image";

export function ColumnaSelector({
  planetaSeleccionadoNombre,
  recogerPlaneta,
  listaPlanetas,
  segundaLista,
}: {
  planetaSeleccionadoNombre: string;
  recogerPlaneta: Function;
  listaPlanetas: Array<any>;
  segundaLista: boolean;
}) {
  const condicionalClase = (indice: any) => {
    let clase = "text-center m-2 relative hover:cursor-pointer hover:scale-110";
    clase +=
      listaPlanetas.length - 1 == indice && segundaLista ? " col-start-1" : "";
    return clase;
  };

  return (
    <div className="grid grid-cols-1 gap-4 mt-8">
      {listaPlanetas.map((planeta, indice) => (
        <button
          key={indice}
          className={
            condicionalClase(indice) +
            `${planetaSeleccionadoNombre === planeta.nombre ? " scale-110" : ""}`
          }
          onClick={() => {
            recogerPlaneta(planeta.nombre);
          }}
        >
          <Image
            src={planeta.imagen}
            alt={planeta.nombre}
            width={planeta.nombre === "Saturno" ? 384 : 192}
            height={planeta.nombre === "Saturno" ? 384 : 192}
            className={
              "mx-auto" +
              `${planetaSeleccionadoNombre !== planeta.nombre ? " grayscale" : ""}`
            }
          />

          <h2
            className={
              "text-2xl bg-white mt-7 p-2 text-center mx-auto max-w-48 skew-y-1 hover:bg-gray-300 border-2 border-black absolute inset-x-0 bottom-0" +
              `${planetaSeleccionadoNombre !== planeta.nombre ? "" : " shadow-lg shadow-slate-900"}`
            }
          >
            {planeta.nombre}
          </h2>
        </button>
      ))}
    </div>
  );
}
