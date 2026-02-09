"use client";

import { useEffect, useState, useRef } from "react";
import { Building2, Calendar, FolderKanban, Globe } from "lucide-react";

const metricsDisplay = [
  { icon: Building2, value: 15, suffix: "M", label: "USD VENTAS ANUALES" },
  { icon: Calendar, value: 25, suffix: "+", label: "AÑOS DE EXPERIENCIA" },
  { icon: FolderKanban, value: 1000, suffix: "+", label: "PROYECTOS EJECUTADOS" },
  { icon: Globe, value: 8, suffix: "", label: "PAÍSES +20 CIUDADES EN LA REGIÓN", countries: true },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] md:text-4xl">
      {suffix === "+" ? "+" : ""}{count.toLocaleString()}{suffix === "M" ? "M" : ""}
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="relative -mt-6 z-10 mx-auto max-w-6xl px-4 lg:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-[#00ffe3]/10 via-card to-[#00a6d6]/10 p-1">
        <div className="rounded-xl bg-card/95 backdrop-blur-sm px-6 py-10 md:px-12 md:py-12">
          <h2 className="text-center text-2xl font-bold text-foreground mb-8 md:text-3xl">
            HITOS CORPORATIVOS
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metricsDisplay.map((metric) => (
              <div key={metric.label} className="text-center flex flex-col items-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border-4 border-[#00ffe3]/30">
                  <metric.icon className="h-8 w-8 text-[#00ffe3]" />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  {metric.countries && <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] md:text-4xl">8 países</span>}
                  {!metric.countries && <AnimatedCounter value={metric.value} suffix={metric.suffix} />}
                </div>
                <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
