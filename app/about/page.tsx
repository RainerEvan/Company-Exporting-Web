import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About PT Nusantara Global Exports",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Founded in 2025, PT Nusantara Global Exports was established to connect Indonesia’s best natural and
          manufactured goods to the world market. Our team combines industry expertise with on-the-ground sourcing to
          deliver consistent, compliant, and competitively priced shipments.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className="mt-1 text-muted-foreground">
          To deliver Indonesian excellence worldwide with integrity, reliability, and sustainability.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Values</h2>
        <ul className="list-disc ml-5 text-muted-foreground">
          <li>Quality first — rigorous QA and supplier development</li>
          <li>Reliability — on-time deliveries and clear communication</li>
          <li>Sustainability — responsible sourcing and traceability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Certifications</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="font-medium">HACCP</div>
            <div className="text-sm text-muted-foreground">Food safety management — placeholder certificate.</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">ISO 9001</div>
            <div className="text-sm text-muted-foreground">Quality management — placeholder certificate.</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">ISO 14001</div>
            <div className="text-sm text-muted-foreground">Environmental management — placeholder certificate.</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testimonials</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-lg border p-4 bg-card">
            “Reliable partner with great communication. Shipment arrived on time and as specified.”
            <div className="text-sm text-muted-foreground mt-1">— Importer, Middle East</div>
          </blockquote>
          <blockquote className="rounded-lg border p-4 bg-card">
            “Consistent quality and documentation. Smooth process from inquiry to delivery.”
            <div className="text-sm text-muted-foreground mt-1">— Distributor, Europe</div>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
