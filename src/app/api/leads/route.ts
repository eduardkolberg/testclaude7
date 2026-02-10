import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

// Simple in-memory rate limiter (per IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60 * 1000; // per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count++;
  return true;
}

function generateId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TD-${timestamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check - if the hidden field has a value, it's likely a bot
    if (body.website) {
      // Silently accept but don't process
      return NextResponse.json({ id: "processed", success: true });
    }

    // Basic validation
    const { type, name, phone } = body;

    if (!type || !name || !phone) {
      return NextResponse.json(
        { error: "Name und Telefonnummer sind erforderlich." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length < 2 || name.length > 200) {
      return NextResponse.json(
        { error: "Bitte geben Sie einen gültigen Namen ein." },
        { status: 400 }
      );
    }

    // Phone validation: at least 6 digits
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 6 || phoneDigits.length > 20) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige Telefonnummer ein." },
        { status: 400 }
      );
    }

    // Email validation (if provided)
    if (body.email && typeof body.email === "string" && body.email.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
          { status: 400 }
        );
      }
    }

    const leadId = generateId();
    const timestamp = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

    // Log the lead data (backup)
    console.log(`[LEAD] ${leadId}:`, {
      type,
      name,
      phone,
      email: body.email || null,
      preferredTime: body.preferredTime || null,
      timestamp,
      ip,
    });

    // Send Email via Nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const subject = `Neuer Lead von Website: ${name} (${type})`;

        const htmlContent = `
          <h2>Neue Anfrage über Tonus Dienst Website</h2>
          <p><strong>Lead-ID:</strong> ${leadId}</p>
          <p><strong>Zeitstempel:</strong> ${timestamp}</p>
          <hr />
          <h3>Kontaktdaten:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></li>
            ${body.email ? `<li><strong>E-Mail:</strong> <a href="mailto:${body.email}">${body.email}</a></li>` : ""}
            ${body.preferredTime ? `<li><strong>Bevorzugte Rückrufzeit:</strong> ${body.preferredTime}</li>` : ""}
          </ul>
          <h3>Details:</h3>
          <ul>
            <li><strong>Typ:</strong> ${type}</li>
            ${body.pflegegrad ? `<li><strong>Pflegegrad:</strong> ${body.pflegegrad}</li>` : ""}
            ${body.plz ? `<li><strong>PLZ:</strong> ${body.plz}</li>` : ""}
            ${body.services ? `<li><strong>Interesse an:</strong> ${body.services.join(", ")}</li>` : ""}
            ${body.budget ? `<li><strong>Budget:</strong> ${body.budget} €</li>` : ""}
          </ul>
          ${body.message ? `<h3>Nachricht:</h3><p>${body.message.replace(/\n/g, "<br>")}</p>` : ""}
          <hr />
          <p><small>Diese E-Mail wurde automatisch gesendet.</small></p>
        `;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Tonus Website" <${process.env.SMTP_USER}>`,
          to: "eduard.kolberg@gmail.com",
          cc: "anfrage@ebox.berlin",
          subject: subject,
          html: htmlContent,
        });

        console.log(`[EMAIL] Sent lead ${leadId} to eduard.kolberg@gmail.com`);
      } catch (emailError) {
        console.error(`[EMAIL ERROR] Failed to send email for lead ${leadId}:`, emailError);
        // We continue to return success to the user so they don't think it failed completely,
        // since we at least logged it.
      }
    } else {
      console.warn("[EMAIL WARNING] SMTP credentials not configured. Email not sent.");
    }

    return NextResponse.json({
      id: leadId,
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt.",
    });
  } catch (error) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
