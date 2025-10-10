import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InquiryCTA() {
  return (
    <section className="bg-(--color-primary) text-(--color-primary-foreground)">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-balance">Ready to discuss your order?</h3>
          <p className="text-sm opacity-90 mt-1">
            Tell us your specifications and destination port. We’ll send a detailed quotation.
          </p>
        </div>
        <Button asChild variant="secondary" className="text-(--color-primary)">
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </div>
    </section>
  )
}
