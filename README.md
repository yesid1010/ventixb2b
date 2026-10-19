# VentixB2B — Landing page

Next.js 16 + Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev
```

## Contacto

- **WhatsApp**: botones con mensaje prellenado a +57 300 8370046 (`src/lib/contacto.ts`).
- **Correo**: el formulario usa una Server Action (`src/app/actions.ts`) que envía con la API de Brevo
  (igual que psico-panel) a `comercial@ventixb2b.com`, con "Responder a" apuntando al correo del cliente.
  Copia `.env.example` a `.env.local` (y configura las mismas variables en Vercel): `BREVO_API_KEY`,
  `BREVO_FROM_EMAIL` (remitente verificado en Brevo) y `BREVO_FROM_NAME`. Sin esas variables el
  formulario muestra un aviso para escribir por correo o WhatsApp.
