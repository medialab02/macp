import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/shared/lead-form";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-secondary py-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column - Copy */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Obtén una consultoría gratuita y descubre cómo nuestras soluciones pueden impulsar tu negocio.
            </p>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <p className="text-muted-foreground">Cuéntanos sobre tu empresa y necesidades</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <p className="text-muted-foreground">Recibe una propuesta personalizada en 24h</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <p className="text-muted-foreground">Implementamos tu solución con soporte completo</p>
              </div>
            </div>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                Contáctanos
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Agenda una consultoría sin costo con nuestros especialistas y recibe una propuesta tecnológica alineada a tus objetivos de negocio.
              </p>
            </div>
            <LeadForm source="home-cta-bant" variant="bant" />
          </div>
        </div>
      </div>
    </section>
  );
}
