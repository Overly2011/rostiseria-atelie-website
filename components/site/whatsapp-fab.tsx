import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar pelo WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full border border-border bg-charcoal-deep px-4 py-3 text-sm font-semibold text-cream shadow-lg transition-colors hover:border-gold md:right-6 md:bottom-6"
    >
      <MessageCircle className="size-5 text-gold" />
      Reservar
    </a>
  )
}
