import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export function CTABanner({ title, subtitle, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center space-y-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
              {title}
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-12 py-7 text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
            <span className="text-sm md:text-base text-muted-foreground/80">
              Respuesta en menos de 24 horas hábiles. Sin compromiso.
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
    </section>
  );
}
