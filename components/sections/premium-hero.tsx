"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatedRain } from "@/components/ui/animated-rain";
import { WaterRipple } from "@/components/ui/water-ripple";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { HeroBackground } from "@/components/ui/hero-background";
import { FloatingElements } from "@/components/ui/floating-elements";

export function PremiumHero() {
  const [, setPointer] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 70, damping: 20 });
  const springY = useSpring(y, { stiffness: 70, damping: 20 });
  const rotateX = useTransform(springY, [-1, 1], [6, -6]);
  const rotateY = useTransform(springX, [-1, 1], [-6, 6]);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - rect.left) / rect.width - 0.5;
    const nextY = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: nextX, y: nextY });
    x.set(nextX);
    y.set(nextY);
  };

  return (
    <SectionWrapper className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 px-0 py-0 shadow-[0_30px_120px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:rounded-[3rem]">
      <HeroBackground className="rounded-[inherit]" />
      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_55%)]" />
      <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-6 right-6 h-56 w-56 rounded-full bg-slate-900/10 blur-3xl" />
      <AnimatedRain intensity={24} />
      <FloatingElements count={5} />
      <div className="relative z-10 grid gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24 xl:px-12">
        <motion.div
          onMouseMove={handlePointerMove}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
            setPointer({ x: 0, y: 0 });
          }}
          className="flex flex-col justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div style={{ rotateX, rotateY }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/75 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-slate-900" />
              Premium protection for homes, offices, and architectural landmarks
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Waterproofing that protects what matters most.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              We combine precise diagnosis, durable systems, and calm project delivery to keep every property dry, resilient, and protected for the long term.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact">Book a free inspection</AnimatedButton>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white/75 px-3 py-2 shadow-sm">Monsoon-ready systems</span>
              <span className="rounded-full border border-slate-200 bg-white/75 px-3 py-2 shadow-sm">Transparent diagnostics</span>
              <span className="rounded-full border border-slate-200 bg-white/75 px-3 py-2 shadow-sm">Long-term craftsmanship</span>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
              Trusted by homeowners, architects, and property teams
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            className="relative h-[430px] w-full max-w-[520px] rounded-[2.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:h-[480px]"
            style={{ rotateX, rotateY }}
          >
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(15,76,92,0.12),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(240,235,223,0.92))]" />
            <div className="absolute inset-4 overflow-hidden rounded-[1.75rem] border border-white/70 bg-slate-950/90 text-white shadow-inner sm:inset-5">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Professional waterproofing technician inspecting a roof and exterior surface"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                Free inspection
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Inspection outcome</p>
                    <p className="mt-2 text-2xl font-semibold">Dryness restored</p>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Moisture ingress</span>
                    <span>95% reduced</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-3 top-8 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              Monsoon-ready
            </div>
            <div className="absolute -right-3 bottom-8 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              Certified workmanship
            </div>
            <div className="absolute bottom-8 left-8">
              <WaterRipple className="relative h-24 w-24 rounded-full bg-white/45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          <span>Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-300/70 bg-white/70">
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="mt-1 h-2 w-1 rounded-full bg-slate-700" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
