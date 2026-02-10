"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { settings } from "@/lib/settings";
import {
  ChevronRight,
  Phone,
  Check,
  Info,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  House,
  Footprints,
  Sparkles,
  Users,
  HeartHandshake,
  ShoppingCart,
} from "lucide-react";

/* ── Fonts ─────────────────────────────────────────── */
const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };
const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };

/* ── Colors (inline to override global unlayered CSS) ─ */
const C = {
  accent: "#2EC4B6",
  accentGreen: "#00E5A0",
  accentBright: "#00FFD1",
  white: "#FFFFFF",
  w90: "rgba(255,255,255,0.9)",
  w80: "rgba(255,255,255,0.8)",
  w70: "rgba(255,255,255,0.7)",
  w60: "rgba(255,255,255,0.6)",
  w50: "rgba(255,255,255,0.5)",
  w45: "rgba(255,255,255,0.45)",
  w40: "rgba(255,255,255,0.4)",
  w30: "rgba(255,255,255,0.3)",
  w20: "rgba(255,255,255,0.2)",
  w15: "rgba(255,255,255,0.15)",
  w12: "rgba(255,255,255,0.12)",
  w10: "rgba(255,255,255,0.1)",
  w08: "rgba(255,255,255,0.08)",
  w06: "rgba(255,255,255,0.06)",
  w05: "rgba(255,255,255,0.05)",
  w04: "rgba(255,255,255,0.04)",
  bg: "#0B1E2D",
} as const;

/* ── Data ──────────────────────────────────────────── */
const raw = settings.pflegegrade;

const pflegegradData = raw.map((pg) => ({
  pg: pg.grad,
  amount: pg.grad === 1 ? `${pg.gesamt} €` : `bis ${pg.gesamt.toLocaleString("de-DE")} €`,
  amountNum: pg.gesamt,
  label: "pro Monat",
  yearlyAmount:
    pg.grad === 1
      ? `${(pg.gesamt * 12).toLocaleString("de-DE")} €`
      : `bis ${(pg.gesamt * 12).toLocaleString("de-DE")} €`,
  yearlyNum: pg.gesamt * 12,
  formula:
    pg.grad === 1
      ? "Entlastungsbetrag §45b"
      : `131 € + bis ${pg.umwidmung.toLocaleString("de-DE")} € Umwidmung`,
  hasUmwidmung: pg.umwidmung > 0,
  entlastung: `${pg.entlastungsbetrag} €`,
  umwidmung: pg.umwidmung > 0 ? `bis ${pg.umwidmung.toLocaleString("de-DE")} €` : null,
  accentOpacity: pg.grad === 1 ? 0.4 : pg.grad === 2 ? 0.55 : pg.grad === 3 ? 0.7 : pg.grad === 4 ? 0.85 : 1,
  barPercent: pg.grad === 1 ? 12.5 : pg.grad === 2 ? 42.7 : pg.grad === 3 ? 69.5 : pg.grad === 4 ? 83.3 : 100,
  expandedNote:
    pg.grad === 1
      ? "Bei Pflegegrad 1 steht Ihnen der Entlastungsbetrag nach §45b zu. Eine Umwidmung ist ab Pflegegrad 2 möglich."
      : "Die Umwidmung gilt für nicht genutzte Pflegesachleistungen nach §36. Voraussetzung: Die Sachleistungen werden nicht bereits für einen ambulanten Pflegedienst eingesetzt. Seit 2022 ist kein gesonderter Antrag erforderlich.",
}));

const steps = [
  {
    Icon: ShieldCheck,
    title: "Entlastungsbetrag erhalten",
    text: "Jeder mit Pflegegrad 1–5 erhält automatisch 131 € monatlich nach §45b SGB XI.",
  },
  {
    Icon: RefreshCw,
    title: "Umwidmung prüfen",
    text: "Ab Pflegegrad 2: Bis zu 40 % der nicht genutzten Pflegesachleistungen (§36) können umgewandelt werden – seit 2022 ohne gesonderten Antrag.",
  },
  {
    Icon: TrendingUp,
    title: "Mehr Leistung erhalten",
    text: "So stehen Ihnen bis zu 1.051 € monatlich für Haushaltshilfe, Begleitung und Betreuung zur Verfügung – ohne Eigenanteil.",
  },
];

const services = [
  { Icon: House, title: "Haushaltshilfe", description: "Einkaufen, Kochen, Wäsche, Aufräumen" },
  { Icon: Footprints, title: "Alltagsbegleitung", description: "Spaziergänge, Arztbesuche, Behördengänge" },
  { Icon: Sparkles, title: "Haushaltsnahe Dienste", description: "Reinigung, Wohnungsordnung" },
  { Icon: Users, title: "Betreuung", description: "Gesellschaft, Gespräche, Aktivierung" },
  { Icon: HeartHandshake, title: "Entlastung für Angehörige", description: "Damit pflegende Angehörige durchatmen können" },
  { Icon: ShoppingCart, title: "Besorgungen & Einkäufe", description: "Regelmäßige Einkäufe und Erledigungen" },
];

const trustStats = [
  "Über 500 betreute Familien in Berlin",
  "Seit 2019 zugelassener Anbieter",
  "Direkte Kassenabrechnung",
];

const trustBadges = [
  "Zugelassen nach §45a SGB XI",
  "Anerkannt von allen Pflegekassen",
];

/* ── Reduced-motion hook ───────────────────────────── */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* ── Hero animated counter (131 → 1051) ────────────── */
function HeroCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(131);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) { setValue(end); return; }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startValue = 131;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(Math.round(startValue + eased * (end - startValue)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, reduced]);

  return <span ref={ref}>{value.toLocaleString("de-DE")}</span>;
}

/* ── Card animated counter (0 → N) ─────────────────── */
function CardCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) { setValue(end); return; }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, reduced]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

/* ── Motion helpers ────────────────────────────────── */
const fadeUp = (reduced: boolean, delay = 0) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay, duration: 0.5 },
      };

/* ── Pflegegrad Card ───────────────────────────────── */
function PflegegradCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: (typeof pflegegradData)[number];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isMax = item.pg === 5;

  return (
    <button
      onClick={onToggle}
      className="w-full h-full text-left rounded-2xl p-5 xl:p-6 transition-all duration-300 relative overflow-hidden group cursor-pointer focus:outline-none"
      style={{
        minHeight: "180px",
        background: isExpanded ? "rgba(255,255,255,0.1)" : C.w06,
        border: isExpanded ? `1px solid ${C.accent}` : `1px solid ${C.w12}`,
        boxShadow: isExpanded ? `0 0 20px rgba(46,196,182,0.15)` : "none",
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.borderColor = C.accent;
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(46,196,182,0.2), 0 0 0 1px rgba(46,196,182,0.5)";
          e.currentTarget.style.zIndex = "10";
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.borderColor = C.w12;
          e.currentTarget.style.background = C.w06;
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.zIndex = "auto";
        }
      }}
    >
      {/* Background bar */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-b-2xl transition-all duration-700"
        style={{
          height: `${item.barPercent * 0.6}%`,
          background: isMax
            ? "linear-gradient(180deg, rgba(0,255,209,0.15) 0%, rgba(0,255,209,0.03) 100%)"
            : `linear-gradient(180deg, rgba(46,196,182,${item.accentOpacity * 0.2}) 0%, rgba(46,196,182,0.02) 100%)`,
        }}
      />

      {/* PG5 glow */}
      {isMax && (
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
          style={{ background: "rgba(0,255,209,0.1)", filter: "blur(48px)" }}
        />
      )}

      <div className="relative z-10">
        <p style={{ ...fontBody, fontSize: "12px", fontWeight: 500, color: C.w60, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
          Pflegegrad {item.pg}
        </p>
        <p style={{ ...fontData, fontSize: "clamp(26px, 4vw, 32px)", fontWeight: 700, color: isMax ? C.accentBright : C.white, lineHeight: 1.1, marginBottom: "4px", whiteSpace: "nowrap" }}>
          <CardCounter end={item.amountNum} prefix={item.pg > 1 ? "bis " : ""} suffix={"\u00A0€"} />
        </p>
        <p style={{ ...fontBody, fontSize: "14px", color: C.w50 }}>
          {item.label}
        </p>
        <div className="mt-4 flex items-start gap-1.5" style={{ ...fontBody, fontSize: "12px", color: C.w40, minHeight: "32px" }}>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
            style={{ background: C.accent, opacity: item.accentOpacity }}
          />
          <span>{item.formula}</span>
        </div>
        <ChevronRight
          className={`absolute top-5 right-5 w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
          style={{ color: C.w30 }}
        />
      </div>
    </button>
  );
}

/* ── Expanded Detail Panel ─────────────────────────── */
function ExpandedDetail({
  item,
  reduced,
}: {
  item: (typeof pflegegradData)[number];
  reduced: boolean;
}) {
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, height: 0 }}
      animate={reduced ? {} : { opacity: 1, height: "auto" }}
      exit={reduced ? {} : { opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div
        className="mt-4 rounded-2xl backdrop-blur-sm p-6 md:p-8"
        style={{ background: C.w08, border: `1px solid rgba(46,196,182,0.4)` }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: amounts */}
          <div className="flex-1">
            <p style={{ ...fontBody, fontSize: "14px", fontWeight: 500, color: C.w60, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
              Pflegegrad {item.pg}
            </p>
            <p style={{ ...fontData, fontSize: "clamp(30px, 6vw, 40px)", fontWeight: 700, color: C.white, lineHeight: 1.1, marginBottom: "4px" }}>
              {item.amount}{" "}
              <span style={{ ...fontBody, fontSize: "18px", fontWeight: 400, color: C.w60 }}>
                pro Monat
              </span>
            </p>
            <p style={{ ...fontData, fontSize: "18px", fontWeight: 500, color: C.accent }}>
              {item.yearlyAmount} pro Jahr
            </p>
          </div>

          {/* Right: breakdown */}
          <div className="flex-1 max-w-md">
            <div className="rounded-xl p-4 md:p-5 space-y-3" style={{ background: C.w05, border: `1px solid ${C.w08}` }}>
              <div className="flex justify-between items-center">
                <span style={{ ...fontBody, fontSize: "14px", color: C.w70 }}>§45b Entlastungsbetrag</span>
                <span style={{ ...fontData, fontSize: "14px", fontWeight: 500, color: C.white }}>{item.entlastung}</span>
              </div>
              {item.hasUmwidmung && (
                <div className="flex justify-between items-center">
                  <span style={{ ...fontBody, fontSize: "14px", color: C.w70 }}>§45a Umwidmung (40 % von §36)</span>
                  <span style={{ ...fontData, fontSize: "14px", fontWeight: 500, color: C.white }}>+ {item.umwidmung}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3" style={{ borderTop: `1px solid ${C.w10}` }}>
                <span style={{ ...fontBody, fontSize: "15px", fontWeight: 600, color: C.white }}>Gesamt</span>
                <span style={{ ...fontData, fontSize: "18px", fontWeight: 700, color: C.accent }}>{item.amount}</span>
              </div>
            </div>
            <div className="flex gap-2.5 mt-4">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgba(46,196,182,0.6)" }} />
              <p style={{ ...fontBody, fontSize: "13px", color: C.w50, lineHeight: 1.6 }}>{item.expandedNote}</p>
            </div>
          </div>
        </div>

        {/* CTA inside panel */}
        <div className="mt-6 pt-5 flex flex-col sm:flex-row items-center gap-3" style={{ borderTop: `1px solid ${C.w10}` }}>
          <a
            href={`tel:${settings.company.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accentGreen})`, color: C.white, ...fontHeadings, fontSize: "14px", fontWeight: 600 }}
          >
            Anspruch prüfen
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Pflegegrad Grid ───────────────────────────────── */
function PflegegradGrid() {
  const [expandedPg, setExpandedPg] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  const toggle = (pg: number) => setExpandedPg(expandedPg === pg ? null : pg);
  const expandedItem = pflegegradData.find((d) => d.pg === expandedPg) ?? null;

  return (
    <div className="w-full">
      {/* Desktop: 5-col */}
      <div className="hidden lg:grid grid-cols-5 gap-3 xl:gap-4">
        {pflegegradData.map((item, i) => (
          <motion.div key={item.pg} {...fadeUp(reduced, i * 0.1)}>
            <PflegegradCard item={item} isExpanded={expandedPg === item.pg} onToggle={() => toggle(item.pg)} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {expandedItem && (
          <div className="hidden lg:block">
            <ExpandedDetail item={expandedItem} reduced={reduced} />
          </div>
        )}
      </AnimatePresence>

      {/* Tablet: 3 + 2 */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
        {pflegegradData.slice(0, 3).map((item, i) => (
          <motion.div key={item.pg} {...fadeUp(reduced, i * 0.1)}>
            <PflegegradCard item={item} isExpanded={expandedPg === item.pg} onToggle={() => toggle(item.pg)} />
          </motion.div>
        ))}
        <div className="col-span-3 grid grid-cols-2 gap-3 mt-0">
          {pflegegradData.slice(3).map((item, i) => (
            <motion.div key={item.pg} {...fadeUp(reduced, (i + 3) * 0.1)}>
              <PflegegradCard item={item} isExpanded={expandedPg === item.pg} onToggle={() => toggle(item.pg)} />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {expandedItem && (
            <div className="col-span-3">
              <ExpandedDetail item={expandedItem} reduced={reduced} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: horizontal carousel */}
      <div className="md:hidden">
        <div
          className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {pflegegradData.map((item, i) => (
            <motion.div
              key={item.pg}
              className="snap-center flex-shrink-0"
              style={{ width: "75vw", maxWidth: "300px" }}
              {...fadeUp(reduced, i * 0.08)}
            >
              <PflegegradCard item={item} isExpanded={expandedPg === item.pg} onToggle={() => toggle(item.pg)} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {pflegegradData.map((item) => (
            <div
              key={item.pg}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ background: expandedPg === item.pg ? C.accent : C.w20 }}
            />
          ))}
        </div>
        <AnimatePresence>
          {expandedItem && <ExpandedDetail item={expandedItem} reduced={reduced} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Hero Header ───────────────────────────────────── */
function HeroHeader() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.p
        style={{ ...fontHeadings, fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 500, color: C.accent, textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "20px" }}
        {...fadeUp(reduced)}
      >
        SO WIRD ES FINANZIERT
      </motion.p>

      <motion.h2
        className="mb-6"
        style={{ ...fontData, fontSize: "clamp(30px, 6vw, 52px)", fontWeight: 800, lineHeight: 1.1, color: C.white }}
        {...fadeUp(reduced, 0.1)}
      >
        <span>
          Bis zu <HeroCounter end={1051} /> € monatlich –
        </span>
        <br />
        <span style={{ ...fontHeadings, color: C.accent }}>
          von Ihrer Pflegekasse bezahlt.
        </span>
      </motion.h2>

      <motion.p
        style={{ ...fontBody, fontSize: "clamp(15px, 2.5vw, 17px)", color: C.w70, lineHeight: 1.65, maxWidth: "720px", margin: "0 auto" }}
        {...fadeUp(reduced, 0.2)}
      >
        Jeder Pflegebedürftige mit Pflegegrad 1–5 hat Anspruch auf den
        Entlastungsbetrag nach §45b SGB XI – und ab Pflegegrad 2 können
        Sie durch Umwidmung nach §45a noch deutlich mehr erhalten. Wir
        rechnen direkt mit Ihrer Kasse ab – für Sie entstehen keine Kosten.
      </motion.p>
    </div>
  );
}

/* ── Umwidmung Steps ───────────────────────────────── */
function UmwidmungSteps() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="w-full">
      <motion.h3
        className="text-center mb-10"
        style={{ ...fontHeadings, fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 700, color: C.white }}
        {...fadeUp(reduced)}
      >
        Wie funktioniert die Umwidmung?
      </motion.h3>

      {/* Desktop: 3-col with dashed line */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-3 gap-8 lg:gap-12">
          <div className="absolute top-8 left-[16.67%] right-[16.67%] h-px z-0" style={{ borderTop: `2px dashed ${C.w15}` }} />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative text-center"
              initial={reduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div
                className="relative z-10 mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "#0F2536", border: `1px solid ${C.w12}` }}
              >
                <step.Icon className="w-7 h-7" style={{ color: C.accent }} />
              </div>
              <h4 className="mb-2" style={{ ...fontHeadings, fontSize: "16px", fontWeight: 600, color: C.white }}>
                {step.title}
              </h4>
              <p className="max-w-[260px] mx-auto" style={{ ...fontBody, fontSize: "14px", color: C.w60, lineHeight: 1.6 }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative">
        <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: C.w10 }} />
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex gap-5 pl-2"
              initial={reduced ? undefined : { opacity: 0, x: -20 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: C.w06, border: `1px solid ${C.w12}` }}
              >
                <step.Icon className="w-5 h-5" style={{ color: C.accent }} />
              </div>
              <div>
                <h4 className="mb-1.5" style={{ ...fontHeadings, fontSize: "15px", fontWeight: 600, color: C.white }}>
                  {step.title}
                </h4>
                <p style={{ ...fontBody, fontSize: "13px", color: C.w60, lineHeight: 1.6 }}>
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Services Grid ─────────────────────────────────── */
function ServicesGrid() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="w-full">
      <motion.h3
        className="text-center mb-8"
        style={{ ...fontHeadings, fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 700, color: C.white }}
        {...fadeUp(reduced)}
      >
        Was ist mit diesem Budget möglich:
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
            style={{ background: C.w04, border: `1px solid ${C.w08}` }}
            initial={reduced ? undefined : { opacity: 0, y: 15 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.borderColor = C.w15;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.w04;
              e.currentTarget.style.borderColor = C.w08;
            }}
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(46,196,182,0.1)", border: "1px solid rgba(46,196,182,0.2)" }}
            >
              <svc.Icon className="w-5 h-5" style={{ color: C.accent }} />
            </div>
            <div>
              <h4 style={{ ...fontHeadings, fontSize: "15px", fontWeight: 600, color: C.white, marginBottom: "2px" }}>
                {svc.title}
              </h4>
              <p style={{ ...fontBody, fontSize: "13px", color: C.w50, lineHeight: 1.5 }}>
                {svc.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── CTA Button ────────────────────────────────────── */
function CTAButton() {
  const reduced = usePrefersReducedMotion();
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <motion.div className="text-center w-full" {...fadeUp(reduced)}>
      <a
        href={`tel:${settings.company.phone}`}
        className="inline-flex items-center gap-2.5 px-8 md:px-10 py-4 md:py-[18px] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentGreen})`,
          color: C.white,
          ...fontHeadings,
          fontSize: "clamp(16px, 2.5vw, 17px)",
          fontWeight: 600,
          boxShadow: isPulsing ? `0 8px 24px rgba(46,196,182,0.3)` : "0 4px 12px rgba(46,196,182,0.15)",
          minHeight: "48px",
        }}
      >
        Jetzt Anspruch prüfen – kostenlos
        <ChevronRight className="w-5 h-5" />
      </a>

      <p style={{ ...fontBody, fontSize: "13px", color: C.w45, marginTop: "16px", lineHeight: 1.5 }}>
        Kostenlose & unverbindliche Beratung · Wir prüfen Ihren maximalen Anspruch
      </p>

      <a
        href={`tel:${settings.company.phone}`}
        className="inline-flex items-center gap-2 mt-3 transition-colors"
        style={{ ...fontBody, fontSize: "14px", color: C.w70 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = C.w70)}
      >
        <Phone className="w-4 h-4" />
        Oder rufen Sie uns an: {settings.company.phoneFormatted}
      </a>
    </motion.div>
  );
}

/* ── Trust Footer ──────────────────────────────────── */
function TrustFooter() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div className="w-full" {...fadeUp(reduced)}>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {trustStats.map((stat, i) => (
          <Fragment key={i}>
            <span style={{ ...fontBody, fontSize: "13px", color: C.w45 }}>{stat}</span>
            {i < trustStats.length - 1 && (
              <span className="hidden sm:inline" style={{ color: C.w20 }}>·</span>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {trustBadges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: C.w04, border: `1px solid ${C.w08}`, ...fontBody, fontSize: "12px", color: C.w60 }}
          >
            <Check className="w-3.5 h-3.5" style={{ color: C.accent }} />
            {badge}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════════════ */
export default function FinancingSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: C.bg }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.accent}, transparent 70%)`, filter: "blur(160px)", opacity: 0.07 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="mb-14 md:mb-16">
          <HeroHeader />
        </div>

        <div className="mb-16 md:mb-20">
          <PflegegradGrid />
        </div>

        <div className="w-16 h-px mx-auto mb-14 md:mb-18" style={{ background: C.w10 }} />

        <div className="mb-16 md:mb-20">
          <UmwidmungSteps />
        </div>

        <div className="w-16 h-px mx-auto mb-14 md:mb-18" style={{ background: C.w10 }} />

        <div className="mb-16 md:mb-20">
          <ServicesGrid />
        </div>

        <div className="mb-12 md:mb-16">
          <CTAButton />
        </div>

        <TrustFooter />
      </div>
    </section>
  );
}
