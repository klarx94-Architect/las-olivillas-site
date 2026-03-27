import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Calendar, Phone, Globe, Music } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nuestra Carta', href: '#menu', icon: <Utensils size={18} /> },
    { name: 'Ambiente', href: '#services', icon: <Music size={18} /> },
    { name: 'Nosotros', href: '#about', icon: <Globe size={18} /> },
    { name: 'Contacto', href: '#contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-lg border-b border-paco-brown/5 py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Stylized like the ceramic one */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="bg-terracotta text-white w-10 h-10 rounded-lg flex items-center justify-center font-brand font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-transform">P</div>
          <span className={cn(
            "text-2xl font-brand font-bold tracking-tight transition-colors",
            isScrolled ? "text-paco-brown" : "text-paco-brown"
          )}>
            EN QUE <span className="text-terracotta">PACO</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-paco-brown/60 hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-terracotta/10">
            Reservar
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-paco-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-brand text-paco-brown hover:text-terracotta transition-colors flex items-center gap-4"
          >
            {link.name}
          </a>
        ))}
        <button className="bg-terracotta text-white px-10 py-3 rounded-xl text-lg font-bold">
          Reservar Ahora
        </button>
      </div>
    </nav>
  );
}
