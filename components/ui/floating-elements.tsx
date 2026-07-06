"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FloatingElements({ count = 5 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 4 + index * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute rounded-full border border-slate-200 bg-white/80 p-3 shadow-sm"
          style={{
            top: `${10 + index * 12}%`,
            left: `${8 + (index % 3) * 22}%`,
          }}
        >
          <Sparkles className="h-4 w-4 text-slate-700" />
        </motion.div>
      ))}
    </div>
  );
}
