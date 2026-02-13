import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DaaSHeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  backgroundImage: string;
}

export function DaaSHero({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
}: DaaSHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 min-h-[600px] flex items-center">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="DaaS Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 text-balance">
            {title}
          </h1>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-white/90 mb-8 text-pretty">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-white/40 text-white hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
