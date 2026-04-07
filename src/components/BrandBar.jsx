import { motion } from 'framer-motion';

const brands = [
  'Fosber', 'Marquip', 'Agnati', 'BHS', 'MHI', 'TCY', 'JUSTU', 'J.S.',
  'Perini', 'BaoSuo', 'ICM', 'PCMC', 'FUTURA', 'OPTIMA', 'UNITED CONVERTING',
];

export default function BrandBar() {
  return (
    <section className="relative py-8 border-y border-white/5 bg-[#12121A]/80 backdrop-blur-sm overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        <p className="text-center text-xs text-gray-500 uppercase tracking-[0.2em] mb-6 font-medium">
          Compatible con las principales marcas del mercado
        </p>
      </div>
      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#12121A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#12121A] to-transparent z-10" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-sm sm:text-base font-heading font-semibold text-gray-500 hover:text-[#3366FF] transition-colors duration-300 cursor-default tracking-wider"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
