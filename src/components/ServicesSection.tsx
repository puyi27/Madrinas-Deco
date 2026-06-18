export const ServicesSection = () => {
  const services = [
    {
      title: "Mesas Dulces",
      desc: "Diseñamos Candy Bars espectaculares que se convierten en el centro de todas las miradas. Repostería creativa, texturas y colores en perfecta armonía."
    },
    {
      title: "Decoración con Globos",
      desc: "Arcos orgánicos, fondos fotográficos (photocalls) y composiciones aéreas que aportan volumen y un impacto visual inmediato a la celebración."
    },
    {
      title: "Diseño Floral y Menaje",
      desc: "Centros de mesa delicados, mantelería, iluminación cálida y todos los pequeños detalles decorativos que hacen que la mesa luzca impecable."
    }
  ];

  return (
    <section className="py-24 bg-white text-[#5A4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestros Servicios</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
            Cuidamos cada detalle visual de la fiesta para que tú solo tengas que preocuparte de disfrutar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#FFF8F8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#c68b98] text-2xl font-serif italic">{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-medium font-sans mb-4 text-[#5A4A4A]">{service.title}</h3>
              <p className="text-[#7A6A6A] font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
