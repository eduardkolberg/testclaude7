"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    pflegegrad?: number;
    plz?: string;
    services?: string[];
    budget?: number;
  };
}

export default function LeadFormModal({ isOpen, onClose, prefillData }: LeadFormModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pflegegrad: prefillData?.pflegegrad || 0,
    plz: prefillData?.plz || "",
    message: "",
    datenschutz: false,
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.datenschutz) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          pflegegrad: formData.pflegegrad,
          plz: formData.plz,
          message: formData.message,
          services: prefillData?.services,
          budget: prefillData?.budget,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        router.push(`/danke?id=${data.id || ""}`);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[24px] w-full max-w-[560px] max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.2)" }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-[24px] px-8 pt-8 pb-4 border-b border-[#E0E7E9] flex items-center justify-between z-10">
          <h2
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#0D2137",
            }}
          >
            Kostenlose Erstberatung
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-[#F7FAFA] flex items-center justify-center transition-colors"
            aria-label="Schließen"
          >
            <svg className="w-5 h-5 text-[#78909C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
            aria-hidden="true"
          />

          <div>
            <label htmlFor="lead-name" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Ihr Name *
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
              style={{ fontSize: "16px" }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-phone" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                Telefon *
              </label>
              <input
                id="lead-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div>
              <label htmlFor="lead-email" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                E-Mail
              </label>
              <input
                id="lead-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-pflegegrad" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                Pflegegrad
              </label>
              <select
                id="lead-pflegegrad"
                value={formData.pflegegrad}
                onChange={(e) => setFormData({ ...formData, pflegegrad: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors bg-white"
                style={{ fontSize: "16px" }}
              >
                <option value={0}>Nicht bekannt</option>
                {[1, 2, 3, 4, 5].map((g) => (
                  <option key={g} value={g}>Pflegegrad {g}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="lead-plz" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                PLZ
              </label>
              <input
                id="lead-plz"
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={formData.plz}
                onChange={(e) => setFormData({ ...formData, plz: e.target.value })}
                className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-message" className="block mb-1.5" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Ihre Nachricht (optional)
            </label>
            <textarea
              id="lead-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors resize-none"
              style={{ fontSize: "16px" }}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.datenschutz}
              onChange={(e) => setFormData({ ...formData, datenschutz: e.target.checked })}
              className="mt-1 w-5 h-5 accent-[#00838F]"
            />
            <span style={{ fontSize: "14px", color: "#78909C", lineHeight: 1.5 }}>
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <a href="/datenschutz" target="_blank" className="text-[#00838F] underline">Datenschutzerklärung</a> zu. *
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 text-white rounded-[12px] transition-all hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "var(--font-size-btn)",
              fontWeight: 700,
              border: "none",
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
            }}
          >
            {status === "sending" ? "Wird gesendet..." : "Kostenlose Beratung anfragen"}
          </button>

          {status === "error" && (
            <p style={{ fontSize: "14px", color: "#ef4444", textAlign: "center" }}>
              Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
