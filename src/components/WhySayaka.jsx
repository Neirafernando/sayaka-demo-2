import { motion } from 'framer-motion';
import { Shield, Globe, Settings, Award } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Calidad Premium', desc: 'Materiales de primera: carburo de tungsteno, CBN y diamante. Control de calidad riguroso en cada pieza.' },
  { icon: Settings, title: 'Personalización Total', desc: 'Todos nuestros cuchillos y repuestos se fabrican según las especificaciones exactas del cliente.' },
  { icon: Globe, title: 'Alcance Global', desc: 'Exportamos a más de 12 países en 5 continentes. Presencia en América, Europa, Asia y África.' },
  { icon: Award, title: 'Experiencia Comprobada', desc: 'Equipo experimentado y cualificado con profundo conocimiento de la industria de corte industrial.' },
];

export default function WhySayaka() {
  return (
    <section id="nosotros" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12121A] via-[#0D1F33]/50 to-[#12121A]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#3366FF]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative w-full max-w-[1536px] mx-auto px-5 sm:px-8 md:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">¿Por qué elegirnos?</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white leading-tight">
              Ingeniería de precisión,{' '}
              <span className="text-gradient-blue">resultados confiables</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
              En Sayaka SpA combinamos materiales de vanguardia con procesos de fabricación de alta precisión
              para entregar repuestos industriales que superan las expectativas de nuestros clientes
              en todo el mundo.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-[#3366FF]/30 to-transparent" />
              <span className="text-sm text-gray-500 italic shrink-0">"La calidad es lo primero"</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#3366FF]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#3366FF]/20 transition-all duration-500"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#3366FF]/10 border border-[#3366FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#3366FF]/20 transition-colors duration-300">
                  <r.icon size={20} className="text-[#3366FF]" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2 text-base">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
