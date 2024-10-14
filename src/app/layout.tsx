import type { Metadata } from "next";
import GoogleTagManager from "@/components/GoogleTagManager";

import "./globals.css";

import {
  interThin,
  interExtraLight,
  interLight,
  interRegular,
  interMedium,
  interSemiBold,
  interBold,
  interExtraBold,
  interBlack,
} from "./fonts";

export const metadata: Metadata = {
  title: "[Pré Lançamento] - A Contradição de Ser Quem Sou",
  description:
    "A Contradição de Ser Quem Sou é um livro transformador que guia você em uma jornada de autoconhecimento, cura de traumas e conexão com o propósito divino. Leia e descubra sua verdadeira essência.",
  openGraph: {
    title: "A Contradição de Ser Quem Sou - Descubra sua verdadeira essência",
    description:
      "A Contradição de Ser Quem Sou é um livro transformador que guia você em uma jornada de autoconhecimento, cura de traumas e conexão com o propósito divino. Leia e descubra sua verdadeira essência.",
    url: "https://wanderleyalino.com/a-contradicao-de-ser-quem-sou",
    siteName: "A Contradição de Ser Quem Sou",
    images: [
      {
        url: "https://wanderleyalino.com/img/bg-shared.webp",
        width: 1200,
        height: 630,
        alt: "Capa do livro A Contradição de Ser Quem Sou",
      },
    ],
    locale: "pt_BR",
    type: "book",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Contradição de Ser Quem Sou - Descubra sua verdadeira essência",
    description:
      "A Contradição de Ser Quem Sou é um livro transformador que guia você em uma jornada de autoconhecimento, cura de traumas e conexão com o propósito divino.",
    images: [
      {
        url: "https://wanderleyalino.com/img/bg-shared.webp",
        alt: "Capa do livro A Contradição de Ser Quem Sou",
      },
    ],
  },
  robots: {
    index: true, // Permitir indexação
    follow: true, // Permitir que o Google siga os links
  },
  keywords: [
    "autoconhecimento",
    "cura de traumas",
    "livro de autoconhecimento",
    "propósito divino",
    "A Contradição de Ser Quem Sou",
    "Wanderley Barbosa Alino Junior",
    "wanderley alino",
    "alino",
    "a contradição de ser quem sou",
  ],
  alternates: {
    canonical: "https://wanderleyalino.com/a-contradicao-de-ser-quem-sou",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
            ${interThin.variable}
            ${interExtraLight.variable}
            ${interLight.variable}
            ${interRegular.variable}
            ${interMedium.variable}
            ${interSemiBold.variable}
            ${interBold.variable}
            ${interExtraBold.variable}
            ${interBlack.variable}
            antialiased
          `}
      >
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        {children}
      </body>
    </html>
  );
}
