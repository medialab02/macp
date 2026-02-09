"use client";

import { Shield, Settings, Layers, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const pillars = [
  {
    id: "security",
    icon: Shield,
    title: "Seguridad Enterprise",
    description: "Protección de datos de nivel empresarial integrada en cada capa del sistema.",
    bullets: [
      "Secure Enclave para protección de credenciales y datos biométricos",
      "FileVault con cifrado de disco completo AES-256",
      "Protección de integridad del sistema (SIP) contra malware",
      "Touch ID/Face ID para autenticación segura sin contraseñas",
      "Actualizaciones de seguridad automáticas firmadas por Apple",
    ],
  },
  {
    id: "management",
    icon: Settings,
    title: "Gestión a Escala",
    description: "Administración centralizada de miles de dispositivos con Apple Business Manager y MDM.",
    bullets: [
      "Apple Business Manager (ABM) gratuito para empresas",
      "Despliegue zero-touch: equipos listos desde el unboxing",
      "Configuración remota de políticas y restricciones",
      "Distribución silenciosa de apps y actualizaciones",
      "Inventario en tiempo real y reportes de cumplimiento",
    ],
  },
  {
    id: "compatibility",
    icon: Layers,
    title: "Compatibilidad e Integración",
    description: "Mac se integra perfectamente con tu infraestructura existente, sin fricciones.",
    bullets: [
      "Integración nativa con Active Directory y Azure AD",
      "Soporte completo para Microsoft 365 y Google Workspace",
      "Compatible con VPNs empresariales y proxies",
      "Virtualización de Windows con Parallels o UTM",
      "APIs abiertas para integraciones personalizadas",
    ],
  },
  {
    id: "productivity",
    icon: Zap,
    title: "Productividad + Continuidad",
    description: "Mayor satisfacción del empleado, menor tiempo de inactividad, mejor ROI.",
    bullets: [
      "Batería de hasta 22 horas para productividad sin interrupciones",
      "Chip Apple Silicon: rendimiento sostenido sin throttling",
      "Ecosistema unificado: iPhone, iPad, Mac trabajando juntos",
      "Menor tasa de fallas que PCs tradicionales (Jamf, 2024)",
      "Soporte técnico reducido: 40% menos tickets (IDC)",
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
            ¿Por qué Mac en tu empresa?
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
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>

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
