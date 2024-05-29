import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Subscriber from "../../../models/subscriber";
import sendEmail from "@/libs/sendEmail";

export async function POST(request:any) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "El correo electrónico es obligatorio" }, { status: 400 });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: "El correo electrónico ya está suscrito" }, { status: 400 });
    }

    const newSubscriber = await Subscriber.create({ email });

    // Enviar correo de bienvenida
    await sendEmail(email, "Bienvenido a nuestro Newsletter");

    return NextResponse.json({ message: "¡Te has suscrito correctamente!" });
  } catch (error) {
    return NextResponse.json({ message: "Error al suscribirse", error }, { status: 500 });
  }
}