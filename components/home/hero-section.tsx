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
    image: "/images/ipad-devices.png",
    title: "Tecnología que impulsa empresas sin límites",
    subtitle: "En MacPower IT Solutions transformamos la forma en que las organizaciones operan, conectan y se protegen.",
  },
  {
    id: 2,
    image: "/images/ipad-devices.png",
    title: "Mac para empresas, listo para TI",
    subtitle: "Despliegue zero-touch, gestión centralizada y seguridad de nivel empresarial desde el primer día.",
  },
  {
    id: 3,
    image: "/images/ipad-devices.png",
    title: "Soluciones IT que aceleran tu negocio",
    subtitle: "Más de 15 años especializados en ecosistema Apple corporativo con presencia en 5 países.",
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
    <section className="relative overflow-hidden bg-black">
      {/* Circuit Board Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/circuit-background.png"
          alt="Circuit board background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
        
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "transition-all duration-500",
                    index === currentSlide
                      ? "opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  )}
                >
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg text-gray-200 text-pretty">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/mac-para-empresas">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mac">Explorar Macs</Link>
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentSlide
                        ? "w-8 bg-green-400 shadow-lg shadow-green-500/50"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Image carousel */}
          <div className="order-1 lg:order-2 relative z-10">
            <div className="relative aspect-[4/3] overflow-visible">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : index < currentSlide
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  )}
                >
                  <div className="relative h-full w-full scale-150 -translate-x-12">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
