import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LabPowerHero } from "@/components/labpower/lab-power-hero";
import { ServicesContent } from "@/components/labpower/services-content";
import { ServiceEstimator } from "@/components/labpower/service-estimator";
import { ServiceTracking } from "@/components/labpower/service-tracking";
import { StickyCTA } from "@/components/shared/sticky-cta";

export const metadata = {
  title: "LabPower - Servicio Técnico Apple | MacPower",
  description: "Centro Técnico Certificado Apple - Diagnóstico, reparación certificada y garantías extendidas con repuestos originales y técnicos certificados",
};

export default function LabPowerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LabPowerHero />
        <ServicesContent />
        <ServiceEstimator />
        <ServiceTracking />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
