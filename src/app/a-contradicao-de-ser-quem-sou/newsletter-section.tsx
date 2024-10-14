import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-12 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Fique por dentro das novidades
      </h2>
      <div className="px-3">
        <Card className="bg-gray-800 max-w-md mx-auto ">
          <CardContent className="p-6">
            <p className="mb-4 text-white text-center">
              Inscreva-se para receber atualizações sobre o lançamento e
              conteúdos exclusivos.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-[#f5c426] text-black hover:bg-[#d9ab1f]"
              >
                Inscrever-se
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
