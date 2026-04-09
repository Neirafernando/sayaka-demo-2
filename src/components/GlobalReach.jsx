import { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const countries = [
  { name: 'EE.UU.',         flag: '🇺🇸', coordinates: [-98, 38] },
  { name: 'Chile',          flag: '🇨🇱', coordinates: [-71, -33], isHQ: true },
  { name: 'Reino Unido',    flag: '🇬🇧', coordinates: [-2, 54] },
  { name: 'Alemania',       flag: '🇩🇪', coordinates: [10, 51] },
  { name: 'Rumania',        flag: '🇷🇴', coordinates: [25, 46] },
  { name: 'Turquía',        flag: '🇹🇷', coordinates: [35, 39] },
  { name: 'Arabia Saudita', flag: '🇸🇦', coordinates: [45, 24] },
  { name: 'Kenia',          flag: '🇰🇪', coordinates: [37, -1] },
  { name: 'Nigeria',        flag: '🇳🇬', coordinates: [8, 10] },
  { name: 'Sudáfrica',      flag: '🇿🇦', coordinates: [25, -29] },
  { name: 'Tailandia',      flag: '🇹🇭', coordinates: [101, 15] },
  { name: 'Malasia',        flag: '🇲🇾', coordinates: [110, 4] },
  { name: 'Indonesia',      flag: '🇮🇩', coordinates: [120, -3] },
];

export default function GlobalReach() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <section id="global" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12121A] via-[#0D1F33]/40 to-[#12121A]" />

      <div className="relative w-full max-w-[1536px] mx-auto px-5 sm:px-8 md:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#3366FF] font-semibold">Presencia Internacional</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
            Alcance <span className="text-gradient-blue">Global</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Desde Chile al mundo. Exportamos repuestos industriales de precisión a más de 12 países en 5 continentes.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0D1826] overflow-hidden"
        >
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 153, center: [15, 10] }}
            style={{ width: '100%', height: 'auto' }}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1B2E45"
                      stroke="#0D1826"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: '#1E3550' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Connection lines from Chile */}
              {countries
                .filter((c) => !c.isHQ)
                .map((c, i) => (
                  <motion.line
                    key={c.name}
                    x1="0" y1="0" x2="0" y2="0"
                    stroke="#3366FF"
                    strokeWidth="0"
                    opacity="0"
                  />
                ))}

              {/* Country markers */}
              {countries.map((c, i) => (
                <Marker key={c.name} coordinates={c.coordinates}>
                  {c.isHQ ? (
                    // HQ marker (Chile)
                    <g>
                      <circle r={7} fill="#3366FF" stroke="white" strokeWidth={2}
                        style={{ filter: 'drop-shadow(0 0 6px rgba(51,102,255,0.8))' }} />
                      <text
                        textAnchor="middle"
                        y={18}
                        style={{ fontFamily: 'Inter,sans-serif', fontSize: 7, fontWeight: 700, fill: '#3366FF' }}
                      >
                        SAYAKA HQ
                      </text>
                    </g>
                  ) : (
                    // Regular country marker
                    <g
                      onMouseEnter={() => setTooltip(c.name)}
                      onMouseLeave={() => setTooltip(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle r={0} fill="#3366FF" opacity={0.2}>
                        <animate attributeName="r" from="3" to="10" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.4" to="0" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                      <circle r={4} fill="#3366FF"
                        style={{ filter: 'drop-shadow(0 0 4px rgba(51,102,255,0.6))' }} />
                      {tooltip === c.name && (
                        <g>
                          <rect x={-30} y={-28} width={60} height={18} rx={4} fill="#1B3A5C" stroke="#3366FF" strokeWidth={0.5} />
                          <text textAnchor="middle" y={-14} style={{ fontFamily: 'Inter,sans-serif', fontSize: 8, fill: 'white', fontWeight: 600 }}>
                            {c.flag} {c.name}
                          </text>
                        </g>
                      )}
                    </g>
                  )}
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0D1826] to-transparent pointer-events-none" />
        </motion.div>

        {/* Country pills */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm transition-all duration-300 ${
                c.isHQ
                  ? 'bg-[#3366FF]/10 border-[#3366FF]/40 text-[#6699FF] font-semibold'
                  : 'bg-white/[0.03] border-white/[0.06] text-gray-300 hover:border-[#3366FF]/30 hover:text-white'
              }`}
            >
              <span className="mr-1.5">{c.flag}</span>
              {c.name}
              {c.isHQ && <span className="ml-1.5 text-[10px] text-[#3366FF]/70">HQ</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
