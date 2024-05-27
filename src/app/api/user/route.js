import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import User from "../../../models/user";

// Ruta para obtener todos los usuarios
export async function GET() {
  try {
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, fetching users...");
    const allUsers = await User.find();
    console.log("Fetched users:", allUsers);
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error("Error in GET /api/user:", error);
    return NextResponse.json(
      { message: "Failed to fetch users", error },
      { status: 500 }
    );
  }
}

// Ruta para crear un nuevo usuario
export async function POST(request) {
  try {
    console.log("Connecting to DB...");
    await connectDB();
    console.log("Connected to DB, creating user...");
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

    const newUser = await User.create(data);
    console.log("Created new user:", newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error in POST /api/user:", error);
    return NextResponse.json(
      { message: "Failed to create user", error },
      { status: 500 }
    );
  }
}
