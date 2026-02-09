"use client";

import { useEffect, useState, useRef } from "react";
import { metrics } from "@/lib/data";

const metricsDisplay = [
  { value: metrics.yearsExperience, suffix: "+", label: "Años de experiencia empresarial" },
  { value: metrics.countriesPresence, suffix: "", label: "Países con presencia activa" },
  { value: metrics.enterpriseClients, suffix: "+", label: "Clientes empresariales" },
  { value: metrics.certifiedTechnicians, suffix: "+", label: "Técnicos certificados Apple" },
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
    <div ref={ref} className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] md:text-6xl tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="relative -mt-6 z-10 mx-auto max-w-6xl px-4 lg:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-[rgb(0,255,227)]/10 via-card to-[rgb(0,166,214)]/10 p-1 shadow-2xl">
        <div className="rounded-xl bg-card/95 backdrop-blur-sm px-6 py-10 md:px-12 md:py-12 border border-white/5">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metricsDisplay.map((metric) => (
              <div key={metric.label} className="text-center group">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                <p className="mt-3 text-sm font-medium text-muted-foreground leading-relaxed">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
