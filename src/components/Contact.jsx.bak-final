import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Sayaka, soy ${form.name} de ${form.company}. ${form.message}`;
    window.open(`https://wa.me/56991765802?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12121A] via-[#0D1F33]/30 to-[#12121A]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3366FF]/5 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1536px] mx-auto px-5 sm:px-8 md:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Hablemos</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Solicite su <span className="text-gradient-blue">Cotización</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Cuéntenos qué necesita y le responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-4 sm:space-y-5 p-5 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Nombre</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-[#3366FF]/50 focus:outline-none focus:ring-1 focus:ring-[#3366FF]/30 transition-all text-base"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-[#3366FF]/50 focus:outline-none focus:ring-1 focus:ring-[#3366FF]/30 transition-all text-base"
                  placeholder="email@empresa.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Empresa</label>
              <input
                type="text" value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-[#3366FF]/50 focus:outline-none focus:ring-1 focus:ring-[#3366FF]/30 transition-all text-base"
                placeholder="Nombre de su empresa"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Mensaje</label>
              <textarea
                rows={4} required value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-[#3366FF]/50 focus:outline-none focus:ring-1 focus:ring-[#3366FF]/30 transition-all resize-none text-base"
                placeholder="Describa los repuestos que necesita, medidas, cantidad..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#3366FF] to-[#4455FF] rounded-xl text-white font-bold hover:shadow-[0_0_40px_rgba(51,102,255,0.3)] transition-all duration-500 text-base min-h-[52px]"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {[
              { icon: Phone, label: 'WhatsApp', value: '+56 9 9176 5802', href: 'https://wa.me/56991765802' },
              { icon: Mail, label: 'Email', value: 'ventas@sayaka.cl', href: 'mailto:ventas@sayaka.cl' },
              { icon: MapPin, label: 'Dirección', value: 'Calle Nueva 3269, Villa Providencia, Macul, RM, Chile' },
              { icon: Clock, label: 'Horario', value: 'Lun-Jue 09:00–19:00 · Vie 09:00–13:00' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#3366FF]/20 transition-all duration-300">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#3366FF]/10 border border-[#3366FF]/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-[#3366FF]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3366FF] transition-colors mt-0.5 block text-sm sm:text-base break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 mt-0.5 text-sm leading-relaxed">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/56991765802"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:bg-[#22c55e] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] min-h-[52px]"
            >
              <MessageCircle size={20} />
              Chat directo por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
