import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string; // usually anchor link to form
  secondaryCtaText: string;
  secondaryCtaHref: string;
  imageSrc?: string;
  fallbackGradient?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  fallbackGradient = "bg-gradient-to-br from-accent/20 to-accent/10"
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
                {title}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground text-pretty max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-8 py-6 text-base shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30"
              >
                <Link href={primaryCtaHref}>{primaryCtaText}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mx-auto w-full lg:mx-0">
            <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${!imageSrc ? fallbackGradient : ''}`}>
              {imageSrc ? (
                 <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  {/* Decorative placeholder if no image */}
                  <div className="h-32 w-32 rounded-full bg-[#2dd4bf]/20 blur-2xl" />
                </div>
              )}
            </div>
            
             {/* Decorative blob behind image */}
             <div className="absolute -top-12 -right-12 -z-10 h-[350px] w-[350px] rounded-full bg-accent/20 blur-[100px]" />
             <div className="absolute -bottom-12 -left-12 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
        </div>

        {/* Decorative elements pattern background */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute top-1/2 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
