import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { PremiumHero } from "@/components/sections/premium-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { AnimatedStats } from "@/components/ui/animated-stats";
import { Counters } from "@/components/ui/counters";
import { Timeline } from "@/components/ui/timeline";
import { Testimonials } from "@/components/ui/testimonials";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { Gallery } from "@/components/ui/gallery";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/ui/contact-form";
import { services, testimonials as testimonialData, faqs, projects } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";
import { ShieldCheck, Droplets, House, Sparkles } from "lucide-react";

export const metadata = createMetadata({
  title: "Premium Waterproofing Services for Long-Term Building Protection",
  description: "Discover premium waterproofing solutions for roof, basement, terrace, and wet-area protection with transparent diagnostics and lasting craftsmanship.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Hariharan Waterproofing",
          url: "https://hariharan-waterproofing.com",
          telephone: "+919999999999",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          description: "Premium waterproofing services for residential and commercial properties.",
          areaServed: "India",
        }}
      />
      <PremiumHero />
      <SectionWrapper className="bg-transparent">
        <div className="grid gap-4 md:grid-cols-3">
          <GlassCard className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Droplets className="h-6 w-6" /></div>
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Waterproofing expertise</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Engineered systems tailored to roof, basement, terrace, and wet-area conditions.</p>
          </GlassCard>
          <GlassCard className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><House className="h-6 w-6" /></div>
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Property protection</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">We preserve interiors, finishes, and structural integrity from recurring moisture exposure.</p>
          </GlassCard>
          <GlassCard className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Sparkles className="h-6 w-6" /></div>
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Premium execution</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Every detail is planned, documented, and completed with long-term durability in mind.</p>
          </GlassCard>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Why waterproofing matters" title="Moisture problems become expensive when ignored." description="We help property owners stop leaks at the source, protect their interiors, and avoid unnecessary rebuild costs." />
          <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600">Inspection-led treatment with measurable outcomes</div>
        </div>
        <AnimatedStats stats={[{ value: 98, suffix: "%", label: "Leak resolution success" }, { value: 20, suffix: "+", label: "Years of applied experience" }, { value: 10, suffix: " yrs", label: "Typical system durability" }]} />
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <SectionHeading eyebrow="Core services" title="Specialized systems for every part of the building" description="From roofs to wet areas, our solutions are tailored to the surface, use case, and climate exposure." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} title={service.title} description={service.description} points={service.highlights} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading eyebrow="Our process" title="A calm, disciplined path from diagnosis to protection" description="Every project follows a clear sequence designed to reduce uncertainty and deliver consistent outcomes." />
          <Timeline items={[{ title: "Inspection and diagnosis", description: "We inspect moisture pathways, surfaces, joints, and prior repairs with a practical eye for root causes." }, { title: "System specification", description: "We recommend the system that best matches the substrate, exposure, and performance goals." }, { title: "Installation and verification", description: "We execute with detail-led craftsmanship and verify the finished barrier before handover." }]} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Before and after" title="Proof that durable waterproofing changes the outcome" description="See how moisture protection transforms a vulnerable surface into a resilient, low-risk asset." />
          <BeforeAfterSlider />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading eyebrow="Gallery preview" title="Trusted by homeowners, architects, and property managers" description="Our projects balance technical performance with a calm, well-managed site experience." />
        <div className="mt-10">
          <Gallery items={projects.slice(0, 3).map((project) => ({ src: project.image, alt: project.title }))} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <SectionHeading eyebrow="Client perspective" title="Professionally delivered and genuinely reassuring" description="Clients value our thoughtful communication, decisive execution, and lasting results." />
        <div className="mt-10">
          <Testimonials items={testimonialData} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Frequently asked" title="Clear answers for high-stakes decisions" description="The right waterproofing plan starts with honest, practical guidance." />
          <FaqAccordion items={faqs} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <SectionHeading eyebrow="From the journal" title="Useful knowledge for building owners and property managers" description="Practical insights on leaks, maintenance, and long-term building care." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Why roof leaks return after a quick repair", description: "A practical guide to identifying recurring moisture sources before they spread." },
            { title: "Five signs your basement needs waterproofing attention", description: "What to watch for before dampness becomes a structural problem." },
            { title: "How to maintain waterproofing after the monsoon season", description: "A light maintenance routine that protects performance year-round." },
          ].map((post) => (
            <GlassCard key={post.title} className="p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Knowledge</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Contact preview" title="Schedule an inspection with clarity and confidence" description="Share the issue and we’ll outline the right next steps for diagnosis, treatment, and protection." />
          <ContactForm />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <CtaSection eyebrow="Book your inspection" title="Let’s make your building dry, resilient, and protected." description="Start with a professional diagnosis and a clear plan for waterproofing that lasts." />
      </SectionWrapper>
    </PageShell>
  );
}
