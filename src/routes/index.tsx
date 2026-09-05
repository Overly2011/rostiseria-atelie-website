import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Instagram } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { Reveal } from "@/components/site/Reveal";
import {
  CIDADE,
  HORARIO,
  INSTAGRAM,
  INSTAGRAM_URL,
  drinks,
  entradas,
  pizzas,
  rostis,
  semAlcool,
  sobremesas,
  whatsappLink,
} from "@/lib/site";
import { img, heroRosti, ambienteSalao, forno, drinksImg } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rostiseria Ateliê — Rösti artesanal e pizza autoral | Nova Friburgo" },
      {
        name: "description",
        content:
          "Rostiseria contemporânea em Nova Friburgo: rösti artesanal, pizzas autorais em forno de pedra, entradas, sobremesas e drinks. Reservas pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Rostiseria Ateliê — Rösti artesanal e pizza autoral",
      },
      {
        property: "og:description",
        content:
          "Do rösti artesanal à pizza autoral. Cozinha de sabores marcantes em Nova Friburgo — RJ.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ACasa />
        <Rostis />
        <Pizzas />
        <Editorial />
        <Entradas />
        <Sobremesas />
        <Bar />
        <Ambiente />
        <Reservas />
        <Localizacao />
        <Feed />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-deep md:items-end">
      <img
        src={heroRosti}
        alt="Rösti artesanal com filé-mignon servido em mesa de madeira"
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/40" />
      <div className="relative mx-auto w-full max-w-5xl px-6 pt-28 pb-14 text-center md:px-10 md:pt-32 md:pb-24">
        <Reveal>
          <p className="script text-xl text-gold md:text-2xl">Nova Friburgo</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[0.06em] text-cream sm:text-5xl md:text-7xl">
            ROSTISERIA ATELIÊ
          </h1>
          <p className="mt-5 text-[0.65rem] tracking-[0.34em] text-gold/90 md:text-xs">
            RÖSTI · PIZZA · GASTRONOMIA
          </p>
          <p className="mx-auto mt-8 max-w-xl font-serif text-2xl text-cream italic md:text-3xl">
            “Do Rösti artesanal à pizza autoral.”
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm text-cream/75 md:text-base">
            Uma cozinha de sabores marcantes, ingredientes selecionados e receitas feitas
            para compartilhar.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/cardapio" className="btn-gold">
              Ver cardápio
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-cream"
            >
              Reservar mesa
            </a>
          </div>
          <p className="mt-6 text-[0.65rem] tracking-[0.22em] text-cream/60 uppercase">
            Reservas pelo WhatsApp
          </p>
          <p className="mt-1 text-[0.65rem] tracking-[0.22em] text-cream/60 uppercase">
            {HORARIO}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ACasa() {
  return (
    <section id="a-casa" className="bg-background px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-olive">A Casa</p>
          <h2 className="rule-gold mt-4 font-serif text-3xl md:text-5xl">
            Uma cozinha feita para reunir.
          </h2>
          <div className="mt-8 space-y-5 text-[0.95rem] text-muted-foreground md:text-base">
            <p>
              A Rostiseria Ateliê nasceu de uma obsessão pequena: acertar o ponto do rösti.
              Ralar a batata na hora, prensar devagar na frigideira de ferro e servir
              enquanto a borda ainda estala. Nada disso escala bem — por isso a casa tem
              poucas mesas.
            </p>
            <p>
              O restante do menu cresceu em volta dessa mesma teimosia. A massa das pizzas
              descansa por dois dias antes de encontrar o forno de pedra; a carne seca vem
              de um fornecedor de Minas que nos manda a peça inteira; a couve é frita na
              hora do pedido, e não antes.
            </p>
            <p>
              Somos um ateliê no sentido literal: uma cozinha pequena, uma equipe que se
              conhece pelo nome e um cardápio que muda quando a serra pede — mais raiz no
              inverno, mais verde e ácido nos meses quentes.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure className="relative">
            <img
              src={ambienteSalao}
              alt="Salão da Rostiseria Ateliê com mesas de madeira e luminárias douradas"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-[26rem] w-full object-cover shadow-[var(--shadow-warm)] md:h-[34rem]"
            />
            <figcaption className="script mt-4 text-center text-lg text-olive">
              vinte e quatro lugares, uma cozinha à vista
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Rostis() {
  return (
    <section id="rostis" className="bg-forest px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Especialidade da casa</p>
          <h2 className="mt-4 font-serif text-3xl tracking-[0.08em] md:text-5xl">
            RÖSTIS ARTESANAIS
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-serif text-xl text-cream/80 italic md:text-2xl">
            Crocantes por fora, cremosos por dentro e sempre feitos na hora.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rostis.map((r, i) => (
            <Reveal key={r.nome} delay={(i % 4) * 80} as="article">
              <div className="group">
                <div className="overflow-hidden">
                  <img
                    src={img[r.img ?? "hero"]}
                    alt={r.nome}
                    loading="lazy"
                    width={912}
                    height={912}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-cream/15 pb-2">
                  <h3 className="font-serif text-xl tracking-wide">{r.nome}</h3>
                  <span className="text-sm text-gold">{r.preco}</span>
                </div>
                <p className="mt-3 text-sm text-cream/70">{r.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link to="/cardapio" className="btn-outline-cream">
            Cardápio completo
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Pizzas() {
  return (
    <section id="pizzas" className="bg-background px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-olive">Forno de pedra</p>
          <h2 className="mt-4 font-serif text-3xl tracking-[0.08em] md:text-5xl">
            PIZZAS AUTORAIS
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-serif text-xl text-muted-foreground italic md:text-2xl">
            Massas artesanais, forno de pedra e combinações que fogem do óbvio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {pizzas.map((p, i) => (
            <Reveal key={p.nome} delay={(i % 2) * 70} as="article">
              <div className="group flex gap-5">
                <img
                  src={img[p.img ?? "margherita"]}
                  alt={p.nome}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="size-24 shrink-0 object-cover transition-transform duration-700 group-hover:scale-[1.05] md:size-28"
                />
                <div className="min-w-0">
                  <h3 className="font-serif text-xl tracking-wide">{p.nome}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.descricao}</p>
                  <p className="mt-3 text-xs tracking-[0.16em] text-olive uppercase">
                    Individual {p.individual} · Grande {p.grande}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="relative overflow-hidden bg-forest-deep">
      <img
        src={forno}
        alt="Pizza saindo do forno de pedra"
        loading="lazy"
        width={1408}
        height={1008}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-36">
        <Reveal>
          <p className="eyebrow text-gold">Do começo ao fim da noite</p>
          <div className="mt-10 space-y-6">
            <h2 className="font-serif text-3xl tracking-[0.12em] text-cream md:text-5xl">
              RÖSTI ARTESANAL
            </h2>
            <p className="text-gold/70">↓</p>
            <h2 className="font-serif text-3xl tracking-[0.12em] text-cream md:text-5xl">
              PIZZA AUTORAL
            </h2>
            <p className="text-gold/70">↓</p>
            <h2 className="font-serif text-3xl tracking-[0.12em] text-cream md:text-5xl">
              GASTRONOMIA
            </h2>
          </div>
          <p className="script mt-10 text-xl text-gold">uma noite inteira à mesa</p>
        </Reveal>
      </div>
    </section>
  );
}

function Entradas() {
  return (
    <section className="bg-secondary px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="eyebrow text-olive">Para começar</p>
          <h2 className="rule-gold mt-4 font-serif text-3xl md:text-4xl">Entradas</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            {entradas.map((e) => (
              <li
                key={e}
                className="border-b border-border py-3 font-serif text-lg md:text-xl"
              >
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={img["entradas"]}
            alt="Entradas: burrata, focaccia, arancine e croquetes"
            loading="lazy"
            width={1200}
            height={912}
            className="h-72 w-full object-cover shadow-[var(--shadow-warm)] md:h-96"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Sobremesas() {
  return (
    <section className="bg-background px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <img
            src={img["sobremesas"]}
            alt="Banoffee e petit gâteau servidos na mesa de madeira"
            loading="lazy"
            width={1200}
            height={912}
            className="h-72 w-full object-cover shadow-[var(--shadow-warm)] md:h-96"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow text-olive">Para terminar</p>
          <h2 className="rule-gold mt-4 font-serif text-3xl md:text-4xl">Sobremesas</h2>
          <ul className="mt-8">
            {sobremesas.map((s) => (
              <li
                key={s}
                className="border-b border-border py-3 font-serif text-lg md:text-xl"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Bar() {
  return (
    <section className="relative overflow-hidden bg-forest-deep px-6 py-20 text-cream md:px-10 md:py-28">
      <img
        src={drinksImg}
        alt="Drinks no balcão do bar"
        loading="lazy"
        width={1200}
        height={912}
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow text-gold">Bar</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">Clássicos bem feitos</h2>
          <ul className="mx-auto mt-10 grid max-w-2xl gap-x-12 sm:grid-cols-2">
            {drinks.map((d) => (
              <li
                key={d}
                className="border-b border-cream/15 py-3 font-serif text-lg md:text-xl"
              >
                {d}
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-12 text-gold">Sem álcool</p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/75">
            {semAlcool.join(" · ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const galeria = [
  { key: "fachada", alt: "Fachada da Rostiseria Ateliê à noite", span: "md:col-span-2" },
  { key: "salao", alt: "Salão com mesas intimistas", span: "" },
  { key: "cozinha", alt: "Chef preparando rösti na cozinha", span: "" },
  { key: "forno", alt: "Pizza saindo do forno de pedra", span: "md:col-span-2" },
  { key: "hero", alt: "Rösti sendo servido", span: "" },
  { key: "drinks", alt: "Drinks da casa", span: "" },
  { key: "entradas", alt: "Detalhes da mesa e ingredientes", span: "" },
  { key: "parma", alt: "Rösti Parma & Brie", span: "" },
];

function Ambiente() {
  return (
    <section id="ambiente" className="bg-secondary px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-olive">Ambiente</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            Madeira, luz baixa e mesas próximas.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galeria.map((g, i) => (
            <Reveal key={g.key + i} delay={(i % 4) * 70} as="figure" className={g.span}>
              <img
                src={img[g.key]}
                alt={g.alt}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-52 md:h-60"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservas() {
  return (
    <section id="reservas" className="bg-forest px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl">Vamos reservar uma mesa?</h2>
          <p className="mt-5 text-cream/75">
            Escolha seu horário e fale diretamente conosco pelo WhatsApp.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-9"
          >
            Reservar pelo WhatsApp
          </a>
          <p className="mt-6 text-[0.65rem] tracking-[0.22em] text-cream/55 uppercase">
            {HORARIO}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="bg-background px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow text-olive">Localização</p>
          <h2 className="rule-gold mt-4 font-serif text-3xl md:text-5xl">
            Esperamos você.
          </h2>
          <dl className="mt-8 space-y-5 text-sm md:text-base">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="eyebrow text-olive">Onde estamos</dt>
                <dd className="mt-1">{CIDADE}</dd>
                <dd className="text-muted-foreground">
                  Endereço completo informado na confirmação da reserva.
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="eyebrow text-olive">Horários</dt>
                <dd className="mt-1">{HORARIO}</dd>
                <dd className="text-muted-foreground">Segunda e terça fechado.</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Instagram className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="eyebrow text-olive">Contato</dt>
                <dd className="mt-1">
                  <a
                    href={whatsappLink("Olá! Gostaria de falar com a Rostiseria Ateliê.")}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold/60 underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </dd>
                <dd>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold/60 underline-offset-4"
                  >
                    {INSTAGRAM}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nova+Friburgo+RJ"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-forest mt-9"
          >
            Como chegar
          </a>
        </Reveal>
        <Reveal delay={100}>
          <div className="overflow-hidden shadow-[var(--shadow-warm)]">
            <iframe
              title="Mapa de Nova Friburgo — RJ"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-42.60%2C-22.35%2C-42.45%2C-22.24&layer=mapnik"
              loading="lazy"
              className="h-80 w-full border-0 md:h-[26rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const feed = ["hero", "salao", "margherita", "drinks", "parma", "forno"];

function Feed() {
  return (
    <section className="bg-secondary px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="eyebrow text-olive">Instagram</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-serif text-2xl md:text-3xl"
          >
            {INSTAGRAM}
          </a>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {feed.map((k, i) => (
            <Reveal key={k + i} delay={(i % 6) * 60}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <img
                  src={img[k]}
                  alt="Publicação da Rostiseria Ateliê no Instagram"
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-opacity duration-500 hover:opacity-85"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
