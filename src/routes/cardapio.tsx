import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { Reveal } from "@/components/site/Reveal";
import {
  HORARIO,
  drinks,
  entradas,
  pizzas,
  rostis,
  semAlcool,
  sobremesas,
  whatsappLink,
} from "@/lib/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Rostiseria Ateliê | Röstis, pizzas, entradas e drinks" },
      {
        name: "description",
        content:
          "Cardápio completo da Rostiseria Ateliê: röstis artesanais, pizzas autorais individuais e grandes, entradas, sobremesas e drinks.",
      },
      { property: "og:title", content: "Cardápio — Rostiseria Ateliê" },
      {
        property: "og:description",
        content:
          "Röstis artesanais, pizzas de forno de pedra, entradas, sobremesas e bar. Nova Friburgo — RJ.",
      },
    ],
  }),
  component: Cardapio,
});

const sections = [
  { id: "rostis", label: "Röstis" },
  { id: "pizzas", label: "Pizzas" },
  { id: "entradas", label: "Entradas" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bar", label: "Bar" },
];

function Cardapio() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <section className="bg-forest-deep px-6 pt-32 pb-16 text-center text-cream md:px-10 md:pt-40 md:pb-20">
          <p className="script text-xl text-gold">o cardápio</p>
          <h1 className="mt-3 font-serif text-4xl tracking-[0.08em] md:text-6xl">
            CARDÁPIO
          </h1>
          <p className="mt-5 text-[0.65rem] tracking-[0.3em] text-gold/90">
            RÖSTI · PIZZA · GASTRONOMIA
          </p>
          <p className="mt-6 text-sm text-cream/70">{HORARIO}</p>
        </section>

        <nav className="sticky top-[4.75rem] z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 md:justify-center">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-border px-4 text-[0.7rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors hover:border-gold hover:text-olive"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="rostis" className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Header2 eyebrow="Especialidade da casa" title="RÖSTIS ARTESANAIS">
              Crocantes por fora, cremosos por dentro e sempre feitos na hora.
            </Header2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {rostis.map((r, i) => (
                <Reveal key={r.nome} as="li" delay={(i % 2) * 70}>
                  <div className="flex gap-4">
                    <img
                      src={img[r.img ?? "hero"]}
                      alt={r.nome}
                      loading="lazy"
                      className="size-20 shrink-0 object-cover md:size-24"
                    />
                    <div>
                      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-1">
                        <h3 className="font-serif text-xl">{r.nome}</h3>
                        <span className="text-sm text-olive">{r.preco}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{r.descricao}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="pizzas" className="bg-secondary px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Header2 eyebrow="Forno de pedra" title="PIZZAS AUTORAIS">
              Massas artesanais, forno de pedra e combinações que fogem do óbvio.
            </Header2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {pizzas.map((p, i) => (
                <Reveal key={p.nome} as="li" delay={(i % 2) * 70}>
                  <div className="flex gap-4">
                    <img
                      src={img[p.img ?? "margherita"]}
                      alt={p.nome}
                      loading="lazy"
                      className="size-20 shrink-0 object-cover md:size-24"
                    />
                    <div>
                      <h3 className="border-b border-border pb-1 font-serif text-xl">
                        {p.nome}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.descricao}</p>
                      <p className="mt-2 text-xs tracking-[0.16em] text-olive uppercase">
                        Individual {p.individual} · Grande {p.grande}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="entradas" className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Header2 eyebrow="Para começar" title="ENTRADAS" />
            <ul className="mt-8">
              {entradas.map((e) => (
                <li key={e} className="border-b border-border py-3 font-serif text-lg">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sobremesas" className="bg-secondary px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Header2 eyebrow="Para terminar" title="SOBREMESAS" />
            <ul className="mt-8">
              {sobremesas.map((s) => (
                <li key={s} className="border-b border-border py-3 font-serif text-lg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="bar" className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Header2 eyebrow="Bar" title="DRINKS" />
            <ul className="mt-8">
              {drinks.map((d) => (
                <li key={d} className="border-b border-border py-3 font-serif text-lg">
                  {d}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-10 text-olive">Sem álcool</p>
            <ul className="mt-4">
              {semAlcool.map((d) => (
                <li key={d} className="border-b border-border py-3 font-serif text-lg">
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs text-muted-foreground">
              Preços fictícios, criados apenas para este protótipo.
            </p>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 text-center text-cream md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl">Vamos reservar uma mesa?</h2>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8"
          >
            Reservar pelo WhatsApp
          </a>
        </section>
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

function Header2({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="text-center">
      <p className="eyebrow text-olive">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl tracking-[0.08em] md:text-4xl">{title}</h2>
      {children && (
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg text-muted-foreground italic">
          {children}
        </p>
      )}
    </Reveal>
  );
}
