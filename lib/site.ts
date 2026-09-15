export const WHATSAPP_NUMBER = "5522999990000"
export const TELEFONE_EXIBICAO = "(22) 99999-0000"

export function whatsappLink(
  message = "Olá! Gostaria de reservar uma mesa na Rostiseria Ateliê.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const HORARIO = "Quarta a domingo, das 18h às 23h30"
export const HORARIO_CURTO = "Qua a dom · 18h–23h30"
export const FECHADO = "Segunda e terça fechado"
export const INSTAGRAM = "@rostiseriaatelie"
export const INSTAGRAM_URL = "https://instagram.com/rostiseriaatelie"
export const CIDADE = "Nova Friburgo, RJ"
export const ENDERECO = "Rua Fernando Bizzotto, 84 — Centro"
export const ENDERECO_COMPLEMENTO = "Nova Friburgo, RJ · CEP 28610-070"
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Fernando+Bizzotto+84+Nova+Friburgo+RJ"

export const avisos = [
  "Cada rösti é ralado e prensado na hora. O tempo de preparo fica entre 20 e 25 minutos.",
  "Mesas para até 6 pessoas podem ser reservadas pelo WhatsApp. Grupos maiores, consultar disponibilidade.",
  "Aceitamos Pix, débito e crédito. Taxa de serviço de 10% opcional.",
  "Não trabalhamos com delivery. Retirada no balcão mediante pedido antecipado.",
  "Estacionamento na rua. Casa com acesso para cadeirantes.",
]

export type Prato = {
  nome: string
  descricao: string
  preco?: string
  individual?: string
  grande?: string
  img?: string
  veg?: boolean
}

export const rostis: Prato[] = [
  {
    nome: "Rösti Ateliê",
    descricao: "Filé-mignon em tiras, creme de queijo, cebola caramelizada e rúcula.",
    preco: "62",
    img: "hero",
  },
  {
    nome: "Parma e brie",
    descricao: "Presunto de Parma, brie, geleia de damasco e rúcula.",
    preco: "59",
    img: "parma",
  },
  {
    nome: "Camarão",
    descricao: "Camarões salteados na manteiga, creme de queijo, tomate confit e ervas.",
    preco: "65",
    img: "camarao",
  },
  {
    nome: "Carne seca",
    descricao: "Carne seca desfiada, requeijão de corte, cebola caramelizada e couve crocante.",
    preco: "57",
    img: "mineiro",
  },
  {
    nome: "Cogumelos e trufa",
    descricao: "Mix de cogumelos, creme trufado, parmesão e azeite trufado.",
    preco: "58",
    img: "trufado",
    veg: true,
  },
  {
    nome: "Caprese",
    descricao: "Muçarela de búfala, tomate confit, pesto de manjericão e folhas.",
    preco: "55",
    img: "cozinha",
    veg: true,
  },
  {
    nome: "Frango com alho-poró",
    descricao: "Frango desfiado, creme de queijo, alho-poró refogado e parmesão.",
    preco: "54",
    img: "camarao",
  },
  {
    nome: "Quatro queijos",
    descricao: "Muçarela, parmesão, gorgonzola e brie.",
    preco: "52",
    img: "trufado",
    veg: true,
  },
]

export const pizzas: Prato[] = [
  {
    nome: "Margherita",
    descricao: "Molho de tomate, muçarela de búfala, tomate-cereja e manjericão.",
    individual: "39",
    grande: "69",
    img: "margherita",
    veg: true,
  },
  {
    nome: "Parma e burrata",
    descricao: "Molho de tomate, muçarela, presunto de Parma, burrata e rúcula.",
    individual: "52",
    grande: "89",
    img: "parmapizza",
  },
  {
    nome: "Brie e damasco",
    descricao: "Brie, geleia de damasco, muçarela e amêndoas laminadas.",
    individual: "49",
    grande: "85",
    img: "forno",
    veg: true,
  },
  {
    nome: "Cogumelos",
    descricao: "Mix de cogumelos, muçarela, parmesão e azeite trufado.",
    individual: "49",
    grande: "85",
    img: "margherita",
    veg: true,
  },
  {
    nome: "Camarão",
    descricao: "Camarões, creme de queijo, alho-poró e parmesão.",
    individual: "54",
    grande: "92",
    img: "parmapizza",
  },
  {
    nome: "Carne seca",
    descricao: "Carne seca desfiada, requeijão, cebola roxa e pimenta-biquinho.",
    individual: "48",
    grande: "83",
    img: "forno",
  },
  {
    nome: "Quatro queijos",
    descricao: "Muçarela, parmesão, gorgonzola e brie.",
    individual: "47",
    grande: "82",
    img: "margherita",
    veg: true,
  },
  {
    nome: "Calabresa",
    descricao: "Muçarela, calabresa artesanal fatiada, cebola roxa e azeitonas pretas.",
    individual: "44",
    grande: "78",
    img: "parmapizza",
  },
]

export type Item = { nome: string; descricao?: string; preco: string; veg?: boolean }

export const entradas: Item[] = [
  { nome: "Arancine de Parma", descricao: "3 unidades", preco: "28" },
  { nome: "Arancine de queijo", descricao: "3 unidades", preco: "26", veg: true },
  { nome: "Burrata com tomate confit", descricao: "Serve 2", preco: "42", veg: true },
  { nome: "Focaccia da casa", descricao: "Azeite, alecrim e flor de sal", preco: "22", veg: true },
  { nome: "Croquete de carne seca", descricao: "4 unidades", preco: "29" },
  { nome: "Batata rústica com aioli", preco: "24", veg: true },
  { nome: "Carpaccio de filé", descricao: "Parmesão, alcaparras e torradas", preco: "38" },
]

export const sobremesas: Item[] = [
  { nome: "Banoffee", preco: "24" },
  { nome: "Pavlova de frutas vermelhas", preco: "26" },
  { nome: "Petit gâteau com sorvete de creme", preco: "28" },
  { nome: "Torta de chocolate com flor de sal", preco: "24" },
  { nome: "Mousse de maracujá", preco: "19" },
]

export const drinks: Item[] = [
  { nome: "Aperol Spritz", preco: "32" },
  { nome: "Moscow Mule", preco: "30" },
  { nome: "Gin tônica", descricao: "Gin nacional ou importado", preco: "28 / 36" },
  { nome: "Caipirinha", descricao: "Cachaça, vodka ou saquê", preco: "22 / 26" },
  { nome: "Negroni", preco: "32" },
  { nome: "Drink do dia", descricao: "Pergunte ao garçom", preco: "30" },
]

export const semAlcool: Item[] = [
  { nome: "Limonada suíça", preco: "14" },
  { nome: "Chá gelado de hibisco", preco: "12" },
  { nome: "Mule sem álcool", preco: "18" },
  { nome: "Soda italiana", descricao: "Frutas vermelhas ou maracujá", preco: "15" },
  { nome: "Água com ou sem gás", preco: "6" },
  { nome: "Refrigerante lata", preco: "8" },
]

export const cervejasVinhos: Item[] = [
  { nome: "Cerveja artesanal long neck", descricao: "Rótulos da serra, rotativos", preco: "18" },
  { nome: "Heineken long neck", preco: "14" },
  { nome: "Vinho da casa", descricao: "Taça / garrafa", preco: "24 / 98" },
]
