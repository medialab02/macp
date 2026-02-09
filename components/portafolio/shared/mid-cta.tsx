import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Search, FileText, Rocket } from "lucide-react";

interface Step {
  label: string;
  icon?: React.ReactNode;
}

interface MidCTAProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  steps: Step[];
}

const defaultIcons = [
  <Search key="search" className="h-4 w-4" />,
  <FileText key="file" className="h-4 w-4" />,
  <Rocket key="rocket" className="h-4 w-4" />,
];

export function MidCTA({ title, ctaText, ctaHref, steps }: MidCTAProps) {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-muted/20 via-muted/10 to-transparent border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center space-y-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {title}
            </span>
          </h2>
          
          {/* Mini Progress */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm md:text-base">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  index === 0 
                    ? "bg-accent/10 border-accent/30 text-accent font-semibold" 
                    : "bg-card/30 border-white/10 text-muted-foreground"
                }`}>
                  {step.icon || defaultIcons[index] || <span className="h-4 w-4" />}
                  <span className="font-medium">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 mx-2 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-10 py-6 text-base shadow-lg shadow-accent/20 transition-all hover:scale-105"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
    </section>
  );
}
