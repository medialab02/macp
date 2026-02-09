import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Laptop, Wrench } from "lucide-react";

const solutions = [
  {
    id: "daas",
    title: "Soluciones DaaS",
    description: "Libérate de la gestión de activos. Mac como servicio con mantenimiento, soporte y renovación incluidos.",
    icon: Cloud,
    href: "#",
    benefits: ["Sin inversión inicial", "Actualización continua", "Soporte incluido"],
    accentColor: "#00D3C7",
  },
  {
    id: "valor-it",
    title: "Soluciones Valor IT",
    description: "Infraestructura de TI completa. Computación, networking, almacenamiento y servicios profesionales.",
    icon: Shield,
    href: "#",
    benefits: ["Consultoría especializada", "Implementación llave en mano", "Monitoreo 24/7"],
    accentColor: "#60A5FA",
  },
  {
    id: "mac-empresas",
    title: "Mac para Empresas",
    description: "El ecosistema Apple completo para tu organización. Despliegue, gestión MDM y soporte empresarial.",
    icon: Laptop,
    href: "/mac-para-empresas",
    benefits: ["Zero-touch deployment", "Gestión centralizada", "Seguridad nativa"],
    featured: true,
    accentColor: "#00E676",
  },
  {
    id: "labpower",
    title: "LabPower",
    description: "Servicio técnico certificado Apple. Reparación, mantenimiento y soporte para tu flota de equipos.",
    icon: Wrench,
    href: "#",
    benefits: ["Técnicos certificados", "Piezas originales", "SLA empresarial"],
    accentColor: "#FF8A00",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones de valor
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Soluciones tecnológicas diseñadas para impulsar la operación y continuidad de tu negocio
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={`group relative overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 ${
                solution.featured ? "ring-1 ring-primary/50 md:col-span-2 lg:col-span-1" : ""
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
              <CardHeader className="pb-2 relative z-10">
                <div 
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: solution.accentColor + '10',
                    color: solution.accentColor
                  }}
                >
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white">
                  {solution.title}
                </h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-4 text-sm text-muted-foreground dark:text-gray-300">
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
                  className="group/btn -ml-2 transition-colors duration-300" 
                  asChild
                >
                  <Link 
                    href={solution.href}
                    style={{
                      color: solution.accentColor
                    }}
                  >
                    Ver solución
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
