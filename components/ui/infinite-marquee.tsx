"use client";

import { motion } from "framer-motion";

export function InfiniteMarquee({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 py-4 shadow-sm backdrop-blur">
      <motion.div
        animate={{ x: direction === "left" ? [0, -1200] : [-1200, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex w-max gap-4 whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
