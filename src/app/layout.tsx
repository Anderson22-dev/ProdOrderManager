import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "@/components/fonts/fonts";

export const metadata: Metadata = {
  title: { template: "%s | ProdOrderManager", default: "ProdOrderManager" },
  description: "Gerenciador de Ordem de Produção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}antialiased`}>{children}</body>
    </html>
  );
}
