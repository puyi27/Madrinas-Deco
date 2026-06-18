import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { VideoSection } from "@/components/VideoSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF8F8]">
      <HeroSection />
      <EventsSection />
      <ServicesSection />
      <GallerySection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
