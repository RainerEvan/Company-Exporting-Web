import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProductBySlug, products } from "@/data/products"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: "Product" }
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: product.name,
      description: product.summary,
      url: `${url}/products/${product.slug}`,
      images: [{ url: product.images.hero, width: 800, height: 480, alt: product.name }],
    },
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) return notFound()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
      <div className="rounded-xl overflow-hidden border">
        <img src={product.images.hero || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 text-muted-foreground">{product.summary}</p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Specifications</h2>
          <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.specs.map((s) => (
              <div key={s.key} className="rounded-lg border p-3 bg-card">
                <dt className="text-sm font-medium">{s.key}</dt>
                <dd className="text-sm text-muted-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">HS Code:</span> {product.hsCode || "—"}
          </div>
          <div>
            <span className="font-medium">Origin:</span> {product.origin}
          </div>
        </div>
      </div>
    </div>
  )
}
