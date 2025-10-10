"use client";

import { useI18n } from "@/lib/i18n"
import { LucideCheckCircle } from "lucide-react"

export function WhyChooseUs() {
  const { t } = useI18n()
  const items: string[] = t("why.items") || []
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">{t("why.title")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((label) => (
            <div key={label} className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-2 text-primary">
                <LucideCheckCircle size={20} />
                <span className="font-medium">{label}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                We maintain rigorous standards for sourcing, processing, and logistics to ensure consistent excellence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
