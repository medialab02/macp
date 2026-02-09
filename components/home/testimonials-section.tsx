"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Conoce las opiniones y cómo nuestras soluciones marcan la diferencia en su día a día
          </p>
        </div>

        {/* Company logos */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-4 py-2 transition-all",
                activeIndex === index
                  ? "border-primary bg-primary/10"
                  : "border-transparent bg-secondary/50 hover:bg-secondary"
              )}
            >
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className={cn(
                "font-medium",
                activeIndex === index ? "text-primary" : "text-muted-foreground"
              )}>
                {t.company}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="mx-auto max-w-3xl border-border/50 bg-card/50">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="mb-6 h-10 w-10 text-primary/30" />
                      <blockquote className="mb-8 text-lg text-foreground md:text-xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full bg-secondary">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir a testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
