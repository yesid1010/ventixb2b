"use server";

import { CORREO_COMERCIAL } from "@/lib/contacto";

export type EstadoContacto = {
  ok: boolean;
  mensaje: string;
  errores?: Partial<Record<"nombre" | "email" | "mensaje", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function limpiar(valor: FormDataEntryValue | null, max = 500) {
  return String(valor ?? "").trim().slice(0, max);
}

function escapar(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ERROR_ENVIO = `No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a ${CORREO_COMERCIAL}.`;

export async function enviarContacto(
  _prev: EstadoContacto | null,
  formData: FormData,
): Promise<EstadoContacto> {
  // Campo trampa para bots: si viene lleno, fingimos éxito sin enviar.
  if (limpiar(formData.get("sitio_web"))) {
    return { ok: true, mensaje: "¡Gracias! Te contactaremos pronto." };
  }

  const nombre = limpiar(formData.get("nombre"), 120);
  const empresa = limpiar(formData.get("empresa"), 120);
  const email = limpiar(formData.get("email"), 160);
  const telefono = limpiar(formData.get("telefono"), 40);
  const servicio = limpiar(formData.get("servicio"), 120);
  const mensaje = limpiar(formData.get("mensaje"), 3000);

  const errores: EstadoContacto["errores"] = {};
  if (nombre.length < 2) errores.nombre = "Escribe tu nombre.";
  if (!EMAIL_RE.test(email)) errores.email = "Escribe un correo válido.";
  if (mensaje.length < 10) errores.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
  if (Object.keys(errores).length) {
    return { ok: false, mensaje: "Revisa los campos marcados.", errores };
  }

  // Envío con la API transaccional de Brevo (mismo esquema que psico-panel).
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME || "Web VentixB2B";
  const destino = process.env.CONTACT_NOTIFICATIONS_EMAIL || CORREO_COMERCIAL;

  if (!apiKey || !fromEmail) {
    console.error("[contacto] Faltan BREVO_API_KEY o BREVO_FROM_EMAIL.");
    return {
      ok: false,
      mensaje: `No pudimos enviar el mensaje en este momento. Escríbenos a ${CORREO_COMERCIAL} o por WhatsApp.`,
    };
  }

  const filas: [string, string][] = [
    ["Nombre", nombre],
    ["Empresa", empresa || "—"],
    ["Correo", email],
    ["Teléfono", telefono || "—"],
    ["Servicio", servicio || "—"],
  ];

  const payload = {
    sender: { name: fromName, email: fromEmail },
    to: [{ email: destino, name: "Comercial VentixB2B" }],
    replyTo: { email, name: nombre },
    subject: `Nuevo contacto web: ${nombre}${empresa ? ` (${empresa})` : ""}`,
    textContent: `${filas.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMensaje:\n${mensaje}`,
    htmlContent: `
      <div style="font-family:Arial,sans-serif;color:#0a1733">
        <h2 style="color:#0b6fd6">Nuevo contacto desde ventixb2b.com</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${filas
            .map(([k, v]) => `<tr><td style="font-weight:bold">${k}</td><td>${escapar(v)}</td></tr>`)
            .join("")}
        </table>
        <h3>Mensaje</h3>
        <p style="white-space:pre-wrap">${escapar(mensaje)}</p>
      </div>`.trim(),
  };

  try {
    const respuesta = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!respuesta.ok) {
      console.error("[contacto] Brevo respondió", respuesta.status, await respuesta.text());
      return { ok: false, mensaje: ERROR_ENVIO };
    }
  } catch (error) {
    console.error("[contacto] Error enviando correo con Brevo", error);
    return { ok: false, mensaje: ERROR_ENVIO };
  }

  return { ok: true, mensaje: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto." };
}
