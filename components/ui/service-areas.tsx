"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GlassCard } from "@/components/ui/glass-card";
import { MapPin } from "lucide-react";

const locationsLeft = [
  "Coimbatore City",
  "Gandhipuram",
  "Saibaba Colony",
  "Singanallur",
  "Vadavalli",
  "Ganapathy",
  "Sulur",
  "Tirupur",
];

const locationsRight = [
  "RS Puram",
  "Peelamedu",
  "Race Course",
  "Saravanampatti",
  "Thudiyalur",
  "Ondipudur",
  "Pollachi",
  "Mettupalayam",
];

export function ServiceAreas() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]"
    >
      <motion.div variants={fadeInUp}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Service areas</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Waterproofing Services Across Coimbatore Region
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            We provide professional waterproofing services throughout Coimbatore and surrounding areas within a 100km radius. Our team is ready to serve you wherever you are.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <motion.ul variants={fadeInUp} className="space-y-3 text-sm leading-7 text-slate-600">
            {locationsLeft.map((location) => (
              <li key={location} className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{location}</span>
              </li>
            ))}
          </motion.ul>
          <motion.ul variants={fadeInUp} className="space-y-3 text-sm leading-7 text-slate-600">
            {locationsRight.map((location) => (
              <li key={location} className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{location}</span>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.p variants={fadeInUp} className="mt-6 text-sm text-slate-500">
          + Many more locations within 100km radius of Coimbatore
        </motion.p>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <GlassCard className="p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-950">
            <MapPin className="h-7 w-7" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-slate-950">Serving 100km Radius</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">From our base in Coimbatore, we cover all nearby cities and towns.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            <MapPin className="h-4 w-4" />
            Coimbatore HQ
          </div>
        </GlassCard>
      </motion.div>
    </motion.section>
  );
}
