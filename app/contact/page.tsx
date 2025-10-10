import ContactPageClient from "./page.client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for quotes and inquiries",
}

export default function ContactPage() {
  return <ContactPageClient />
}
