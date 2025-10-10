"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { lang, switchLang } = useI18n()
  const other = lang === "en" ? "id" : "en"
  return (
    <Button
      variant="secondary"
      className="text-sm"
      aria-label={`Switch language to ${other.toUpperCase()}`}
      onClick={() => switchLang(other as "en" | "id")}
    >
      {lang.toUpperCase()} / {other.toUpperCase()}
    </Button>
  )
}
