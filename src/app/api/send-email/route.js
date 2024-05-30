import { NextResponse } from "next/server";
import sendEmail from "../../../libs/sendEmail";

export async function POST(request) {
  const { to, subject } = await request.json();

  sendEmail(to, subject);

  return NextResponse.json({ message: "Email sent" });
}
