"use client";

import Image from 'next/image';
import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'mesas-dulces', label: 'Mesas Dulces' },
  { id: 'globos', label: 'Globos' },
  { id: 'eventos', label: 'Eventos' }
];

export const GallerySection = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(img => img.category === filter);

  return (
    <section className="py-24 bg-[#FFF8F8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestra Magia</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto mb-10">
            Un pequeño vistazo a los cuentos que hemos ayudado a crear.
          </p>
          
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-3 mb-12 pb-4 px-2 snap-x">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`shrink-0 snap-center px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 ${
                  filter === cat.id 
                    ? 'bg-[#c68b98] text-white' 
                    : 'bg-white text-[#7A6A6A] hover:bg-[#FFF0F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm group break-inside-avoid">
              <Image
                src={img.src}
                alt={`Decoración ${img.category}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <p className="text-center text-[#7A6A6A] font-sans">Próximamente más fotos en esta categoría.</p>
        )}
      </div>
    </section>
  );
};
