"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  title,
  description,
  points,
  icon,
  href,
  className,
}: {
  title: string;
  description: string;
  points?: string[];
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className={cn("relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_16px_60px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)]", className)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
            {icon ?? <ShieldCheck className="h-6 w-6" />}
          </div>
          <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          {points?.length ? (
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900">
            <span>Explore solution</span>
            <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white">
      {content}
    </Link>
  );
}
