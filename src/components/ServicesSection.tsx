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
      desc: "Diseñamos Candy Bars espectaculares que se convierten en el centro de todas las miradas. Repostería creativa, texturas y colores en perfecta armonía para dejar a tus invitados sin palabras.",
      img: imgMesasDulces,
      reverse: false
    },
    {
      title: "Decoración con Globos",
      desc: "Arcos orgánicos, fondos fotográficos (photocalls) y composiciones aéreas que aportan volumen y un impacto visual inmediato a la celebración.",
      img: imgGlobos,
      reverse: true
    },
    {
      title: "Diseño Floral y Menaje",
      desc: "Centros de mesa delicados, mantelería, iluminación cálida y todos los pequeños detalles decorativos que hacen que la mesa luzca impecable y se sienta como un auténtico cuento.",
      img: imgFloral,
      reverse: false
    }
  ];

  return (
    <section className="py-24 bg-white text-[#5A4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestros Servicios</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
            Cuidamos cada detalle visual de la fiesta para que tú solo tengas que preocuparte de disfrutar.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
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
