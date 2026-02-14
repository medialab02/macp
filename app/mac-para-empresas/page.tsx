import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LandingHero } from "@/components/mac-landing/landing-hero";
import { WhyMacSection } from "@/components/mac-landing/why-mac-section";
import { MacWizard } from "@/components/mac-landing/mac-wizard";
import { ServicesCards } from "@/components/shared/services-cards";
import { FeaturedCatalog } from "@/components/mac-landing/featured-catalog";
import { CaseStudyCards } from "@/components/shared/case-study-cards";
import { FAQSection } from "@/components/mac-landing/faq-section";
import { LandingCTA } from "@/components/mac-landing/landing-cta";
import { StickyCTA } from "@/components/shared/sticky-cta";
import { OffersSection } from "@/components/shared/offers-section";

export const metadata = {
  title: "Mac para Empresas | MacPower - Apple Business Partner",
  description: "Soluciones Mac empresariales con despliegue zero-touch, gestión MDM y soporte certificado. Cotiza equipos Apple para tu empresa.",
};

export default function MacParaEmpresasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LandingHero />
        <WhyMacSection />
        <MacWizard />

        {/* Services section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Servicios para empresas
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Acompañamos a tu organización en todo el ciclo de vida del ecosistema Apple: desde la implementación hasta el soporte continuo.
              </p>
            </div>
            <ServicesCards />
          </div>
        </section>

        <FeaturedCatalog />

        {/* Case studies section */}


        <FAQSection />
        <LandingCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
