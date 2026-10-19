import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "VentixB2B: Impulsamos marcas. Aceleramos negocios.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/img/icon-512.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #050d1f 0%, #0a1733 55%, #0f2347 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -260,
            top: -40,
            width: 520,
            height: 760,
            background: "linear-gradient(180deg, #23b4f5, #0b6fd6)",
            transform: "skewX(-14deg)",
            opacity: 0.35,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 150,
            top: -40,
            width: 26,
            height: 760,
            background: "linear-gradient(180deg, #fbbf24, #f26a11)",
            transform: "skewX(-14deg)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} width={112} height={112} style={{ borderRadius: 999 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>
              <span>VENTIX</span>
              <span style={{ color: "#23b4f5" }}>B2B</span>
            </div>
            <div style={{ fontSize: 22, letterSpacing: 8, color: "#7fd6fb" }}>IDEAS QUE VENDEN.</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            Impulsamos marcas.
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: "#23b4f5" }}>
            Aceleramos negocios.
          </div>
          <div style={{ marginTop: 22, fontSize: 30, color: "rgba(255,255,255,0.8)" }}>
            Branding · Marketing digital · Redes sociales · Diseño web · E-commerce
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26 }}>
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: 999,
              background: "linear-gradient(90deg, #fbbf24, #f26a11)",
              fontWeight: 700,
            }}
          >
            Hablemos
          </div>
          <span style={{ color: "rgba(255,255,255,0.75)" }}>comercial@ventixb2b.com · +57 300 8370046</span>
        </div>
      </div>
    ),
    size,
  );
}
