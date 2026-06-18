import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  whatsappUrl: string;
}

export const HeroSection = ({ whatsappUrl }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-white text-zinc-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-architecture.png"
          alt="Interiorismo de lujo por Las Madrinas Deco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 brightness-75 mix-blend-multiply"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAUAmJaQAA3AA/v89WAAAAAA="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start justify-center h-full pt-32">
        <div className="max-w-3xl space-y-8 mix-blend-difference text-white">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter uppercase leading-[0.85]">
            <span className="block italic font-serif">Alta Costura</span>
            <span className="block font-sans font-medium tracking-widest mt-2">Arquitectónica</span>
          </h1>

          <p className="text-lg sm:text-xl font-light tracking-wide max-w-xl leading-relaxed text-zinc-200 border-l border-zinc-200/50 pl-6 font-sans">
            Proyectos de reforma integral con calidades premium. Elevamos el estándar del interiorismo para transformar espacios en experiencias inmaculadas.
          </p>

          <div className="pt-8">
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-6 border-b border-white pb-2 hover:border-zinc-400 transition-colors duration-500 font-sans"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-medium">
                Iniciar Proyecto
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
