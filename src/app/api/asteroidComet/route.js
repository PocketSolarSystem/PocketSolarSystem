import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import AsteroidComet from "../../../models/asteroidComet";

export async function GET() {
  try {
    await connectDB();
    const allAsteroidComets = await AsteroidComet.find();
    return NextResponse.json(allAsteroidComets);
  } catch (error) {
    console.error("Error in GET /api/asteroidComet:", error);
    return NextResponse.json(
      { message: "Failed to fetch asteroidComets", error },
      { status: 500 }
    );
  }
}

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

    const newAsteroidComet = await AsteroidComet.create(data);
    return NextResponse.json(newAsteroidComet);
  } catch (error) {
    console.error("Error in POST /api/asteroidComet:", error);
    return NextResponse.json(
      { message: "Failed to create asteroidComet", error },
      { status: 500 }
    );
  }
}
