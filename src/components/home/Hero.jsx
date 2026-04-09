import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onReserve }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative min-h-screen pt-40 px-10 pb-20 overflow-hidden ceramic-gradient">
      {/* Background Architectural Text */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fluid-text-hero font-serif font-black text-neutral-dark/[0.03] pointer-events-none whitespace-nowrap">
        OLIVAR SIERRA NEVADA
      </h2>

      <div className="max-w-[1600px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full relative z-10">
        {/* Copy Column */}
        <div className="flex flex-col items-start text-left order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-sierra-gold mb-6 md:mb-8 px-4 py-2 border border-sierra-gold/20 rounded-full">
              Güéjar Sierra · Sierra Nevada
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-black text-neutral-dark leading-[0.85] mb-8 md:mb-10">
              Tradición, <br />
              <span className="italic font-normal text-terracotta-mid">sabor</span> y <br />
              <span className="text-sierra-gold underline decoration-sierra-gold/20">paisaje.</span>
            </h1>
            <p className="max-w-md text-base md:text-lg text-neutral-dark/60 font-serif italic mb-8 md:mb-12 leading-relaxed">
              "Un rincón único en Güéjar Sierra donde la cocina tradicional se funde con las vistas al Valle del Genil y Sierra Nevada."
            </p>
          </motion.div>
        </div>

        {/* Visual Column */}
        <div className="relative pt-10 md:pt-20 order-2 lg:order-2 w-full">
          <motion.div 
            style={{ y: y1 }}
            className="relative z-20 w-full max-w-sm md:max-w-md mx-auto lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-[-20px_20px_40px_rgba(0,0,0,0.1)] md:shadow-[-40px_40px_80px_rgba(0,0,0,0.1)] border-[8px] md:border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800" 
                alt="Restaurante Las Olivillas — Cocina tradicional en Güéjar Sierra" 
                className="w-full aspect-[4/5] object-cover scale-110"
              />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2, rotate: -5 }}
            className="absolute -bottom-10 -left-10 z-30 w-full max-w-[200px] md:max-w-[280px] hidden md:block"
          >
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[10px] border-white ring-1 ring-black/5">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600" 
                alt="Platos de Las Olivillas" 
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Column */}
        <div className="order-3 w-full lg:contents">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:absolute lg:bottom-0 lg:left-0"
           >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onReserve}
                className="w-full md:w-auto bg-neutral-dark text-pearl-white px-12 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl"
              >
                Reservar Mesa
              </motion.button>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-neutral-dark/30">Abierto hoy</span>
                 <span className="text-xs font-bold text-neutral-dark tracking-widest">12:00 – 16:00 · 20:00 – 00:00</span>
              </div>
           </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-4 opacity-20">
         <div className="w-[1px] h-20 bg-neutral-dark" />
         <span className="text-[8px] font-black uppercase tracking-[0.8em] vertical-text">Scroll</span>
      </div>
    </section>
  );
}
