import { FadeIn } from './ui/FadeIn';

export const EsenciaSection = () => {
  return (
    <section className="py-24 bg-[#c68b98] text-white">
      <FadeIn direction="up" className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif italic mb-8">Nuestra Filosofía</h2>
        <p className="text-xl sm:text-2xl font-light font-sans leading-relaxed mb-6">
          Sabemos el trabajo que supone organizar un evento. Las carreras de última hora, los nervios, que si las flores, que si las mesas...
        </p>
        <p className="text-lg sm:text-xl font-light font-sans text-white/90 leading-relaxed mb-8">
          Nosotras estamos aquí para que te olvides de todo eso. <br /> Tú encárgate de invitar a tu gente y disfrutar del día. Nosotras nos apañamos para dejarlo todo de ensueño, montando cada rincón con muchísimo mimo para que, cuando lleguéis, solo tengáis que haceros fotos y celebrar.
        </p>
        <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
          <h3 className="text-2xl font-serif italic mb-3">100% Personalizado</h3>
          <p className="text-lg font-light font-sans text-white/90 leading-relaxed">
            Cada diseño es único. Nos adaptamos por completo al <strong>tipo de evento</strong> que estés organizando y al <strong>estilo de cada cliente</strong>. Escuchamos tus ideas y las transformamos en una decoración a medida que respire vuestra esencia.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};
