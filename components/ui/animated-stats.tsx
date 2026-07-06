"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export function AnimatedStats({
  stats,
}: {
  stats: Array<{ value: number; suffix?: string; label: string; icon?: React.ReactNode; accent?: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent ?? "from-slate-900/5 to-cyan-500/10"}`} />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <div className="text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                <CountUp start={0} end={stat.value} duration={2.8} suffix={stat.suffix ?? ""} />
              </div>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{stat.label}</p>
            </div>
            {stat.icon ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-900 shadow-sm">
                {stat.icon}
              </div>
            ) : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
