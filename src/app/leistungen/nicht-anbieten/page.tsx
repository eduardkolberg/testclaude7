import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
    title: "Was wir NICHT anbieten | Leistungsgrenzen | Tonus Dienst Berlin",
    description: "Transparenz ist uns wichtig: Keine Körperpflege, keine medizinischen Leistungen, keine Gartenarbeit. Was wir nicht leisten und wer Ihnen stattdessen hilft.",
    alternates: { canonical: "https://tonusdienst.de/leistungen/nicht-anbieten" },
};

const sections = [
    {
        id: "keine-koerperpflege",
        title: "Keine Körperpflege & Medizin",
        description: "Wir sind ein anerkannter Anbieter für Alltagshilfe nach §45b SGB XI – aber kein Pflegedienst. Medizinische Tätigkeiten und Körperpflege gehören nicht zu unserem Leistungsspektrum. Dafür ist Ihr ambulanter Pflegedienst zuständig.",
        items: [
            "Keine Körperpflege (Waschen, Duschen, Baden, Toilettenhilfe)",
            "Keine medizinischen Leistungen (Spritzen, Verbände, Wundversorgung)",
            "Keine Medikamentengabe oder -kontrolle",
            "Kein Anziehen von Kompressionsstrümpfen",
            "Keine Lagerung oder Mobilisation im Bett",
        ],
    },
    {
        id: "keine-gartenarbeit",
        title: "Keine Gartenarbeit & Spezialreinigung",
        description: "Unsere Mitarbeiterinnen sind für die Unterstützung im Haushalt ausgebildet. Spezialaufgaben, die professionelles Equipment oder besondere Fachkenntnisse erfordern, können wir leider nicht anbieten.",
        items: [
            "Keine Gartenarbeit (Rasen mähen, Hecke schneiden, Beet-Pflege)",
            "Keine Spezialreinigung mit industriellem Equipment (Dampfreiniger, Hochdruckreiniger)",
            "Keine professionelle Fensterreinigung in gefährlichen Höhen (Dachfenster, Wintergärten)",
            "Kein Hinauslehnen aus Fenstern – strikt verboten aus Sicherheitsgründen",
            "Keine Entrümpelung oder Umzugshilfe",
        ],
    },
];

export default function NichtAnbietenPage() {
    return (
        <>
            <HeroSection
                badge="Leistungsgrenzen"
                title="Ehrlich &"
                titleAccent="transparent."
                subtitle={"Wir möchten, dass Sie genau wissen, was wir leisten können – und was nicht. So vermeiden wir Missverständnisse und können uns auf das konzentrieren, was wir richtig gut können."}
                ctaSecondary={{ label: "Was wir anbieten", href: "/leistungen" }}
            />
            <SidebarCTA />

            {sections.map((section, idx) => (
                <ContentSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    items={section.items}
                    index={idx}
                    infoBox={
                        idx === 0 ? (
                            <InfoBox>
                                {"Für Körperpflege und medizinische Tätigkeiten wenden Sie sich bitte an Ihren ambulanten Pflegedienst. Wir arbeiten gerne Hand in Hand mit Ihrem Pflegedienst zusammen."}
                            </InfoBox>
                        ) : (
                            <InfoBox>
                                {"Für Gartenarbeiten empfehlen wir einen Fachbetrieb. Für professionelle Fensterreinigung können Sie eine spezialisierte Reinigungsfirma beauftragen."}
                            </InfoBox>
                        )
                    }
                />
            ))}

            {/* What we DO offer */}
            <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        {"Was wir dafür richtig gut können"}
                    </h2>
                    <p className="mb-8 text-[#455A64]" style={{ fontSize: "var(--font-size-body)", lineHeight: 1.65 }}>
                        {"Haushaltshilfe, Einkauf, Begleitung und Entlastung – zuverlässig, regelmäßig und mit Herz."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/leistungen/alltagsunterstuetzung" className="px-8 py-4 rounded-full text-white font-bold hover:scale-[1.03] transition-all" style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", boxShadow: "0 4px 12px rgba(0,131,143,0.3)", fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            {"Alltagsunterstützung"}
                        </Link>
                        <Link href="/leistungen/betreuung-begleitung" className="px-8 py-4 rounded-full border-2 border-[#00838F] text-[#00838F] font-bold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Betreuung & Begleitung
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
