import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Laptop, Wrench } from "lucide-react";

const solutions = [
  {
    id: "daas",
    title: "DaaS",
    description: "Tecnología como servicio sin inversión inicial. Equipos actualizados, soporte técnico y renovación incluida en un modelo de pago mensual predecible.",
    icon: Cloud,
    href: "/portafolio/daas",
    benefits: ["Modelo OPEX", "Actualización garantizada", "Gestión total incluida"],
    accentColor: "#00D3C7",
  },
  {
    id: "valor-it",
    title: "Valor IT",
    description: "Infraestructura tecnológica empresarial completa: computación, redes, almacenamiento y servicios gestionados con monitoreo 24/7.",
    icon: Shield,
    href: "/portafolio/valor-it",
    benefits: ["Consultoría estratégica", "Implementación certificada", "Soporte gestionado"],
    accentColor: "#60A5FA",
  },
  {
    id: "mac-empresas",
    title: "Apple para empresas",
    description: "Ecosistema Apple corporativo con despliegue automatizado, gestión MDM centralizada y seguridad integrada desde el primer encendido.",
    icon: Laptop,
    href: "/mac-para-empresas",
    benefits: ["Zero-touch deployment", "MDM empresarial", "Seguridad by design"],
    featured: true,
    accentColor: "#00FFE3",
  },
  {
    id: "labpower",
    title: "LabPower",
    description: "Servicio técnico certificado Apple para tu flota corporativa. Reparación especializada con piezas originales y SLA empresarial garantizado.",
    icon: Wrench,
    href: "/labpower",
    benefits: ["Certificación Apple", "Repuestos genuinos", "SLA corporativo"],
    accentColor: "#FF8A00",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl tracking-tight">
            Soluciones de valor
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Tecnología empresarial que asegura la continuidad operativa y acelera el crecimiento de tu organización
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={`group relative overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                solution.featured ? "ring-2 ring-[rgb(0,255,227)]/30 md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient border on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${solution.accentColor}40, ${solution.accentColor}20)`,
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
              
              {/* Subtle glow on hover */}
              <div 
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle at center, ${solution.accentColor}, transparent 70%)`
                }}
              />

              {solution.featured && (
                <div 
                  className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-medium transition-all duration-300"
                  style={{
                    backgroundColor: solution.accentColor + '20',
                    borderColor: solution.accentColor + '40',
                    color: solution.accentColor,
                    borderWidth: '1px'
                  }}
                >
                  Destacado
                </div>
              )}
              <CardHeader className="pb-3 relative z-10">
                <div 
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: solution.accentColor + '15',
                    color: solution.accentColor
                  }}
                >
                  <solution.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-white tracking-tight">
                  {solution.title}
                </h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                  {solution.description}
                </p>
                <ul className="mb-4 space-y-1">
                  {solution.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-xs text-muted-foreground dark:text-gray-400"
                    >
                      <span 
                        className="h-1 w-1 rounded-full" 
                        style={{ backgroundColor: solution.accentColor }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn -ml-2 transition-all duration-300 hover:scale-105 font-semibold" 
                  asChild
                >
                  <Link 
                    href={solution.href}
                    style={{
                      color: solution.accentColor
                    }}
                  >
                    Ver solución
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
