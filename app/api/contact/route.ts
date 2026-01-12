import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #facc15; padding: 30px; text-align: center;">
          <h1 style="margin: 0; color: #000; text-transform: uppercase; font-style: italic;">New Quote Request</h1>
          <p style="margin: 5px 0 0; color: #000; font-weight: bold; opacity: 0.8;">Line It Up Line Striping, LLC</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Customer Name</p>
          <p style="font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 25px;">${name}</p>
          
          <p style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Email Address</p>
          <p style="font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 25px;">${email}</p>
          
          <p style="color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Message Detail</p>
          <div style="padding: 20px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #facc15;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
          </div>
        </div>
        <div style="background-color: #000; color: #fff; padding: 15px; text-align: center; font-size: 12px;">
          Line It Up Line Striping, LLC | (419) 381-7083
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `🚧 New Project Request from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
