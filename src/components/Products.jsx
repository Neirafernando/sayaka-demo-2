import { motion } from 'framer-motion';
import { Disc3, CircleDot, Ruler, Wrench, Cog, Scissors, CircleDashed, Hexagon } from 'lucide-react';

const products = [
  { icon: Scissors, title: 'Cuchillos de Corte', desc: 'Carburo de tungsteno para corrugadoras Fosber, Marquip, Agnati, BHS, MHI y más.', image: '/product-knives.png' },
  { icon: Disc3, title: 'Cuchillos Slitter', desc: 'Para distintas corrugadoras, fabricados en carburo de tungsteno de alta precisión.', image: '/product-slitter.png' },
  { icon: CircleDot, title: 'Cuchillos Cut-Off', desc: 'Compatibles con variadas marcas de máquinas cortadoras industriales.', image: '/product-cutoff.png' },
  { icon: Ruler, title: 'Cuchillos Ranuradoras', desc: 'Ranurador inferior, dentado rectificado, machos con y sin dentado.', image: '/product-ranuradora.png' },
  { icon: CircleDashed, title: 'Piedras de Amolar', desc: 'Diamante y CBN: tipos 6A2, 12A2, Double Side. Para líneas Perini, PCMC, FUTURA.', image: '/product-wheels.png' },
  { icon: Hexagon, title: 'Cuchillas CBN', desc: 'Para industria de conversión de papel tisú de alta velocidad.', image: '/product-cbn.png' },
  { icon: Cog, title: 'Hojas de Sierra TC', desc: 'Carburo de tungsteno para corte en acero inoxidable. Medidas 610mm y 710mm.', image: '/product-saw.png' },
  { icon: Wrench, title: 'Repuestos Varios', desc: 'Sufrideras, ejes con hilo, patines, pernos matriceros, polines, refiles y más.' },
];

export default function Products() {
  return (
    <section id="productos" className="relative py-24 lg:py-32">
      {/* BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3366FF]/5 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Catálogo</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Nuestros <span className="text-gradient-blue">Productos</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Repuestos industriales de corte y rectificado fabricados con los más altos estándares de calidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-[#3366FF]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(51,102,255,0.1)]"
            >
              {/* Image or gradient top */}
              <div className="relative h-44 overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1B3A5C]/30 to-[#12121A] flex items-center justify-center">
                    <p.icon size={48} className="text-[#3366FF]/30 group-hover:text-[#3366FF]/50 transition-colors duration-500" strokeWidth={1} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3366FF]/10 border border-[#3366FF]/20 flex items-center justify-center">
                    <p.icon size={18} className="text-[#3366FF]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm">{p.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
