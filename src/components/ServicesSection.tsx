import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';

export const ServicesSection = () => {
  // Select one representative image for each category
  const imgMesasDulces = portfolioData.find(img => img.category === 'mesas-dulces')?.src || '/images/gallery-1.png';
  const imgGlobos = portfolioData.find(img => img.category === 'globos')?.src || '/images/gallery-2.png';
  const imgFloral = portfolioData.find(img => img.category === 'eventos')?.src || '/images/gallery-3.png';

  const services = [
    {
      title: "Mesas Dulces",
      desc: "Montamos el rincón más bonito de la fiesta. Nos encargamos del diseño, el atrezzo, las bases y toda la decoración para que la mesa quede preciosa y lista para colocar vuestros dulces.",
      img: imgMesasDulces,
      reverse: false
    },
    {
      title: "Estructuras y Globos",
      desc: "Creamos arcos orgánicos y fondos (photocalls) que le dan vida y color a cualquier espacio. El rinconcito perfecto para haceros mil fotos con los invitados.",
      img: imgGlobos,
      reverse: true
    },
    {
      title: "Mesas y Detalles",
      desc: "No solo decoramos la fiesta, también vestimos la mesa donde vais a comer. Ponemos centros florales, bajoplatos y cuidamos esos pequeños detalles que hacen que todo se vea súper especial.",
      img: imgFloral,
      reverse: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#5A4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Lo que hacemos</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
            Nos ocupamos de toda la parte visual de tu evento para que llegue ese día y simplemente disfrutes.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-20`}>
              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="text-[#c68b98] text-6xl font-serif italic mb-4 opacity-50">0{idx + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-medium font-sans mb-6 text-[#5A4A4A]">{service.title}</h3>
                <p className="text-[#7A6A6A] font-light text-lg sm:text-xl leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
