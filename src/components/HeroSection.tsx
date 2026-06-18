import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#FFF8F8] text-[#5A4A4A]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-event.png"
          alt="Decoración de eventos por Las Madrinas Deco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F8] via-[#FFF8F8]/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center h-full pt-10 text-center">
        
        <div className="mb-8 w-40 h-40 sm:w-48 sm:h-48 relative rounded-full overflow-hidden shadow-2xl border-4 border-white/80">
          <Image
            src="/images/logo.jpg"
            alt="Las Madrinas Deco Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#c68b98] leading-[0.9]">
            <span className="block font-serif italic mb-2">Hacemos magia</span>
            <span className="block font-sans font-medium tracking-widest text-3xl sm:text-4xl text-[#5A4A4A] mt-4 uppercase">En tus celebraciones</span>
          </h1>

          <p className="text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-[#7A6A6A] font-sans mt-6">
            Decoración integral de eventos. Transformamos tus fiestas, cumpleaños y momentos especiales en escenarios de cuento.
          </p>

          <div className="pt-10">
            <Link 
              href="https://www.instagram.com/lasmadrinas.deco"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-[#c68b98] text-white px-8 py-4 rounded-full hover:bg-[#b07885] transition-all duration-300 shadow-lg hover:shadow-xl font-sans"
            >
              <span className="uppercase tracking-wider text-sm font-semibold">
                Contáctanos
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
