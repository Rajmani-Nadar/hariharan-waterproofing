"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MegaMenu } from "@/components/ui/mega-menu";
import { PremiumButton } from "@/components/ui/premium-button";

export function Navbar({
  links,
  serviceItems,
}: {
  links: Array<{ label: string; href: string; description?: string }>;
  serviceItems?: Array<{ label: string; href: string; description?: string }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
          Hariharan
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) =>
            link.label === "Services" ? (
              <MegaMenu
                key={link.label}
                items={serviceItems ?? links.filter((item) => item.label !== "Services").map((item) => ({ label: item.label, href: item.href, description: item.description ?? "" }))}
              />
            ) : (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <PremiumButton href="/contact">Book inspection</PremiumButton>
        </div>
        <button className="rounded-full border border-slate-200 p-2 lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 sm:px-8">
              {links.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-700">
                  {link.label}
                </Link>
              ))}
              <PremiumButton href="/contact" className="mt-2 w-full justify-center">Book inspection</PremiumButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
