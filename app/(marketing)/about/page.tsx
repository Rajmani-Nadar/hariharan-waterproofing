import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Counters } from "@/components/ui/counters";
import { Timeline } from "@/components/ui/timeline";
import { CtaSection } from "@/components/ui/cta-section";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata = createMetadata({
  title: "About Northstar Waterproofing — Premium Building Protection",
  description: "Learn about our approach to waterproofing, our precision-led process, and the standards we bring to every project.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Northstar Waterproofing",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="About us" title="A premium waterproofing practice built on precision and trust." description="We exist to make building protection feel calm, clear, and dependable. Our work is rooted in diagnosis, durable systems, and careful workmanship." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Our philosophy</p>
              <p className="mt-4 text-sm leading-8 text-slate-600">We treat waterproofing as a long-term building strategy rather than a quick repair. That means identifying the real cause of failure, selecting the right system, and protecting the structure with care.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">What we stand for</p>
              <p className="mt-4 text-sm leading-8 text-slate-600">Transparent assessment, premium-grade material systems, and a commitment to workmanship that lasts through changing weather, use, and time.</p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Counters items={[{ value: 20, suffix: "+", label: "Years in waterproofing" }, { value: 4000, suffix: "+", label: "Projects delivered" }, { value: 98, suffix: "%", label: "Issue resolution rate" }, { value: 24, suffix: "/7", label: "Support availability" }]} />
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="How we work" title="A disciplined process built around trust." description="We move from inspection to implementation with clarity at every step." />
          <Timeline items={[{ title: "Site inspection", description: "We assess moisture ingress, failing joints, and environmental exposure in detail." }, { title: "System planning", description: "We create a treatment plan that is practical, site-specific, and durable." }, { title: "Installation and handover", description: "We manage execution carefully and leave you with a clear summary of the completed work." }]} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <CtaSection eyebrow="Start with a consultation" title="Let’s design a protection plan that fits your property and your priorities." description="We’ll help you understand the issue, the treatment scope, and the best path forward." />
      </SectionWrapper>
    </PageShell>
  );
}
