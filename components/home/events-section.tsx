"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Video, Users, ArrowRight } from "lucide-react";
import { events } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcons = {
  webinar: Video,
  evento: Users,
  capacitacion: Calendar,
};

const typeLabels = {
  webinar: "Webinar",
  evento: "Evento presencial",
  capacitacion: "Capacitación",
};

export function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, events.length - 3);

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Eventos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Espacios diseñados para líderes y equipos de TI donde compartimos tendencias, casos reales y soluciones tecnológicas aplicables al negocio.
          </p>
        </div>

        {/* Events carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 3 + 2)}%)` }}
            >
              {events.map((event) => {
                const TypeIcon = typeIcons[event.type];
                return (
                  <Card
                    key={event.id}
                    className="w-full flex-shrink-0 overflow-hidden border-border/50 bg-secondary/30 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Date badge */}
                      <div className="absolute left-4 top-4 rounded-lg bg-background/90 px-3 py-2 text-center backdrop-blur">
                        <p className="text-2xl font-bold text-foreground">{event.day}</p>
                        <p className="text-xs text-muted-foreground">{event.month}</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        <TypeIcon className="mr-1 h-3 w-3" />
                        {typeLabels[event.type]}
                      </Badge>
                      <h3 className="mb-2 font-semibold text-foreground line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            aria-label="Eventos anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            aria-label="Siguientes eventos"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir a grupo ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="#">
              Ver más
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
