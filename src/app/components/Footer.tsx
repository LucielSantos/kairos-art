import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Kairos Art. Todos os direitos reservados.
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
  );
}
