"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function MegaMenu({
  items,
}: {
  items: Array<{ label: string; href: string; description?: string }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-slate-950"
      >
        Services <ChevronDown className="h-4 w-4" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="absolute left-0 top-full mt-4 w-[24rem] rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl"
          >
            <div className="grid gap-2">
              {items.map((item) => (
                <Link key={item.label} href={item.href} className="rounded-2xl p-3 transition hover:bg-slate-50">
                  <p className="font-medium text-slate-950">{item.label}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
