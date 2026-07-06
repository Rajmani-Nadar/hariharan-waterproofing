"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-600">
          <span className="mb-2 block font-medium text-slate-900">Name</span>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Your name" />
        </label>
        <label className="text-sm text-slate-600">
          <span className="mb-2 block font-medium text-slate-900">Phone</span>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Phone number" />
        </label>
      </div>
      <label className="mt-4 block text-sm text-slate-600">
        <span className="mb-2 block font-medium text-slate-900">Property type</span>
        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Residential / commercial" />
      </label>
      <label className="mt-4 block text-sm text-slate-600">
        <span className="mb-2 block font-medium text-slate-900">Tell us about the issue</span>
        <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Describe the leak, moisture, or damage" />
      </label>
      <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
        <Send className="h-4 w-4" />
        Request inspection
      </button>
      {submitted ? <p className="mt-4 text-sm text-emerald-700">Thanks — we’ll contact you shortly.</p> : null}
    </form>
  );
}
