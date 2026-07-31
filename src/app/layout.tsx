import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProductionsDuks – Plataforma de Mezcla Vocal",
  description: "Aprende a mezclar voces de forma profesional con nuestro manual interactivo y clases en video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body style={{ paddingTop: '54px' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
