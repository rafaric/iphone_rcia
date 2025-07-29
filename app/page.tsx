import Hero from "./components/Hero";
import MostLiked from "./components/MostLiked";

export default function Home() {
  return (
    <main className="w-full px-40 h-full">
      <Hero />
      <MostLiked />
    </main>
  );
}
