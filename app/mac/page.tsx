"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchBar } from "@/components/shared/search-bar";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SlidersHorizontal,
  X,
  Laptop,
  Monitor,
  ArrowRight,
  Scale,
} from "lucide-react";
import { products } from "@/lib/data";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const allFilters = {
  type: [
    { value: "laptop", label: "Laptops", icon: Laptop },
    { value: "desktop", label: "Desktop", icon: Monitor },
    { value: "phone", label: "iPhone", icon: Laptop },
    { value: "tablet", label: "iPad", icon: Monitor },
    { value: "watch", label: "Apple Watch", icon: Laptop },
    { value: "speaker", label: "HomePod", icon: Monitor },
    { value: "accessories", label: "Accesorios", icon: Laptop },
  ],
  chip: {
    laptop: [
      { value: "M5", label: "M5" },
      { value: "M4", label: "M4" },
      { value: "M4 Pro", label: "M4 Pro" },
      { value: "M4 Max", label: "M4 Max" },
      { value: "M3", label: "M3" },
    ],
    desktop: [
      { value: "M4", label: "M4" },
      { value: "M4 Max", label: "M4 Max" },
    ],
    phone: [
      { value: "A18 Pro", label: "A18 Pro" },
      { value: "A18", label: "A18" },
      { value: "A17", label: "A17" },
      { value: "A16", label: "A16" },
    ],
    tablet: [
      { value: "M5", label: "M5" },
      { value: "M4", label: "M4" },
      { value: "M3", label: "M3" },
      { value: "A17 Pro", label: "A17 Pro" },
      { value: "A16", label: "A16" },
    ],
    watch: [
      { value: "S10", label: "S10" },
      { value: "S9", label: "S9" },
    ],
    speaker: [
      { value: "S8", label: "S8" },
    ],
    accessories: [
      { value: "H3", label: "H3" },
      { value: "H2", label: "H2" },
      { value: "U1", label: "U1" },
      { value: "A17 Pro", label: "A17 Pro" },
    ],
  },
  ram: [
    { value: "8", label: "8GB" },
    { value: "16", label: "16GB" },
    { value: "24", label: "24GB" },
    { value: "32", label: "32GB+" },
  ],
  storage: [
    { value: "256", label: "256GB" },
    { value: "512", label: "512GB" },
    { value: "1024", label: "1TB+" },
  ],
};

const sortOptions = [
  { value: "recommended", label: "Recomendados" },
  { value: "name", label: "Nombre A-Z" },
  { value: "chip", label: "Por chip" },
];

export default function MacCatalogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    type: [],
    chip: [],
    ram: [],
    storage: [],
  });
  const [sortBy, setSortBy] = useState("recommended");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Get search query from URL
  const searchQuery = searchParams.get("q") || "";

  // Initialize filters from URL parameters
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setSelectedFilters((prev) => ({
        ...prev,
        type: [typeParam],
      }));
    }
  }, [searchParams]);

  // Track page view
  useEffect(() => {
    track("view_catalog", { searchQuery });
  }, [searchQuery]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.chip.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (selectedFilters.type.length > 0) {
      result = result.filter((p) => selectedFilters.type.includes(p.category));
    }

    // Chip filter
    if (selectedFilters.chip.length > 0) {
      result = result.filter((p) => selectedFilters.chip.includes(p.chip));
    }

    // RAM filter
    if (selectedFilters.ram.length > 0) {
      result = result.filter((p) =>
        p.ram.some((r) =>
          selectedFilters.ram.some((f) =>
            f === "32" ? r >= 32 : r === parseInt(f)
          )
        )
      );
    }

    // Storage filter
    if (selectedFilters.storage.length > 0) {
      result = result.filter((p) =>
        p.storage.some((s) =>
          selectedFilters.storage.some((f) =>
            f === "1024" ? s >= 1024 : s === parseInt(f)
          )
        )
      );
    }

    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "chip":
        result.sort((a, b) => a.chip.localeCompare(b.chip));
        break;
      default:
        // Keep original order (recommended)
        break;
    }

    return result;
  }, [searchQuery, selectedFilters, sortBy]);

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category];
      const newValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      
      track("filter_applied", { category, value, action: current.includes(value) ? "remove" : "add" });
      
      return { ...prev, [category]: newValues };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      type: [],
      chip: [],
      ram: [],
      storage: [],
    });
  };

  const toggleCompare = (productId: string) => {
    setCompareList((prev) => {
      if (prev.includes(productId)) {
        track("compare_removed", { productId });
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      track("compare_added", { productId });
      return [...prev, productId];
    });
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  // Get available chip options based on selected device types
  const availableChipFilters = useMemo(() => {
    if (selectedFilters.type.length === 0) {
      // If no type is selected, show all chips
      return Object.values(allFilters.chip).flat().reduce((acc, chip) => {
        if (!acc.find(c => c.value === chip.value)) {
          acc.push(chip);
        }
        return acc;
      }, [] as typeof allFilters.chip.laptop);
    }
    
    // Show only chips for selected device types
    return selectedFilters.type
      .flatMap(type => allFilters.chip[type as keyof typeof allFilters.chip] || [])
      .reduce((acc, chip) => {
        if (!acc.find(c => c.value === chip.value)) {
          acc.push(chip);
        }
        return acc;
      }, [] as typeof allFilters.chip.laptop);
  }, [selectedFilters.type]);

  // Filter sidebar content (reused in desktop and mobile)
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Type */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Tipo</h3>
        <div className="space-y-2">
          {allFilters.type.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={selectedFilters.type.includes(option.value)}
                onCheckedChange={() => toggleFilter("type", option.value)}
              />
              <option.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Chip - Dynamic based on selected type */}
      {availableChipFilters.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Chip</h3>
          <div className="space-y-2">
            {availableChipFilters.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2"
              >
                <Checkbox
                  checked={selectedFilters.chip.includes(option.value)}
                  onCheckedChange={() => toggleFilter("chip", option.value)}
                />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* RAM */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">RAM</h3>
        <div className="space-y-2">
          {allFilters.ram.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={selectedFilters.ram.includes(option.value)}
                onCheckedChange={() => toggleFilter("ram", option.value)}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Storage */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Almacenamiento
        </h3>
        <div className="space-y-2">
          {allFilters.storage.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={selectedFilters.storage.includes(option.value)}
                onCheckedChange={() => toggleFilter("storage", option.value)}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full">
          <X className="mr-2 h-4 w-4" />
          Limpiar filtros
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Catálogo Apple
            </h1>
            <p className="text-muted-foreground">
              Encuentra el dispositivo Apple perfecto para tu empresa. Mac, iPhone, iPad, Apple Watch y más con soporte empresarial.
            </p>
          </div>

          {/* Search and controls */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex-1 lg:max-w-md">
                <SearchBar variant="full" />
              </div>
              
              {/* Mobile filter button */}
              <Suspense fallback={<Loading />}>
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden bg-transparent">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filtros
                      {activeFilterCount > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {activeFilterCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </Suspense>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} productos
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active filters */}
          {activeFilterCount > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([category, values]) =>
                values.map((value) => {
                  let option;
                  if (category === 'type') {
                    option = allFilters.type.find((f) => f.value === value);
                  } else if (category === 'chip') {
                    option = availableChipFilters.find((f) => f.value === value);
                  } else {
                    const filterGroup = allFilters[category as keyof typeof allFilters];
                    option = Array.isArray(filterGroup) ? filterGroup.find((f: any) => f.value === value) : null;
                  }
                  return (
                    <Badge
                      key={`${category}-${value}`}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => toggleFilter(category, value)}
                    >
                      {option?.label || value}
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  );
                })
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-6 px-2 text-xs"
              >
                Limpiar todo
              </Button>
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop filters sidebar */}
            <aside className="hidden w-64 flex-shrink-0 lg:block">
              <div className="sticky top-24 rounded-lg border border-border bg-card/50 p-4">
                <h2 className="mb-4 font-semibold text-foreground">Filtros</h2>
                <FilterContent />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showCompare
                      isCompareSelected={compareList.includes(product.id)}
                      onCompareToggle={toggleCompare}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-20 text-center">
                  <p className="mb-2 text-lg font-medium text-foreground">
                    No se encontraron productos
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Intenta ajustar los filtros o buscar algo diferente
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Compare sticky bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg lg:bottom-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:rounded-full lg:border lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">
                Comparar ({compareList.length}/3)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCompareList([])}
              >
                Limpiar
              </Button>
              <Button size="sm" disabled={compareList.length < 2} asChild>
                <Link href={`/comparar?ids=${compareList.join(",")}`}>
                  Comparar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
