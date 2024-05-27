import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Planet from "../../../models/planet";

// Ruta para obtener todos los planetas
export async function GET() {
  try {
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, fetching planets...");
    const allPlanets = await Planet.find();
    console.log("Fetched planets:", allPlanets);
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
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, creating planet...");
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
    console.log("Created new planet:", newPlanet);
    return NextResponse.json(newPlanet);
  } catch (error) {
    console.error("Error in POST /api/planet:", error);
    return NextResponse.json(
      { message: "Failed to create planet", error },
      { status: 500 }
    );
  }
}
