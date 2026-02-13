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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner-principal-1500x600px-B5IEyaIUwUlI4Umh85lWg2sz6P7qBO.png"
    }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[currentSlide].image}
          alt="MacPower Team"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight text-white mb-6">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed text-pretty mb-8">
            {slides[currentSlide].description}
          </p>

          <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:opacity-90">
            <Link href="#historia">Descubre más</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
