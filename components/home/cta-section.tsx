import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/shared/lead-form";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column - Copy */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance tracking-tight">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Agenda una consultoría sin costo con nuestros especialistas y descubre soluciones diseñadas para tu organización.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)]">
                  <span className="text-base font-bold text-black">1</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">Comparte los desafíos tecnológicos de tu organización</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)]">
                  <span className="text-base font-bold text-black">2</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">Recibe una propuesta técnica y comercial en menos de 24 horas</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)]">
                  <span className="text-base font-bold text-black">3</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">Implementación con acompañamiento técnico de principio a fin</p>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:border-[rgb(0,255,227)] hover:bg-[rgb(0,255,227)]/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                Hablar con un asesor
              </a>
            </Button>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border-2 border-border bg-card p-6 md:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Agenda una consultoría sin costo
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Completa el formulario y un especialista te contactará en menos de 2 horas
              </p>
            </div>
            <LeadForm source="home-cta-bant" variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
