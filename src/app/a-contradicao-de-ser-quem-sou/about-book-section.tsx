"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Feather, Moon, Shield, Infinity } from "lucide-react";
import Link from "next/link";

export default function AboutBookSection() {
  const bookFeatures = [
    {
      icon: Feather,
      title: "Espírito",
      description:
        "Você realmente entende o que significa ser espiritual? O espírito é a parte mais íntima de quem você é. Neste capítulo, você descobrirá que sua essência vai além da carne e osso",
    },
    {
      icon: Moon,
      title: "Alma",
      description:
        "Sua alma guarda suas emoções, traumas e desejos. Enfrentar essas sombras é o primeiro passo para curar o que está quebrado. Está pronto para iluminar os cantos mais escuros da sua mente?",
    },
    {
      icon: Shield,
      title: "Corpo",
      description:
        "Seu corpo não é apenas um invólucro físico. Ele é o templo onde a fonta da identidade habita. Neste capítulo, você será desafiado a redefinir sua relação com o seu corpo e cuidar dele como o lar do Espírito Santo.",
    },
    {
      icon: Infinity,
      title: "A Plenitude",
      description:
        "Quem é você quando todas as peças finalmente se encaixam? Aqui, você aprenderá a viver em plenitude, abraçando todas as partes de si mesmo — espírito, alma e corpo — em perfeita harmonia.",
    },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/book-cover2.webp"
              alt="Capa do livro A Contradição de Ser Quem Sou"
              width={400}
              height={600}
              className="rounded-lg shadow-2xl w-3/4 md:w-full mx-auto"
            />
          </motion.div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              &ldquo;A Contradição de Ser{" "}
              <span className="text-[#f5c426]">Quem Sou&rdquo;</span> — Muito
              Além das Palavras
            </h2>
            <p className="text-lg mb-6">
              Este livro não oferece respostas fáceis. Ele te conduz a perguntas
              que você nunca ousou fazer. Uma jornada intensa e transformadora,
              onde a contradição da vida encontra seu verdadeiro significado.
              Está pronto para encarar quem você realmente é?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {bookFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardContent className="flex items-start p-4">
                    <feature.icon className="w-8 h-8 text-[#f5c426] mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Link href="#pricing">
              <Button className="h-12 w-full font-bold  text-lg bg-[#f5c426] text-black hover:bg-[#d9ab1f]">
                Comece Sua Jornada Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
