import { Laptop, Code, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EducationEcosystem() {
  const features = [
    {
      icon: Laptop,
      title: "Tecnología intuitiva",
      description: "Equipos fáciles de usar que los estudiantes adoptan rápidamente, mejorando el aprendizaje desde el primer día.",
    },
    {
      icon: Code,
      title: "Apple School Manager",
      description: "Gestión centralizada de dispositivos, contenido y usuarios. Implementación simplificada sin complicaciones técnicas.",
    },
    {
      icon: Palette,
      title: "Apps educativas",
      description: "Acceso a miles de aplicaciones diseñadas para potenciar la enseñanza y el aprendizaje colaborativo en el aula.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ecosistema educativo Apple
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas y servicios diseñados específicamente para instituciones educativas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="p-8 bg-card border-border">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
