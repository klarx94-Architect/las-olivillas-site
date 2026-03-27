import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENUS = {
  tapas: {
    title: 'Tapas y Raciones',
    subtitle: 'Lo mejor de nuestra cocina para compartir.',
    items: [
      { name: 'Surtido de Embutidos de la Sierra', desc: 'Jamón, queso curado y chacinas locales.', price: '14€' },
      { name: 'Empanada Casera de Paco', desc: 'Receta secreta horneada a diario.', price: '4.50€' },
      { name: 'Patatas Bravas Güéjar', desc: 'Con nuestra salsa especial picante.', price: '6.50€' },
      { name: 'Ración de Aceitunas y Encurtidos', desc: 'El clásico de cada tarde.', price: '3€' }
    ]
  },
  hamburguesas: {
    title: 'Nuestras Hamburguesas',
    subtitle: 'Carne seleccionada con pan rústico.',
    items: [
      { name: 'La Paco Clásica', desc: 'Queso terroso, cebolla caramelizada y salsa secreta.', price: '10.50€' },
      { name: 'Sierra Nevada Burger', desc: 'Con bacon crujiente y huevo de corral.', price: '12€' },
      { name: 'Pollo Crispy al Country', desc: 'Pollo marinado con especias y mahonesa suave.', price: '11€' }
    ]
  },
  pizzas: {
    title: 'Pizzas Artesanas',
    subtitle: 'Masa fina y crujiente hecha en el momento.',
    items: [
      { name: 'Margarita Tradicional', desc: 'Mozzarella, tomate San Marzano y albahaca.', price: '9€' },
      { name: 'La Serrana', desc: 'Con jamón de la sierra y lascas de queso.', price: '12.50€' },
      { name: 'Barbacoa Güéjar', desc: 'Carne picada de la zona y salsa ahumada.', price: '13€' }
    ]
  }
};

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState('tapas');

  return (
    <section id="menu" className="py-24 px-6 bg-white mountain-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-terracotta uppercase tracking-[0.4em] text-sm mb-4 block font-bold">Hecho con el corazón</span>
          <h2 className="text-5xl md:text-6xl font-brand font-bold text-paco-brown mb-8 text-center">Nuestra Carta</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Categories */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            {Object.keys(MENUS).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 font-bold border ${
                  activeTab === key 
                  ? 'bg-terracotta text-white border-terracotta shadow-lg transform scale-[1.02]' 
                  : 'bg-paco-white text-paco-brown/60 border-paco-brown/10 hover:border-terracotta/40'
                }`}
              >
                {MENUS[key].title}
              </button>
            ))}
            
            <div className="mt-8 p-6 bg-gold/5 rounded-2xl border border-gold/20 flex flex-col items-center text-center">
               <span className="text-2xl mb-2">🎶</span>
               <p className="text-[10px] uppercase tracking-widest font-bold text-gold/80 mb-2">Música en vivo</p>
               <p className="text-xs text-paco-brown/60 italic font-serif">Disfruta de tu comida con el mejor Jazz y Country de la zona.</p>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-paco-white p-8 lg:p-12 rounded-[2.5rem] border border-paco-brown/5 shadow-sm min-h-[400px]"
              >
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl font-brand text-paco-brown mb-2">{MENUS[activeTab].title}</h3>
                  <p className="text-paco-brown/40 italic">{MENUS[activeTab].subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {MENUS[activeTab].items.map((item, idx) => (
                    <div key={idx} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-paco-brown group-hover:text-terracotta transition-colors">{item.name}</h4>
                        <span className="text-terracotta font-black whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-xs text-paco-brown/50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Photo Placeholder (Local) */}
                <div className="mt-12 pt-12 border-t border-paco-brown/5 flex flex-col md:flex-row gap-6 items-center">
                   <img src="/src/assets/paco/unnamed (1).webp" alt="Plato Tradicional" className="w-full md:w-32 h-24 object-cover rounded-xl shadow-md border-2 border-white" />
                   <p className="text-[10px] text-paco-brown/40 italic flex-1">
                     * Todas nuestras raciones y bocadillos se sirven con el toque tradicional de la sierra. Pregúntanos por la tapa del día.
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
