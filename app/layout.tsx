import type { Metadata } from "next"
import { Cormorant_Garamond, Karla } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Rostiseria Ateliê — Rösti e pizza em Nova Friburgo",
  description:
    "Restaurante em Nova Friburgo especializado em rösti feito na hora e pizza de forno de pedra. Quarta a domingo, a partir das 18h. Reservas pelo WhatsApp.",
  openGraph: {
    title: "Rostiseria Ateliê — Nova Friburgo",
    description:
      "Rösti feito na hora e pizza de forno de pedra. Quarta a domingo, das 18h às 23h30.",
  },
}

export const viewport = {
  themeColor: "#1a1f1b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark bg-background ${cormorant.variable} ${karla.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
