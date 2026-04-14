export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a10]">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img
              src="/logo.png"
              alt="Sayaka SpA"
              className="h-8 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(1)', opacity: 0.7 }}
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-5 sm:gap-6">
            {[
              { label: 'Productos', href: '#productos' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'Contacto', href: '#contacto' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Sayaka SpA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
