export type Product = {
  id: string
  slug: string
  name: string
  category: string
  summary: string
  hsCode?: string
  origin: string
  specs: { key: string; value: string }[]
  images: {
    card: string
    hero: string
  }
}

export const products: Product[] = [
  {
    id: "tuna",
    slug: "frozen-yellowfin-tuna",
    name: "Frozen Yellowfin Tuna",
    category: "Seafood",
    summary:
      "Indonesian-origin yellowfin tuna, harvested responsibly and frozen at sea to preserve freshness and quality.",
    hsCode: "0303.47",
    origin: "Indonesia",
    specs: [
      { key: "Grade", value: "Sashimi/Export" },
      { key: "Processing", value: "G&G, HGT, Loin, Whole Round" },
      { key: "Glazing", value: "5–10%" },
      { key: "Packaging", value: "Polybag + Master Carton, 20kg" },
      { key: "Shelf Life", value: "24 months at -18°C" },
    ],
    images: {
      card: "/tuna-fish.png",
      hero: "/tuna-fish.png",
    },
  },
  {
    id: "plywood",
    slug: "marine-grade-meranti-plywood",
    name: "Marine Grade Meranti Plywood",
    category: "Wood Products",
    summary: "Durable Meranti plywood engineered for marine and industrial applications with waterproof bonding.",
    hsCode: "4412.33",
    origin: "Kalimantan & Sumatra, Indonesia",
    specs: [
      { key: "Face/Back", value: "Meranti" },
      { key: "Core", value: "Meranti/Hardwood" },
      { key: "Glue", value: "Phenolic WBP (Water Boil Proof)" },
      { key: "Thickness", value: "4–25 mm" },
      { key: "Size", value: "1220 x 2440 mm (4x8 ft)" },
    ],
    images: {
      card: "/plywood.jpg",
      hero: "/marine-plywood.jpg",
    },
  },
  {
    id: "charcoal",
    slug: "coconut-shell-charcoal-briquettes",
    name: "Coconut Shell Charcoal Briquettes",
    category: "Energy",
    summary:
      "Eco-friendly briquettes made from 100% coconut shells — high heat, low ash, long burn, ideal for shisha and BBQ.",
    hsCode: "4402.90",
    origin: "Java & Sulawesi, Indonesia",
    specs: [
      { key: "Ash Content", value: "1.5–2.5%" },
      { key: "Fixed Carbon", value: "≥ 80%" },
      { key: "Moisture", value: "≤ 6%" },
      { key: "Calorific Value", value: "≥ 7500 Kcal/kg" },
      { key: "Shapes", value: "Cube, Hexa, Finger" },
    ],
    images: {
      card: "/charcoal-briquettes.jpg",
      hero: "/coconut-shell-charcoal-briquettes.jpg",
    },
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
