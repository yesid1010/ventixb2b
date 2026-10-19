import { REDES } from "@/lib/contacto";

const LOGOS: Record<(typeof REDES)[number]["red"], { fondo: string; svg: React.ReactNode }> = {
  facebook: {
    fondo: "bg-[#1877F2]",
    svg: <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.2H7.7v3.3h2.7V22h3.6v-10.2h2.7l.4-3.3H14z" />,
  },
  instagram: {
    fondo: "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]",
    svg: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" />
      </>
    ),
  },
  tiktok: {
    fondo: "bg-black",
    svg: <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z" />,
  },
  youtube: {
    fondo: "bg-[#FF0000]",
    svg: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />,
  },
  x: {
    fondo: "bg-black",
    svg: <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />,
  },
};

export function RedesSociales({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {REDES.map((r, i) => (
        <a
          key={r.red}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`VentixB2B en ${r.nombre}`}
          className={`${LOGOS[r.red].fondo} pop-in grid size-11 place-items-center rounded-full text-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:rotate-6 hover:scale-110 hover:shadow-xl`}
          style={{ "--d": `${900 + i * 90}ms` } as React.CSSProperties}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
            {LOGOS[r.red].svg}
          </svg>
        </a>
      ))}
    </div>
  );
}
