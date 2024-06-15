import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Planet from "../../../models/planet";

// Ruta para obtener todos los planetas
export async function GET() {
  try {
    await connectDB();
    const allPlanets = await Planet.find();
    return NextResponse.json(allPlanets);
  } catch (error) {
    console.error("Error in GET /api/planet:", error);
    return NextResponse.json(
      { message: "Failed to fetch planets", error },
      { status: 500 }
    );
  }
}

// Ruta para crear un nuevo planeta
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    // Validación básica (puedes mejorarla según tus necesidades)
    if (
      !data.nombre ||
      !data.descripcion ||
      !data.overview ||
      !data.cultura_pop
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newPlanet = await Planet.create(data);
    return NextResponse.json(newPlanet);
  } catch (error) {
    console.error("Error in POST /api/planet:", error);
    return NextResponse.json(
      { message: "Failed to create planet", error },
      { status: 500 }
    );
  }
}
