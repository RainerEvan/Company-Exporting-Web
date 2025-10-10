"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/process", label: t("nav.process") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-2 h-16">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground text-sm">
              NG
            </span>
            <span className="text-xs sm:text-sm">{t("brand")}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm hover:text-primary transition-colors",
                  pathname === item.href ? "text-primary font-medium" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              asChild
              variant="default"
              className="bg-(--color-primary) text-(--color-primary-foreground) hover:opacity-90 hidden md:inline-flex"
            >
              <Link href="/contact">{t("hero.quote")}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4 border-t pt-4 animate-in fade-in slide-in-from-top">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm px-2 py-1 hover:text-primary transition-colors",
                  pathname === item.href ? "text-primary font-medium" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              variant="default"
              className="bg-(--color-primary) text-(--color-primary-foreground) hover:opacity-90 w-full mt-2"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                {t("hero.quote")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
