import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { to, subject, message } = await request.json();

        if (!to || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields: to, subject, message" },
                { status: 400 }
            );
        }

        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return NextResponse.json(
                { error: "SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) are not set in environment variables." },
                { status: 500 }
            );
        }

        const transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Tonus Test" <${process.env.SMTP_USER}>`,
            to: to,
            subject: subject,
            text: message,
            html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
            messageId: info.messageId,
        });
    } catch (error: any) {
        console.error("[SMTP TEST ERROR]", error);
        return NextResponse.json(
            { error: error.message || "Failed to send email" },
            { status: 500 }
        );
    }
}
