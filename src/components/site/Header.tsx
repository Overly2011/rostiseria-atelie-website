import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, HORARIO } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/cardapio", label: "Cardápio" },
] as const;

const anchors = [
  { href: "/#a-casa", label: "A Casa" },
  { href: "/#rostis", label: "Röstis" },
  { href: "/#pizzas", label: "Pizzas" },
  { href: "/#ambiente", label: "Ambiente" },
  { href: "/#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? "bg-forest-deep/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="group leading-none" onClick={() => setOpen(false)}>
          <span className="block font-serif text-lg tracking-[0.16em] text-cream md:text-xl">
            ROSTISERIA ATELIÊ
          </span>
          <span className="mt-1 block text-[0.5rem] tracking-[0.32em] text-gold/90 md:text-[0.58rem]">
            RÖSTI · PIZZA · GASTRONOMIA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-[0.7rem] tracking-[0.2em] text-cream/80 uppercase transition-colors hover:text-gold"
            >
              {a.label}
            </a>
          ))}
          <Link
            to="/cardapio"
            className="text-[0.7rem] tracking-[0.2em] text-cream/80 uppercase transition-colors hover:text-gold"
          >
            Cardápio
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Reservar
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center text-cream lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-forest-deep px-6 pt-6 pb-10 lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-cream/10 py-4 font-serif text-2xl text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {anchors.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-cream/10 py-4 font-serif text-2xl text-cream"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8 w-full"
          >
            Reservar pelo WhatsApp
          </a>
          <p className="mt-4 text-center text-xs tracking-widest text-cream/60 uppercase">
            {HORARIO}
          </p>
        </div>
      )}
    </header>
  );
}
