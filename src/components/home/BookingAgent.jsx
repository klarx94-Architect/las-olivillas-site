import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Check, Smartphone, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BookingAgent({ isOpen, onClose }) {
  const [phase, setPhase] = useState(1);
  const [booking, setBooking] = useState({
    date: new Date().toISOString().split('T')[0],
    adults: 2,
    children: 0,
    area: 'interior',
    name: '',
    phone: ''
  });

  const areas = [
    { id: 'interior', name: 'Interior (Música)', desc: 'Cerca de la selección musical Jazz/Country.' },
    { id: 'terraza', name: 'Terraza de Sierra', desc: 'Disfruta del aire puro de Güéjar Sierra.' },
    { id: 'barra', name: 'Tardeo en Barra', desc: 'Para unas cañas rápidas y tapas.' }
  ];

  const handleWhatsApp = () => {
    const message = `*Nueva Reserva - En Que Paco*%0A%0A📅 *Fecha:* ${booking.date}%0A👥 *Pax:* ${booking.adults} Ad / ${booking.children} Ni%0A📍 *Zona:* ${booking.area.toUpperCase()}%0A👤 *Cliente:* ${booking.name}%0A📞 *Tel:* ${booking.phone}%0A%0A_Enviado desde el Asistente Digital_`;
    window.open(`https://wa.me/34684790308?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-paco-brown/40 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-4xl bg-paco-white border border-paco-brown/10 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-[80vh] mountain-texture"
          >
            {/* Header / Steps */}
            <div className="flex justify-between items-center p-8 border-b border-paco-brown/5 bg-white">
              <div className="flex gap-4">
                {[1, 2, 3].map(s => (
                  <div key={s} className={cn("w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-all", phase >= s ? "bg-terracotta border-terracotta text-white" : "border-paco-brown/10 text-paco-brown/20")}>
                    {phase > s ? <Check size={18} /> : s}
                  </div>
                ))}
              </div>
              <button onClick={onClose} className="text-paco-brown/40 hover:text-terracotta transition-colors"><X size={28} /></button>
            </div>

            {/* Content */}
            <div className="flex-1 p-12 overflow-y-auto">
              <AnimatePresence mode="wait">
              {phase === 1 && (
                <motion.div key="p1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                  <h2 className="text-4xl font-brand font-bold text-paco-brown mb-8 italic">¿Cuándo vienes a vernos?</h2>
                  <div className="flex flex-col items-center gap-8">
                    <div className="bg-white p-6 rounded-[2rem] border border-paco-brown/10 shadow-sm w-full max-w-md">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-paco-brown/40 mb-4">Selecciona Fecha</p>
                      <input type="date" value={booking.date} onChange={e => setBooking({...booking, date: e.target.value})} className="w-full bg-transparent border-none text-3xl font-brand text-paco-brown focus:ring-0 outline-none text-center" />
                    </div>
                    
                    <div className="flex gap-6">
                       <div className="bg-white p-6 rounded-[2rem] border border-paco-brown/10 shadow-sm min-w-[160px]">
                          <p className="text-[10px] uppercase tracking-widest font-bold text-paco-brown/40 mb-4">Adultos</p>
                          <div className="flex items-center justify-between">
                            <button onClick={() => setBooking({...booking, adults: Math.max(1, booking.adults-1)})} className="w-12 h-12 rounded-full border border-paco-brown/10 text-2xl hover:bg-terracotta hover:text-white transition-all">-</button>
                            <span className="text-3xl font-brand">{booking.adults}</span>
                            <button onClick={() => setBooking({...booking, adults: booking.adults+1})} className="w-12 h-12 rounded-full border border-paco-brown/10 text-2xl hover:bg-terracotta hover:text-white transition-all">+</button>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {phase === 2 && (
                <motion.div key="p2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-4xl font-brand font-bold text-paco-brown text-center mb-10 italic">Elige tu zona favorita</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {areas.map(area => (
                      <div 
                        key={area.id} 
                        onClick={() => setBooking({...booking, area: area.id})} 
                        className={cn("p-8 rounded-[2rem] border-2 cursor-pointer transition-all flex flex-col h-full", 
                          booking.area === area.id ? "border-terracotta bg-terracotta/5 shadow-xl" : "border-paco-brown/5 bg-white hover:border-terracotta/20")}
                      >
                        <h4 className="text-xl font-brand font-bold mb-2">{area.name}</h4>
                        <p className="text-xs text-paco-brown/50 leading-relaxed mb-6 flex-grow">{area.desc}</p>
                        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all", 
                          booking.area === area.id ? "bg-terracotta border-terracotta" : "border-paco-brown/10")}>
                          {booking.area === area.id && <Check size={14} className="text-white" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {phase === 3 && (
                 <motion.div key="p3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-md mx-auto space-y-6 text-center">
                    <h2 className="text-4xl font-brand font-bold text-paco-brown mb-4 italic">Casi listo</h2>
                    <p className="text-paco-brown/60 mb-10">Danos tus datos para confirmar tu mesa en la sierra.</p>
                    <input placeholder="Tu Nombre" value={booking.name} onChange={e => setBooking({...booking, name: e.target.value})} className="w-full bg-white border border-paco-brown/10 p-5 rounded-2xl text-xl text-paco-brown outline-none focus:ring-2 focus:ring-terracotta/20 transition-all font-serif" />
                    <input placeholder="WhatsApp (Ej: 600 000 000)" value={booking.phone} onChange={e => setBooking({...booking, phone: e.target.value})} className="w-full bg-white border border-paco-brown/10 p-5 rounded-2xl text-xl text-paco-brown outline-none focus:ring-2 focus:ring-terracotta/20 transition-all font-serif" />
                 </motion.div>
              )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-paco-brown/5 bg-white flex justify-between items-center">
              <button disabled={phase === 1} onClick={() => setPhase(prev => prev - 1)} className="text-paco-brown/40 font-bold uppercase tracking-widest text-xs disabled:opacity-0 transition-opacity">Atrás</button>
              {phase < 3 ? (
                <button onClick={() => setPhase(prev => prev + 1)} className="bg-terracotta text-white px-12 py-4 rounded-xl font-bold text-lg shadow-xl shadow-terracotta/20 transform hover:scale-105 transition-all">Continuar</button>
              ) : (
                <button onClick={handleWhatsApp} className="bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-xl hover:bg-green-700 transition-all"><Smartphone size={20} /> Finalizar vía WhatsApp</button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
