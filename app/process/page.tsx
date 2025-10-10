import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Process",
  description: "Our export process",
}

const steps = [
  { title: "Sourcing", img: "/indonesia-factory.jpg" },
  { title: "Quality Control", img: "/quality-inspection.jpg" },
  { title: "Packaging", img: "/export-packaging.jpg" },
  { title: "Delivery", img: "/container-shipping.png" },
]

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Our Process</h1>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="rounded-lg border bg-card overflow-hidden">
            <img src={s.img || "/placeholder.svg"} alt={s.title} className="w-full h-auto" />
            <div className="p-4">
              <div className="font-medium">{s.title}</div>
              <p className="text-sm text-muted-foreground mt-1">
                We follow documented SOPs to ensure traceability and compliance at every step.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
