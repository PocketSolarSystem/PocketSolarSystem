import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Subscriber from "../../../models/subscriber";
import sendEmail from "../../../libs/sendEmail";

export async function POST(request) {
  try {
    await connectDB();

    const { subject } = await request.json();

    if (!subject) {
      return NextResponse.json(
        { message: "El asunto es obligatorio" },
        { status: 400 }
      );
    }

    const subscribers = await Subscriber.find({});

    subscribers.forEach((subscriber) => {
      sendEmail(subscriber.email, subject, "custom");
    });

    return NextResponse.json({ message: "Correos enviados correctamente" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al enviar correos", error },
      { status: 500 }
    );
  }
}
