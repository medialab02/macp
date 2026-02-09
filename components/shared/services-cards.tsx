import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Settings,
  Shield,
  Headphones,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  settings: Settings,
  shield: Shield,
  headphones: Headphones,
  graduation: GraduationCap,
  heart: Heart,
};

interface ServicesCardsProps {
  limit?: number;
  showCTA?: boolean;
  className?: string;
}

export function ServicesCards({
  limit,
  showCTA = true,
  className,
}: ServicesCardsProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {displayServices.map((service) => {
        const Icon = iconMap[service.icon] || Settings;
        return (
          <Card
            key={service.id}
            className="group border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card"
          >
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg text-foreground">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              {showCTA && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn -ml-2 text-primary"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
