import Link from "next/link"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import { Reveal } from "@/components/site/reveal"
import {
  ENDERECO,
  ENDERECO_COMPLEMENTO,
  FECHADO,
  HORARIO,
  INSTAGRAM,
  INSTAGRAM_URL,
  MAPS_URL,
  TELEFONE_EXIBICAO,
  avisos,
  drinks,
  entradas,
  pizzas,
  rostis,
  sobremesas,
  whatsappLink,
} from "@/lib/site"
import { img, heroRosti, ambienteSalao, forno } from "@/lib/images"

function Veg() {
  return (
    <span
      className="ml-1.5 align-middle text-[0.65rem] font-semibold text-olive"
      title="Vegetariano"
      aria-label="vegetariano"
    >
      (v)
    </span>
  )
}

export function Hero() {
  return (
    <section className="grain relative flex min-h-[92svh] items-end overflow-hidden bg-charcoal-deep">
      <img
        src={heroRosti}
        alt="Rösti com filé-mignon servido em frigideira de ferro"
        width={1600}
        height={1104}
        className="photo absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-charcoal-deep/20" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-12 md:px-8 md:pb-16">
        <Reveal>
          <p className="eyebrow">Restaurante · Nova Friburgo, RJ</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl text-cream text-balance md:text-7xl">
            Rösti feito na hora e pizza de forno de pedra.
          </h1>
          <p className="mt-6 max-w-lg text-base text-cream/75 md:text-lg">
            Casa pequena no centro, 24 lugares e cozinha à vista. Abrimos de quarta a
            domingo, a partir das 18h.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
              Reservar pelo WhatsApp
            </a>
            <Link href="/cardapio" className="btn-ghost">
              Ver cardápio e preços
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <dl className="mt-12 grid gap-4 border-t border-cream/15 pt-6 text-sm text-cream/75 sm:grid-cols-3">
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">{HORARIO}</dt>
                <dd>{FECHADO}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">{ENDERECO}</dt>
                <dd>{ENDERECO_COMPLEMENTO}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">{TELEFONE_EXIBICAO}</dt>
                <dd>WhatsApp para reservas</dd>
              </div>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export function ACasa() {
  return (
    <section id="a-casa" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <figure>
            <img
              src={ambienteSalao}
              alt="Salão da Rostiseria Ateliê, mesas de madeira e luz baixa"
              loading="lazy"
              width={1200}
              height={1408}
              className="photo aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs text-cream/50">
              O salão. Vinte e quatro lugares, cozinha à vista no fundo.
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={100} className="lg:pt-8">
          <p className="eyebrow">A casa</p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">
            Uma cozinha pequena que faz poucas coisas com cuidado.
          </h2>
          <div className="mt-7 max-w-prose space-y-4 text-[0.95rem] leading-relaxed text-cream/75 md:text-base">
            <p>
              A Rostiseria abriu em 2019 numa casa antiga do centro de Nova Friburgo. A
              ideia era simples: acertar o ponto do rösti. Batata ralada na hora, prensada
              devagar na frigideira de ferro, servida enquanto a borda ainda estala. Isso
              leva uns vinte minutos por pedido, e a gente prefere avisar antes.
            </p>
            <p>
              As pizzas vieram um ano depois, quando montamos o forno de pedra. A massa
              descansa 48 horas antes de assar. O cardápio é curto de propósito e muda um
              pouco com a estação, mais raiz e queijo no inverno, mais tomate e folha no
              verão.
            </p>
            <p>
              Somos uma equipe de sete pessoas. Quem atende geralmente é quem cozinha.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Rostis() {
  const destaque = rostis.slice(0, 4)
  return (
    <section id="rostis" className="border-y border-border bg-charcoal-deep px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Especialidade</p>
            <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">Röstis</h2>
          </div>
          <p className="max-w-md text-sm text-cream/65">
            Base de batata ralada e prensada, cerca de 300 g, serve bem uma pessoa ou
            duas com entrada. Tempo de preparo: 20 a 25 minutos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {destaque.map((r, i) => (
            <Reveal key={r.nome} delay={i * 70} as="article">
              <img
                src={img[r.img ?? "hero"]}
                alt={r.nome}
                loading="lazy"
                width={912}
                height={912}
                className="photo aspect-[4/3] w-full object-cover"
              />
              <div className="price-row mt-4">
                <h3 className="font-serif text-xl text-cream">
                  {r.nome}
                  {r.veg && <Veg />}
                </h3>
                <span className="text-sm text-gold">R$ {r.preco}</span>
              </div>
              <p className="mt-2 text-sm text-cream/65">{r.descricao}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link href="/cardapio#rostis" className="btn-ghost">
            Ver os 8 röstis
          </Link>
          <p className="text-cream/55">
            Dá para trocar a base por batata-doce em qualquer rösti, sem custo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Pizzas() {
  return (
    <section id="pizzas" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">Forno de pedra</p>
            <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">Pizzas</h2>
            <p className="mt-4 max-w-md text-sm text-cream/65">
              Massa de fermentação longa (48h), borda fina e assada a 400 °C. Individual
              com 25 cm, grande com 35 cm (8 fatias).
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 divide-y divide-border">
              {pizzas.map((p) => (
                <li key={p.nome} className="py-4">
                  <div className="price-row">
                    <h3 className="font-serif text-xl text-cream">
                      {p.nome}
                      {p.veg && <Veg />}
                    </h3>
                    <span className="text-sm text-gold">
                      {p.individual} / {p.grande}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cream/65">{p.descricao}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-cream/50">
              Preços em reais: individual / grande. Borda recheada com catupiry ou
              cheddar: + R$ 8.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:sticky lg:top-24 lg:self-start">
          <figure>
            <img
              src={forno}
              alt="Pizza saindo do forno de pedra"
              loading="lazy"
              width={1408}
              height={1008}
              className="photo aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs text-cream/50">
              O forno fica ligado das 17h até o fechamento.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

export function Entradas() {
  return (
    <section className="border-y border-border bg-charcoal-deep px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Para começar e para terminar</p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
            Entradas e sobremesas
          </h2>
          <ul className="mt-8 divide-y divide-border">
            {entradas.map((e) => (
              <li key={e.nome} className="price-row py-3">
                <span className="font-serif text-lg text-cream">
                  {e.nome}
                  {e.veg && <Veg />}
                  {e.descricao && (
                    <span className="ml-2 font-sans text-xs text-cream/50">{e.descricao}</span>
                  )}
                </span>
                <span className="text-sm text-gold">{e.preco}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={img.entradas}
            alt="Burrata, focaccia e arancine na mesa"
            loading="lazy"
            width={1200}
            height={912}
            className="photo aspect-[3/2] w-full object-cover"
          />
          <ul className="mt-8 divide-y divide-border">
            {sobremesas.map((s) => (
              <li key={s.nome} className="price-row py-3">
                <span className="font-serif text-lg text-cream">{s.nome}</span>
                <span className="text-sm text-gold">{s.preco}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Bar() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <img
            src={img.drinks}
            alt="Drinks no balcão do bar"
            loading="lazy"
            width={1200}
            height={912}
            className="photo aspect-square w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Bar</p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">Drinks e bebidas</h2>
          <p className="mt-4 max-w-md text-sm text-cream/65">
            Carta curta. Temos também cerveja artesanal da região, rotativa, e um vinho da
            casa em taça.
          </p>
          <ul className="mt-8 divide-y divide-border">
            {drinks.map((d) => (
              <li key={d.nome} className="price-row py-3">
                <span className="font-serif text-lg text-cream">
                  {d.nome}
                  {d.descricao && (
                    <span className="ml-2 font-sans text-xs text-cream/50">{d.descricao}</span>
                  )}
                </span>
                <span className="text-sm text-gold">{d.preco}</span>
              </li>
            ))}
          </ul>
          <Link href="/cardapio#bar" className="mt-6 inline-block text-sm text-gold underline-offset-4 hover:underline">
            Carta completa, incluindo sem álcool
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const galeria = [
  { key: "fachada", alt: "Fachada à noite", caption: "A fachada, na Rua Fernando Bizzotto." },
  { key: "cozinha", alt: "Rösti sendo prensado na frigideira", caption: "Rösti na frigideira de ferro." },
  { key: "salao", alt: "Mesas do salão", caption: "Mesas do salão." },
  { key: "parma", alt: "Rösti Parma e brie", caption: "Parma e brie, servido." },
  { key: "forno", alt: "Forno de pedra aceso", caption: "Forno de pedra." },
  { key: "drinks", alt: "Balcão do bar", caption: "O balcão." },
]

export function Ambiente() {
  return (
    <section id="ambiente" className="border-y border-border bg-charcoal-deep px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">A casa por dentro</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl text-cream md:text-5xl">
            Madeira, luz baixa e mesas próximas.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {galeria.map((g, i) => (
            <Reveal key={g.key} delay={(i % 3) * 70} as="figure">
              <img
                src={img[g.key]}
                alt={g.alt}
                loading="lazy"
                className={`photo w-full object-cover ${i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
              />
              <figcaption className="mt-2 text-xs text-cream/50">{g.caption}</figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-sm text-cream/60">
          Mais fotos no Instagram,{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            {INSTAGRAM}
          </a>
          .
        </Reveal>
      </div>
    </section>
  )
}

export function Avisos() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="eyebrow">Antes de vir</p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">Bom saber</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="divide-y divide-border">
            {avisos.map((a) => (
              <li key={a} className="py-4 text-[0.95rem] leading-relaxed text-cream/75">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Localizacao() {
  return (
    <section id="localizacao" className="border-t border-border bg-charcoal-deep px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">Onde estamos</p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">
            Centro de Nova Friburgo
          </h2>
          <dl className="mt-8 space-y-6 text-sm md:text-base">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">{ENDERECO}</dt>
                <dd className="text-cream/65">{ENDERECO_COMPLEMENTO}</dd>
                <dd className="text-cream/65">
                  A duas quadras da Praça Getúlio Vargas. Estacionamento na rua.
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">{HORARIO}</dt>
                <dd className="text-cream/65">{FECHADO}. Cozinha fecha às 23h.</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">
                  <a
                    href={whatsappLink("Olá! Gostaria de falar com a Rostiseria Ateliê.")}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    {TELEFONE_EXIBICAO}
                  </a>
                </dt>
                <dd className="text-cream/65">WhatsApp. Respondemos a partir das 15h.</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Instagram className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <dt className="text-cream">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    {INSTAGRAM}
                  </a>
                </dt>
              </div>
            </div>
          </dl>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold">
              Reservar mesa
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              Abrir no Google Maps
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="overflow-hidden border border-border">
            <iframe
              title="Mapa: Rostiseria Ateliê, Nova Friburgo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-42.5390%2C-22.2900%2C-42.5230%2C-22.2780&layer=mapnik&marker=-22.2840%2C-42.5310"
              loading="lazy"
              className="h-80 w-full border-0 grayscale-[0.4] invert-[0.88] hue-rotate-180 md:h-[30rem]"
            />
          </div>
          <p className="mt-2 text-xs text-cream/45">
            Mapa aproximado. Confirme o trajeto no Google Maps antes de sair.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
