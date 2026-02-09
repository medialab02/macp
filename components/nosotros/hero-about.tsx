"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroAbout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Pensamos diferente",
      description: "En MacPower IT Solutions transformamos la forma en que las organizaciones operan, crecen y se protegen. Más de 25 años liderando soluciones de Movilidad y cómputo, además DaaS y soluciones en la nube, infraestructura y ciberseguridad, con especialistas en la implementación de ecosistema Apple corporativo que acelera la productividad e innovación.",
      image: "/images/nosotros/team-hero.jpg"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-background pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {slides[currentSlide].description}
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:opacity-90">
                <Link href="#historia">Descubre más</Link>
              </Button>
            </div>
          </div>

          {/* Right image with carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={slides[currentSlide].image}
                alt="MacPower Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Carousel controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
