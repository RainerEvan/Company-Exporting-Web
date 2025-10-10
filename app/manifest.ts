import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PT Nusantara Global Exports",
    short_name: "Nusantara Exports",
    start_url: "/",
    display: "standalone",
    description:
      "Exporting Frozen Yellowfin Tuna, Marine Grade Meranti Plywood, and Coconut Shell Charcoal Briquettes.",
    icons: [{ src: "/abstract-logo.png", sizes: "192x192", type: "image/svg+xml" }],
    theme_color: "#0B3D91",
    background_color: "#ffffff",
  }
}
