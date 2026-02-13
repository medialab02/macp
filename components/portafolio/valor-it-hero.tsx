import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ValorITHeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  backgroundImage: string;
}

export function ValorITHero({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
}: ValorITHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="IT Solutions Infrastructure"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight text-white mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 bg-accent text-accent-foreground hover:opacity-90"
            >
              <Link href={primaryCtaHref}>{primaryCtaText}</Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
