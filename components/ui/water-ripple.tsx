"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function WaterRipple({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const circles = gsap.utils.toArray<HTMLElement>(ref.current.querySelectorAll(".ripple-circle"));

    circles.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0.6, opacity: 0.2 },
        {
          scale: 1.4,
          opacity: 0,
          duration: 3.4 + index * 0.5,
          repeat: -1,
          ease: "power2.out",
          delay: index * 0.4,
        },
      );
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      <div className="ripple-circle absolute inset-0 rounded-full border border-slate-300/60" />
      <div className="ripple-circle absolute inset-2 rounded-full border border-slate-300/40" />
      <div className="ripple-circle absolute inset-6 rounded-full border border-slate-300/30" />
    </div>
  );
}
