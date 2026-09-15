import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsappFab } from "@/components/site/whatsapp-fab"
import { Reveal } from "@/components/site/reveal"
import {
  HORARIO,
  cervejasVinhos,
  drinks,
  entradas,
  pizzas,
  rostis,
  semAlcool,
  sobremesas,
  whatsappLink,
  type Item,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "Cardápio e preços — Rostiseria Ateliê",
  description:
    "Cardápio completo com preços: röstis, pizzas individuais e grandes, entradas, sobremesas, drinks e bebidas sem álcool.",
}

const sections = [
  { id: "entradas", label: "Entradas" },
  { id: "rostis", label: "Röstis" },
  { id: "pizzas", label: "Pizzas" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bar", label: "Bebidas" },
]

function Veg() {
  return (
    <span className="ml-1.5 text-[0.65rem] font-semibold text-olive" aria-label="vegetariano">
      (v)
    </span>
  )
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((i) => (
        <li key={i.nome} className="py-3">
          <div className="price-row">
            <span className="font-serif text-lg text-cream">
              {i.nome}
              {i.veg && <Veg />}
            </span>
            <span className="text-sm text-gold">{i.preco}</span>
          </div>
          {i.descricao && <p className="mt-0.5 text-sm text-cream/55">{i.descricao}</p>}
        </li>
      ))}
    </ul>
  )
}

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string
  title: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-border py-12 md:py-14">
      <Reveal className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-12">
        <div>
          <h2 className="font-serif text-3xl text-cream">{title}</h2>
          {note && <p className="mt-2 text-sm text-cream/55">{note}</p>}
        </div>
        <div>{children}</div>
      </Reveal>
    </section>
  )
}

export default function CardapioPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 md:px-8 md:pt-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Cardápio</p>
            <h1 className="mt-3 font-serif text-4xl text-cream md:text-6xl">
              O que servimos
            </h1>
            <p className="mt-4 max-w-md text-sm text-cream/65">
              Preços em reais, válidos para o salão. {HORARIO}. Itens marcados com (v)
              são vegetarianos. Informe alergias ao pedir.
            </p>
          </div>
          <nav aria-label="Seções do cardápio">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-cream/70 hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12">
          <Section id="entradas" title="Entradas" note="Para dividir enquanto o rösti chega.">
            <ItemList items={entradas} />
          </Section>

          <Section
            id="rostis"
            title="Röstis"
            note="Cerca de 300 g. Preparo de 20 a 25 min. Base de batata-doce sem custo."
          >
            <ul className="divide-y divide-border">
              {rostis.map((r) => (
                <li key={r.nome} className="py-3">
                  <div className="price-row">
                    <span className="font-serif text-lg text-cream">
                      {r.nome}
                      {r.veg && <Veg />}
                    </span>
                    <span className="text-sm text-gold">{r.preco}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-cream/55">{r.descricao}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            id="pizzas"
            title="Pizzas"
            note="Individual 25 cm / grande 35 cm. Borda recheada + R$ 8."
          >
            <ul className="divide-y divide-border">
              {pizzas.map((p) => (
                <li key={p.nome} className="py-3">
                  <div className="price-row">
                    <span className="font-serif text-lg text-cream">
                      {p.nome}
                      {p.veg && <Veg />}
                    </span>
                    <span className="text-sm text-gold">
                      {p.individual} / {p.grande}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-cream/55">{p.descricao}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="sobremesas" title="Sobremesas">
            <ItemList items={sobremesas} />
          </Section>

          <Section id="bar" title="Bebidas" note="Carta de cervejas artesanais muda toda semana.">
            <h3 className="eyebrow mb-2">Drinks</h3>
            <ItemList items={drinks} />
            <h3 className="eyebrow mt-8 mb-2">Cervejas e vinho</h3>
            <ItemList items={cervejasVinhos} />
            <h3 className="eyebrow mt-8 mb-2">Sem álcool</h3>
            <ItemList items={semAlcool} />
          </Section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Taxa de serviço de 10% opcional. Aceitamos Pix, débito e crédito.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Reservar mesa
          </a>
        </div>
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  )
}
