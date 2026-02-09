"use client"

import React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Check, Heart, Share2, Shield, Award, Zap, Monitor, Cpu, HardDrive, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type Product } from "@/lib/data"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/shared/product-card"
import { trackEvent } from "@/lib/analytics"
import { 
  RecommendedConfigs, 
  RecommendedServices, 
  CompatibleAccessories, 
  AppleCareSection,
  PromoApplicable 
} from "@/components/pdp/pdp-merchandising"
import { StickyCTA } from "@/components/shared/sticky-cta" // Declare StickyCTA variable

interface ProductDetailClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedConfig, setSelectedConfig] = useState<Record<string, string>>({})
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    // Initialize selected config with first option of each
    const initialConfig: Record<string, string> = {}
    if (product.configurations) {
      product.configurations.forEach(config => {
        initialConfig[config.name] = config.options[0].value
      })
    }
    setSelectedConfig(initialConfig)
    trackEvent("view_product", { product_id: product.id, product_name: product.name })
  }, [product])

  const handleRequestQuote = () => {
    trackEvent("request_quote", { 
      product_id: product.id, 
      product_name: product.name,
      configuration: selectedConfig
    })
  }

  const handleCompare = () => {
    trackEvent("add_to_compare", { product_id: product.id, product_name: product.name })
  }

  const images = product.images || [product.image]

  const specIcons: Record<string, React.ReactNode> = {
    "Chip": <Cpu className="h-5 w-5" />,
    "Pantalla": <Monitor className="h-5 w-5" />,
    "RAM": <Zap className="h-5 w-5" />,
    "Almacenamiento": <HardDrive className="h-5 w-5" />,
    "Bateria": <Battery className="h-5 w-5" />,
    "Batería": <Battery className="h-5 w-5" />,
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
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-card rounded-2xl overflow-hidden border border-border group">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-border hover:border-muted-foreground"
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} vista ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <p className="text-primary font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Enterprise Quote CTA */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Precio empresarial</p>
              <p className="text-lg font-semibold text-foreground">Solicita tu cotizacion personalizada</p>
              <p className="text-xs text-muted-foreground mt-1">Precios especiales por volumen disponibles</p>
            </div>

            {/* Key Specs Quick View */}
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                <div 
                  key={key}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                >
                  <div className="text-primary">
                    {specIcons[key] || <Zap className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{key}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Configurations */}
            {product.configurations && product.configurations.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Configuración</h3>
                {product.configurations.map((config) => (
                  <div key={config.name} className="space-y-2">
                    <label className="text-sm text-muted-foreground">{config.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {config.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSelectedConfig(prev => ({ ...prev, [config.name]: option.value }))}
                          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                            selectedConfig[config.name] === option.value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-card text-foreground hover:border-muted-foreground"
                          }`}
                        >
                          {option.label}
                          
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-border hover:bg-secondary bg-transparent"
                  onClick={handleCompare}
                  asChild
                >
                  <Link href={`/comparar?products=${product.id}`}>
                    Comparar
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contacto-empresas">
                    Contactar asesor
                  </Link>
                </Button>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500" : "text-muted-foreground"}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                  {isWishlisted ? "En favoritos" : "Agregar a favoritos"}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 pt-4 border-t border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Garantía Apple</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Partner oficial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Especificaciones
              </TabsTrigger>
              <TabsTrigger 
                value="features"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Características
              </TabsTrigger>
              <TabsTrigger 
                value="enterprise"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Para empresas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Especificaciones técnicas</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div 
                        key={key}
                        className="flex justify-between py-3 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Lo que incluye</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary" />
                      {product.name}
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary" />
                      Cable de carga USB-C
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary" />
                      Adaptador de corriente
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary" />
                      Documentación
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="pt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Rendimiento excepcional</h4>
                  <p className="text-muted-foreground text-sm">
                    Potencia profesional para las tareas más exigentes con el chip Apple Silicon.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <Battery className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Batería todo el día</h4>
                  <p className="text-muted-foreground text-sm">
                    Hasta 22 horas de batería para trabajar sin interrupciones.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Seguridad integrada</h4>
                  <p className="text-muted-foreground text-sm">
                    Touch ID, encriptación de hardware y Secure Enclave.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="enterprise" className="pt-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Soluciones empresariales con {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Como Apple Business Partner, ofrecemos implementación completa, gestión MDM, 
                    soporte técnico especializado y planes de financiamiento para flotas empresariales.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Configuración DEP/ABM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Gestión MDM incluida</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Soporte técnico 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Planes de leasing</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Contactar ventas empresariales
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Promo Banner if applicable */}
        <div className="mb-8">
          <PromoApplicable product={product} />
        </div>

        {/* Merchandising Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <RecommendedConfigs product={product} />
            <RecommendedServices product={product} />
          </div>
          <div className="space-y-6">
            <AppleCareSection product={product} />
            <CompatibleAccessories product={product} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Productos relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
</main>
      <Footer />
    </div>
  )
}
