"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon, WhatsAppIcon } from "./Icon";
import { enlaceWhatsApp } from "@/lib/contacto";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#clientes", label: "Clientes" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activa, setActiva] = useState("");
  const barra = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      barra.current?.style.setProperty("--p", String(max > 0 ? scrollY / max : 0));
      setScrolled(scrollY > 20);
    };
    alScroll();
    addEventListener("scroll", alScroll, { passive: true });

    const secciones = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setActiva(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secciones.forEach((s) => obs.observe(s));

    return () => {
      removeEventListener("scroll", alScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-lg shadow-navy-900/5 backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div
        ref={barra}
        className="scroll-progress bg-gradient-orange absolute inset-x-0 bottom-0 h-0.5"
      />
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#inicio" className="group flex items-center gap-3" aria-label="VentixB2B, inicio">
          <Image
            src="/img/logo.jpg"
            alt="Logo VentixB2B"
            width={52}
            height={52}
            className="rounded-full transition-transform duration-700 group-hover:rotate-[360deg]"
            priority
          />
          <span className="font-display text-2xl font-extrabold tracking-tight">
            <span className="text-navy-900">VENTIX</span>
            <span className="text-gradient-blue">B2B</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative py-1 text-sm font-semibold transition-colors hover:text-brand-500 ${
                activa === item.href ? "text-brand-500" : "text-navy-800"
              }`}
            >
              {item.label}
              <span
                className={`bg-gradient-orange absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                  activa === item.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={enlaceWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="shine group hidden items-center gap-2 rounded-full bg-[linear-gradient(90deg,#0b6fd6_0%,#1a8cf0_70%,#f7901e_100%)] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-xl sm:flex"
          >
            Hablemos
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="rounded-lg p-2 text-navy-900 lg:hidden"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
          >
            <Icon name={abierto ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      <nav
        inert={!abierto}
        className={`grid overflow-hidden bg-white px-4 transition-all duration-500 lg:hidden ${
          abierto ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAbierto(false)}
              style={{ transitionDelay: abierto ? `${i * 60}ms` : "0ms" }}
              className={`block border-b border-navy-900/5 py-3 font-semibold text-navy-800 transition-all duration-500 ${
                abierto ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={enlaceWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-orange mt-4 flex items-center justify-center gap-2 rounded-full py-3 font-bold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
