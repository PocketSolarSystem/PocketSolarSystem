import Image from "next/image";

export function ColumnaSelector({
  planetaSeleccionadoNombre,
  recogerPlaneta,
  listaPlanetas,
}: {
  planetaSeleccionadoNombre: string;
  recogerPlaneta: Function;
  listaPlanetas: Array<any>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      {listaPlanetas.map((planeta, indice) => (
        <div
          key={indice}
          className={`lg:mr-1.5 lg:ml-1.5 flex flex-col justify-center hover:cursor-pointer hover:scale-110 ${planetaSeleccionadoNombre === planeta.nombre ? " scale-110" : ""}`}
          onClick={() => {
            recogerPlaneta(planeta.nombre);
          }}
        >
          <div className="relative text-center">
            <Image
              src={planeta.imagen}
              alt={planeta.nombre}
              width={530}
              height={530}
              className={
                "rounded-full" +
                `${planetaSeleccionadoNombre !== planeta.nombre ? " grayscale" : " shadow-lg shadow-slate-900"}`
              }
            />

            <h2 className={`text-xl absolute text-white inset-x-0 bottom-0`}>
              {planeta.nombre}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
