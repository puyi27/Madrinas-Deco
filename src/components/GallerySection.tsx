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
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(img => img.category === filter);

  return (
    <section className="py-24 bg-[#FFF8F8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Nuestra Magia</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto mb-10">
            Un pequeño vistazo a los cuentos que hemos ayudado a crear. Haz clic en las fotos para verlas en detalle.
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
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden shadow-sm group break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImg(img.src)}
            >
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

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-12"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImg}
              alt="Foto ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
