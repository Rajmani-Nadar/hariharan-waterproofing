"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,76,92,0.22),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(45,106,79,0.16),transparent_38%),linear-gradient(135deg,#f7f4ec_0%,#f0ebdf_100%)]" />
      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 8, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-white/70 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute right-[6%] top-[10%] h-56 w-56 rounded-full bg-slate-950/10 blur-3xl"
      />
    </div>
  );
}
