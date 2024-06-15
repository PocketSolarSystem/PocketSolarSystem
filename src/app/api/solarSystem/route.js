import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import SolarSystem from "../../../models/solarSystem";

export async function GET() {
  try {
    await connectDB();
    const allSolarSystems = await SolarSystem.find();
    return NextResponse.json(allSolarSystems);
  } catch (error) {
    console.error("Error in GET /api/solarSystem:", error);
    return NextResponse.json(
      { message: "Failed to fetch solarSystems", error },
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

    const newSolarSystem = await SolarSystem.create(data);
    return NextResponse.json(newSolarSystem);
  } catch (error) {
    console.error("Error in POST /api/solarSystem:", error);
    return NextResponse.json(
      { message: "Failed to create solarSystem", error },
      { status: 500 }
    );
  }
}
