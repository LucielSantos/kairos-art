import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="produtos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nossos Produtos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra nossa variedade de produtos artesanais em MDF, feitos com
              dedicação e atenção aos detalhes.
            </p>
          </div>
        </div>

        <Tabs defaultValue="todos" className="mt-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="caixas">Caixas</TabsTrigger>
              <TabsTrigger value="brindes">Brindes</TabsTrigger>
              <TabsTrigger value="brinquedos">Brinquedos</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Produto ${item}`}
                      alt={`Produto ${item}`}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Produto em MDF #{item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Artesanato de qualidade
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-sm font-medium text-primary flex items-center"
                      >
                        Ver detalhes <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
