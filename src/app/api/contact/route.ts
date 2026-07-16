import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      service,
      message,
    } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing Gmail environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Orvion Digital Website" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New Website Enquiry - ${service}`,
      text: `
New enquiry from the Orvion Digital website

Name: ${name}
Business: ${business || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;">
          <div style="max-width:650px; margin:0 auto; background:#ffffff; padding:30px; border-radius:16px;">
            <h2 style="margin-top:0; color:#111111;">
              New Orvion Digital Website Enquiry
            </h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Business:</strong> ${business || "Not provided"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service:</strong> ${service}</p>

            <hr style="margin:25px 0; border:none; border-top:1px solid #dddddd;" />

            <p><strong>Message:</strong></p>

            <p style="line-height:1.7; white-space:pre-wrap;">
              ${message}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your enquiry.",
      },
      { status: 500 }
    );
  }
}