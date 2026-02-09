import { LeadForm } from "@/components/shared/lead-form";
import { TrustStrip } from "@/components/shared/trust-strip";

export function LandingCTA() {
  return (
    <section id="cotizar" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column - Copy */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              Solicita una cotización personalizada
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Cuéntanos sobre tu proyecto y recibe una propuesta adaptada a las necesidades de tu empresa en menos de 24 horas.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">Completa el formulario</p>
                  <p className="text-sm text-muted-foreground">
                    Cuéntanos sobre tu empresa y qué equipos necesitas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">Recibe tu propuesta</p>
                  <p className="text-sm text-muted-foreground">
                    Te enviaremos una cotización detallada en 24h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">Implementamos tu solución</p>
                  <p className="text-sm text-muted-foreground">
                    Despliegue, configuración y soporte incluidos
                  </p>
                </div>
              </div>
            </div>

            <TrustStrip variant="compact" className="justify-start" />
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <LeadForm source="mac-landing" />
          </div>
        </div>
      </div>
    </section>
  );
}
