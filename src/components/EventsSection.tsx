import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';
import { FadeIn } from './ui/FadeIn';
import { TiltCard } from './ui/TiltCard';

export const EventsSection = () => {
  // Extract all images flat to pick a few
  const allImages = portfolioData.categories.flatMap(cat => cat.images);
  const eventImages = allImages.slice(0, 4);

  const events = [
    { title: "Cumpleaños", desc: "Montajes temáticos para soplar las velas a lo grande. Da igual la edad, lo importante es celebrarlo con arte.", img: eventImages[0]?.src || '/images/gallery-1.png' },
    { title: "Bautizos y Comuniones", desc: "Preparamos todo con muchísimo mimo para que ese día en familia quede para el recuerdo.", img: eventImages[1]?.src || '/images/gallery-2.png' },
    { title: "Baby Showers", desc: "El rinconcito más dulce para dar la bienvenida al bebé y disfrutar con vuestra gente.", img: eventImages[2]?.src || '/images/gallery-3.png' },
    { title: "A vuestra medida", desc: "Contadnos vuestra idea y nosotras le damos vida. Nos amoldamos a lo que necesitéis.", img: eventImages[3]?.src || '/images/gallery-1.png' }
  ];

  return (
    <section className="py-24 bg-[#FFF8F8] text-[#5A4A4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <FadeIn direction="up">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Lo que Celebramos</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto mb-16">
            Da igual lo que tengáis en mente, nos encargamos de que el espacio quede exactamente como os lo habíais imaginado.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
              <TiltCard className="h-full">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group h-full">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                    <h3 className="text-2xl font-serif italic mb-2 text-white">{event.title}</h3>
                    <p className="text-white/80 font-sans font-light leading-snug translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
