"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

const AuthorSection = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quem é <span className="text-[#f5c426]">Wanderley Alino</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/wanderley-alino.webp"
              alt="Wanderley Alino"
              width={300}
              height={300}
              className="rounded-full border-4 border-[#f5c426] shadow-lg shadow-[#f5c426]/50"
            />
          </motion.div>
          <div className="px-8 md:w-2/3">
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Eu sou aquele que carrega um pedaço do quebra-cabeça que encaixa
              na sua vida e na sua história. Dentro deste livro, você encontrará
              a conexão com o inacreditável poder que existe dentro de você —
              aquele que, por mais que seu pai, sua mãe ou qualquer outra pessoa
              que tenha passado pela sua vida até hoje não conseguiu te mostrar.
              Eu coloquei essa peça neste livro. Está em dúvida? Leia e me fale
              no final.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gray-800">
                <CardContent className="flex items-center p-4">
                  <Users className="w-8 h-8 text-[#f5c426] mr-4" />
                  <div>
                    <h3 className="font-semibold text-white">
                      Mentor de Vidas
                    </h3>
                    <p className="text-sm text-gray-300">
                      Milhares de Vidas Impactadas
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800">
                <CardContent className="flex items-center p-4">
                  <Lightbulb className="w-8 h-8 text-[#f5c426] mr-4" />
                  <div>
                    <h3 className="font-semibold text-white">Empresário</h3>
                    <p className="text-sm text-gray-300">
                      CEO e Fundador do Grupo Alino
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800">
                <CardContent className="flex items-center p-4">
                  <Heart className="w-8 h-8 text-[#f5c426] mr-4" />
                  <div>
                    <h3 className="font-semibold text-white">Missão de Vida</h3>
                    <p className="text-sm text-gray-300">
                      Levantar 1 milhão de famílias negras brasileiras
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex w-full justify-center"
            >
              <Link href={"#pricing"}>
                <Button className="w-96 h-12 font-bold text-lg bg-[#f5c426] text-black hover:bg-[#d9ab1f]">
                  Comprar Agora
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
