import { notFound } from "next/navigation"
import { products, type Product } from "@/lib/data"
import { ProductDetailClient } from "@/components/pdp/product-detail-client"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

function getRelatedProducts(product: Product): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />
}
