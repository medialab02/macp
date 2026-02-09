"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Cpu, HardDrive, Monitor } from "lucide-react";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils"; // Import formatPrice function

interface ProductCardProps {
  product: Product;
  showCompare?: boolean;
  isCompareSelected?: boolean;
  onCompareToggle?: (productId: string) => void;
  className?: string;
}

export function ProductCard({
  product,
  showCompare = false,
  isCompareSelected = false,
  onCompareToggle,
  className,
}: ProductCardProps) {
  // Prices are not displayed - each product redirects to Mac page for enterprise quotes

  return (
    <Card
      className={cn(
        "group overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card",
        isCompareSelected && "border-primary ring-1 ring-primary",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <Badge
            className={cn(
              "absolute left-3 top-3",
              product.badge === "Nuevo" && "bg-primary text-primary-foreground",
              product.badge === "Recomendado" && "bg-green-500/90 text-white",
              product.badge === "Popular" && "bg-blue-500/90 text-white"
            )}
          >
            {product.badge}
          </Badge>
        )}
        {!product.inStock && (
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 bg-background/80"
          >
            {product.leadTime || "Bajo pedido"}
          </Badge>
        )}

        {showCompare && (
          <div className="absolute bottom-3 right-3">
            <label className="flex cursor-pointer items-center gap-2 rounded-md bg-background/90 px-2 py-1.5 text-xs backdrop-blur">
              <Checkbox
                checked={isCompareSelected}
                onCheckedChange={() => onCompareToggle?.(product.id)}
              />
              <span className="text-foreground">Comparar</span>
            </label>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground line-clamp-2">
            {product.shortName}
          </h3>
          <Badge variant="outline" className="shrink-0 text-xs">
            {product.chip}
          </Badge>
        </div>

        {/* Quick specs */}
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Cpu className="h-3 w-3" />
            {product.chip}
          </span>
          <span className="flex items-center gap-1">
            <HardDrive className="h-3 w-3" />
            {product.storage[0]}GB
          </span>
          {product.screenSize > 0 && (
            <span className="flex items-center gap-1">
              <Monitor className="h-3 w-3" />
              {product.screenSize}&quot;
            </span>
          )}
        </div>

        {/* Recommended for tags */}
        <div className="mb-4 flex flex-wrap gap-1">
          {product.recommendedFor.slice(0, 3).map((role) => (
            <span
              key={role}
              className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Actions - Link to Mac page for details */}
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="flex-1" asChild>
            <Link href={`/mac/${product.slug}`}>
              Ver detalles
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
