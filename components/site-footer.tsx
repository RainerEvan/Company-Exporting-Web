"use client";

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold text-primary">{t("brand")}</div>
          <p className="text-sm mt-2 text-muted-foreground">
            Jakarta, Indonesia — Exporting premium tuna, marine plywood, and coconut shell charcoal briquettes
            worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <Link href="/process" className="hover:text-primary">
            Process
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="flex items-start md:justify-end">
          <Button asChild variant="secondary" className="border border-(--color-primary) text-(--color-primary)">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              {t("footer.whatsapp")}
            </a>
          </Button>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">
        © {year} {t("brand")}. {t("footer.rights")}
      </div>
    </footer>
  )
}
