"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export default function ContactPageClient() {
  const { t } = useI18n()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(Object.fromEntries(fd.entries())),
    //   headers: { "Content-Type": "application/json" },
    // })
    // if (res.ok) setStatus("success")
    // else setStatus("error")
    setStatus("success")
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{t("contact.title")}</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">{t("contact.name")}</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">{t("contact.company")}</Label>
          <Input id="company" name="company" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input id="email" type="email" name="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="country">{t("contact.country")}</Label>
          <Input id="country" name="country" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="product">{t("contact.product")}</Label>
          <Input
            id="product"
            name="product"
            placeholder="Frozen Yellowfin Tuna / Meranti Plywood / Charcoal Briquettes"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">{t("contact.message")}</Label>
          <Textarea id="message" name="message" required rows={5} />
        </div>
        <div className="flex gap-3 items-center">
          <Button type="submit" className="bg-(--color-primary) text-(--color-primary-foreground) hover:opacity-90">
            {t("contact.submit")}
          </Button>
          {status === "success" && <span className="text-sm text-green-600">{t("contact.success")}</span>}
          {status === "error" && <span className="text-sm text-red-600">Something went wrong. Please try again.</span>}
        </div>
      </form>
    </div>
  )
}
