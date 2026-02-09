"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Laptop, Tablet, Phone, Watch, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

const categories = [
  { id: "mac", label: "Mac", icon: Laptop, featured: true },
  { id: "ipad", label: "iPad", icon: Tablet },
  { id: "iphone", label: "iPhone", icon: Phone },
  { id: "watch", label: "Apple Watch", icon: Watch },
];

const featuredMacs = products.slice(0, 4);

export function ApplePartnerSection() {
  const [activeCategory, setActiveCategory] = useState("mac");

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column - Partner info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
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
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lwifANTisLt6mzrcmFyXNJMfOphYm1.png"
                  alt="Apple Business Partner & Authorized Service Provider"
                  width={240}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Apple Business Partner
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Integramos el ecosistema Apple en tu organización con garantía oficial, despliegue ágil y soporte especializado para empresas e individuos.
              </p>

              {/* Category tabs */}
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all ${
                      activeCategory === cat.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                    {cat.featured && (
                      <Badge variant="secondary" className="ml-1 text-[10px]">
                        Empresa
                      </Badge>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button 
                  className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 transition-all duration-300"
                  asChild
                >
                  <Link href="/mac">
                    Conoce el catálogo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/mac#accesorios">
                    Accesorios
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Products grid */}
          <div className="lg:col-span-3">
            {activeCategory === "mac" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredMacs.map((product) => (
                  <Link
                    key={product.id}
                    href={`/mac/${product.slug}`}
                    className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
                  >
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg bg-background/50">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover p-2 transition-transform group-hover:scale-105"
                      />
                      {product.badge && (
                        <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium text-foreground">
                      {product.shortName}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Chip {product.chip} | Desde {product.ram[0]}GB RAM
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/20">
                <p className="text-muted-foreground">
                  Próximamente: Catálogo de {categories.find(c => c.id === activeCategory)?.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
