"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { X, Plus, Check, Minus, ChevronRight, Download, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { products, type Product } from "@/lib/data"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { trackEvent } from "@/lib/analytics"
import Loading from "./loading"

const MAX_COMPARE = 4

function ComparatorContent() {
  const searchParams = useSearchParams()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Only load from URL on initial mount
    if (initialized) return
    
    const productIds = searchParams.get("products")?.split(",") || []
    const loadedProducts = productIds
      .map(id => products.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined)
      .slice(0, MAX_COMPARE)
    
    setSelectedProducts(loadedProducts)
    setInitialized(true)
    
    if (loadedProducts.length > 0) {
      trackEvent("compare_view", { product_ids: loadedProducts.map(p => p.id) })
    }
  }, [searchParams, initialized])

  const addProduct = (product: Product) => {
    if (selectedProducts.length < MAX_COMPARE && !selectedProducts.find(p => p.id === product.id)) {
      const newProducts = [...selectedProducts, product]
      setSelectedProducts(newProducts)
      updateUrl(newProducts)
      setIsDialogOpen(false)
      setSearchQuery("")
      trackEvent("compare_add", { product_id: product.id })
    }
  }

  const removeProduct = (productId: string) => {
    const newProducts = selectedProducts.filter(p => p.id !== productId)
    setSelectedProducts(newProducts)
    updateUrl(newProducts)
    trackEvent("compare_remove", { product_id: productId })
  }

  const updateUrl = (prods: Product[]) => {
    const url = new URL(window.location.href)
    if (prods.length > 0) {
      url.searchParams.set("products", prods.map(p => p.id).join(","))
    } else {
      url.searchParams.delete("products")
    }
    window.history.replaceState({}, "", url.toString())
  }

  const filteredProducts = products.filter(p => 
    !selectedProducts.find(sp => sp.id === p.id) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // Get all unique spec keys from selected products
  const allSpecKeys = Array.from(
    new Set(selectedProducts.flatMap(p => Object.keys(p.specs)))
  )

  const handleExportPDF = () => {
    trackEvent("compare_export", { product_ids: selectedProducts.map(p => p.id), format: "pdf" })
    // In a real implementation, this would generate a PDF
    alert("Exportar a PDF - Funcionalidad en desarrollo")
  }

  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    trackEvent("compare_share", { product_ids: selectedProducts.map(p => p.id) })
    alert("Enlace copiado al portapapeles")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/mac" className="hover:text-primary transition-colors">Mac</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Comparar</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Comparar Mac</h1>
            <p className="text-muted-foreground">
              Compara hasta {MAX_COMPARE} productos lado a lado para encontrar el Mac ideal para tu empresa
            </p>
          </div>
          {selectedProducts.length >= 2 && (
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportPDF}>
                <Download className="h-4 w-4 mr-2" />
                Exportar PDF
              </Button>
            </div>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Product Headers */}
            <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `repeat(${Math.max(selectedProducts.length, 2) + 1}, minmax(200px, 1fr))` }}>
              {/* Empty cell for labels column */}
              <div className="hidden lg:block" />
              
              {/* Product Cards */}
              {selectedProducts.map((product) => (
                <div 
                  key={product.id}
                  className="relative bg-card rounded-xl border border-border p-4"
                >
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-background/80 border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    aria-label={`Quitar ${product.name} de la comparación`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                    {product.badge && (
                      <Badge className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <Link 
                    href={`/mac/${product.slug}`}
                    className="block text-center hover:text-primary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                  </Link>
                  <Button 
                    size="sm" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <Link href={`/mac/${product.slug}`}>
                      Ver detalles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
              
              {/* Add Product Slots */}
              {Array.from({ length: MAX_COMPARE - selectedProducts.length }).map((_, idx) => (
                <Dialog key={`add-${idx}`} open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="flex flex-col items-center justify-center aspect-[3/4] border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors mb-3">
                        <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                        Agregar producto
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Seleccionar producto para comparar</DialogTitle>
                    </DialogHeader>
                    <div className="mb-4">
                      <Input
                        placeholder="Buscar producto..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="overflow-y-auto flex-1 -mx-6 px-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => addProduct(product)}
                            className="flex flex-col items-center p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left"
                          >
                            <div className="relative w-20 h-20 mb-3">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="text-sm font-medium text-foreground text-center line-clamp-2 mb-1">
                              {product.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* Specs Comparison Table */}
            {selectedProducts.length >= 2 && (
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Table Header */}
                <div 
                  className="grid bg-muted/50 border-b border-border"
                  style={{ gridTemplateColumns: `200px repeat(${selectedProducts.length}, 1fr)` }}
                >
                  <div className="p-4 font-semibold text-foreground">Especificaciones</div>
                  {selectedProducts.map((product) => (
                    <div key={product.id} className="p-4 font-semibold text-foreground text-center border-l border-border">
                      {product.name.split(" ").slice(0, 2).join(" ")}
                    </div>
                  ))}
                </div>

                {/* Spec Rows */}
                {allSpecKeys.map((specKey, idx) => (
                  <div 
                    key={specKey}
                    className={`grid ${idx % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
                    style={{ gridTemplateColumns: `200px repeat(${selectedProducts.length}, 1fr)` }}
                  >
                    <div className="p-4 text-muted-foreground font-medium border-r border-border">
                      {specKey}
                    </div>
                    {selectedProducts.map((product) => {
                      const value = product.specs[specKey]
                      const hasValue = value !== undefined && value !== ""
                      
                      return (
                        <div 
                          key={`${product.id}-${specKey}`}
                          className="p-4 text-center border-l border-border"
                        >
                          {hasValue ? (
                            <span className="text-foreground">{value}</span>
                          ) : (
                            <Minus className="h-4 w-4 text-muted-foreground mx-auto" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}

                {/* CTA Row */}
                <div 
                  className="grid border-t border-border"
                  style={{ gridTemplateColumns: `200px repeat(${selectedProducts.length}, 1fr)` }}
                >
                  <div className="p-4 border-r border-border" />
                  {selectedProducts.map((product) => (
                    <div 
                      key={`${product.id}-cta`}
                      className="p-4 border-l border-border flex justify-center"
                    >
                      <Button 
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <Link href={`/mac/${product.slug}`}>
                          Ver detalles
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {selectedProducts.length < 2 && (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <div className="max-w-md mx-auto">
                  <div className="p-4 rounded-full bg-muted w-fit mx-auto mb-4">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Selecciona al menos 2 productos
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Agrega productos para ver una comparación detallada de sus especificaciones
                  </p>
                  <Button asChild>
                    <Link href="/mac">
                      Explorar catálogo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        {selectedProducts.length >= 2 && (
          <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ¿Necesitas ayuda para elegir?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nuestros especialistas en soluciones empresariales Apple pueden ayudarte a 
                encontrar el Mac perfecto para las necesidades específicas de tu equipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Hablar con un especialista
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                  Agendar demostración
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default function ComparePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ComparatorContent />
    </Suspense>
  )
}
