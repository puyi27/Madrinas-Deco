import videoData from '@/data/videos.json';

export const VideoSection = () => {
  if (!videoData || videoData.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#c68b98] mb-4">Momentos en Movimiento</h2>
          <p className="font-sans text-lg text-[#7A6A6A] max-w-2xl mx-auto">
            Descubre la atmósfera y los detalles que hacen únicos a nuestros eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoData.map((video, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm aspect-[9/16] bg-black/5">
              <video 
                src={video.src} 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
