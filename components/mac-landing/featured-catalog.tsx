import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/product-card";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export function FeaturedCatalog() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Catálogo destacado
            </h2>
            <p className="text-muted-foreground">
              Los equipos Mac más populares para empresas
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent" asChild>
            <Link href="/mac">
              Ver catálogo completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild>
            <Link href="/mac">
              Ver catálogo completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
