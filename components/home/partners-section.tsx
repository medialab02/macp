"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "Targus", logo: "/images/partners/targus.png" },
  { name: "Cross Identity", logo: "/images/partners/crossidentity.png" },
  { name: "Canon", logo: "/images/partners/canon.png" },
  { name: "Huawei", logo: "/images/partners/huawei.png" },
  { name: "Aruba", logo: "/images/partners/aruba.png" },
  { name: "Asus", logo: "/images/partners/asus.png" },
  { name: "BeyondTrust", logo: "/images/partners/beyondtrust.png" },
];

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        
        // Reset when reached the middle (since we duplicate content)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Text */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Aliados Estratégicos y Certificaciones
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Respaldados por las mejores marcas tecnológicas del mundo
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-12 overflow-x-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate the logos array for seamless infinite scroll */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="relative h-16 w-36 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
