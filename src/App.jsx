import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import InteractiveMenu from './components/home/InteractiveMenu';
import ServicesSection from './components/home/ServicesSection';
import AgentButton from './components/layout/AgentButton';
import BookingAgent from './components/home/BookingAgent';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-paco-white min-h-screen selection:bg-terracotta selection:text-white font-sans antialiased text-paco-brown">
      {/* Background decoration for traditional feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mountain-texture z-0" />
      
      <Navbar onReserve={() => setIsBookingOpen(true)} />
      
      <main className="relative z-10">
        <Hero onStart={() => setIsBookingOpen(true)} />
        
        {/* Legacy & Vibe Section */}
        <section id="about" className="py-24 px-6 bg-white border-y border-paco-brown/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white group">
                  <img 
                    src="/src/assets/paco/unnamed (2).jpg" 
                    alt="Interior En Que Paco" 
                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
             </div>
             <div>
                <span className="text-terracotta uppercase tracking-[0.4em] text-sm mb-6 block font-bold">Nuestra Tradición</span>
                <h2 className="text-5xl md:text-7xl font-brand font-bold text-paco-brown mb-8 leading-tight">
                  Sabores de la Sierra, <br /><span className="italic font-normal text-terracotta">ritmo del Mundo.</span>
                </h2>
                <p className="text-xl text-paco-brown/60 leading-relaxed font-serif italic mb-8">
                  "Un lugar peculiar en Güéjar Sierra donde la tapa granadina se encuentra con el country, el jazz y la mejor cocina casera de la zona."
                </p>
                <div className="flex flex-col gap-4">
                   <div className="p-6 bg-paco-white rounded-3xl border border-paco-brown/5 flex items-center gap-6">
                      <div className="text-3xl">🏜️</div>
                      <div>
                        <h4 className="text-paco-brown font-bold text-lg">Güéjar Sierra</h4>
                        <p className="text-paco-brown/40 text-[10px] uppercase tracking-widest font-bold">Localización Única</p>
                      </div>
                   </div>
                   <div className="p-6 bg-paco-white rounded-3xl border border-paco-brown/5 flex items-center gap-6">
                      <div className="text-3xl">🎵</div>
                      <div>
                        <h4 className="text-paco-brown font-bold text-lg">Selección Musical</h4>
                        <p className="text-paco-brown/40 text-[10px] uppercase tracking-widest font-bold">Jazz, Country & Pop Inglés</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <InteractiveMenu />
        
        <ServicesSection />

        {/* Closing CTA */}
        <section className="py-32 px-6 bg-terracotta text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 mountain-texture" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-brand font-bold text-white mb-8">
                Te esperamos para el <br /> 
                <span className="italic font-normal opacity-80 underline decoration-white/20">próximo tardeo.</span>
              </h2>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-terracotta px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
              >
                Reservar Mesa con el Agente
              </button>
           </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-paco-white border-t border-paco-brown/5 text-center text-paco-brown/20 text-[10px] uppercase tracking-[0.5em] font-bold">
        © 2024 EN QUE PACO · GÜÉJAR SIERRA · SIERRA NEVADA
      </footer>

      <BookingAgent isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AgentButton />
    </div>
  );
}

export default App;
