import type { Metadata } from "next";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Tonus Dienst GmbH",
  description: "Datenschutzerklärung der Tonus Dienst GmbH – Informationen zum Umgang mit Ihren personenbezogenen Daten.",
  alternates: { canonical: "https://tonusdienst.de/datenschutz" },
  robots: "noindex, follow",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-[120px] pb-20" style={{ background: "white" }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <h1
          className="mb-8"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "var(--font-size-h1)",
            fontWeight: 700,
            color: "#0D2137",
          }}
        >
          Datenschutzerklärung
        </h1>

        <div className="space-y-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              1. Verantwortlicher
            </h2>
            <p>
              {settings.company.legalName}<br />
              {settings.company.address.street}<br />
              {settings.company.address.zip} {settings.company.address.city}<br />
              E-Mail: {settings.company.email}<br />
              Telefon: {settings.company.phoneFormatted}
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen durch den Browser übermittelt und in Server-Logfiles gespeichert. Diese Daten (IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Uhrzeit) sind nicht bestimmten Personen zuordenbar und werden nach 30 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              3. Kontaktformulare
            </h2>
            <p>
              Wenn Sie uns über ein Kontaktformular oder per E-Mail kontaktieren, speichern wir Ihre Angaben (Name, Telefon, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              4. Cookies
            </h2>
            <p>
              Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und Ihre Erfahrung zu verbessern. Über unseren Cookie-Banner können Sie Ihre Einstellungen jederzeit anpassen. Notwendige Cookies sind für die Grundfunktionen der Website erforderlich und werden immer gesetzt.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO). Bitte wenden Sie sich hierzu an die oben genannte Kontaktadresse.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              6. Hosting
            </h2>
            <p>
              Unsere Website wird bei Vercel Inc. gehostet. Vercel verarbeitet Daten gemäß ihrer Datenschutzerklärung. Die Server befinden sich in der EU.
            </p>
          </div>

          <p className="text-[15px] text-[#78909C] italic">
            Stand: Februar 2026
          </p>
        </div>
      </div>
    </section>
  );
}
