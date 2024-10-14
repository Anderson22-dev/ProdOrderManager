import type { Metadata } from "next";

import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
