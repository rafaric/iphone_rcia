import type { Metadata } from "next";
import "./globals.css";
import SEO from "./components/SEO";
import { InitSw } from "./ClientLayout";
import Promo from "./components/Promo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "iPhoneRcia - Calidad en iPhone",
  description:
    "Compra iPhones nuevos y usados en Resistencia, Chaco. Creado por Rafael Strongoli.",
};

export const viewport = {
  themeColor: "#2563EB", // Azul corporativo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <SEO
        title="iPhone Rcia - Calidad en iPhones"
        description="Compra y venta de iPhones nuevos y usados en Resistencia, Chaco."
      />
      <body>
        <InitSw />
        <Promo />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
