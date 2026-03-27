import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Calendar, Phone, Globe } from 'lucide-react';
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
    { name: 'Nuestros Platos', href: '#menu', icon: <Utensils size={18} /> },
    { name: 'Eventos', href: '#events', icon: <Calendar size={18} /> },
    { name: 'Nosotros', href: '#about', icon: <Globe size={18} /> },
    { name: 'Contacto', href: '#contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-charcoal/90 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-brand font-bold tracking-tighter text-white hover:text-gold transition-colors">
          EN <span className="text-gold">QUE</span> PACO
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <span className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
          <button className="bg-gold hover:bg-gold/90 text-charcoal px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            Reservar
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-charcoal z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-brand text-white hover:text-gold transition-colors flex items-center gap-4"
          >
            <span className="text-gold">{link.icon}</span>
            {link.name}
          </a>
        ))}
        <button className="bg-gold text-charcoal px-10 py-3 rounded-full text-lg font-bold">
          Reservar Ahora
        </button>
      </div>
    </nav>
  );
}
