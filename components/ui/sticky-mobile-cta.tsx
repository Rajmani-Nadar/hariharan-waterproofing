"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta({ href = "/contact" }: { href?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:hidden">
      <Link href={href} className="flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white">
        Book free inspection <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
