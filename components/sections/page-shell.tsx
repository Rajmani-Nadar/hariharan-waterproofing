import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StickyMobileCta } from "@/components/ui/sticky-mobile-cta";
import { WhatsappFloat } from "@/components/ui/whatsapp-float";
import { PageTransition } from "@/components/ui/page-transition";
import { services } from "@/lib/content";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[linear-gradient(180deg,#f8f4ea_0%,#f6f3eb_100%)]">
        <ScrollProgress />
        <Navbar
          links={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Gallery", href: "/gallery" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "FAQ", href: "/faq" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          serviceItems={services.map((service) => ({
            label: service.title,
            href: `/services/${service.slug}`,
            description: service.description,
          }))}
        />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
        <WhatsappFloat />
      </div>
    </PageTransition>
  );
}
