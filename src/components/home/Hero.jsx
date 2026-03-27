import React from 'react';
import { motion } from 'framer-motion';
import { Music, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-paco-white mountain-texture pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-60" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Local Logo from Desktop Assets */}
        <div className="mb-8 relative">
          <motion.img 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src="/src/assets/paco/Logo.webp" 
            alt="En Que Paco Logo" 
            className="w-64 md:w-80 h-auto drop-shadow-2xl rounded-2xl border-4 border-white"
          />
          <div className="absolute -top-4 -right-4 bg-terracotta text-white p-2 rounded-full rotate-12 shadow-lg">
             <Music size={20} />
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
        >
          <h1 className="hidden">En Que Paco</h1> {/* SEO */}
          <p className="text-2xl md:text-4xl font-brand font-bold text-terracotta mb-4 max-w-2xl leading-tight">
            Tradición, Música y Buena Vibra <br /> 
            en el corazón de <span className="italic font-normal">Güéjar Sierra.</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-paco-brown/60 mb-10 font-bold tracking-widest text-xs uppercase">
            <MapPin size={14} className="text-terracotta" />
            Sierra Nevada · Granada
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button 
              onClick={scrollToMenu}
              className="bg-terracotta text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-terracotta/20"
            >
              Ver Nuestra Carta
            </button>
            <button className="bg-white text-paco-brown border border-paco-brown/10 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
              Música & Ambiente
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Image Preview (Local Food) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 opacity-30 md:opacity-100"
      >
        <img 
          src="/src/assets/paco/unnamed.webp" 
          alt="Bocadillos Tradicionales" 
          className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white object-cover"
        />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
