import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  const whatsappUrl = "https://wa.me/numerodeempresa?text=Hola,%20estoy%20interesado%20en%20iniciar%20un%20proyecto";

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <HeroSection whatsappUrl={whatsappUrl} />
    </main>
  );
}
