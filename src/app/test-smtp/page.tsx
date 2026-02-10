"use client";

import { useState } from "react";

export default function TestSmtpPage() {
    const [formData, setFormData] = useState({
        to: "",
        subject: "Test Email from Localhost",
        message: "This is a test email sent via Hetzner SMTP from the local dev environment.",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [responseMsg, setResponseMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setResponseMsg("");

        try {
            const res = await fetch("/api/test-smtp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setResponseMsg(`Success: ${data.message} (ID: ${data.messageId})`);
            } else {
                setStatus("error");
                setResponseMsg(`Error: ${data.error}`);
            }
        } catch (error: any) {
            setStatus("error");
            setResponseMsg(`Network error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">SMTP Test Tool</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">To Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={formData.to}
                            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                            placeholder="recipient@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {status === "submitting" ? "Sending..." : "Send Test Email"}
                    </button>
                </form>

                {responseMsg && (
                    <div className={`mt-4 p-3 rounded text-sm ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {responseMsg}
                    </div>
                )}
            </div>
        </div>
    );
}
