"use client";

import { useState } from "react";
import LeadFormModal from "@/components/LeadFormModal";
import CallbackForm from "@/components/CallbackForm";
import ContactInfoCards from "@/components/ContactInfoCards";
import { settings } from "@/lib/settings";

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: settings.company.phoneFormatted,
    titleStyle: { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, color: "#00838F" } as React.CSSProperties,
    subtitle: settings.company.openingHours,
    href: `tel:+${settings.company.phone}`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: settings.company.email,
    subtitle: "Wir antworten innerhalb von 24 Stunden",
    href: `mailto:${settings.company.email}`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: settings.company.address.street,
    subtitle: `${settings.company.address.zip} ${settings.company.address.city}`,
  },
];

export default function KontaktPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        className="relative pt-[120px] pb-16 md:pt-[140px] md:pb-20"
        style={{ background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact info */}
            <div id="kontaktdaten" className="scroll-mt-24">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg, #E0F7FA 0%, #E0F2F1 100%)",
                  border: "1px solid rgba(77,208,225,0.3)",
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00838F",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Kontakt
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontSize: "var(--font-size-h1)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#0D2137",
                }}
              >
                Wir sind für Sie da.
              </h1>

              <p className="mb-8 max-w-[500px]" style={{ fontSize: "var(--font-size-body-large)", color: "#455A64", lineHeight: 1.6 }}>
                Rufen Sie uns an, schreiben Sie uns oder fordern Sie einen Rückruf an. Wir beraten Sie kostenlos und unverbindlich.
              </p>

              <ContactInfoCards items={contactItems} className="mb-8" />

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full transition-all hover:scale-[1.03] cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontSize: "var(--font-size-btn)",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
                  border: "none",
                }}
              >
                Erstberatung anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right: Callback form */}
            <div id="rueckruf" className="scroll-mt-24 bg-white rounded-[24px] p-8" style={{ boxShadow: "0 8px 30px rgba(0,131,143,0.15)" }}>
              <h2 className="mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "22px", fontWeight: 700, color: "#0D2137" }}>
                Rückruf anfordern
              </h2>
              <p className="mb-6" style={{ fontSize: "16px", color: "#78909C" }}>
                Wir rufen Sie kostenlos zurück – in der Regel innerhalb von 2 Stunden.
              </p>
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
