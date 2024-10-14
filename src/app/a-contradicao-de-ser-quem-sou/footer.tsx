import React from "react";
import { Instagram, Youtube } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#f5c426]">
              A Contradição de Ser Quem Sou
            </h3>
            <p className="text-sm">
              Uma jornada transformadora de autoconhecimento e propósito
              espiritual.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-[#f5c426] transition-colors"
                >
                  Sobre o Livro
                </Link>
              </li>
              <li>
                <Link
                  href="#autor"
                  className="hover:text-[#f5c426] transition-colors"
                >
                  Sobre o Autor
                </Link>
              </li>
              <li>
                <Link
                  href="#comprar"
                  className="hover:text-[#f5c426] transition-colors"
                >
                  Comprar
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#f5c426] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>Email: contato@wanderleyalino.com</li>
              <li>Telefone: (11) 97138-7589</li>
              <li>Endereço: Barueri, SP - Brasil</li>
            </ul>
          </div>
          {/*   <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-2">
              Receba novidades e conteúdos exclusivos.
            </p>
             <form className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border-gray-700"
              />
              <Button
                type="submit"
                className="w-full bg-[#f5c426] text-black hover:bg-[#d9ab1f]"
              >
                Inscrever-se
              </Button>
            </form> 
          </div>*/}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wanderley Alino. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-4">
            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#f5c426] transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a> */}
            <a
              href="https://www.instagram.com/wanderleyalino/"
              target="_blank"
              className="text-gray-400 hover:text-[#f5c426] transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#f5c426] transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a> */}
            <a
              href="https://www.youtube.com/@deleyjunr"
              target="_blank"
              className="text-gray-400 hover:text-[#f5c426] transition-colors"
            >
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
