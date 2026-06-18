import Image from 'next/image';

export const GallerySection = () => {
  const images = [
    { src: "/images/gallery-1.png", alt: "Mesa Dulce decorada en tonos pastel" },
    { src: "/images/gallery-2.png", alt: "Arco de globos elegante para cumpleaños" },
    { src: "/images/gallery-3.png", alt: "Centro de mesa floral con luces" },
  ];

  return (
    <section className="py-24 bg-[#FFF8F8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestra Magia</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
            Un pequeño vistazo a los cuentos que hemos ayudado a crear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
