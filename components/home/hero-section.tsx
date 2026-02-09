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
    title: "Continuidad empresarial con tecnología Apple",
    subtitle: "Implementamos soluciones IT seguras y confiables que mantienen tu operación activa sin interrupciones.",
  },
  {
    id: 2,
    image: "/images/ipad-devices.png",
    title: "Mac para empresas. Listo desde el día uno.",
    subtitle: "Despliegue automatizado, gestión MDM centralizada y seguridad empresarial integrada.",
  },
  {
    id: 3,
    image: "/images/ipad-devices.png",
    title: "Tu aliado estratégico en soluciones IT",
    subtitle: "15+ años respaldando la operación de empresas líderes en Colombia, Chile, Perú, Ecuador y Bolivia.",
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
                  <h1 className="mb-4 text-3xl font-black leading-[1.2] text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg leading-relaxed text-gray-200 text-pretty md:text-xl">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] hover:from-[rgb(0,235,207)] hover:to-[rgb(0,146,194)] text-black font-bold border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group"
                asChild
              >
                <Link href="/mac-para-empresas">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/20 hover:border-[rgb(0,255,227)] hover:bg-[rgb(0,255,227)]/10 transition-all duration-300"
                asChild
              >
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
                      "h-2 rounded-full transition-all duration-300",
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] shadow-lg shadow-cyan-500/50"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-[rgb(0,255,227)]/60 hover:bg-[rgb(0,255,227)]/20 hover:scale-110"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-[rgb(0,255,227)]/60 hover:bg-[rgb(0,255,227)]/20 hover:scale-110"
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
