import Link from 'next/link';

export const ContactSection = () => {
  return (
    <section className="py-32 bg-[#c68b98] text-white text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-6xl font-serif italic mb-6">¿Hablamos?</h2>
        <p className="text-lg sm:text-xl font-light font-sans mb-12 text-white/90">
          La mejor forma de empezar a diseñar tu evento es a través de nuestro Instagram. Escríbenos, cuéntanos tu idea y nosotras ponemos la magia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="https://www.instagram.com/lasmadrinas.deco"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#c68b98] px-10 py-4 rounded-full hover:bg-[#FFF8F8] transition-all duration-300 shadow-xl font-sans font-semibold uppercase tracking-widest text-sm flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Contactar por Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};
