import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';
import { FadeIn } from './ui/FadeIn';

export const ServicesSection = () => {
  // Select one representative image for each category
  const mesasCat = portfolioData.categories.find(c => c.id === 'mesas-dulces');
  const globosCat = portfolioData.categories.find(c => c.id === 'globos');
  const eventosCat = portfolioData.categories.find(c => c.id === 'eventos');

  const imgMesasDulces = mesasCat?.images[0]?.src || '/images/gallery-1.png';
  const imgGlobos = globosCat?.images[0]?.src || '/images/gallery-2.png';
  const imgFloral = eventosCat?.images[0]?.src || '/images/gallery-3.png';

  const services = [
    {
      title: "Mesas Dulces",
      desc: "Preparamos la mesa más bonita de toda la fiesta. Nos ocupamos del diseño, el atrezzo y cada detalle para que quede de categoría y lista para colocar los dulces.",
      img: imgMesasDulces,
      reverse: false
    },
    {
      title: "Estructuras y Globos",
      desc: "Montamos arcos y photocalls que le dan una alegría tremenda a cualquier espacio. El lugar perfecto para echaros mil fotos con todos los invitados.",
      img: imgGlobos,
      reverse: true
    },
    {
      title: "Mesas y Detalles",
      desc: "No solo decoramos, también vestimos la mesa donde vais a comer. Con sus centros de flores y esos detallitos que marcan la diferencia y hacen que todo se vea súper especial.",
      img: imgFloral,
      reverse: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#5A4A4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <FadeIn direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestro Arte</h2>
            <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
              Nos ocupamos de toda la parte visual para que cuando llegue el día, vosotros simplemente os dediquéis a disfrutar.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-20`}>
              {/* Image Block */}
              <FadeIn direction={service.reverse ? 'left' : 'right'} className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </FadeIn>

              {/* Text Block */}
              <FadeIn direction={service.reverse ? 'right' : 'left'} delay={0.2} className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="text-[#c68b98] text-6xl font-serif italic mb-4 opacity-50">0{idx + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-medium font-sans mb-6 text-[#5A4A4A]">{service.title}</h3>
                <p className="text-[#7A6A6A] font-light text-lg sm:text-xl leading-relaxed">
                  {service.desc}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
