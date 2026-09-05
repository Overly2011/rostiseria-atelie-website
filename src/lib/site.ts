export const WHATSAPP_NUMBER = "5522999990000";

export function whatsappLink(
  message = "Olá! Gostaria de reservar uma mesa na Rostiseria Ateliê.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HORARIO = "Quarta a domingo · 18h às 23h30";
export const INSTAGRAM = "@rostiseriaatelie";
export const INSTAGRAM_URL = "https://instagram.com/rostiseriaatelie";
export const CIDADE = "Nova Friburgo — RJ";

export type Prato = {
  nome: string;
  descricao: string;
  preco?: string;
  individual?: string;
  grande?: string;
  img?: string;
};

export const rostis: Prato[] = [
  {
    nome: "Rösti Ateliê",
    descricao: "Filé-mignon, creme de queijo, cebola caramelizada e rúcula.",
    preco: "R$ 62",
    img: "hero",
  },
  {
    nome: "Parma & Brie",
    descricao: "Presunto Parma, queijo brie, geleia de damasco e rúcula.",
    preco: "R$ 59",
    img: "parma",
  },
  {
    nome: "Camarão Mediterrâneo",
    descricao: "Camarões salteados, creme de queijo, tomate confit e ervas.",
    preco: "R$ 65",
    img: "camarao",
  },
  {
    nome: "Mineiro Contemporâneo",
    descricao:
      "Carne seca desfiada, queijo cremoso, cebola caramelizada e couve crocante.",
    preco: "R$ 57",
    img: "mineiro",
  },
  {
    nome: "Trufado",
    descricao:
      "Cogumelos, creme trufado, parmesão e finalização com azeite trufado.",
    preco: "R$ 58",
    img: "trufado",
  },
  {
    nome: "Caprese",
    descricao: "Muçarela de búfala, tomate confit, pesto de manjericão e folhas frescas.",
    preco: "R$ 55",
    img: "cozinha",
  },
  {
    nome: "Frango Ateliê",
    descricao: "Frango desfiado, creme de queijo, alho-poró e parmesão.",
    preco: "R$ 54",
    img: "camarao",
  },
  {
    nome: "Quatro Queijos",
    descricao: "Muçarela, parmesão, gorgonzola e brie.",
    preco: "R$ 52",
    img: "trufado",
  },
];

export const pizzas: Prato[] = [
  {
    nome: "Margherita",
    descricao: "Molho artesanal, muçarela de búfala, tomate-cereja e manjericão.",
    individual: "R$ 39",
    grande: "R$ 69",
    img: "margherita",
  },
  {
    nome: "Parma & Burrata",
    descricao: "Molho artesanal, muçarela, presunto Parma, burrata e rúcula.",
    individual: "R$ 52",
    grande: "R$ 89",
    img: "parmapizza",
  },
  {
    nome: "Brie & Damasco",
    descricao: "Brie, geleia de damasco, muçarela e amêndoas laminadas.",
    individual: "R$ 49",
    grande: "R$ 85",
    img: "forno",
  },
  {
    nome: "Trufada",
    descricao: "Cogumelos, muçarela, parmesão e azeite trufado.",
    individual: "R$ 49",
    grande: "R$ 85",
    img: "margherita",
  },
  {
    nome: "Camarão Ateliê",
    descricao: "Camarões, creme de queijo, alho-poró e parmesão.",
    individual: "R$ 54",
    grande: "R$ 92",
    img: "parmapizza",
  },
  {
    nome: "Carne Seca",
    descricao: "Carne seca desfiada, creme de queijo, cebola roxa e pimenta-biquinho.",
    individual: "R$ 48",
    grande: "R$ 83",
    img: "forno",
  },
  {
    nome: "Quatro Queijos",
    descricao: "Muçarela, parmesão, gorgonzola e brie.",
    individual: "R$ 47",
    grande: "R$ 82",
    img: "margherita",
  },
  {
    nome: "Calabresa Artesanal",
    descricao: "Muçarela, calabresa artesanal, cebola roxa e azeitonas.",
    individual: "R$ 44",
    grande: "R$ 78",
    img: "parmapizza",
  },
];

export const entradas = [
  "Arancine de Parma",
  "Arancine de Queijo",
  "Burrata com Tomate Confit",
  "Focaccia Artesanal",
  "Croquete de Carne Seca",
  "Batata Rústica com Aioli",
  "Carpaccio de Filé",
];

export const sobremesas = [
  "Banoffee Ateliê",
  "Pavlova de Frutas Vermelhas",
  "Petit Gâteau com Sorvete",
  "Torta de Chocolate com Flor de Sal",
  "Mousse de Maracujá com Chocolate Branco",
];

export const drinks = [
  "Aperol Spritz",
  "Moscow Mule",
  "Gin Tônica",
  "Caipirinha Especial",
  "Negroni",
  "Drink da Casa",
];

export const semAlcool = [
  "Limonada Suíça com Especiarias",
  "Chá Gelado de Hibisco",
  "Mule sem Álcool",
  "Soda Italiana de Frutas Vermelhas",
];
