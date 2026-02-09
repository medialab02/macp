import { BookOpen, Users, Zap, Shield, Apple, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EducationServices() {
  const services = [
    {
      icon: BookOpen,
      title: "Gestión educativa",
      description: "Apple School Manager para administración simplificada de dispositivos y contenido.",
    },
    {
      icon: Users,
      title: "Capacitación docente",
      description: "Programas especializados para potenciar el uso pedagógico de la tecnología.",
    },
    {
      icon: Zap,
      title: "Implementación",
      description: "Despliegue de equipos, configuración de red y sincronización con sistemas existentes.",
    },
    {
      icon: Shield,
      title: "Seguridad y privacidad",
      description: "Protección de datos estudiantiles y cumplimiento de normativas educativas.",
    },
    {
      icon: Apple,
      title: "Acceso a apps",
      description: "Catálogo de aplicaciones educativas con descuentos especiales institucionales.",
    },
    {
      icon: BarChart3,
      title: "Análisis de uso",
      description: "Reportes y métricas sobre adopción e impacto pedagógico de la tecnología.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros servicios educativos
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones integrales para tu institución educativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <service.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
