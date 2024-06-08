"use client";
// SistemaSolar.js
"use client";
import React, { useState, useEffect } from "react";
import Header from "../utilidades/ui/componentesSistemaSolar/Header";
import MainImage from "../utilidades/ui/componentesSistemaSolar/MainImage";
import SolarSystemOverview from "../utilidades/ui/componentesSistemaSolar/SolarSystemOverview";
import { InicioTexto } from "@/app/utilidades/ui/inicio-texto";
import CardGrid from "@/app/utilidades/ui/cardGrid/CardGrid";

export default function SistemaSolar() { 

  return (
    <main className="flex min-h-screen flex-col items-center md:px-12 px-8 pb-12">
      <Header
        englishText="Solar System Exploration"
        spanishText="Exploración del Sistema Solar"
      />
      <MainImage
        src="/exploracion-sistema-solar.jpg"
        width={900}
        height={400}
        alt="Solar System Exploration"
        title="Solar System Exploration"
      />
      <InicioTexto
        titulo="Nuestro Sistema Solar"
        texto="Acompáñanos mientras exploramos nuestro vecindario planetario: el Sol, planetas, lunas y millones de asteroides y cometas."
      />
      <SolarSystemOverview />
      <CardGrid />
    </main>
  );
}
