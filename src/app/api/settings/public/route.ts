import { NextResponse } from "next/server";
import { settings } from "@/lib/settings";

export async function GET() {
  // Return only public, non-sensitive settings for the calculator
  return NextResponse.json({
    entlastungsbetrag: settings.entlastungsbetrag,
    pflegegrade: settings.pflegegrade,
    serviceRates: settings.serviceRates,
    fallbackRate: settings.fallbackRate,
    plzWhitelist: settings.plzWhitelist,
    districts: settings.districts,
  });
}
