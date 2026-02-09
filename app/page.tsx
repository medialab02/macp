import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { ApplePartnerSection } from "@/components/home/apple-partner-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PartnersSection } from "@/components/home/partners-section";
import { EventsSection } from "@/components/home/events-section";
import { BlogSection } from "@/components/home/blog-section";
import { CTASection } from "@/components/home/cta-section";
import { StickyCTA } from "@/components/shared/sticky-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <SolutionsSection />
        <ApplePartnerSection />
        <PartnersSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
