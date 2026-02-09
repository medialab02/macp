import { Check } from "lucide-react";

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  title?: string;
  steps: Step[];
}

export function Stepper({ title, steps }: StepperProps) {
  const gridCols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/10 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            {title}
          </h2>
        )}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className={`hidden lg:block absolute top-[32px] h-[3px] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 rounded-full z-0 ${steps.length === 5 ? 'left-[10%] right-[10%]' : 'left-[12%] right-[12%]'}`} />
          
          <div className={`grid gap-6 md:gap-8 md:grid-cols-2 ${gridCols} relative z-10`}>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-accent/40 transition-all"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-2xl shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl md:text-2xl font-bold text-balance text-foreground">{step.title}</h3>
                {step.description && (
                  <p className="text-base text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
