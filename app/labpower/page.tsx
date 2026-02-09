import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LabPowerHero } from "@/components/labpower/lab-power-hero";
import { ServiceEstimator } from "@/components/labpower/service-estimator";
import { ServiceTracking } from "@/components/labpower/service-tracking";
import { StickyCTA } from "@/components/shared/sticky-cta";

export const metadata = {
  title: "LabPower - Servicio Técnico Apple | MacPower",
  description: "Diagnóstico, reparación y seguimiento de tu equipo Apple con respaldo experto",
};

export default function LabPowerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LabPowerHero />
        <ServiceEstimator />
        <ServiceTracking />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
