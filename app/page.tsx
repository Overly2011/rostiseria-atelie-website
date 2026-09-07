import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsappFab } from "@/components/site/whatsapp-fab"
import {
  Hero,
  ACasa,
  Rostis,
  Pizzas,
  Editorial,
  Entradas,
  Sobremesas,
  Bar,
  Ambiente,
  Reservas,
  Localizacao,
  Feed,
} from "@/components/home/sections"

export default function HomePage() {
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
  )
}
