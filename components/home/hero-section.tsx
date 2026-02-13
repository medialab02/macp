"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inicio-general-1500x600px%20%282%29-sGXLAjiZwqUp9U4RloopJ7oRzIIIwS.png",
    title: "Tecnología que impulsa tu negocio al siguiente nivel",
    subtitle: "Diseñamos y operamos soluciones IT que garantizan continuidad, seguridad y rendimiento para organizaciones que no pueden detenerse.",
    cta: { primary: "Solicitar cotización", primaryHref: "#contacto", secondary: null, secondaryHref: null },
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inicio-apple-1500x600px%20%282%29-P3fpHvJDA6xZ6IztoN3akKvuAXddDf.png",
    title: "Apple integrado, gestionado y optimizado para cada entorno",
    subtitle: "Diseñamos, implementamos y gestionamos el ecosistema Apple para organizaciones e individuos que buscan tecnología confiable, segura y fácil de administrar.",
    description: "Despliegue automatizado, gestión centralizada, seguridad avanzada y soporte certificado en cada etapa.",
    cta: { primary: "Explora Soluciones Apple", primaryHref: "/mac-para-empresas", secondary: "Conocer Apple con MacPower", secondaryHref: "/mac" },
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inicio-labpower-1500x600px%20%281%29-hJE9GHaVuOmCbDp9ql4H1JmbVyvfwF.png",
    title: "Servicio certificado que protege y extiende la vida de tu tecnología Apple",
    subtitle: "Garantías extendidas, servicios profesionales y soporte técnico certificado bajo los estándares oficiales de Apple, con repuestos originales y técnicos especializados.",
    cta: { primary: "Explorar LabPower", primaryHref: "/labpower", secondary: "Agenda tu servicio", secondaryHref: "#contacto" },
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inicio-DaaS-1500x600px-kUkZeJAn90m2RJ3p2dPvmurSr5tM7N.png",
    title: "Device as a Service que pone tu tecnología bajo control",
    subtitle: "Gestionamos tu parque tecnológico de forma integral para garantizar productividad continua, costos predecibles y cero interrupciones en la operación.",
    description: "Más que renting: monitoreo, soporte, mantenimiento y gestión proactiva de cada dispositivo durante todo su ciclo de vida.",
    cta: { primary: "Explorar DaaS", primaryHref: "/portafolio/daas", secondary: "Conoce nuestra propuesta DaaS", secondaryHref: "#contacto" },
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inicio-valor-TI-1500x600px%20%281%29-GQj8EjMvMRgihX2XwDvOZU5DMSuC9M.png",
    title: "Infraestructura y ciberseguridad que garantizan la continuidad de tu negocio",
    subtitle: "Diseñamos y operamos infraestructura IT robusta, servicios de ciberseguridad y ciberrecuperación con monitoreo 24/7 para proteger tu operación frente a fallos, ataques y escenarios críticos.",
    cta: { primary: "Explorar Valor IT", primaryHref: "/portafolio/valor-it", secondary: "Solicitar asesoría", secondaryHref: "#contacto" },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-black min-h-[600px] flex items-center">
      {/* Teal Gradient Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-1500x600px-CUjw1RW29JDqAlwSRitWN5aY9szOMe.png"
          alt="Background gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Rotating Product Images - Full Hero Background */}
      <div className="pointer-events-none absolute inset-0 z-[1]" suppressHydrationWarning>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20 z-10 w-full">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="relative z-20 flex flex-col items-start">
            <div className="relative min-h-[280px] md:min-h-[240px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "transition-all duration-500",
                    index === currentSlide
                      ? "opacity-100 relative z-10"
                      : "opacity-0 absolute inset-0 z-0 invisible"
                  )}
                >
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance text-left">
                    {slide.title}
                  </h1>
                  <p className="mb-4 text-lg text-gray-200 text-pretty leading-relaxed text-left">
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <p className="mb-8 text-base text-gray-300 text-pretty leading-relaxed text-left">
                      {slide.description}
                    </p>
                  )}
                  {!slide.description && <div className="mb-8" />}
                </div>
              ))}
            </div>

            {/* CTAs - Outside the transition container for proper interactivity */}
            <div className="flex flex-wrap gap-4 relative z-30">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 transition-all duration-300"
                asChild
              >
                <Link href={slides[currentSlide].cta.primaryHref || "#"}>
                  {slides[currentSlide].cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {slides[currentSlide].cta.secondary && slides[currentSlide].cta.secondaryHref && (
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <Link href={slides[currentSlide].cta.secondaryHref}>{slides[currentSlide].cta.secondary}</Link>
                </Button>
              )}
            </div>

            {/* Slide indicators */}
            <div className="mt-8 flex items-center gap-4 relative z-40">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2 rounded-full transition-all relative z-40 cursor-pointer",
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1 relative z-40">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20 cursor-pointer relative z-40"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20 cursor-pointer relative z-40"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
