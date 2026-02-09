"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, Laptop, Monitor, ArrowRight, Building2, MessageCircle, Sparkles } from "lucide-react";
import { products, type Product } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  variant?: "compact" | "full";
  className?: string;
}

const categories = [
  { name: "MacBook Air", icon: Laptop, query: "macbook-air", type: "product_line" },
  { name: "MacBook Pro", icon: Laptop, query: "macbook-pro", type: "product_line" },
  { name: "iMac", icon: Monitor, query: "imac", type: "product_line" },
  { name: "Mac mini", icon: Monitor, query: "mac-mini", type: "product_line" },
];

// Top picks for merchandising
const topPicks = [
  { id: "2", name: "MacBook Air 15\"", badge: "Recomendado" },
  { id: "3", name: "MacBook Pro 14\"", badge: "Popular" },
];

/**
 * SEARCH RANKING RULES:
 * 1. Brand queries (apple, mac, macpower) -> Landing first, then catalog
 * 2. Product line queries -> Products of that line sorted by popularity
 * 3. Chip queries (M4, M4 Pro) -> Filter by chip, sort by price
 * 4. Use case queries -> Match recommendedFor field
 */
function rankSearchResults(query: string, results: Product[]): { products: Product[]; showLanding: boolean } {
  const q = query.toLowerCase().trim();
  
  // Brand queries - show landing page first
  const brandQueries = ["apple", "mac", "macpower", "empresa"];
  const showLanding = brandQueries.some(bq => q.includes(bq));
  
  // Product line queries - prioritize by badge
  const productLineQueries = ["macbook air", "macbook pro", "imac", "mac mini", "mac studio"];
  const isProductLineQuery = productLineQueries.some(pl => q.includes(pl));
  
  // Chip queries - sort by chip name
  const chipQueries = ["m4 max", "m4 pro", "m4"];
  const isChipQuery = chipQueries.some(chip => q.includes(chip));
  
  let sortedResults = [...results];
  
  if (isProductLineQuery) {
    // Sort by badge priority: Recomendado > Popular > Nuevo > none
    const badgePriority: Record<string, number> = { "Recomendado": 0, "Popular": 1, "Nuevo": 2 };
    sortedResults.sort((a, b) => {
      const aPriority = a.badge ? badgePriority[a.badge] ?? 3 : 3;
      const bPriority = b.badge ? badgePriority[b.badge] ?? 3 : 3;
      return aPriority - bPriority;
    });
  } else if (isChipQuery) {
    // Sort by chip name
    sortedResults.sort((a, b) => a.chip.localeCompare(b.chip));
  }
  
  return { products: sortedResults, showLanding };
}

export function SearchBar({ variant = "compact", className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const rawResults = query.length > 1
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.chip.toLowerCase().includes(query.toLowerCase()) ||
          p.recommendedFor.some(r => r.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const { products: filteredProducts, showLanding } = rankSearchResults(query, rawResults);
  const showSuggestions = focused && (query.length > 0 || isOpen);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    trackEvent("search_used", { query: searchQuery, results_count: filteredProducts.length, has_results: filteredProducts.length > 0 });
    router.push(`/mac?q=${encodeURIComponent(searchQuery)}`);
    setIsOpen(false);
    setQuery("");
  };

  const handleProductClick = (slug: string, position: number) => {
    trackEvent("search_result_clicked", { query, product_id: slug, position });
    router.push(`/mac/${slug}`);
    setIsOpen(false);
    setQuery("");
  };

  const handleLandingClick = () => {
    trackEvent("search_result_clicked", { query, product_id: "landing", position: 0 });
    router.push("/mac-para-empresas");
    setIsOpen(false);
    setQuery("");
  };

  // No results component
  const NoResults = () => (
    <div className="p-4 text-center">
      <p className="text-sm text-muted-foreground mb-4">
        No se encontraron resultados para &quot;{query}&quot;
      </p>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground mb-2">Prueba con:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.slice(0, 3).map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleSearch(cat.query)}
              className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground hover:bg-primary/10 transition-colors"
              type="button"
            >
              {cat.name}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="mt-3 text-primary"
          onClick={() => router.push("/contacto-empresas")}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Contactar un asesor
        </Button>
      </div>
    </div>
  );

  if (variant === "compact") {
    return (
      <div ref={containerRef} className={cn("relative", className)}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setFocused(true);
              setIsOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query) {
                handleSearch(query);
              }
            }}
            className="h-9 w-48 bg-secondary pl-9 pr-8 text-sm placeholder:text-muted-foreground focus:w-64 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              type="button"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {showSuggestions && (
          <div className="absolute right-0 top-full z-50 mt-2 w-96 rounded-lg border border-border bg-card p-2 shadow-xl">
            {query.length === 0 ? (
              <div>
                {/* Top Picks */}
                <div className="mb-3">
                  <p className="px-2 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Recomendados
                  </p>
                  {topPicks.map((pick) => {
                    const product = products.find(p => p.id === pick.id);
                    if (!product) return null;
                    return (
                      <button
                        key={pick.id}
                        onClick={() => handleProductClick(product.slug, 0)}
                        className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary"
                        type="button"
                      >
                        <Laptop className="h-4 w-4 text-primary" />
                        <span>{pick.name}</span>
                        <Badge variant="secondary" className="ml-auto text-xs">{pick.badge}</Badge>
                      </button>
                    );
                  })}
                </div>

                {/* Categories */}
                <p className="px-2 py-1 text-xs font-medium text-muted-foreground">
                  Categorías
                </p>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleSearch(cat.query)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary"
                    type="button"
                  >
                    <cat.icon className="h-4 w-4 text-primary" />
                    {cat.name}
                    <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div>
                {/* Show landing page for brand queries */}
                {showLanding && (
                  <button
                    onClick={handleLandingClick}
                    className="flex w-full items-center gap-3 rounded-md px-2 py-3 text-sm text-foreground hover:bg-secondary mb-2 bg-primary/5 border border-primary/20"
                    type="button"
                  >
                    <Building2 className="h-5 w-5 text-primary" />
                    <div className="flex-1 text-left">
                      <p className="font-medium">Mac para Empresas</p>
                      <p className="text-xs text-muted-foreground">
                        Soluciones empresariales con Apple
                      </p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Hub</Badge>
                  </button>
                )}

                <p className="px-2 py-1 text-xs font-medium text-muted-foreground">
                  Productos ({filteredProducts.length})
                </p>
                {filteredProducts.slice(0, 5).map((product, idx) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.slug, idx + 1)}
                    className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary"
                    type="button"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                      <Laptop className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium">{product.shortName}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.chip}
                      </p>
                    </div>
                    {product.badge && (
                      <Badge variant="secondary" className="text-xs">{product.badge}</Badge>
                    )}
                  </button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-1 w-full justify-center text-primary"
                  onClick={() => handleSearch(query)}
                >
                  Ver todos los resultados
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : (
              <NoResults />
            )}
          </div>
        )}
      </div>
    );
  }

  // Full variant for mobile
  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setFocused(true);
            setIsOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query) {
              handleSearch(query);
            }
          }}
          className="h-10 w-full bg-secondary pl-10 pr-10 placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            type="button"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showSuggestions && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg border border-border bg-card p-2 shadow-xl">
          {query.length === 0 ? (
            <div>
              <p className="px-2 py-1 text-xs font-medium text-muted-foreground">
                Categorías
              </p>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleSearch(cat.query)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary"
                  type="button"
                >
                  <cat.icon className="h-4 w-4 text-primary" />
                  {cat.name}
                </button>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div>
              {showLanding && (
                <button
                  onClick={handleLandingClick}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary bg-primary/5"
                  type="button"
                >
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="font-medium">Mac para Empresas</span>
                </button>
              )}
              {filteredProducts.slice(0, 4).map((product, idx) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.slug, idx + 1)}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary"
                  type="button"
                >
                  <Laptop className="h-4 w-4 text-primary" />
                  <span>{product.shortName}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {product.chip}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      )}
    </div>
  );
}
