import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const pricingOptions = [
    {
      title: "Ebook",
      features: [
        "Acesso imediato ao conteúdo completo",
        "Leitura em qualquer dispositivo",
        "Versão otimizada para estudo e reflexão",
      ],
      price: 29.9,
      originalPrice: 97.98,
      ctaText: "QUERO MEU EBOOK",
      href: "https://pay.kirvano.com/d8effec3-44a3-489c-b22b-cbe91955bf57",
    },
    {
      title: " Livro Físico + Ebook + Mentoria Online + FRETE GRÁTIS",
      features: [
        "Livro físico autografado ",
        "Ebook para leitura em qualquer lugar",
        "Curso Digital Exclusivo",
        "Frete grátis para todo o Brasil",
      ],
      price: 297.98,
      originalPrice: 497.0,
      ctaText: "GARANTIR PACOTE COMPLETO",
      featured: true,
      href: "https://pay.kirvano.com/70c1947a-f9fa-48cc-b9d4-38b4a77774e1",
    },
    {
      title: "Livro Físico + Ebook + Frete Grátis",
      features: [
        "Livro físico entregue na sua casa",
        "Acesso ao Ebook",
        "Frete grátis para todo o Brasil",
      ],
      price: 89.9,
      originalPrice: 149.9,
      ctaText: "COMPRAR LIVRO + EBOOK",
      href: "https://pay.kirvano.com/cb7e59b8-bc8b-4d95-937c-1360cdd2d2e2",
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Escolha a Transformação Que Combina com Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <Card
              key={index}
              className={`bg-black text-white border ${
                option.featured
                  ? "border-2 border-[#f5c426] shadow-xl shadow-[#f5c426]/30"
                  : "border-gray-700"
              }`}
            >
              <CardContent className="p-6">
                <div className="text-[#f5c426] text-sm mb-2">LOTE 1</div>
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      {option.featured &&
                      fIndex === option.features.length - 1 ? (
                        <Star className="w-5 h-5 mr-2 text-[#f5c426] flex-shrink-0" />
                      ) : (
                        <Check className="w-5 h-5 mr-2 text-[#f5c426] flex-shrink-0" />
                      )}
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="w-full text-center">
                  <div className="text-gray-400 line-through text-sm mb-1">
                    De R${option.originalPrice.toFixed(2)}
                  </div>
                  <div className="text-5xl font-bold mb-4">
                    R${option.price.toFixed(2)}
                  </div>
                  <Link href={option.href} prefetch>
                    <Button
                      className={`w-full font-bold ${
                        option.featured
                          ? "bg-[#f5c426] text-black hover:bg-[#d9ab1f] "
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {option.ctaText}
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
