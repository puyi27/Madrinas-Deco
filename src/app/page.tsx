import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const whatsappUrl = "https://wa.me/numerodeempresa?text=Hola,%20estoy%20interesado%20en%20iniciar%20un%20proyecto";

  return (
    <main className="flex min-h-screen flex-col bg-[#FFF8F8]">
      <HeroSection whatsappUrl={whatsappUrl} />
      <EventsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
