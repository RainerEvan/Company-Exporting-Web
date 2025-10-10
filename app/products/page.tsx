import Link from "next/link"
import type { Metadata } from "next"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our export products",
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Our Products</h1>
          <p className="text-muted-foreground">Click a product to view detailed specifications.</p>
        </div>
        <Link href="/contact" className="text-primary hover:underline">
          Request a Quote →
        </Link>
      </header>
      <div className="grid gap-6 mt-8 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
