"use client";

import { Button } from "@/components/ui/button";

export function LabPowerHero() {
  const scrollToEstimator = () => {
    const estimator = document.getElementById('service-estimator');
    estimator?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%283%29-6WdePWoKHw2NOkRSrp8Jd8nSKEyWe0.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="flex flex-col items-center space-y-6 lg:space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
              LabPower – Servicio técnico especializado Apple
            </span>
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed text-white/90 text-pretty max-w-2xl">
            Diagnóstico, reparación y seguimiento de tu equipo con respaldo experto
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/75 text-pretty max-w-3xl">
            Centro Técnico Certificado Apple que protege, repara y extiende la vida útil de tu tecnología con procesos oficiales, repuestos originales y técnicos certificados.
          </p>
          <div className="pt-4">
            <Button
              onClick={scrollToEstimator}
              size="lg"
              className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 shadow-lg transition-all duration-300 rounded-full px-10 py-6 text-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50"
            >
              Cotizar mi servicio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
