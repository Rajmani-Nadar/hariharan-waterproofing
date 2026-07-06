"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export function AnimatedStats({
  stats,
}: {
  stats: Array<{ value: number; suffix?: string; label: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
        >
          <div className="text-3xl font-semibold tracking-[-0.02em] text-slate-950">
            <CountUp end={stat.value} duration={2.5} suffix={stat.suffix ?? ""} />
          </div>
          <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
