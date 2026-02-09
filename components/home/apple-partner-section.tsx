"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Apple, ArrowRight } from "lucide-react";

export function ApplePartnerSection() {

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column - Partner info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/macpower-logo-color.svg"
                  alt="MacPower"
                  width={150}
                  height={30}
                  className="h-10 w-auto dark:hidden"
                />
                <Image
                  src="/images/macpower-logo-white.svg"
                  alt="MacPower"
                  width={150}
                  height={30}
                  className="hidden h-10 w-auto dark:block"
                />
                <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs">
                  <Apple className="h-3 w-3" />
                  Business Partner
                </div>
              </div>
              
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl tracking-tight">
                Apple Business Partner
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Integramos el ecosistema Apple con garantía oficial, despliegue ágil y soporte especializado.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button 
                  className="bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] hover:from-[rgb(0,235,207)] hover:to-[rgb(0,146,194)] text-black font-bold border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link href="/mac">
                    Ver catálogo Mac
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 hover:border-[rgb(0,255,227)] hover:bg-[rgb(0,255,227)]/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/mac#accesorios">
                    Accesorios
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Apple Business Partner Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50 bg-secondary/20">
              <Image
                src="/images/apple-business-partner.jpg"
                alt="Apple Business Partner Official"
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback placeholder if image not found */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <Apple className="mx-auto mb-4 h-20 w-20 text-white/20" />
                  <h3 className="text-2xl font-bold text-white">Apple Business Partner</h3>
                  <p className="mt-2 text-sm text-gray-400">Distribuidor autorizado oficial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
