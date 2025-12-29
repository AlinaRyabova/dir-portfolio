import { Hero } from "@/components/home/Hero";
import { Summary } from "@/components/home/Summary";
import { Skills } from "@/components/home/Skills";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Summary />
      <Skills />
      <Footer />
    </main>
  );
}
