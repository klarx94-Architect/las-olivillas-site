import React from 'react';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 px-10 min-h-screen bg-pearl-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-6 block">Nuestra Historia</span>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight">
            El Alma de <br />
            <span className="italic font-normal text-terracotta-mid">Las Olivillas</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h3 className="text-4xl font-serif font-black">Una Tradición Viva</h3>
            <p className="font-serif text-lg leading-relaxed text-neutral-dark/70">
              En la salida de Güéjar Sierra, con vistas al Valle del Genil y Sierra Nevada, Las Olivillas nació de la pasión de Jose y María por la cocina tradicional y la hospitalidad genuina.
            </p>
            <p className="font-serif text-lg leading-relaxed text-neutral-dark/70">
              Nuestra cocina es un homenaje a los sabores de la tierra: ingredientes frescos, recetas heredadas y el cariño de quien cocina para los suyos.
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sierra-gold">Reservas</span>
              <a href="tel:+34653999909" className="text-2xl font-serif font-black text-neutral-dark hover:text-terracotta-mid transition-colors">653 999 909</a>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" 
              alt="Interior Restaurante Las Olivillas" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="bg-neutral-dark text-pearl-white rounded-[4rem] p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <span className="text-sierra-gold uppercase tracking-[0.6em] text-[10px] font-black mb-6 block">Jose y María</span>
              <h3 className="text-5xl font-serif font-black mb-8">Nuestra Familia</h3>
              <p className="font-serif italic text-xl text-pearl-white/60 max-w-2xl mx-auto">
                Jose Castillo y María García llevan años sirviendo la mejor cocina tradicional en Güéjar Sierra. Su restaurante es un referente en el Valle del Genil.
              </p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
