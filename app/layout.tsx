import type { Metadata } from "next"
import { Cormorant_Garamond, Karla, Petit_Formal_Script } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
})

const petit = Petit_Formal_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-petit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rostiseria Ateliê — Rösti artesanal e pizza autoral | Nova Friburgo",
  description:
    "Rostiseria contemporânea em Nova Friburgo: rösti artesanal, pizzas autorais em forno de pedra, entradas, sobremesas e drinks. Reservas pelo WhatsApp.",
  openGraph: {
    title: "Rostiseria Ateliê — Rösti artesanal e pizza autoral",
    description:
      "Do rösti artesanal à pizza autoral. Cozinha de sabores marcantes em Nova Friburgo — RJ.",
  },
}

export const viewport = {
  themeColor: "#1a2b1f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${cormorant.variable} ${karla.variable} ${petit.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
