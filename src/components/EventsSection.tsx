import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';

export const EventsSection = () => {
  // Select 4 random-ish images for the event cards
  const eventImages = portfolioData.slice(0, 4);

  const events = [
    { title: "Cumpleaños", desc: "Montajes temáticos que a los peques les encantarán.", img: eventImages[0]?.src || '/images/gallery-1.png' },
    { title: "Bautizos y Comuniones", desc: "Decoraciones cuidadas para un día en familia.", img: eventImages[1]?.src || '/images/gallery-2.png' },
    { title: "Baby Showers", desc: "El mejor ambiente para celebrar la llegada del bebé.", img: eventImages[2]?.src || '/images/gallery-3.png' },
    { title: "Otras Celebraciones", desc: "Nos adaptamos a la idea que tengas en mente.", img: eventImages[3]?.src || '/images/gallery-1.png' }
  ];

  return (
    <section className="py-24 bg-[#FFF8F8] text-[#5A4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Tipos de Eventos</h2>
        <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto mb-16">
          Da igual lo que celebres, nos encargamos de que el espacio quede exactamente como te lo imaginabas.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group">
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
          ))}
        </div>
      </div>
    </section>
  );
};
