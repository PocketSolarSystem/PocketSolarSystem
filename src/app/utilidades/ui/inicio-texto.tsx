export function InicioTexto(
    {titulo, texto}:
    {titulo:string, texto:string}
){
    return(
        <div className='border-black border-solid border-2 text-center p-4'>
            <h2 className="text-xl">
            <strong>{titulo}</strong>
            </h2>
            <p className="items-start mt-6">
                {texto}
            </p>
        </div>
    );
}