"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Planetas = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sistema-solar/planetas/acerca-de-los-planetas");
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 pt-24 md:p-24 mt-14">
      <p className="text-sm md:text-base">
        Redirigiendo a la página de Acerca de los Planetas...
      </p>
    </main>
  );
};

export default Planetas;
