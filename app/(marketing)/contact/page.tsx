import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { StructuredData } from "@/components/seo/structured-data";
import { AlertTriangle, Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact Hariharan Waterproofing — Free Inspection Booking",
  description: "Get in touch with Hariharan Waterproofing for a free inspection, service enquiry, or professional waterproofing consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Hariharan Waterproofing",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Contact" title="Start with a free inspection and a clear treatment plan." description="Share the issue, the property type, and your preferred contact details so we can arrange the right next step." />
          <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white"><PhoneCall className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Direct contact</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">Call or WhatsApp</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <li className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3"><span>Phone</span><a href="tel:+919999999999" className="font-medium text-slate-900 hover:text-slate-700">+91 99999 99999</a></li>
                  <li className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3"><span>WhatsApp</span><a href="https://wa.me/919999999999" className="font-medium text-slate-900 hover:text-slate-700">Message now</a></li>
                  <li className="flex items-center justify-between gap-3"><span>Emergency</span><span className="font-medium text-slate-900">24/7 response for urgent leaks</span></li>
                </ul>
              </GlassCard>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Office address</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">Service coverage across India</p>
                  </div>
                </div>
                <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Hariharan Waterproofing</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">No. 14, Industrial Layout, Bengaluru, Karnataka 560001</p>
                  <div className="mt-4 flex aspect-[16/10] items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_top_left,rgba(15,76,92,0.12),transparent_45%)] text-center text-sm font-medium text-slate-600">
                    Google Maps embed placeholder
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white"><Mail className="h-4 w-4" /></div>
                    <p className="mt-4 text-sm font-semibold text-slate-900">Email</p>
                    <a href="mailto:hello@hariharan.com" className="mt-2 block text-sm text-slate-600 hover:text-slate-900">hello@hariharan.com</a>
                  </div>
                  <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white"><Clock3 className="h-4 w-4" /></div>
                    <p className="mt-4 text-sm font-semibold text-slate-900">Working hours</p>
                    <p className="mt-2 text-sm text-slate-600">Mon–Sat · 8:00 AM – 7:00 PM</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-[1.25rem] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                  <AlertTriangle className="mt-0.5 h-4 w-4" />
                  <div>
                    <p className="font-semibold">Emergency support</p>
                    <p className="mt-1">Urgent moisture issues are addressed quickly with priority scheduling.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
