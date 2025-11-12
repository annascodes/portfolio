import { NextResponse } from "next/server"
import nodemailer, { Transporter } from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json() as { name: string; message: string }

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 })
    }

    // Create a transporter (typed)
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    })

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "itsanascode@gmail.com",
      subject: `New message from ${name}`,
      text: `${name} sent message that: ${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending failed:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
