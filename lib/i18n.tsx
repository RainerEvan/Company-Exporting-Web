"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import en from "@/locales/en.json"
import id from "@/locales/id.json"

type Lang = "en" | "id"
type Dictionary = typeof en

const dictionaries: Record<Lang, Dictionary> = { en, id }

type Ctx = {
  lang: Lang
  t: (path: string) => any
  switchLang: (next: Lang) => void
}

const I18nCtx = createContext<Ctx | null>(null)

function get(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj)
}

export function I18nProvider({ initialLang = "en", children }: { initialLang?: Lang; children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const dict = useMemo(() => dictionaries[lang], [lang])

  useEffect(() => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`
  }, [lang])

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: (path: string) => get(dict, path),
      switchLang: setLang,
    }),
    [lang, dict],
  )

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
