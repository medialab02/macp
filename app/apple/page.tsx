import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppleHero } from "@/components/apple/apple-hero";
import { AppleInsights } from "@/components/apple/apple-insights";
import { AppleCategories } from "@/components/apple/apple-categories";
import { StickyCTA } from "@/components/shared/sticky-cta";

export const metadata = {
  title: "Apple | MacPower - Apple Business Partner",
  description: "Soluciones Apple para individuos, empresas y educación. Equipos, servicios y soporte especializado.",
};

export default function ApplePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AppleHero />
        <AppleInsights />
        <AppleCategories />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
