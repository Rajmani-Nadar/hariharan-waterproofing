import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How HN Waterproofing handles your personal information and contact details.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Privacy policy" title="We handle your information with care and transparency." description="This policy explains the limited ways we collect, use, and protect personal data when you contact us or request a consultation." />
          <div className="mt-10 space-y-6 text-sm leading-8 text-slate-600">
            <p>We collect contact details such as your name, phone number, email address, and project information when you inquire about waterproofing services.</p>
            <p>We use this information to respond to your request, discuss your needs, and arrange a site assessment or consultation.</p>
            <p>We do not share your information casually and only disclose it where required to provide services or comply with legal obligations.</p>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
