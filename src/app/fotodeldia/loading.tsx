import React from "react";

export default function Cargando() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <p className="text-3xl font-bold mb-4 text-gray-800">Cargando...</p>
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </main>
  );
}
