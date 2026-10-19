import Image from "next/image";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Icon, WhatsAppIcon, type IconName } from "@/components/Icon";
import { RevealObserver } from "@/components/Reveal";
import { Tilt } from "@/components/Tilt";
import { RedesSociales } from "@/components/RedesSociales";
import { SITIO } from "@/lib/sitio";
import {
  CORREO_COMERCIAL,
  WHATSAPP_NUMERO,
  WHATSAPP_VISIBLE,
  enlaceWhatsApp,
} from "@/lib/contacto";

const PILARES: {
  icono: IconName;
  titulo: string;
  color: string;
  items: string[];
}[] = [
  {
    icono: "megaphone",
    titulo: "Branding y publicidad",
    color: "bg-gradient-orange",
    items: ["Identidad de marca", "Diseño gráfico", "Publicidad creativa"],
  },
  {
    icono: "chart",
    titulo: "Marketing digital y diseño web",
    color: "bg-gradient-blue",
    items: ["Redes sociales", "Campañas digitales", "Diseño web y e-commerce"],
  },
  {
    icono: "ai",
    titulo: "Inteligencia artificial y crecimiento comercial",
    color: "bg-navy-900",
    items: ["Automatización e IA", "Generación de clientes", "Estrategia comercial"],
  },
];

type Servicio = {
  icono: IconName;
  titulo: string;
  texto: string;
  color: string;
  img: string;
  w: number;
  h: number;
  /** Centro y diámetro de la insignia (en % del ancho/alto de la foto). */
  cx: number;
  cy: number;
  dia: number;
};

const SERVICIOS: Servicio[] = [
  { icono: "pen", titulo: "Branding e identidad corporativa", texto: "Creamos y renovamos la imagen de tu negocio para que sea única, reconocida y confiable.", color: "bg-gradient-orange", img: "s-branding", w: 240, h: 143, cx: 18.5, cy: 16.8, dia: 38 },
  { icono: "megaphone", titulo: "Marketing digital y publicidad online", texto: "Hacemos que más personas conozcan tu negocio con anuncios en Google, redes sociales y otras plataformas.", color: "bg-gradient-blue", img: "s-marketing", w: 236, h: 143, cx: 19.7, cy: 16.8, dia: 38 },
  { icono: "users", titulo: "Gestión de redes sociales y contenido digital", texto: "Creamos contenido atractivo y gestionamos tus redes para conectar con tus clientes y generar oportunidades de venta.", color: "bg-[linear-gradient(135deg,#ff5f8a,#e11d48)]", img: "s-redes", w: 231, h: 143, cx: 19.7, cy: 16.8, dia: 39 },
  { icono: "edit", titulo: "Diseño gráfico y producción publicitaria", texto: "Diseñamos todo el material visual que tu negocio necesita para promocionarse de forma clara y atractiva.", color: "bg-[linear-gradient(135deg,#a855f7,#6d28d9)]", img: "s-diseno", w: 236, h: 143, cx: 19.3, cy: 16.8, dia: 38 },
  { icono: "store", titulo: "Fachadas comerciales y branding de espacios", texto: "Transformamos la imagen exterior e interior de tu negocio para hacerlo más atractivo y fácil de identificar.", color: "bg-[linear-gradient(135deg,#34d399,#059669)]", img: "s-fachadas", w: 313, h: 163, cx: 13.3, cy: 16.3, dia: 29.5 },
  { icono: "globe", titulo: "Desarrollo web y comercio electrónico", texto: "Creamos páginas web y tiendas virtuales modernas, seguras y fáciles de usar, disponibles las 24 horas.", color: "bg-gradient-blue", img: "s-web", w: 302, h: 163, cx: 16.6, cy: 16.3, dia: 30.5 },
  { icono: "calendar", titulo: "Eventos, activaciones y marketing experiencial", texto: "Creamos experiencias que acercan tu marca a las personas con eventos, lanzamientos y activaciones.", color: "bg-gradient-orange", img: "s-eventos", w: 324, h: 163, cx: 14.8, cy: 16.3, dia: 28.5 },
];

const PORTAFOLIO: { icono: IconName; titulo: string; fondo: string; span?: string }[] = [
  { icono: "pen", titulo: "Logotipos", fondo: "from-slate-100 to-slate-300 text-navy-900" },
  { icono: "palette", titulo: "Identidad comercial", fondo: "from-navy-800 to-brand-600 text-white" },
  { icono: "chat", titulo: "Piezas para redes sociales", fondo: "from-amber-400 to-orange-600 text-white" },
  { icono: "pin", titulo: "Mapas de ubicación", fondo: "from-sky-300 to-brand-500 text-white" },
  { icono: "image", titulo: "Banners y anuncios", fondo: "from-navy-950 to-navy-700 text-white", span: "lg:col-span-2" },
  { icono: "book", titulo: "Catálogos y menús digitales", fondo: "from-orange-500 to-orange-600 text-white" },
  { icono: "presentation", titulo: "Presentaciones comerciales", fondo: "from-brand-600 to-brand-400 text-white" },
];

const BENEFICIOS: { icono: IconName; titulo: string }[] = [
  { icono: "chart", titulo: "Más visibilidad" },
  { icono: "users", titulo: "Más clientes" },
  { icono: "trend", titulo: "Más crecimiento" },
];

const CINTA = [
  "Branding",
  "Logotipos",
  "Redes sociales",
  "Diseño web",
  "E-commerce",
  "Campañas digitales",
  "Automatización e IA",
  "Material comercial",
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITIO.url}/#organizacion`,
      name: SITIO.nombre,
      slogan: "Ideas que venden.",
      description: SITIO.descripcion,
      url: SITIO.url,
      logo: `${SITIO.url}/img/icon-512.jpg`,
      image: `${SITIO.url}/opengraph-image`,
      email: CORREO_COMERCIAL,
      telephone: `+${WHATSAPP_NUMERO}`,
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressCountry: "CO" },
      areaServed: { "@type": "Country", name: "Colombia" },
      knowsLanguage: "es",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CORREO_COMERCIAL,
        telephone: `+${WHATSAPP_NUMERO}`,
        areaServed: "CO",
        availableLanguage: "es",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de VentixB2B",
        itemListElement: SERVICIOS.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.titulo, description: s.texto },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITIO.url}/#sitio`,
      url: SITIO.url,
      name: SITIO.nombre,
      inLanguage: "es-CO",
      publisher: { "@id": `${SITIO.url}/#organizacion` },
    },
  ],
};

/** Retraso escalonado para animaciones (en ms). */
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function Etiqueta({ children, claro = false }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${
        claro ? "text-sky-300" : "text-brand-500"
      }`}
    >
      <span className="h-0.5 w-8 bg-orange-500" />
      {children}
    </span>
  );
}

/** Separador ondulado entre secciones: `arriba` es el fondo de la sección anterior, `abajo` el de la siguiente. */
function Ola({ arriba, abajo, invertir = false }: { arriba: string; abajo: string; invertir?: boolean }) {
  return (
    <div aria-hidden="true" style={{ background: arriba }} className="relative -mb-px leading-[0]">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-16 w-full sm:h-24 ${invertir ? "-scale-x-100" : ""}`}
      >
        <path
          d="M0,64 C240,128 480,0 720,48 C960,96 1200,120 1440,40 L1440,120 L0,120 Z"
          fill={abajo}
          opacity="0.35"
        />
        <path d="M0,96 C320,40 560,128 860,80 C1100,44 1280,70 1440,96 L1440,120 L0,120 Z" fill={abajo} />
      </svg>
    </div>
  );
}

/** Formas de marca flotando (inspiradas en la "V" del logo). */
function FormasFlotantes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span
        className="animate-float-rot bg-gradient-orange absolute left-[34%] top-[13%] size-5 rounded-md opacity-70"
        style={{ "--r": "20deg", animationDelay: "-2s" } as React.CSSProperties}
      />
      <span
        className="animate-float-rot bg-gradient-blue absolute left-[46%] top-[10%] size-3 rounded-full opacity-70"
        style={{ "--r": "0deg", animationDelay: "-4s" } as React.CSSProperties}
      />
      <span
        className="animate-float-rot absolute bottom-[14%] left-[40%] size-8 rounded-lg border-2 border-brand-400/40"
        style={{ "--r": "35deg" } as React.CSSProperties}
      />
      <span
        className="animate-spin-slow absolute -right-10 bottom-10 size-40 rounded-full border-2 border-dashed border-orange-500/25"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
      <RevealObserver />
      <Header />
      <main id="inicio" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="animate-blob absolute -bottom-40 -left-24 size-[26rem] bg-orange-500/15 blur-3xl" style={{ animationDelay: "-8s" }} />
          <FormasFlotantes />

          {/* Foto del equipo (escritorio) */}
          <div className="hero-in absolute inset-y-0 right-0 hidden w-[66%] xl:block" style={d(150)}>
            <div className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_35%)]">
              <Image
                src="/img/hero-equipo.jpg"
                alt="Equipo de VentixB2B trabajando con un cliente"
                fill
                priority
                sizes="66vw"
                className="animate-ken-burns object-cover object-right"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
            </div>
            <span
              className="pop-in absolute bottom-24 left-[30%] flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 text-sm font-bold text-navy-900 shadow-2xl backdrop-blur"
              style={d(1300)}
            >
              <span className="bg-gradient-orange grid size-9 place-items-center rounded-full text-white">
                <Icon name="trend" className="size-5" />
              </span>
              <span>
                Resultados reales
                <span className="block text-xs font-medium text-navy-800/60">para negocios reales</span>
              </span>
            </span>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:block xl:min-h-[660px] xl:py-24">
            <div className="max-w-xl">
              <p className="hero-in mb-5" style={d(0)}>
                <Etiqueta>Agencia de marketing digital y branding</Etiqueta>
              </p>
              <h1 className="text-5xl font-extrabold leading-[0.92] tracking-tight text-navy-900 sm:text-6xl xl:text-7xl">
                <span className="hero-in block" style={d(0)}>Impulsamos</span>
                <span className="hero-in block" style={d(120)}>marcas.</span>
                <span className="hero-in text-gradient-blue block pb-1" style={d(260)}>Aceleramos</span>
                <span className="hero-in text-gradient-blue block pb-2" style={d(380)}>negocios.</span>
              </h1>
              <p className="hero-in mt-6 max-w-md text-xl text-navy-800" style={d(520)}>
                Estrategia, creatividad y tecnología para que tu negocio crezca.
              </p>
              <div className="hero-in mt-8 flex flex-wrap items-center gap-3" style={d(660)}>
                <a
                  href={enlaceWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine bg-gradient-orange group inline-flex min-w-64 items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40"
                >
                  Hablemos
                  <Icon name="arrow" className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#servicios"
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-4 font-bold text-navy-900 transition duration-300 hover:text-brand-600"
                >
                  Ver servicios
                  <Icon name="arrow" className="size-4 rotate-90 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
              <div className="mt-8">
                <RedesSociales />
                <p className="hero-in mt-3 text-sm font-semibold text-navy-800" style={d(1400)}>
                  Síguenos en nuestras redes
                </p>
              </div>
            </div>

            {/* Foto del equipo (móvil y tablet) */}
            <div className="hero-in relative mt-12 overflow-hidden rounded-3xl shadow-2xl lg:mt-0 lg:aspect-[4/5] xl:hidden" style={d(300)}>
              <Image
                src="/img/hero-equipo.jpg"
                alt="Equipo de VentixB2B trabajando con un cliente"
                width={1016}
                height={528}
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="eager"
                className="animate-ken-burns w-full object-cover object-[78%_center] lg:h-full"
              />
            </div>
          </div>
        </section>

        {/* CINTA EN MOVIMIENTO */}
        <div className="overflow-x-clip py-3">
        <div className="relative z-10 -mx-6 -rotate-1 overflow-hidden bg-navy-900 py-4 shadow-xl">
          <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
            {[0, 1].map((copia) => (
              <div key={copia} className="flex shrink-0 items-center" aria-hidden={copia === 1}>
                {CINTA.map((t) => (
                  <span key={t} className="flex items-center gap-6 px-6 font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {t}
                    <span className="text-orange-500">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* PILARES */}
        <section className="bg-slate-50 pb-4 pt-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
            {PILARES.map((p, i) => (
              <div key={p.titulo} className="reveal" data-anim="flip" style={d(i * 150)}>
                <article className="shine group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10 hover:ring-brand-400/40">
                  <div className="flex items-center gap-4">
                    <span
                      className={`${p.color} grid size-14 shrink-0 place-items-center rounded-full text-white transition duration-500 group-hover:rotate-[360deg] group-hover:scale-110`}
                    >
                      <Icon name={p.icono} className="size-7" />
                    </span>
                    <h2 className="font-display text-2xl font-bold uppercase leading-tight text-navy-900">
                      {p.titulo}
                    </h2>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-navy-800 transition-transform duration-300 hover:translate-x-1">
                        <span className="size-1.5 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-4" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </section>

        <Ola arriba="#f8fafc" abajo="#ffffff" />

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-20 pb-20 pt-8 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <div className="reveal" data-anim="left">
                <Etiqueta>Servicios</Etiqueta>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none text-navy-900 sm:text-5xl lg:text-6xl">
                  Todo para que <br />
                  <span className="text-gradient-blue">tu negocio crezca</span>
                </h2>
              </div>
              <p className="reveal text-lg text-navy-800/80" data-anim="right" style={d(150)}>
                Branding, publicidad, redes, web, fachadas y eventos en un solo equipo. Estrategia,
                creatividad y tecnología trabajando por tus ventas.
              </p>
            </div>

            <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
              {SERVICIOS.map((s, i) => (
                <div
                  key={s.titulo}
                  className={`reveal ${i < 4 ? "lg:col-span-3" : "lg:col-span-4"}`}
                  data-anim="zoom"
                  style={d(i < 4 ? i * 110 : (i - 4) * 130)}
                >
                  <article className="group h-full rounded-2xl bg-white shadow-md ring-1 ring-navy-900/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/15">
                    <div className="relative" style={{ aspectRatio: `${s.w} / ${s.h}` }}>
                      <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                        <Image
                          src={`/img/${s.img}.jpg`}
                          alt={`${s.titulo} - VentixB2B`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      </div>
                      {/* Insignia: tapa el ícono que viene en la foto y la anima */}
                      <span
                        className={`${s.color} absolute grid aspect-square place-items-center rounded-full text-white shadow-lg ring-4 ring-white transition duration-700 group-hover:rotate-[360deg] group-hover:scale-110`}
                        style={{
                          left: `${s.cx}%`,
                          top: `${s.cy}%`,
                          width: `${s.dia}%`,
                          translate: "-50% -50%",
                        }}
                      >
                        <Icon name={s.icono} className="size-[48%]" />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-extrabold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
                        {s.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{s.texto}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ola arriba="#ffffff" abajo="#0a1733" invertir />

        {/* PORTAFOLIO */}
        <section id="portafolio" className="relative scroll-mt-20 overflow-hidden bg-navy-900 pb-20 pt-10 text-white lg:pb-28">
          <div className="animate-blob absolute -left-40 top-20 size-96 bg-brand-500/10 blur-3xl" />
          <div className="animate-blob absolute -right-40 bottom-0 size-96 bg-orange-500/10 blur-3xl" style={{ animationDelay: "-6s" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="reveal">
              <Etiqueta claro>Lo que hacemos</Etiqueta>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                Tu marca en el mundo digital,{" "}
                <span className="text-gradient-orange">con resultados reales.</span>
              </h2>
            </div>

            <div className="mt-12 grid auto-rows-[11rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PORTAFOLIO.map((p, i) => (
                <div key={p.titulo} className={`reveal ${p.span ?? ""}`} data-anim="zoom" style={d((i % 4) * 100)}>
                  <div
                    className={`shine group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.fondo} transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40`}
                  >
                    <Icon
                      name={p.icono}
                      className="absolute -right-4 -top-4 size-36 opacity-15 transition duration-700 group-hover:-rotate-12 group-hover:scale-125 group-hover:opacity-30"
                    />
                    <Icon name={p.icono} className="absolute left-5 top-5 size-9 transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-navy-950/85 px-5 py-3 backdrop-blur-sm transition-all duration-500 group-hover:py-4">
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                        {p.titulo}
                      </h3>
                      <Icon name="arrow" className="size-5 -translate-x-3 text-orange-500 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Galería de piezas reales */}
            <div className="mt-16 grid items-center gap-6 lg:grid-cols-5">
              <figure className="reveal lg:col-span-3" data-anim="left">
                <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src="/img/banner.jpg"
                    alt="Banner de VentixB2B: branding, marketing digital e inteligencia artificial"
                    width={1080}
                    height={400}
                    className="w-full transition duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-navy-950 to-transparent p-5 pt-12 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="font-display text-xl font-bold uppercase">Banners de marca</span>
                    <span className="block text-sm text-white/70">Piezas para web y redes sociales</span>
                  </figcaption>
                </div>
              </figure>
              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
                {[
                  { t: "Creatividad", s: "Ideas que conectan", i: "bulb" as IconName },
                  { t: "Estrategia", s: "Enfocada en vender", i: "target" as IconName },
                  { t: "Tecnología", s: "Web, automatización e IA", i: "ai" as IconName },
                ].map((x, k) => (
                  <div key={x.t} className="reveal" data-anim="right" style={d(150 + k * 130)}>
                    <div className="group flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition duration-500 hover:translate-x-1 hover:bg-white/10 hover:ring-orange-500/40">
                      <Icon name={x.i} className="size-9 shrink-0 text-orange-500 transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
                      <div>
                        <p className="font-display text-2xl font-bold uppercase leading-none">{x.t}</p>
                        <p className="mt-1 text-sm text-white/60">{x.s}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Ola arriba="#0a1733" abajo="#ffffff" />

        {/* CLIENTES */}
        <section id="clientes" className="scroll-mt-20 pb-20 pt-10 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="reveal relative" data-anim="left">
              <div className="animate-float bg-gradient-orange absolute -left-4 -top-4 h-full w-full rounded-3xl" style={{ animationDuration: "8s" }} />
              <Tilt max={6}>
                <div className="shine overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/img/cliente-orozco.jpg"
                    alt="E-commerce de Aluminios y Marquesinas Orozco desarrollado por VentixB2B"
                    width={1254}
                    height={1254}
                    className="relative transition duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </Tilt>
              <span className="animate-float absolute -right-3 top-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-900 shadow-xl sm:-right-6" style={{ animationDelay: "-2s" }}>
                <Icon name="cart" className="size-4 text-orange-500" /> E-commerce
              </span>
              <span className="animate-float absolute -left-2 bottom-12 flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-bold text-white shadow-xl sm:-left-8" style={{ animationDelay: "-4s" }}>
                <Icon name="pin" className="size-4 text-sky-300" /> Bogotá
              </span>
            </div>
            <div>
              <div className="reveal" data-anim="right">
                <Etiqueta>Nuestro cliente</Etiqueta>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none text-navy-900 sm:text-5xl">
                  Aluminios y Marquesinas <span className="text-gradient-orange">Orozco</span>
                </h2>
                <p className="mt-5 text-lg text-navy-800/80">
                  Soluciones en aluminio, vidrio y acero en Bogotá. Creamos su e-commerce para
                  optimizar sus ventas: catálogo de marquesinas, ventanas, divisiones en vidrio y
                  pasamanos, con pedidos directos por WhatsApp.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["E-commerce a la medida", "Catálogo de productos", "Pedidos por WhatsApp", "Identidad digital"].map(
                  (it, i) => (
                    <li key={it} className="reveal flex items-center gap-2 font-semibold text-navy-800" data-anim="right" style={d(150 + i * 100)}>
                      <span className="grid size-6 place-items-center rounded-full bg-brand-500 text-white">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      {it}
                    </li>
                  ),
                )}
              </ul>
              <div className="reveal" style={d(500)}>
                <a
                  href="https://www.aluminiosorozco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand-500 px-6 py-3 font-bold text-brand-600 transition duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-brand-500/30"
                >
                  <Icon name="globe" className="size-5 transition-transform duration-700 group-hover:rotate-[360deg]" />
                  www.aluminiosorozco.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="relative scroll-mt-20 bg-navy-900 text-white">
          <svg aria-hidden="true" viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-20 w-full bg-white sm:h-28">
            <defs>
              <linearGradient id="ola-naranja" x1="0" x2="1">
                <stop offset="0" stopColor="#0b6fd6" />
                <stop offset="0.45" stopColor="#f7901e" />
                <stop offset="1" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="ola-azul" x1="0" x2="1">
                <stop offset="0" stopColor="#23b4f5" />
                <stop offset="1" stopColor="#0b6fd6" />
              </linearGradient>
            </defs>
            <path d="M0,70 C300,10 620,10 900,50 C1140,85 1300,40 1440,20 L1440,140 L0,140 Z" fill="url(#ola-naranja)" />
            <path d="M0,95 C320,40 640,45 920,75 C1160,100 1320,70 1440,55 L1440,140 L0,140 Z" fill="url(#ola-azul)" />
            <path d="M0,118 C340,70 660,80 940,100 C1180,118 1330,98 1440,88 L1440,140 L0,140 Z" fill="#0a1733" />
          </svg>
          <div className="mx-auto max-w-5xl px-4 pb-12 pt-4 sm:px-6">
            <h2 className="sr-only">Beneficios</h2>
            <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-orange-500/70">
              {BENEFICIOS.map((b, i) => (
                <div key={b.titulo} className="reveal" data-anim="flip" style={d(i * 150)}>
                  <div className="group flex items-center justify-center gap-4 py-2">
                    <Icon name={b.icono} className="size-11 shrink-0 text-white transition duration-500 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-orange-500" />
                    <span className="text-lg font-semibold">{b.titulo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="relative scroll-mt-20 overflow-hidden bg-navy-900 pb-20 pt-10 lg:pb-28">
          <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-brand-600/20" />
          <div className="absolute -right-4 top-0 h-full w-6 -skew-x-12 bg-orange-500/80" />
          <div className="animate-blob absolute -left-32 bottom-0 size-96 bg-brand-500/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="text-white">
              <div className="reveal" data-anim="left">
                <Etiqueta claro>Contacto</Etiqueta>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                  Hablemos de <span className="text-gradient-orange">tu proyecto</span>
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/75">
                  Cuéntanos qué necesitas y te respondemos con una propuesta. Escríbenos por
                  WhatsApp o déjanos tu mensaje.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    href: enlaceWhatsApp(),
                    externo: true,
                    etiqueta: "WhatsApp",
                    valor: WHATSAPP_VISIBLE,
                    icono: <WhatsAppIcon className="size-6" />,
                    fondo: "bg-[#25D366]",
                  },
                  {
                    href: `mailto:${CORREO_COMERCIAL}`,
                    externo: false,
                    etiqueta: "Correo",
                    valor: CORREO_COMERCIAL,
                    icono: <Icon name="mail" className="size-6" />,
                    fondo: "bg-gradient-blue",
                  },
                  {
                    href: `tel:+${WHATSAPP_NUMERO}`,
                    externo: false,
                    etiqueta: "Llámanos",
                    valor: WHATSAPP_VISIBLE,
                    icono: <Icon name="phone" className="size-6" />,
                    fondo: "bg-gradient-orange",
                  },
                ].map((c, i) => (
                  <div key={c.etiqueta} className="reveal" data-anim="left" style={d(150 + i * 120)}>
                    <a
                      href={c.href}
                      {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition duration-300 hover:translate-x-2 hover:bg-white/10 hover:ring-orange-500/50"
                    >
                      <span className={`${c.fondo} grid size-12 place-items-center rounded-full text-white transition duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                        {c.icono}
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs uppercase tracking-widest text-sky-300">{c.etiqueta}</span>
                        <span className="text-lg font-bold">{c.valor}</span>
                      </span>
                      <Icon name="arrow" className="size-5 -translate-x-2 text-orange-500 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" data-anim="right" style={d(200)}>
              <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
                <h3 className="font-display text-2xl font-bold uppercase text-navy-900">
                  Envíanos un mensaje
                </h3>
                <p className="mb-6 mt-1 text-sm text-navy-800/70">
                  Llega directo a {CORREO_COMERCIAL}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
          <a href="#inicio" className="group flex items-center gap-3">
            <Image src="/img/logo.jpg" alt="" width={48} height={48} className="rounded-full transition-transform duration-700 group-hover:rotate-[360deg]" />
            <div>
              <p className="font-display text-2xl font-extrabold leading-none">
                VENTIX<span className="text-gradient-blue">B2B</span>
              </p>
              <p className="text-xs font-semibold tracking-[0.3em] text-sky-300">
                IDEAS QUE <span className="text-white">VENDEN.</span>
              </p>
            </div>
          </a>
          <p className="text-center text-sm text-white/60">
            © 2026 VentixB2B · {CORREO_COMERCIAL} · {WHATSAPP_VISIBLE}
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={enlaceWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="group fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition duration-300 hover:scale-110"
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative size-8 transition-transform duration-300 group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1.5 text-sm font-semibold opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          ¿Hablamos?
        </span>
      </a>
    </>
  );
}
