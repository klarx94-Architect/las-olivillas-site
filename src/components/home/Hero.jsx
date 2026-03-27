import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: "url('/src/assets/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Experiencia Rural de Lujo</span>
          <h1 className="text-6xl md:text-8xl font-brand font-bold text-white mb-6 leading-[1.1]">
            Sabores con <br />
            <span className="italic font-normal text-gold">Alma Rústica</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubre la esencia de la alta cocina en el corazón de la naturaleza. Una arquitectura de sabores diseñada para los paladares más exigentes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToMenu}
              className="bg-gold hover:bg-gold/90 text-charcoal px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
            >
              Explorar la Carta
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-bold transition-all">
              Conoce En Que Paco
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToMenu}
      >
        <span className="text-xs uppercase tracking-widest opacity-60">Scroll para descubrir</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
