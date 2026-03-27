import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function AgentButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  const startWhatsApp = () => {
    const phone = "34684790308"; // Teléfono del protocolo Vora
    const message = encodeURIComponent("Sistema Aeterium conectado. Soy la IA de guardia. Solicito auditoría gastronómica en En Que Paco.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-72 bg-charcoal border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
            
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-2">Aeterium IA Concierge</h4>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Inicia tu auditoría gastronómica. Dimencionaremos tu experiencia en tiempo real.
            </p>
            
            <button 
              onClick={startWhatsApp}
              className="w-full py-3 bg-gold text-charcoal font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gold/90 transition-all"
            >
              Contactar IA de Guardia
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold shadow-lg shadow-gold/20 flex items-center justify-center text-charcoal overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-4 border-gold animate-ping opacity-30" />
        )}
      </motion.button>
    </div>
  );
}
