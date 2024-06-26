

export default function CerrarImagen({setUrlImagenMostrada, esVideo, setTraducido}:{setUrlImagenMostrada:Function, esVideo:boolean, setTraducido:Function}){

    return(
    <span
        className="absolute bg-black right-2 top-2 cursor-pointer rounded-md p-1 hover:bg-slate-600"
        onClick={() => {
          setUrlImagenMostrada("");
          if(esVideo){
            const video = document.querySelector("#video") as HTMLVideoElement;
            video?.pause();
          }
          setTraducido(false);
        }}
      >
        <svg
          stroke="white"
          fill="white"
          strokeWidth="0"
          viewBox="0 0 352 512"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
        </svg>
      </span>
    );
}