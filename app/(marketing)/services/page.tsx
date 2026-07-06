import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaSection } from "@/components/ui/cta-section";
import { services } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata = createMetadata({
  title: "Waterproofing Services — Roof, Basement, Terrace, Wet Area Solutions",
  description: "Explore our premium waterproofing services for roofs, basements, terraces, wet areas, concrete repair, and expansion joint protection.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
        })),
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Services" title="Purpose-built waterproofing systems for every surface and building type." description="We combine material science, site assessment, and workmanship to protect what matters most." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                title={service.title}
                description={service.description}
                points={service.highlights}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="Need guidance?" title="Tell us what is leaking and we will outline the right treatment path." description="We offer clear recommendations for residential, commercial, and architectural projects." />
      </SectionWrapper>
    </PageShell>
  );
}
