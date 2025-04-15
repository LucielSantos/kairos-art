import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kairos Art - Artesanato em MDF com Qualidade e Carinho",
  description:
    "Loja especializada em produtos artesanais em MDF como caixas, brindes, brinquedos e muito mais. Peças únicas feitas com dedicação.",
  keywords:
    "MDF, artesanato, caixas, brindes, brinquedos, presentes, decoração, Kairos Art",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kairos Art - Artesanato em MDF" />
        <meta
          property="og:description"
          content="Loja especializada em produtos artesanais em MDF como caixas, brindes, brinquedos e muito mais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kairosart.com.br" />
        <meta
          property="og:image"
          content="https://www.kairosart.com.br/og-image.jpg"
        />
        <link rel="canonical" href="https://www.kairosart.com.br" />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>{children}</ClientThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
