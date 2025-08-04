import "./globals.css";
import SEO from "./components/SEO";
import { InitSw } from "./ClientLayout";
import Promo from "./components/Promo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className="min-h-screen flex flex-col dark:bg-dark-gray">
        <InitSw />
        <Promo />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
