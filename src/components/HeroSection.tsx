"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { FloatingBokeh } from './ui/FloatingBokeh';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#FFF8F8] text-[#5A4A4A] py-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/hero-event.png"
            alt="Decoración de eventos por Las Madrinas Deco"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 brightness-110"
          />
        </motion.div>
        <FloatingBokeh />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F8] via-[#FFF8F8]/50 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center h-full pt-10 text-center">
        
        <FadeIn direction="up" duration={1.2}>
          <div className="mb-8 w-40 h-40 sm:w-48 sm:h-48 relative rounded-full overflow-hidden shadow-2xl border-4 border-white/80 mx-auto">
            <Image
              src="/images/logo.jpg"
              alt="Las Madrinas Deco Logo"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={1.2} className="max-w-3xl space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#c68b98] leading-[0.9]">
            <span className="block font-serif italic mb-2">Decoramos</span>
            <span className="block font-sans font-medium tracking-widest text-3xl sm:text-4xl text-[#5A4A4A] mt-4 uppercase">vuestros días felices</span>
          </h1>

          <p className="text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-[#7A6A6A] font-sans mt-6">
            Nosotras nos ocupamos de ponerlo todo precioso para que vosotros solo os tengáis que preocupar de disfrutar de vuestra gente.
          </p>
        </FadeIn>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[#c68b98] uppercase tracking-[0.2em] text-xs font-semibold">Descubre más</span>
        <motion.div 
          className="w-[1px] h-12 bg-[#c68b98]"
          animate={{ scaleY: [0, 1, 0], translateY: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
