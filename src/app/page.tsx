import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Gift,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  ShoppingBag,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Kairos Art Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">Kairos Art</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Início
            </Link>
            <Link
              href="#produtos"
              className="text-sm font-medium hover:underline"
            >
              Produtos
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:underline">
              Sobre Nós
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium hover:underline"
            >
              Contato
            </Link>
          </nav>
          <Button size="sm" className="hidden md:flex">
            Faça um Orçamento
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Artesanato em MDF com Qualidade e Carinho
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Caixas, brindes, brinquedos e muito mais. Peças únicas
                    feitas com dedicação para tornar seus momentos especiais.
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

        <section id="produtos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nossos Produtos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra nossa variedade de produtos artesanais em MDF, feitos
                  com dedicação e atenção aos detalhes.
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
                        <h3 className="font-semibold">
                          Produto em MDF #{item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Artesanato de qualidade
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <Link
                            href="#"
                            className="text-sm font-medium text-primary flex items-center"
                          >
                            Ver detalhes{" "}
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="caixas" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Caixa ${item}`}
                          alt={`Caixa ${item}`}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">
                          Caixa Decorativa #{item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Perfeita para presentes
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <Link
                            href="#"
                            className="text-sm font-medium text-primary flex items-center"
                          >
                            Ver detalhes{" "}
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="brindes" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Brinde ${item}`}
                          alt={`Brinde ${item}`}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">
                          Brinde Corporativo #{item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Personalizado para sua empresa
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <Link
                            href="#"
                            className="text-sm font-medium text-primary flex items-center"
                          >
                            Ver detalhes{" "}
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="brinquedos" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Brinquedo ${item}`}
                          alt={`Brinquedo ${item}`}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">
                          Brinquedo Educativo #{item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Diversão e aprendizado
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <Link
                            href="#"
                            className="text-sm font-medium text-primary flex items-center"
                          >
                            Ver detalhes{" "}
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 flex justify-center">
              <Button size="lg">Ver Todos os Produtos</Button>
            </div>
          </div>
        </section>

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
                  Cada peça é criada com atenção aos detalhes, garantindo
                  produtos únicos e de alta qualidade para nossos clientes.
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
                        <h3 className="font-semibold">
                          Produtos Personalizados
                        </h3>
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
                          Opções perfeitas para presentear em ocasiões
                          especiais.
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
                          Soluções para empresas que buscam brindes
                          diferenciados.
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
                          Peças decorativas que dão um toque especial ao seu
                          lar.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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
                    A Kairos Art nasceu da paixão pelo artesanato e pela criação
                    de peças únicas em MDF. Nossa missão é transformar momentos
                    especiais através de produtos artesanais de qualidade.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Fundada em 2018, nossa empresa tem se dedicado a criar
                    produtos que unem funcionalidade, beleza e emoção. Cada peça
                    é pensada para trazer alegria e praticidade para o dia a dia
                    de nossos clientes.
                  </p>
                  <p className="text-muted-foreground">
                    Trabalhamos com matéria-prima de qualidade e processos que
                    respeitam o meio ambiente, garantindo produtos duráveis e
                    sustentáveis.
                  </p>
                  <p className="text-muted-foreground">
                    Nossa equipe é formada por artesãos apaixonados pelo que
                    fazem, sempre em busca de inovação e excelência em cada
                    detalhe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Conheça Nossa Equipe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Entre em Contato
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para atender suas necessidades e criar
                  produtos personalizados para você.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-sm text-muted-foreground">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      contato@kairosart.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-sm text-muted-foreground">
                      Rua das Artes, 123 - São Paulo, SP
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nome
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Seu email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Assunto
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite sua mensagem aqui"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Kairos Art. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
