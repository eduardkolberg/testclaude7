import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Entlastungsbetrag nach \u00a745b SGB XI erkl\u00e4rt | Tonus Dienst Berlin",
  description: `Was ist der Entlastungsbetrag? ${settings.entlastungsbetrag.monthlyAmount} \u20ac monatlich f\u00fcr alle Pflegegrade 1-5. Anspruch, Voraussetzungen und Nutzung verst\u00e4ndlich erkl\u00e4rt.`,
  alternates: { canonical: "https://tonusdienst.de/45b/entlastungsbetrag" },
};

export default function EntlastungsbetragPage() {
  const { monthlyAmount, yearlyAmount, rolloverDeadline, maxRolloverMonths } = settings.entlastungsbetrag;

  return (
    <>
      <HeroSection
        badge="Entlastungsbetrag erkl\u00e4rt"
        title="Was ist \u00a745b SGB XI?"
        titleAccent="Verst\u00e4ndlich erkl\u00e4rt."
        subtitle={`Der Entlastungsbetrag ist eine Leistung Ihrer Pflegekasse: ${monthlyAmount} \u20ac pro Monat (${yearlyAmount} \u20ac pro Jahr) f\u00fcr anerkannte Alltagshilfe. Wir erkl\u00e4ren, wer Anspruch hat und wie Sie ihn nutzen.`}
        ctaSecondary={{ label: "Zur\u00fcck zur \u00dcbersicht", href: "/45b" }}
      />

      {/* Section 2.1.1: Was ist §45b SGB XI? */}
      <section id="was-ist-45b" className="bg-white scroll-mt-24" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
            Was ist \u00a745b SGB XI?
          </h2>
          <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
            Der Entlastungsbetrag nach \u00a745b SGB XI ist eine gesetzliche Leistung der Pflegeversicherung. Er steht jedem Versicherten mit Pflegegrad 1 bis 5 zu, der zu Hause gepflegt wird. Der Betrag betr\u00e4gt <strong>{monthlyAmount} \u20ac pro Monat</strong> und kann f\u00fcr anerkannte Angebote zur Unterst\u00fctzung im Alltag genutzt werden \u2013 wie z.B. Haushaltshilfe, Einkaufshilfe oder Begleitung.
          </p>
          <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
            Wichtig: Der Entlastungsbetrag ist <strong>keine Pflegeleistung</strong>, sondern eine zus\u00e4tzliche Leistung f\u00fcr Alltagshilfe. Er steht Ihnen zus\u00e4tzlich zu anderen Pflegeleistungen (wie Pflegegeld oder Sachleistungen) zu. Ein gesonderter Antrag ist in der Regel nicht n\u00f6tig \u2013 der Anspruch entsteht automatisch mit dem Pflegegrad.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
              <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{monthlyAmount} \u20ac</div>
              <div className="text-[15px] text-[#546E7A]">pro Monat</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
              <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{yearlyAmount} \u20ac</div>
              <div className="text-[15px] text-[#546E7A]">pro Jahr</div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
              <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>PG 1\u20135</div>
              <div className="text-[15px] text-[#546E7A]">alle Pflegegrade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.1.2: Anspruch & Pflegegrad (1–5) */}
      <section id="anspruch" className="scroll-mt-24" style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
            Anspruch & Pflegegrad (1\u20135)
          </h2>
          <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
            Der Entlastungsbetrag steht <strong>allen Pflegegraden</strong> zur Verf\u00fcgung \u2013 auch Pflegegrad 1! Die H\u00f6he ist f\u00fcr alle Pflegegrade gleich.
          </p>

          {/* Pflegegrad table */}
          <div className="rounded-[16px] overflow-hidden border border-[#E0E7E9] mb-12">
            <table className="w-full" style={{ fontSize: "var(--font-size-body)" }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Pflegegrad</th>
                  <th className="text-right px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Monatlich</th>
                  <th className="text-right px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>J\u00e4hrlich</th>
                </tr>
              </thead>
              <tbody>
                {settings.pflegegrade.map((pg, idx) => (
                  <tr key={pg.grad} style={{ background: idx % 2 === 0 ? "white" : "#F7FAFA" }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: "#0D2137" }}>
                      Pflegegrad {pg.grad}
                      {pg.grad === 1 && <span className="ml-2 text-[#66BB6A] text-[14px]">&#10003; Anspruch</span>}
                    </td>
                    <td className="px-6 py-4 text-right font-bold" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#00838F" }}>
                      {pg.entlastungsbetrag} \u20ac
                    </td>
                    <td className="px-6 py-4 text-right" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#455A64" }}>
                      {pg.entlastungsbetrag * 12} \u20ac
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137" }}>
            Voraussetzungen
          </h3>
          <ul className="space-y-4 mb-12">
            {[
              "Pflegegrad 1 bis 5 (auch Pflegegrad 1!)",
              "H\u00e4usliche Pflege (Sie leben zu Hause, nicht im Pflegeheim)",
              "Die Leistung muss von einem anerkannten Anbieter erbracht werden",
              "Ein gesonderter Antrag ist in der Regel nicht n\u00f6tig",
              "Der Anspruch entsteht automatisch mit dem Pflegegrad",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3" style={{ fontSize: "var(--font-size-body)", color: "#455A64" }}>
                <span className="text-[#66BB6A] font-bold text-[20px] flex-shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 rounded-[16px] bg-[#FFF8F0] border border-[#F5E6D3]">
            <h3 className="mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, color: "#0D2137" }}>
              Gut zu wissen: Betr\u00e4ge ansparen
            </h3>
            <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
              Nicht genutzte Entlastungsbetr\u00e4ge verfallen nicht sofort. Sie k\u00f6nnen ins Folgequartal \u00fcbertragen werden. Betr\u00e4ge aus dem Vorjahr k\u00f6nnen bis zum {rolloverDeadline} des Folgejahres noch eingesetzt werden. So k\u00f6nnen Sie bis zu {maxRolloverMonths} Monate ansparen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
            N\u00e4chste Schritte
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/45b/finanzierung" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
              Finanzierung verstehen
            </Link>
            <Link href="/45b/ablauf" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
              So l\u00e4uft es ab
            </Link>
            <Link href="/leistungen" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
