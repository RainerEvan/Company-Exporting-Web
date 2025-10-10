import { Hero } from "@/components/hero"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { WhyChooseUs } from "@/components/why-choose-us"
import { InquiryCTA } from "@/components/inquiry-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">About Company</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          PT Nusantara Global Exports connects Indonesia’s finest natural and manufactured products with global buyers
          through strict quality control, reliable logistics, and transparent communication.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-semibold">Products</h2>
        <div className="grid gap-6 mt-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <WhyChooseUs />
      <InquiryCTA />
    </>
  )
}
