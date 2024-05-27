import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/mongodb.js";
import Planet from "../../../../models/planet.js";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const nombre = decodeURIComponent(params.nombre);
    if (!nombre) {
      return NextResponse.json(
        { message: "Nombre del planeta es requerido" },
        { status: 400 }
      );
    }
    const planet = await Planet.findOne({ nombre });
    if (!planet) {
      return NextResponse.json(
        { message: "Planeta no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(planet);
  } catch (error) {
    console.error("Error fetching planet data:", error);
    return NextResponse.json(
      { message: "Error al obtener datos del planeta" },
      { status: 500 }
    );
  }
}
