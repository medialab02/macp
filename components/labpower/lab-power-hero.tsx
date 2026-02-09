"use client";

import { Button } from "@/components/ui/button";

export function LabPowerHero() {
  const scrollToEstimator = () => {
    const estimator = document.getElementById('service-estimator');
    estimator?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="flex flex-col items-center space-y-6 lg:space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
              LabPower – Servicio técnico especializado Apple
            </span>
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Diagnóstico, reparación y seguimiento de tu equipo con respaldo experto
          </p>
          <div className="pt-4">
            <Button
              onClick={scrollToEstimator}
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-10 py-6 text-lg shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30"
            >
              Cotizar mi servicio
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute top-1/2 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
