"use client";

import { ThemeProvider } from "next-themes";

export function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      value={{ light: "light", dark: "dark" }}
    >
      {children}
    </ThemeProvider>
  );
}
