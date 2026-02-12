import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroAbout } from "@/components/nosotros/hero-about";
import { HistoryTabs } from "@/components/nosotros/history-tabs";
import { TeamSection } from "@/components/nosotros/team-section";
import { PartnersTab } from "@/components/nosotros/partners-tab";
import { NewsletterCTA } from "@/components/nosotros/newsletter-cta";
import { StickyCTA } from "@/components/shared/sticky-cta";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroAbout />
        <HistoryTabs />
        <TeamSection />
        <PartnersTab />
        <NewsletterCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
