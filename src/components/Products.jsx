import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, CircleDot, Ruler, Wrench, Cog, Scissors, CircleDashed, Hexagon, Settings, Layers, Package, Navigation, X, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { icon: Scissors,    title: 'Cuchillas',                    desc: 'Cuchillas de corte industrial de alta precisión en carburo de tungsteno.',          image: '/real-cuchillas.jpg' },
  { icon: Disc3,       title: 'Cuchillos Slitter',            desc: 'Para distintas corrugadoras, fabricados en carburo de tungsteno de alta precisión.', image: '/real-slitter.jpg' },
  { icon: CircleDot,   title: 'Cuchillos Cut-Off',            desc: 'Compatibles con variadas marcas de máquinas cortadoras industriales.',               image: '/real-cutoff.jpg' },
  { icon: Cog,         title: 'Cuchillos Carburo Tungsteno',  desc: 'Alta dureza y resistencia al desgaste para procesos industriales exigentes.',        image: '/real-carburo.jpg' },
  { icon: Ruler,       title: 'Cuchillos Gualeteros',         desc: 'Diseñados para líneas de producción de alta velocidad con alta durabilidad.',        image: '/real-gualeteros.jpg' },
  { icon: Hexagon,     title: 'Cuchillos Machos',             desc: 'Ranurador inferior, dentado rectificado, machos con y sin dentado.',                  image: '/real-machos.jpg' },
  { icon: Navigation,  title: 'Dedos Guías',                  desc: 'Guías de precisión para el control del material en líneas industriales.',             image: '/real-dedos.jpg' },
  { icon: Settings,    title: 'Engranajes',                   desc: 'Engranajes industriales de alta precisión para transmisión de potencia.',             image: '/real-engranajes.jpg' },
  { icon: CircleDashed,title: 'Guía Bota Recorte',            desc: 'Sistema de guía para el manejo de recortes en líneas de producción.',                 image: '/real-guia-bota.jpg' },
  { icon: Wrench,      title: 'Pernos e Insertos para Matriz',desc: 'Componentes de sujeción de alta resistencia para matrices industriales.',             image: '/real-pernos.jpg' },
  { icon: CircleDot,   title: 'Piedras de Afilar',            desc: 'Diamante y CBN: tipos 6A2, 12A2, Double Side. Para líneas Perini, PCMC, FUTURA.',    image: '/real-piedras.jpg' },
  { icon: Layers,      title: 'Separadores y Hembras',        desc: 'Espaciadores y hembras para el montaje preciso de líneas de corte.',                  image: '/real-separadores.jpg' },
  { icon: Package,     title: 'Otras Piezas',                 desc: 'Sufrideras, ejes con hilo, patines, polines, refiles y más componentes.',             image: '/real-otras.jpg' },
];

const galleryImages = [
  { src: '/gallery-1.jpg',  label: 'Cuchillos Slitter' },
  { src: '/gallery-2.jpg',  label: 'Engranajes' },
  { src: '/gallery-3.jpg',  label: 'Cuchillos Machos' },
  { src: '/gallery-4.jpg',  label: 'Cuchillos Gualeteros' },
  { src: '/gallery-5.jpg',  label: 'Separadores y Hembras' },
  { src: '/gallery-6.jpg',  label: 'Piedras de Afilar' },
  { src: '/gallery-7.jpg',  label: 'Engranajes' },
  { src: '/gallery-8.jpg',  label: 'Cuchillos Slitter' },
  { src: '/gallery-9.jpg',  label: 'Carburo Tungsteno' },
  { src: '/gallery-10.jpg', label: 'Cuchillos Machos' },
  { src: '/gallery-11.jpg', label: 'Guía Bota Recorte' },
  { src: '/gallery-12.jpg', label: 'Cuchillas' },
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <div
        initial={{ opacity: 0 }}
        
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 md:backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        >
          <X size={32} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
        >
          <ChevronLeft size={40} />
        </button>

        <div
          key={index}
          
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          
          className="relative max-w-4xl max-h-[85vh] mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index].src}
            alt={images[index].label}
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl py-3 px-4">
            <p className="text-white font-semibold text-sm">{images[index].label}</p>
            <p className="text-gray-400 text-xs">{index + 1} / {images.length}</p>
          </div>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </AnimatePresence>
  );
}

export default function Products() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);

  return (
    <section id="productos" className="relative py-16 sm:py-24 lg:py-32">
      {/* BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[220px] sm:h-[320px] lg:h-[400px] bg-[#3366FF]/5 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24">
        {/* Header */}
        <div
          
          
          viewport={{ once: true, margin: '-100px' }}
          
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Catálogo</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Nuestros <span className="text-gradient-blue">Productos</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Repuestos industriales de corte y rectificado fabricados con los más altos estándares de calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              
              
              viewport={{ once: true, margin: '-50px' }}
              
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] md:hover:border-[#3366FF]/30 transition-all duration-300 md:hover:shadow-[0_0_20px_rgba(51,102,255,0.08)]"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover md:group-hover:scale-110 md:transition-transform md:duration-700" loading="lazy" />
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

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div
          
          
          viewport={{ once: true, margin: '-80px' }}
          
          className="mt-24"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Galería</span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl mt-3 text-white">
              Nuestro <span className="text-gradient-blue">Trabajo Real</span>
            </h3>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Fotos reales de nuestros productos fabricados para clientes en Chile y el mundo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                
                
                viewport={{ once: true, margin: '-30px' }}
                
                onClick={() => openLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] md:hover:border-[#3366FF]/40 transition-all duration-200 md:hover:shadow-[0_0_12px_rgba(51,102,255,0.08)]"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover md:group-hover:scale-110 md:transition-transform md:duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-semibold">{img.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
