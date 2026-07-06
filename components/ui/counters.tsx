"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export function Counters({ items }: { items: Array<{ value: number; label: string; suffix?: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[1.35rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.04)]"
        >
          <p className="text-3xl font-semibold tracking-[-0.02em] text-slate-950">
            <CountUp end={item.value} duration={2.6} suffix={item.suffix ?? ""} />
          </p>
          <p className="mt-2 text-sm text-slate-600">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
