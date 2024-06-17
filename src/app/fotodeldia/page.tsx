import { fetchFotoDelDia } from "../utilidades/lib/apidata";
import ComponenteFotoDelDia from "../utilidades/ui/componenteFotoDelDia/componenteFotoDelDia";

export default async function FotoDelDia() {
  const fotodeldia = await fetchFotoDelDia();

  if (fotodeldia) {
    
    return (
      <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
        <ComponenteFotoDelDia fotodeldia={fotodeldia} />
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24">
        <p>Algo ha fallado al recoger la foto</p>
      </main>
    );
  }
}
