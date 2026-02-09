import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CaseStudyCardsProps {
  limit?: number;
  className?: string;
}

export function CaseStudyCards({ limit, className }: CaseStudyCardsProps) {
  const displayCases = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {displayCases.map((caseStudy) => (
        <Card
          key={caseStudy.id}
          className="group overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.company}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Badge
              variant="secondary"
              className="absolute left-4 top-4 bg-background/80 backdrop-blur"
            >
              {caseStudy.industry}
            </Badge>
          </div>
          <CardContent className="p-5">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {caseStudy.company}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {caseStudy.overview}
            </p>
            
            {/* Impact metrics */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              {caseStudy.impact.slice(0, 3).map((item) => (
                <div
                  key={item.metric}
                  className="rounded-lg bg-secondary/50 p-2 text-center"
                >
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-[10px] leading-tight text-muted-foreground">
                    {item.metric}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="ghost" size="sm" className="group/btn -ml-2 text-primary" asChild>
              <Link href={`/casos/${caseStudy.slug}`}>
                Ver caso completo
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
