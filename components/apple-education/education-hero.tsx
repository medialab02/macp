import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Principal-1500x600px%20%281%29-DCOcGoC7c8yrAkiX4n9909lZj1NWZH.png"
          alt="Apple devices for education"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
            Apple para Educación
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty leading-relaxed">
            Tecnología diseñada para transformar la experiencia educativa. Gestión simplificada con Apple School Manager, apps especializadas y capacitación docente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto-empresas">
                Solicitar información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/mac">Ver catálogo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
