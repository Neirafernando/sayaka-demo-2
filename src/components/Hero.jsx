import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

function MetalParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.5 + 0.1,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51,102,255,${p.opacity})`;
        ctx.fill();
      });
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(51,102,255,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[5]" />;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f18] pt-20">
      {/* Right Side Visual Background */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
        <img src="/hero-bg.png" alt="Industrial blades" className="w-full h-full object-cover object-right opacity-40 mix-blend-screen" />
        {/* Fades to make image blend into solid color */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] via-[#0a0f18]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-[#0a0f18]" />
      </div>
      
      {/* Grid pattern over everything for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-[1]" 
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[40%] h-[50%] bg-[#3366FF] rounded-full blur-[150px] opacity-10 z-[2]" />
      <div className="absolute bottom-1/4 right-[10%] w-[50%] h-[60%] bg-[#1B3A5C] rounded-full blur-[180px] opacity-20 z-[2]" />

      <MetalParticles />

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-10 pb-20">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3366FF]/30 bg-[#3366FF]/10 w-max mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#3366FF] animate-pulse" />
              <span className="text-sm font-semibold text-[#6699FF] tracking-wide uppercase">Alta Ingeniería en Corte</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-[Outfit] font-black text-5xl sm:text-6xl md:text-7xl xl:text-[80px] leading-[1.05] lg:leading-[1.1] mb-8"
            >
              <span className="text-white block">Precisión industrial</span>
              <span className="text-gradient block mt-1">que corta la diferencia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-[#3366FF]/50 pl-5"
            >
              Fabricantes y exportadores de repuestos industriales de corte y rectificado
              para las líneas de cartón corrugado, papel tisú y procesamiento de metales.
              <span className="text-white font-medium block mt-3">Rendimiento garantizado, impulsado por calidad superior.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/56991765802"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#3366FF] hover:bg-[#4455FF] rounded-xl text-white font-bold text-base transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                <span className="relative z-20 flex items-center gap-2">
                  <Phone size={20} />
                  Solicitar Cotización
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#productos"
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Ver Catálogo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl"
            >
              {[
                { value: '12+', label: 'Países Destino' },
                { value: '15+', label: 'Líneas de Producto' },
                { value: '100%', label: 'Carburo & CBN' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-[Outfit] font-black text-2xl md:text-3xl text-white">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#3366FF] rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
}
