import Image from "next/image"

export function VisualizarImagen({urlImagenMostrada, setUrlImagenMostrada, titulo}:{urlImagenMostrada:string, setUrlImagenMostrada:Function, titulo:string}){
    return(
        <div className={`fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 ${urlImagenMostrada != "" ? "flex" : "hidden"} `}>
          <div className="relative" >
            {urlImagenMostrada!="" &&
              <Image 
              src={urlImagenMostrada}
              width={500}
              height={500}
              alt={titulo}
              className="rounded-lg"
              />
            }
            <span className="absolute bg-black right-0 top-0 cursor-pointer rounded-md p-1" onClick={()=>{setUrlImagenMostrada("")}}>
            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 352 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </span>
          </div>
        </div>
    )
}