import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Mobile layout */}
      <div className="md:hidden pb-8">
        <div className="relative h-[40vh] w-full">
          <Image
            src="/img/alino.webp"
            alt="Capa do livro A Contradição de Ser Quem Sou"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div className="container mx-auto px-4 py-2">
          <span className="space-x-3 mb-2">
            <Badge variant="secondary" className="bg-[#ffc60b] text-white">
              <span className="font-bold">Pré-lançamento</span>
            </Badge>
            <Badge variant="secondary">Livro</Badge>
            <Badge variant="secondary">E-book</Badge>
          </span>
          <h1 className="text-3xl font-bold mb-4 mt-2 uppercase">
            A Contradição de Ser{" "}
            <span className="bg-[#f5c426] text-white p-1 uppercase">
              Quem Sou
            </span>
          </h1>
          <p className="text-xl font-semibold mb-4">
            Quando a realidade mente, quem você escolhe ser?
          </p>
          <p className="text-sm mb-6">
            Desvende os segredos da sua identidade além da superfície e descubra
            a verdade de Deus escondida em você.
          </p>

          <Button className="mt-6 w-full h-12 font-bold bg-[#f5c426] text-black hover:bg-[#d9ab1f] text-lg py-4">
            ENCARE SUA VERDADE
          </Button>
        </div>
      </div>

      {/* Desktop layout (unchanged) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-row items-center">
          <div className="w-1/2 z-10">
            <span className="space-x-3 mb-2">
              <Badge variant="secondary" className="bg-[#f5c426] text-white">
                <span className="font-bold">Pré-lançamento</span>
              </Badge>
              <Badge variant="secondary">Livro</Badge>
              <Badge variant="secondary">E-book</Badge>
              <Badge variant="secondary">Mentoria Exclusiva</Badge>
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase mt-2 ">
              A Contradição de Ser{" "}
              <span className="bg-[#f5c426] text-white p-1">Quem Sou</span>
            </h1>
            <p className="text-2xl md:text-4xl font-semibold mb-6">
              Desvende os segredos da sua identidade além da superfície e
              descubra a verdade de Deus escondida em você.
            </p>
            <p className="text-lg mb-8">
              Por que você nasceu na geração mais caótica de todas, sem um
              propósito claro?
            </p>

            <div className="w-full flex ">
              <Button className="mt-6 w-full h-12 font-bold bg-[#f5c426] text-black hover:bg-[#d9ab1f] text-lg py-4 ">
                GARANTIR MEU EXEMPLAR
              </Button>
            </div>
          </div>
          <div className="w-1/2 mt-3 md:mt-0 relative">
            <Image
              src="/img/capa_livro.webp"
              alt="Capa do livro A Contradição de Ser Quem Sou"
              width={800}
              height={1000}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f5c426]/20 to-transparent"></div>
      </div>
    </section>
  );
}
