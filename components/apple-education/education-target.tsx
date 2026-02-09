import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EducationTarget() {
  const targets = [
    {
      title: "Colegios privados",
      description: "Potencia tu propuesta educativa diferenciada con tecnología de vanguardia.",
      features: ["1:1 o carros móviles", "Apple School Manager", "Capacitación docente"],
    },
    {
      title: "Universidades",
      description: "Equipos para investigación, laboratorios y educación a distancia.",
      features: ["Laboratorios especializados", "Apoyo a investigación", "Integración con LMS"],
    },
    {
      title: "Institutos técnicos",
      description: "Preparación de estudiantes con herramientas profesionales estándar.",
      features: ["Software profesional", "Certificaciones Apple", "Prácticas reales"],
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿A quién está dirigido?
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones personalizadas para diferentes tipos de instituciones educativas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {targets.map((target, i) => (
            <Card key={i} className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">{target.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{target.description}</p>
              <div className="space-y-2 mb-8">
                {target.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/contacto-empresas">
              Comenzar transformación educativa
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
