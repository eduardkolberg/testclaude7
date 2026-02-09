import { NextRequest, NextResponse } from "next/server";

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

    // In production, this would save to a database and send an email notification.
    // For now, we log the lead data.
    console.log(`[LEAD] ${leadId}:`, {
      type,
      name,
      phone,
      email: body.email || null,
      pflegegrad: body.pflegegrad || null,
      plz: body.plz || null,
      message: body.message || null,
      preferredTime: body.preferredTime || null,
      services: body.services || null,
      budget: body.budget || null,
      timestamp: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      id: leadId,
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt.",
    });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
