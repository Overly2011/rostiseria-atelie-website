import Link from "next/link"
import {
  ENDERECO,
  ENDERECO_COMPLEMENTO,
  FECHADO,
  HORARIO,
  INSTAGRAM,
  INSTAGRAM_URL,
  MAPS_URL,
  TELEFONE_EXIBICAO,
  whatsappLink,
} from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal-deep px-6 py-14 text-sm text-cream/70 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-cream">Rostiseria Ateliê</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            Rösti feito na hora e pizza de forno de pedra, no centro de Nova Friburgo.
            Casa pequena, 24 lugares. Reservas pelo WhatsApp.
          </p>
        </div>
        <div className="space-y-1.5">
          <p className="eyebrow mb-3">Endereço e horário</p>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block hover:text-gold">
            {ENDERECO}
          </a>
          <p>{ENDERECO_COMPLEMENTO}</p>
          <p className="pt-2">{HORARIO}</p>
          <p>{FECHADO}</p>
        </div>
        <div className="space-y-1.5">
          <p className="eyebrow mb-3">Contato</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="block hover:text-gold"
          >
            WhatsApp {TELEFONE_EXIBICAO}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="block hover:text-gold"
          >
            Instagram {INSTAGRAM}
          </a>
          <Link href="/cardapio" className="block pt-2 hover:text-gold">
            Cardápio completo
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-5 text-xs text-cream/45 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Rostiseria Ateliê. Todos os direitos reservados.</p>
        <p>Preços sujeitos a alteração sem aviso prévio.</p>
      </div>
    </footer>
  )
}
