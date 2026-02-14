"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "Canon", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2020%201-fUC4zuD6pmJgzV4UMq1CB4gKS60pv8.png" },
  { name: "Cross Identity", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliad%2025o%20%201-yWyIbIqlWVPaNBtjoTPqjUkEV7ZXc4.png" },
  { name: "Targus", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2021%201-Pxf5hyWHgil9EhHfPbysmGuHhsRrbP.png" },
  { name: "ASUS", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2016_1%201-WgS1h8qBDU1fd6VH47A7gjMBv1b4zI.png" },
  { name: "Aruba", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2016%201-oAhtIUaQNQuUVmgK1PjQiGwWZYh4HX.png" },
  { name: "Comforte", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2024%201-YxbIYmNH66J9RPkLn0TwQzYbgYnsu3.png" },
  { name: "Vertiv", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2026%201-UBqa4ITvcRva2kJj7Y8MqmSSgsMkzh.png" },
  { name: "Hewlett Packard Enterprise", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2028%201-CkByi8T3zSrGLrwVwQ2rlYmVDb2Ebd.png" },
  { name: "Huawei", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%2044%201-9AjgzgKyQSpM6KDWMQx7RQmT9xAzWL.png" },
  { name: "BeyondTrust", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2019%201-RiMvw7qMCUsNz5wazsjE4RlWByucWL.png" },
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
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="grayscale opacity-100 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={181}
                      height={112}
                      className="h-16 w-auto object-contain"
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
