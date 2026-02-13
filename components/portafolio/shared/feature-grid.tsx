import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Feature {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

interface FeatureGridProps {
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ title, features, columns = 4 }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            {title}
          </h2>
        )}
        <div className={cn(
          "grid gap-6 md:gap-8",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <Card key={index} className="group relative bg-card border-border/50 transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 overflow-hidden">
              {/* Image section at top of card - larger for image-focused cards */}
              {feature.imageSrc && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                </div>
              )}
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl lg:text-2xl text-balance text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              {feature.description && (
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-pretty">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
