import { Link } from "@tanstack/react-router";
import { CIDADE, HORARIO, INSTAGRAM, INSTAGRAM_URL, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep px-6 py-16 text-cream/70 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-[0.14em] text-cream">
            ROSTISERIA ATELIÊ
          </p>
          <p className="mt-2 text-[0.6rem] tracking-[0.3em] text-gold/90">
            RÖSTI · PIZZA · GASTRONOMIA
          </p>
          <p className="script mt-5 text-lg text-gold/80">Feito na hora, sempre.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow text-cream/50">Visite</p>
          <p>{CIDADE}</p>
          <p>{HORARIO}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block transition-colors hover:text-gold"
          >
            {INSTAGRAM}
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow text-cream/50">Navegue</p>
          <Link to="/cardapio" className="block transition-colors hover:text-gold">
            Cardápio completo
          </Link>
          <a href="/#ambiente" className="block transition-colors hover:text-gold">
            Ambiente
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-gold"
          >
            Reservas pelo WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl border-t border-cream/10 pt-6 text-xs text-cream/40">
        © {new Date().getFullYear()} Rostiseria Ateliê. Restaurante fictício criado para
        fins de demonstração — preços e contatos são ilustrativos.
      </p>
    </footer>
  );
}
