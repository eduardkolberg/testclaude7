"use client";

import { useState } from "react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface CallbackFormProps {
  endpoint?: string;
  labels?: {
    name?: string;
    phone?: string;
    time?: string;
    submit?: string;
    submitting?: string;
    successTitle?: string;
    successMessage?: string;
    error?: string;
  };
}

export default function CallbackForm({
  endpoint = "/api/leads",
  labels = {
    name: "Ihr Name",
    phone: "Telefonnummer",
    time: "Bevorzugte Rückrufzeit",
    submit: "Rückruf anfordern",
    submitting: "Wird gesendet...",
    successTitle: "Wir rufen Sie zurück!",
    successMessage: "In der Regel innerhalb von 2 Stunden.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
}: CallbackFormProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", time: "vormittags", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Bot trap

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "callback",
          name: formData.name,
          phone: formData.phone,
          preferredTime: formData.time,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", time: "vormittags", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center p-6">
        <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#66BB6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px", fontWeight: 600, color: "#0D2137" }}>
          {labels.successTitle}
        </p>
        <p style={{ fontSize: "15px", color: "#78909C", marginTop: "8px" }}>
          {labels.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot - hidden from users */}
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

      <Input
        label={labels.name}
        id="cb-name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Max Mustermann"
        fullWidth
      />

      <Input
        label={labels.phone}
        id="cb-phone"
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="030 123 456 789"
        fullWidth
      />

      <Select
        label={labels.time}
        id="cb-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        options={[
          { value: "vormittags", label: "Vormittags (9-12 Uhr)" },
          { value: "nachmittags", label: "Nachmittags (12-15 Uhr)" },
          { value: "spaetnachmittags", label: "Spätnachmittag (15-18 Uhr)" },
        ]}
        fullWidth
      />

      <Button
        type="submit"
        disabled={status === "sending"}
        fullWidth
      >
        {status === "sending" ? labels.submitting : labels.submit}
      </Button>

      {status === "error" && (
        <p style={{ fontSize: "14px", color: "#ef4444", textAlign: "center" }}>
          {labels.error}
        </p>
      )}
    </form>
  );
}

