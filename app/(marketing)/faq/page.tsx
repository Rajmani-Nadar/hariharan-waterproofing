import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqs } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";
import { CtaSection } from "@/components/ui/cta-section";

export const metadata = createMetadata({
  title: "FAQ — Waterproofing Questions Answered Clearly",
  description: "Find answers to common waterproofing questions about leaks, materials, treatment timelines, and property protection.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="FAQ" title="Straightforward answers for common waterproofing concerns." description="We believe that clear information creates confidence, especially when the problem impacts your home or business." />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="Still have questions?" title="Let’s talk through your property and the concern you are trying to resolve." description="We are happy to provide guidance based on the condition and use of your building." />
      </SectionWrapper>
    </PageShell>
  );
}
