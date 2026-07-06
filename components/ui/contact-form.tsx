"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <form
      className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-600">
          <span className="mb-2 block font-medium text-slate-900">Name</span>
          <input name="name" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" placeholder="Your name" />
        </label>
        <label className="text-sm text-slate-600">
          <span className="mb-2 block font-medium text-slate-900">Phone</span>
          <input name="phone" type="tel" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" placeholder="Phone number" />
        </label>
      </div>
      <label className="mt-4 block text-sm text-slate-600">
        <span className="mb-2 block font-medium text-slate-900">Property type</span>
        <input name="property" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" placeholder="Residential / commercial" />
      </label>
      <label className="mt-4 block text-sm text-slate-600">
        <span className="mb-2 block font-medium text-slate-900">Tell us about the issue</span>
        <textarea name="message" required className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" placeholder="Describe the leak, moisture, or damage" />
      </label>
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-75">
        {isSubmitting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Submitting" : "Request inspection"}
      </button>
      <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        <span>Rapid response within one business day.</span>
      </div>
      {submitted ? <p className="mt-4 text-sm font-medium text-emerald-700" aria-live="polite">Thanks — we’ll contact you shortly.</p> : null}
    </form>
  );
}
