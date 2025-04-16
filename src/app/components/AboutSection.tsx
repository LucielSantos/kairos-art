import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600&text=Nossa História"
              alt="Sobre a Kairos Art"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre a Kairos Art
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A Kairos Art nasceu da paixão pelo artesanato e pela criação de
                peças únicas em MDF. Nossa missão é transformar momentos
                especiais através de produtos artesanais de qualidade.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Fundada em 2018, nossa empresa tem se dedicado a criar produtos
                que unem funcionalidade, beleza e emoção. Cada peça é pensada
                para trazer alegria e praticidade para o dia a dia de nossos
                clientes.
              </p>
              <p className="text-muted-foreground">
                Trabalhamos com matéria-prima de qualidade e processos que
                respeitam o meio ambiente, garantindo produtos duráveis e
                sustentáveis.
              </p>
              <p className="text-muted-foreground">
                Nossa equipe é formada por artesãos apaixonados pelo que fazem,
                sempre em busca de inovação e excelência em cada detalhe.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>Conheça Nossa Equipe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
