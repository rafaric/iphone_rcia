import { Toaster } from "sonner";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import MostLiked from "./components/MostLiked";

export default function Home() {
  return (
    <main className="w-full px-40 h-full">
      <Toaster />
      <Hero />
      <MostLiked />
      <BackToTop />
    </main>
  );
}
