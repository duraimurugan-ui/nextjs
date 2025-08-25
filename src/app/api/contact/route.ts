import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure transporter (Ethereal for dev/test)
    const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",   // Outlook SMTP server
    port: 587,                    // TLS port
    secure: false,                // STARTTLS (not SSL)
    auth: {
      user: "durai@fronseye.com",   // your full Outlook email
      pass: "Loyola_2109@!", // password or App Password if MFA is enabled
    },
    tls: {
      ciphers: "SSLv3",           // helps with older TLS handshake issues
    },
  });

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "durai@fronseye.com",
      subject: "New Contact Form Submission",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
  }
}
