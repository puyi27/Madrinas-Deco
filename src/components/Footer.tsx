import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-[#f0e6e6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        <div className="w-24 h-24 relative rounded-full overflow-hidden mb-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src="/images/logo.jpg"
            alt="Las Madrinas Deco Logo"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[#7A6A6A] font-sans text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Las Madrinas Deco.
        </p>
        <p className="text-[#a89b9b] font-sans text-xs mt-2 italic">
          Haciendo magia en cada celebración.
        </p>
      </div>
    </footer>
  );
};
