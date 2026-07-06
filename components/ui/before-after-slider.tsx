"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [range, setRange] = useState(50);

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-xl">
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <div className="relative aspect-[16/10] w-full bg-[linear-gradient(135deg,#f4efe5_0%,#dce7e5_100%)]" />
        <motion.div
          className="absolute inset-y-0 left-0 overflow-hidden"
          animate={{ width: `${range}%` }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-full w-[100vw] max-w-none bg-[linear-gradient(135deg,#112f3a_0%,#2d6a4f_100%)]" />
        </motion.div>
        <div className="absolute inset-x-0 top-4 flex justify-between px-4 text-sm font-medium text-white/90">
          <span>{beforeLabel}</span>
          <span>{afterLabel}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={range}
          onChange={(event) => setRange(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <div className="absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/90 shadow-lg" style={{ left: `${range}%` }} />
      </div>
    </div>
  );
}
