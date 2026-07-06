"use client";

import { motion } from "framer-motion";

export function AnimatedRain({ intensity = 24 }: { intensity?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: intensity }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute top-[-10%] h-[14px] w-[1px] rounded-full bg-white/70"
          initial={{ y: -20, x: 0, opacity: 0 }}
          animate={{ y: [0, 1200], x: [0, 8], opacity: [0, 0.75, 0] }}
          transition={{ duration: 1.2 + (index % 7) * 0.08, repeat: Number.POSITIVE_INFINITY, delay: (index % 8) * 0.12, ease: "linear" }}
          style={{ left: `${(index * 100) / intensity}%` }}
        />
      ))}
    </div>
  );
}
