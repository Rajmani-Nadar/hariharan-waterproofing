import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata = createMetadata({
  title: "Contact Northstar Waterproofing — Free Inspection Booking",
  description: "Get in touch with Northstar Waterproofing for a free inspection, service enquiry, or professional waterproofing consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Northstar Waterproofing",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Contact" title="Start with a free inspection and a clear treatment plan." description="Share the issue, the property type, and your preferred contact details so we can arrange the right next step." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Reach us</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li>Phone: +91 99999 99999</li>
                <li>Email: hello@northstar.com</li>
                <li>Service area: India-wide</li>
              </ul>
            </GlassCard>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
