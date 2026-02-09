import { TrendingUp, Award, Zap } from "lucide-react";

export function EducationBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mejora de resultados",
      description: "Estudios muestran que instituciones con Apple mejoran engagement y desempeño académico.",
    },
    {
      icon: Award,
      title: "Innovación pedagógica",
      description: "Herramientas que promueven colaboración, creatividad y pensamiento crítico en estudiantes.",
    },
    {
      icon: Zap,
      title: "Eficiencia administrativa",
      description: "Reduce carga administrativa con herramientas integradas y automatización de procesos.",
    },
    {
      icon: TrendingUp,
      title: "Facilidad de uso",
      description: "Tecnología intuitiva que docentes y estudiantes aprenden rápidamente.",
    },
    {
      icon: Award,
      title: "Ecosistema seguro",
      description: "Protección de datos y privacidad estudiantil cumpliendo estándares internacionales.",
    },
    {
      icon: Zap,
      title: "Retorno de inversión",
      description: "Durabilidad de equipos y bajo costo total de propiedad en el mediano plazo.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios reales para tu institución
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformación educativa comprobada con resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
