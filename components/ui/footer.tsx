import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-5 py-14 backdrop-blur sm:px-8 lg:px-10 lg:py-16 xl:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Hariharan Waterproofing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-950">Premium protection for every surface.</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            We combine diagnostic precision, premium materials, and craftsmanship to stop leaks before they become expensive damage.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-950">Quick links</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/services" className="hover:text-slate-950">Services</Link></li>
              <li><Link href="/process" className="hover:text-slate-950">Process</Link></li>
              <li><Link href="/about" className="hover:text-slate-950">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 99999 99999</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@hariharan.com</li>
              <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Free inspection available</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
