"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnimatedButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.01, boxShadow: "0 18px 45px rgba(15,76,92,0.16)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-950 px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );

  return content;
}
