"use client";

import { Shield, Settings, Layers, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const pillars = [
  {
    id: "security",
    icon: Shield,
    title: "Seguridad Enterprise",
    subtitle: "Protección empresarial en cada capa del sistema.",
    description: "Arquitectura de seguridad diseñada para minimizar riesgos operativos y fortalecer el cumplimiento corporativo.",
    bullets: [
      "Secure Enclave y autenticación biométrica",
      "Cifrado completo con FileVault (AES-256)",
      "Integridad del sistema (SIP) y actualizaciones firmadas",
      "Gestión de políticas de seguridad vía MDM",
    ],
  },
  {
    id: "management",
    icon: Settings,
    title: "Gestión centralizada a escala",
    subtitle: "Control total del ciclo de vida del dispositivo desde una sola consola.",
    description: "Menos carga para TI. Más control, trazabilidad y eficiencia administrativa.",
    bullets: [
      "Apple Business Manager (ABM)",
      "Integración con soluciones MDM",
      "Despliegue zero-touch: equipos listos desde el primer encendido",
      "Configuración remota de políticas y restricciones",
      "Distribución automática de aplicaciones",
      "Inventario y reportes en tiempo real",
    ],
  },
  {
    id: "compatibility",
    icon: Layers,
    title: "Integración sin fricciones",
    subtitle: "Mac no reemplaza tu infraestructura. La potencia.",
    description: "Tecnología que mejora la experiencia del equipo y fortalece la retención de talento.",
    bullets: [
      "Compatible con Microsoft Entra ID y Active Directory",
      "Soporte nativo para Microsoft 365 y Google Workspace",
      "VPNs empresariales y entornos proxy",
      "Virtualización de Windows (Parallels)",
      "APIs para integraciones personalizadas",
    ],
  },
  {
    id: "productivity",
    icon: Zap,
    title: "Productividad y continuidad operativa",
    subtitle: "Mayor satisfacción del empleado, menor tiempo de inactividad y mejor ROI.",
    description: "Tecnología que mejora la experiencia del equipo y fortalece la retención de talento.",
    bullets: [
      "Hasta 22 horas de batería",
      "Rendimiento sostenido con Apple Silicon",
      "Ecosistema unificado entre iPhone, iPad y Mac",
      "Menor tasa de fallas frente a PCs tradicionales",
      "Reducción de tickets de soporte (IDC)",
    ],
  },
];

export function WhyMacSection() {
  const handleContactClick = (pillarId: string) => {
    trackEvent("cta_clicked", {
      cta_text: "Hablar con un asesor",
      cta_location: "why_mac_section",
      pillar_id: pillarId,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            ¿Por qué Apple en tu empresa?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Descubre cómo Apple transforma la productividad empresarial con seguridad
            de clase mundial, gestión simplificada y una experiencia que tus empleados amarán.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm italic text-muted-foreground mb-6">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {pillar.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  onClick={() => handleContactClick(pillar.id)}
                  asChild
                >
                  <a href="/contacto-empresas">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Hablar con un asesor
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            ¿Listo para dar el siguiente paso?
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/contacto-empresas">
              Agenda una consultoría gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
