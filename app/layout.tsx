import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { cookies } from "next/headers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "PT Nusantara Global Exports",
    template: "%s | PT Nusantara Global Exports",
  },
  description:
    "Delivering Indonesia’s finest products — Frozen Yellowfin Tuna, Marine Grade Meranti Plywood, and Coconut Shell Charcoal Briquettes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "PT Nusantara Global Exports",
    title: "PT Nusantara Global Exports",
    description: "We export premium Tuna Fish, Marine-grade Plywood, and eco-friendly Charcoal Briquettes worldwide.",
    images: [
      {
        url: "/cargo-ship-port.jpg",
        width: 1200,
        height: 630,
        alt: "PT Nusantara Global Exports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Nusantara Global Exports",
    description: "We export premium Tuna Fish, Marine-grade Plywood, and eco-friendly Charcoal Briquettes worldwide.",
    images: ["/cargo-ship-port.jpg"],
  },
  generator: "v0.app",
};

// 🔥 MAKE LAYOUT ASYNC
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const initialLang = (cookieStore.get("lang")?.value as "en" | "id") || "en";

  return (
    <html lang={initialLang} className={`${inter.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col">
        <I18nProvider initialLang={initialLang}>
          <Suspense fallback={<div>Loading...</div>}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </Suspense>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
