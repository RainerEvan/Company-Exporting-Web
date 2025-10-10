"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">{t("hero.title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("hero.subtitle")}</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-(--color-primary) text-(--color-primary-foreground) hover:opacity-90">
              <Link href="/products">{t("hero.explore")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">{t("hero.quote")}</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src="/cargo-ship-port.jpg" alt="Container ship at Indonesian port" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
