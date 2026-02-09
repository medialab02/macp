import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageHighlightProps {
  imageSrc: string;
  fallbackGradient?: string;
  text: string;
  className?: string;
}

export function ImageHighlight({
  imageSrc,
  fallbackGradient = "from-cyan-900 via-blue-900 to-indigo-900",
  text,
  className,
}: ImageHighlightProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden flex items-center justify-center py-20 md:py-24",
        className,
      )}
    >
      {/* Background Image or Gradient */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br", fallbackGradient)}
      />

      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Highlights"
          fill
          className="object-cover opacity-50"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight drop-shadow-2xl text-balance leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#2dd4bf]">
            {text}
          </span>
        </h2>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
