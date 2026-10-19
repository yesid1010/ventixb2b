import type { Metadata } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VentixB2B | Ideas que venden",
  description:
    "Agencia de branding, publicidad digital, diseño web, marketing e inteligencia artificial para hacer crecer tu negocio.",
  icons: { icon: "/img/logo.jpg" },
  openGraph: {
    title: "VentixB2B | Ideas que venden",
    description:
      "Impulsamos marcas, marketing y crecimiento comercial. Creatividad + estrategia + tecnología para negocios reales.",
    images: ["/img/banner.jpg"],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
