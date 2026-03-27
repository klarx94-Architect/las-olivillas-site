import React from 'react';
import { motion } from 'framer-motion';
import { Music, GlassWater, Users, Beer } from 'lucide-react';

const VIBES = [
  { 
    title: 'Tardeo de Copas', 
    desc: 'El mejor ambiente para desconectar con una buena ginebra o una cerveza fría tras subir a la sierra.',
    icon: <Beer className="text-terracotta" size={32} />
  },
  { 
    title: 'Música con Alma', 
    desc: 'Selección de Jazz, Country y clásicos en inglés que crean un ambiente único y diferente.',
    icon: <Music className="text-terracotta" size={32} />
  },
  { 
    title: 'Encuentros Rústicos', 
    desc: 'Espacio acogedor donde lo tradicional se mezcla con la alegría de disfrutar entre amigos.',
    icon: <Users className="text-terracotta" size={32} />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-paco-white border-t border-paco-brown/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-terracotta uppercase tracking-[0.3em] text-sm mb-4 block font-bold">Atmósfera Única</span>
          <h2 className="text-4xl md:text-6xl font-brand font-bold text-paco-brown mb-6">Mucho más que un Bar</h2>
          <p className="text-paco-brown/50 max-w-2xl mx-auto">
            En el corazón de Güéjar Sierra, En Que Paco es refugio para amantes de la buena música, las copas bien puestas y las tapas tradicionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIBES.map((vibe, idx) => (
            <motion.div
              key={vibe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-paco-brown/5 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-terracotta/5 group-hover:scale-110 transition-transform">{vibe.icon}</div>
              <h3 className="text-2xl font-brand font-bold text-paco-brown mb-4">{vibe.title}</h3>
              <p className="text-paco-brown/60 text-sm leading-relaxed">{vibe.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
