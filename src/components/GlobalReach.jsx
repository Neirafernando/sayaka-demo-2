import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const countries = [
  { name: 'EE.UU.', flag: '🇺🇸', x: '18%', y: '35%' },
  { name: 'Chile', flag: '🇨🇱', x: '25%', y: '75%' },
  { name: 'Reino Unido', flag: '🇬🇧', x: '47%', y: '25%' },
  { name: 'Alemania', flag: '🇩🇪', x: '50%', y: '28%' },
  { name: 'Rumania', flag: '🇷🇴', x: '54%', y: '30%' },
  { name: 'Turquía', flag: '🇹🇷', x: '57%', y: '35%' },
  { name: 'Arabia Saudita', flag: '🇸🇦', x: '60%', y: '42%' },
  { name: 'Kenia', flag: '🇰🇪', x: '58%', y: '58%' },
  { name: 'Nigeria', flag: '🇳🇬', x: '48%', y: '54%' },
  { name: 'Sudáfrica', flag: '🇿🇦', x: '55%', y: '72%' },
  { name: 'Tailandia', flag: '🇹🇭', x: '75%', y: '48%' },
  { name: 'Malasia', flag: '🇲🇾', x: '77%', y: '54%' },
  { name: 'Indonesia', flag: '🇮🇩', x: '79%', y: '58%' },
];

export default function GlobalReach() {
  return (
    <section id="global" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12121A] via-[#0D1F33]/40 to-[#12121A]" />

      <div className="relative w-full max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Presencia Internacional</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Alcance <span className="text-gradient-blue">Global</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Desde Chile al mundo. Exportamos repuestos industriales de precisión a más de 12 países en 5 continentes.
          </p>
        </motion.div>

        {/* Map visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-5xl aspect-[2/1] rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(51,102,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          {/* Country dots */}
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, type: 'spring' }}
              className="absolute group cursor-pointer"
              style={{ left: c.x, top: c.y, transform: 'translate(-50%, -50%)' }}
            >
              {/* Pulse ring */}
              <div className="absolute inset-0 w-6 h-6 -m-1.5 rounded-full bg-[#3366FF]/20 animate-ping" style={{ animationDuration: `${2 + i * 0.3}s` }} />
              {/* Dot */}
              <div className="relative w-3 h-3 rounded-full bg-[#3366FF] shadow-[0_0_10px_rgba(51,102,255,0.5)]" />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-[#1B3A5C] border border-[#3366FF]/30 text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                <span className="mr-1">{c.flag}</span>{c.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1B3A5C] rotate-45 -mt-1 border-r border-b border-[#3366FF]/30" />
              </div>
            </motion.div>
          ))}

          {/* Connection lines from Chile */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {countries.filter(c => c.name !== 'Chile').map((c, i) => (
              <motion.line
                key={i}
                x1="25%" y1="75%" x2={c.x} y2={c.y}
                stroke="#3366FF" strokeWidth="0.5" strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
              />
            ))}
          </svg>

          {/* Chile marker enhanced */}
          <div className="absolute" style={{ left: '25%', top: '75%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-5 h-5 rounded-full bg-[#3366FF] border-2 border-white shadow-[0_0_20px_rgba(51,102,255,0.6)]" />
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-bold text-[#3366FF] whitespace-nowrap flex items-center gap-1">
              <MapPin size={12} /> SAYAKA HQ
            </div>
          </div>
        </motion.div>

        {/* Country pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-gray-300 hover:border-[#3366FF]/30 hover:text-white transition-all duration-300"
            >
              <span className="mr-1.5">{c.flag}</span>{c.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
