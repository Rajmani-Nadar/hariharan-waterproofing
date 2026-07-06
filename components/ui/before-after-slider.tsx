"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [range, setRange] = useState(55);

  return (
    <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
            alt="Before treatment condition"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
        </div>
        <motion.div className="absolute inset-y-0 left-0 overflow-hidden" animate={{ width: `${range}%` }} transition={{ duration: 0.2 }}>
          <div className="relative h-full w-[100vw] max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
              alt="After treatment condition"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
          </div>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-4 text-sm font-semibold text-white/95">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 shadow-[0_0_10px_rgba(0,0,0,0.2)]">{beforeLabel}</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 shadow-[0_0_12px_rgba(0,0,0,0.25)]">{afterLabel}</span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center px-4">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur">
            Drag to compare the transformation
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={range}
          onChange={(event) => setRange(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Before and after comparison"
        />
        <div className="pointer-events-none absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/90 shadow-lg" style={{ left: `${range}%` }} />
      </div>
    </div>
  );
}
