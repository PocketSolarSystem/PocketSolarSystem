import React from "react";
import SkeletonHeader from "../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonHeader";
import SkeletonMainImage from "../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonMainImage";
import SkeletonInicioTexto from "../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonInicioTexto";
import SkeletonSolarSystemOverview from "../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonSolarSystemOverview";
import SkeletonCardGrid from "../utilidades/ui/componentesSistemaSolar/esqueletoSistemaSolar/SkeletonCardGrid";

export default function Cargando() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
      <SkeletonHeader />
      <SkeletonMainImage />
      <SkeletonInicioTexto />
      <SkeletonSolarSystemOverview />
      <SkeletonCardGrid />
    </main>
  );
}
