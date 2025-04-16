import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
          <Link href="#contato" className="text-sm font-medium hover:underline">
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
  );
}
