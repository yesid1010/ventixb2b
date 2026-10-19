"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import { enviarContacto, type EstadoContacto } from "@/app/actions";
import { SERVICIOS_CONTACTO } from "@/lib/contacto";
import { Icon } from "./Icon";

const campo =
  "w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-900/40 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export function ContactForm() {
  const [estado, accion, enviando] = useActionState<EstadoContacto | null, FormData>(
    enviarContacto,
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (estado?.ok) formRef.current?.reset();
  }, [estado]);

  const error = (k: "nombre" | "email" | "mensaje") =>
    estado?.errores?.[k] ? (
      <p className="mt-1 text-xs font-medium text-red-600">{estado.errores[k]}</p>
    ) : null;

  return (
    <form
      ref={formRef}
      // onSubmit en vez de action para no perder lo escrito si hay errores de validación
      onSubmit={(e) => {
        e.preventDefault();
        const datos = new FormData(e.currentTarget);
        startTransition(() => accion(datos));
      }}
      className="grid gap-4 sm:grid-cols-2"
      noValidate
    >
      {/* Campo trampa anti-spam, invisible para personas */}
      <input
        type="text"
        name="sitio_web"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Nombre *</span>
        <input name="nombre" required className={campo} placeholder="Tu nombre" />
        {error("nombre")}
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Empresa</span>
        <input name="empresa" className={campo} placeholder="Nombre de tu negocio" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Correo *</span>
        <input name="email" type="email" required className={campo} placeholder="tu@correo.com" />
        {error("email")}
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Teléfono</span>
        <input name="telefono" type="tel" className={campo} placeholder="+57 300 000 0000" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">
          ¿Qué necesitas?
        </span>
        <select name="servicio" className={campo} defaultValue="">
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {SERVICIOS_CONTACTO.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Mensaje *</span>
        <textarea
          name="mensaje"
          required
          rows={4}
          className={`${campo} resize-none`}
          placeholder="Cuéntanos sobre tu proyecto"
        />
        {error("mensaje")}
      </label>

      {estado && (
        <p
          role="status"
          className={`sm:col-span-2 flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
            estado.ok ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {estado.ok && <Icon name="check" className="mt-0.5 size-4 shrink-0" />}
          {estado.mensaje}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="bg-gradient-blue sm:col-span-2 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110 disabled:opacity-60"
      >
        <Icon name="mail" className="size-5" />
        {enviando ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
