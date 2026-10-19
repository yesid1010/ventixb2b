import type { MetadataRoute } from "next";
import { SITIO } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITIO.url,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
