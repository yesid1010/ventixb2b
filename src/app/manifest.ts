import type { MetadataRoute } from "next";
import { SITIO } from "@/lib/sitio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITIO.nombre} | ${SITIO.eslogan}`,
    short_name: SITIO.nombre,
    description: SITIO.descripcion,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1733",
    lang: "es-CO",
    icons: [
      { src: "/img/icon-192.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/img/icon-512.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
  };
}
