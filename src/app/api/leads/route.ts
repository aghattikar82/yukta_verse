import { NextResponse } from "next/server";
import { prisma } from "@/data/db";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, program } = body;

    if (!fullName || !email || !phone || !program) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Save to Database
    const lead = await prisma.lead.create({
      data: {
        fullName,
        email,
        phone,
        program,
      },
    });

    // 2. Send Email Notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
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
          <p style="margin-top: 20px; font-size: 12px; color: #999;">This lead was captured via the Yukta Verse platform lead form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, lead });
  } catch (error: any) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
