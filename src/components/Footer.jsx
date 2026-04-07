export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a10]">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3366FF] to-[#1B3A5C] flex items-center justify-center font-heading font-black text-white text-lg">
              S
            </div>
            <div>
              <span className="font-heading font-bold tracking-[0.15em] text-white text-sm">SAYAKA</span>
              <p className="text-xs text-gray-500">SpA</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            {['Productos', 'Nosotros', 'Contacto'].map((l) => (
              <a key={l} href={`#${l === 'Productos' ? 'productos' : l === 'Nosotros' ? 'nosotros' : 'contacto'}`}
                className="text-sm text-gray-500 hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-right">
            © {new Date().getFullYear()} Sayaka SpA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
