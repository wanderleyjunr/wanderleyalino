import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      " O que faz o livro 'A Contradição de Ser Quem Sou' ser diferente de outros livros sobre autoconhecimento?",
    answer:
      "Este livro não oferece soluções superficiais. Ele mergulha nas camadas mais profundas da alma, guiando você a confrontar traumas, crenças limitantes e o verdadeiro propósito de vida que Deus traçou para você. É uma jornada espiritual e emocional que vai além de uma simples leitura.",
  },
  {
    question: "O conteúdo do livro é adequado para quem não é cristão?",
    answer:
      "Embora o livro seja fundamentado em princípios cristãos, as lições sobre autoconhecimento, superação de traumas e reconexão com o propósito são universais. Qualquer pessoa em busca da verdade se beneficiará do conteúdo.",
  },
  {
    question: "O livro está disponível em formato digital?",
    answer:
      "Sim, 'A Contradição de Ser Quem Sou' está disponível tanto em formato de e-book quanto em livro físico. O e-book oferece acesso imediato ao conteúdo, enquanto o livro físico proporciona uma experiência de leitura tradicional.",
  },
  {
    question: "Quanto tempo leva para receber o livro físico?",
    answer:
      "O Livro será distribuido apartir do dia 30 de Outubro. O prazo de entrega do livro físico depende da sua localização, mas, em média, o frete grátis garante a chegada em até 10 dias úteis após a confirmação do pagamento.",
  },
  {
    question: "Existe um programa de acompanhamento após a leitura do livro?",
    answer:
      "Sim, oferecemos um curso digital exclusivo como parte do pacote completo. Este curso aprofunda os conceitos do livro e fornece orientação adicional para aplicar os ensinamentos em sua vida diária. Além disso, Wanderley Alino frequentemente realiza workshops e encontros presenciais para leitores.",
  },
  {
    question: "O livro aborda temas religiosos específicos?",
    answer:
      "Embora o livro explore princípios espirituais, ele não se limita a religião nenhuma. 'A Contradição de Ser Quem Sou' adota uma abordagem milenar para o crescimento pessoal e espiritual, sendo acessível e relevante para pessoas de diferentes crenças e backgrounds.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-700"
            >
              <AccordionTrigger className="text-white hover:text-[#f5c426] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
