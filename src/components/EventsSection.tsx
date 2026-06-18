export const EventsSection = () => {
  const events = [
    { title: "Cumpleaños Infantiles", desc: "Magia y fantasía adaptada a sus personajes favoritos." },
    { title: "Bautizos y Comuniones", desc: "Elegancia y ternura para los días más familiares." },
    { title: "Baby Showers", desc: "La bienvenida más dulce y cuidada para el nuevo bebé." },
    { title: "Eventos Especiales", desc: "Fiestas temáticas, aniversarios y celebraciones íntimas." }
  ];

  return (
    <section className="py-24 bg-[#FFF8F8] text-[#5A4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Tipos de Eventos</h2>
        <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto mb-16">
          Cada celebración es única. Nos adaptamos a la naturaleza de tu evento para crear una atmósfera que tú y tus invitados nunca olvidaréis.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-[#f0e6e6]">
              <h3 className="text-xl font-medium font-sans mb-3 text-[#c68b98]">{event.title}</h3>
              <p className="text-[#7A6A6A] font-light leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
