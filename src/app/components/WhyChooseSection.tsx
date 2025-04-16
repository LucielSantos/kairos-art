import { Card, CardContent } from "@/components/ui/card";
import { Gift, Home, Package, ShoppingBag } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Por que escolher a Kairos Art?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Artesanato em MDF com Qualidade e Personalização
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada peça é criada com atenção aos detalhes, garantindo produtos
              únicos e de alta qualidade para nossos clientes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Produtos Personalizados</h3>
                    <p className="text-sm text-muted-foreground">
                      Criamos produtos sob medida para suas necessidades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Presentes Especiais</h3>
                    <p className="text-sm text-muted-foreground">
                      Opções perfeitas para presentear em ocasiões especiais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Brindes Corporativos</h3>
                    <p className="text-sm text-muted-foreground">
                      Soluções para empresas que buscam brindes diferenciados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Decoração para Casa</h3>
                    <p className="text-sm text-muted-foreground">
                      Peças decorativas que dão um toque especial ao seu lar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
