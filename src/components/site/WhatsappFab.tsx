import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar pelo WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-forest px-5 py-4 text-cream shadow-[var(--shadow-lift)] transition-colors hover:bg-forest-deep md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-5 text-gold" />
      <span className="text-[0.7rem] tracking-[0.18em] uppercase">Reservar</span>
    </a>
  );
}
