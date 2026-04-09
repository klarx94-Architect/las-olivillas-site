import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-pearl-white pt-32 pb-16 px-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none">
         <span className="text-[25vw] font-serif font-black leading-none uppercase">OLIVA</span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex flex-col gap-4">
               <span className="text-3xl font-serif font-black text-pearl-white">Las <span className="italic font-normal text-terracotta-mid">Olivillas</span></span>
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-pearl-white/40">Güéjar Sierra · Granada</span>
            </div>
            <p className="text-pearl-white/40 font-serif italic text-sm leading-relaxed max-w-xs">
              "Cocina tradicional con vistas al Valle del Genil y Sierra Nevada. Un lugar donde cada plato cuenta una historia."
            </p>
            <div className="flex gap-6 items-center">
               <a href="https://www.instagram.com/restaurantelasolivillas/" target="_blank" rel="noopener noreferrer" className="text-pearl-white/40 hover:text-sierra-gold transition-colors"><Instagram size={20} /></a>
               <a href="https://www.facebook.com/lasolivillasrestaurante/" target="_blank" rel="noopener noreferrer" className="text-pearl-white/40 hover:text-sierra-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Navegación</h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-pearl-white/60">
              <li><a href="/menu" className="hover:text-pearl-white transition-colors">Nuestra Carta</a></li>
              <li><a href="/nosotros" className="hover:text-pearl-white transition-colors">Nuestra Historia</a></li>
              <li><a href="/llegar" className="hover:text-pearl-white transition-colors">Cómo Llegar</a></li>
              <li><a href="#reservar" className="hover:text-pearl-white transition-colors">Reservar Mesa</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                 <MapPin size={18} className="text-sierra-gold shrink-0 mt-1" />
                 <span className="text-sm font-serif italic text-pearl-white/60">Paseo Mirasierra nº7 <br /> 18160 Güéjar Sierra, Granada</span>
              </li>
              <li className="flex items-center gap-4">
                 <Phone size={18} className="text-sierra-gold shrink-0" />
                 <a href="tel:+34653999909" className="text-sm font-serif italic text-pearl-white/60 hover:text-pearl-white transition-colors">653 999 909</a>
              </li>
              <li className="flex items-center gap-4">
                 <Phone size={18} className="text-sierra-gold shrink-0" />
                 <a href="tel:+34958484050" className="text-sm font-serif italic text-pearl-white/60 hover:text-pearl-white transition-colors">958 484 050</a>
              </li>
              <li className="flex items-center gap-4">
                 <Mail size={18} className="text-sierra-gold shrink-0" />
                 <a href="mailto:restaurantelasolivillas@hotmail.es" className="text-sm font-serif italic text-pearl-white/60 hover:text-pearl-white transition-colors">restaurantelasolivillas@hotmail.es</a>
              </li>
            </ul>
          </div>

          {/* Horario Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sierra-gold mb-10">Horario</h4>
            <ul className="space-y-4 text-sm font-serif italic text-pearl-white/60">
              <li>Miércoles — Lunes</li>
              <li>12:00 – 16:00</li>
              <li>20:00 – 00:00</li>
              <li className="text-terracotta-mid font-bold not-italic uppercase tracking-widest text-[10px] mt-4">Martes: Cerrado</li>
            </ul>
          </div>
        </div>

        {/* Closing Line */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-pearl-white/20">
             © 2025 Restaurante Las Olivillas · Güéjar Sierra, Granada
           </p>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-pearl-white/40">Reservas Abiertas</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
