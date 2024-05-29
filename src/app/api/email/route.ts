import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'floalonso.abad@gmail.com',
    subject: 'hello world',
    react: WelcomeEmail(),
  });

  return NextResponse.json({
    status: "Ok"
  })
}