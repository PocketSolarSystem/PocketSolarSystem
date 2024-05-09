"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Planetas() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sistema-solar/planetas/acerca-de-los-planetas");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 pt-24 md:p-24 mt-14">
      <p>Bienvenidos a planetas</p>
    </main>
  );
}