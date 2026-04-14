import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY;

    const originalBodyOverflow = body.style.overflow;
    const originalBodyTouchAction = body.style.touchAction;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;
    const originalHtmlOverflow = html.style.overflow;
    const originalHtmlTouchAction = html.style.touchAction;

    if (mobileOpen) {
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';

      html.style.overflow = 'hidden';
      html.style.touchAction = 'none';
    } else {
      body.style.overflow = originalBodyOverflow || '';
      body.style.touchAction = originalBodyTouchAction || '';
      body.style.position = originalBodyPosition || '';
      body.style.top = originalBodyTop || '';
      body.style.width = originalBodyWidth || '';

      html.style.overflow = originalHtmlOverflow || '';
      html.style.touchAction = originalHtmlTouchAction || '';
    }

    return () => {
      const y = body.style.top;
      body.style.overflow = originalBodyOverflow || '';
      body.style.touchAction = originalBodyTouchAction || '';
      body.style.position = originalBodyPosition || '';
      body.style.top = originalBodyTop || '';
      body.style.width = originalBodyWidth || '';

      html.style.overflow = originalHtmlOverflow || '';
      html.style.touchAction = originalHtmlTouchAction || '';

      if (y) {
        window.scrollTo(0, Math.abs(parseInt(y || '0', 10)));
      }
    };
  }, [mobileOpen]);

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Especificaciones', href: '#specs' },
    { label: 'Global', href: '#global' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#12121A]/90 md:backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 xl:px-24">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Sayaka SpA"
              className="h-9 sm:h-11 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(1)',
              }}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:ventas@sayaka.cl" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/56991765802"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#3366FF] to-[#1B3A5C] rounded-lg text-sm font-semibold text-white hover:shadow-[0_0_24px_rgba(51,102,255,0.4)] transition-all duration-300"
            >
              <Phone size={16} />
              Cotizar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden relative z-50 bg-[#12121A]/98 md:backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2">
                <a
                  href="mailto:ventas@sayaka.cl"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-gray-300 font-medium text-sm"
                >
                  <Mail size={16} />
                  ventas@sayaka.cl
                </a>
                <a
                  href="https://wa.me/56991765802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-[#3366FF] to-[#1B3A5C] rounded-xl text-white font-semibold text-base"
                >
                  <Phone size={18} />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
