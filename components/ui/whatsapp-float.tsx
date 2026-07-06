"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsappFloat({ href = "https://wa.me/" }: { href?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_16px_45px_rgba(16,185,129,0.35)] transition hover:scale-105"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
