import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedStats } from "@/components/ui/animated-stats";
import { Timeline } from "@/components/ui/timeline";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { services } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return createMetadata({ title: "Service Not Found", description: "The requested service page could not be found.", path: "/services" });
  }

  return createMetadata({
    title: `${service.title} — Premium Waterproofing Solutions`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <Link href="/services" className="text-sm font-medium text-slate-500">← Back to services</Link>
          <SectionHeading eyebrow={service.shortTitle} title={service.title} description={service.intro} className="mt-6" />
          <AnimatedStats stats={service.stats.map((stat) => ({ value: Number(stat.value.replace(/[^0-9.]/g, "")), suffix: stat.value.replace(/[0-9.]/g, ""), label: stat.label }))} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Service highlights</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {service.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
              </ul>
            </GlassCard>
            <GlassCard className="p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Our approach</p>
              <p className="mt-4 text-sm leading-8 text-slate-600">We treat each service as a complete system by combining correct diagnosis, suitable materials, and detail-led installation.</p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading eyebrow="Treatment process" title="What the project looks like in practice" description="Our process keeps each step clear, measurable, and site-safe." />
          <Timeline items={service.process} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <SectionHeading eyebrow="Frequently asked" title="Questions we hear most about this service" description="A clear answer helps you make confident decisions before work begins." />
        <div className="mt-8">
          <FaqAccordion items={service.faqs} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <CtaSection eyebrow="Schedule a consultation" title={`Protect your ${service.shortTitle.toLowerCase()} with a precision-led treatment plan.`} description="We can recommend the ideal system for your property, environment, and performance goals." />
      </SectionWrapper>
    </PageShell>
  );
}
