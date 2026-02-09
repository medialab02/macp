import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Apple para Educación
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Tecnología diseñada para transformar la experiencia educativa. Gestión simplificada con Apple School Manager, apps especializadas y capacitación docente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto-empresas">
                Solicitar información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-border" asChild>
              <Link href="/mac">Ver catálogo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
