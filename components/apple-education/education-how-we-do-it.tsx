import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EducationHowWeDoIt() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Evaluamos infraestructura actual, necesidades pedagógicas y objetivos institucionales.",
    },
    {
      number: "02",
      title: "Implementación",
      description: "Configuración de dispositivos, Apple School Manager y sincronización con sistemas educativos.",
    },
    {
      number: "03",
      title: "Capacitación",
      description: "Programas de entrenamiento para docentes, administrativos y estudiantes.",
    },
    {
      number: "04",
      title: "Soporte continuo",
      description: "Mesa de ayuda especializada, actualizaciones y seguimiento de uso pedagógico.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-muted-foreground text-lg">
            Proceso integral de implementación de tecnología Apple en tu institución
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="p-6 bg-card border-border">
              <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
