import { NextResponse } from "next/server";
import { db } from "@/data/firebase";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Check for critical environment variables
  if (!process.env.FIREBASE_PROJECT_ID) {
    return NextResponse.json({ error: "Config Error", message: "FIREBASE_PROJECT_ID is missing in Vercel settings." }, { status: 500 });
  }
  if (!process.env.EMAIL_PASS) {
    return NextResponse.json({ error: "Config Error", message: "EMAIL_PASS is missing in Vercel settings." }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { fullName, email, phone, program } = body;

    if (!fullName || !email || !phone || !program) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Save to Firebase Firestore
    const leadRef = await db.collection("leads").add({
      fullName,
      email,
      phone,
      program,
      createdAt: new Date().toISOString(),
    });

    // 2. Send Email Notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: (process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) === 465 : true),
      auth: {
        user: process.env.EMAIL_USER || "connect@yuktaverse.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Lead Alert | Yukta Verse" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Program Lead: ${fullName} - ${program}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ea3a3a; margin-bottom: 20px;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; font-weight: bold; width: 30%;">Full Name:</td>
              <td style="padding: 10px 0;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td style="padding: 10px 0; font-weight: bold;">Program:</td>
              <td style="padding: 10px 0; font-weight: bold; color: #ea3a3a;">${program}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Lead ID: ${leadRef.id} | Yukta Verse Platform</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, id: leadRef.id });
  } catch (error: any) {
    console.error("Firebase lead submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
