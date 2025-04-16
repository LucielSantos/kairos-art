import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Artesanato em MDF com Qualidade e Carinho
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Caixas, brindes, brinquedos e muito mais. Peças únicas feitas
                com dedicação para tornar seus momentos especiais.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>Ver Produtos</Button>
              <Button variant="outline">Contato</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/logo2.svg?height=550&width=450"
              alt="Produtos em MDF Kairos Art"
              width={550}
              height={450}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
