export const CORREO_COMERCIAL = "comercial@ventixb2b.com";
export const WHATSAPP_NUMERO = "573008370046";
export const WHATSAPP_VISIBLE = "+57 300 8370046";

export function enlaceWhatsApp(mensaje = "Hola VentixB2B, quiero hablar de mi proyecto.") {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

export const SERVICIOS_CONTACTO = [
  "Branding e identidad corporativa",
  "Marketing digital y publicidad online",
  "Gestión de redes sociales",
  "Diseño gráfico y producción publicitaria",
  "Fachadas comerciales y branding de espacios",
  "Desarrollo web y comercio electrónico",
  "Eventos, activaciones y marketing experiencial",
  "Automatización e IA",
  "Otro",
];

/** Redes sociales: reemplaza cada url por el perfil real de VentixB2B. */
export const REDES = [
  { red: "facebook", nombre: "Facebook", url: "https://www.facebook.com/" },
  { red: "instagram", nombre: "Instagram", url: "https://www.instagram.com/" },
  { red: "tiktok", nombre: "TikTok", url: "https://www.tiktok.com/" },
  { red: "youtube", nombre: "YouTube", url: "https://www.youtube.com/" },
  { red: "x", nombre: "X", url: "https://x.com/" },
] as const;
