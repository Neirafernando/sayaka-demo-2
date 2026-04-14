import { useState } from 'react';
import { motion } from 'framer-motion';

const specsData = {
  'Piedras de Amolar': [
    { od: '175mm', id: '76.2mm', thk: '10mm', type: '6A2', grain: 'B107', line: 'Perini' },
    { od: '175mm', id: '76.2mm', thk: '10mm', type: '12A2', grain: 'B107', line: 'PCMC' },
    { od: '200mm', id: '80mm', thk: '12mm', type: '6A2', grain: 'B107', line: 'FUTURA' },
    { od: '200mm', id: '80mm', thk: '10mm', type: 'Double Side', grain: 'B107', line: 'ICM' },
    { od: '180mm', id: '76.2mm', thk: '10mm', type: '6A2', grain: 'B107', line: 'BaoSuo' },
    { od: '175mm', id: '76.2mm', thk: '10mm', type: '12A2', grain: 'B107', line: 'OPTIMA' },
    { od: '200mm', id: '80mm', thk: '12mm', type: '6A2', grain: 'B107', line: 'Dechangyu' },
    { od: '175mm', id: '76.2mm', thk: '10mm', type: '6A2', grain: 'B107', line: 'UNITED CONVERTING' },
  ],
  'Hojas de Sierra TC': [
    { od: '610mm', id: '68.26mm', thk: '4.76mm', type: 'Carburo de Tungsteno', grain: '—', line: 'Acero Inox.' },
    { od: '710mm', id: '68.26mm', thk: '4.76mm', type: 'Carburo de Tungsteno', grain: '—', line: 'Acero Inox.' },
  ],
};

const tabs = Object.keys(specsData);

export default function Specs() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="specs" className="relative py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24">
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={isMobile ? { duration: 0.12 } : { duration: 0.4 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Datos Técnicos</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Especificaciones <span className="text-gradient-blue">Técnicas</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                active === t
                  ? 'bg-[#3366FF] text-white shadow-[0_0_20px_rgba(51,102,255,0.3)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] md:backdrop-blur-sm -mx-1"
        >
          <table className="w-full text-left min-w-[420px] sm:min-w-[500px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                {['OD', 'ID', 'THK', 'Tipo', 'Grano', 'Línea / Aplicación'].map((h) => (
                  <th key={h} className="px-3 sm:px-6 py-3 sm:py-4 text-xs uppercase tracking-wider text-[#3366FF] font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specsData[active].map((row, i) => (
                <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-white font-mono whitespace-nowrap">{row.od}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-300 font-mono whitespace-nowrap">{row.id}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-300 font-mono whitespace-nowrap">{row.thk}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-300 whitespace-nowrap">{row.type}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-gray-300">{row.grain}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm text-[#6699FF] font-medium">{row.line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-6">
          ¿Necesita medidas especiales?{' '}
          <a href="https://wa.me/56991765802" className="text-[#3366FF] hover:underline">Contáctenos</a>{' '}
          para especificaciones personalizadas.
        </p>
      </div>
    </section>
  );
}
