"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { whatsappLink, HORARIO_CURTO } from "@/lib/site"

const nav = [
  { href: "/#a-casa", label: "A casa" },
  { href: "/#rostis", label: "Röstis" },
  { href: "/#pizzas", label: "Pizzas" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/#localizacao", label: "Onde estamos" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid || open
          ? "border-border bg-charcoal-deep/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-serif text-lg font-semibold tracking-wide text-cream md:text-xl">
            Rostiseria Ateliê
          </span>
          <span className="mt-0.5 block text-[0.68rem] text-cream/55">
            Nova Friburgo · {HORARIO_CURTO}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {a.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Reservar
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center text-cream lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="bg-charcoal-deep px-6 pt-4 pb-10 lg:hidden">
          <ul>
            {nav.map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-serif text-2xl text-cream"
                >
                  {a.label}
                </Link>
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
        </div>
      )}
    </header>
  )
}
