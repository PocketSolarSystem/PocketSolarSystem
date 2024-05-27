import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Moon from "../../../models/moon";

export async function GET() {
  try {
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, fetching moons...");
    const allMoons = await Moon.find();
    console.log("Fetched moons:", allMoons);
    return NextResponse.json(allMoons);
  } catch (error) {
    console.error("Error in GET /api/moon:", error);
    return NextResponse.json(
      { message: "Failed to fetch moons", error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, creating moon...");
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

    const newMoon = await Moon.create(data);
    console.log("Created new moon:", newMoon);
    return NextResponse.json(newMoon);
  } catch (error) {
    console.error("Error in POST /api/moon:", error);
    return NextResponse.json(
      { message: "Failed to create moon", error },
      { status: 500 }
    );
  }
}
