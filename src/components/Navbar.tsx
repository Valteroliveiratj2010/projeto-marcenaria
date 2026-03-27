import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Portfólio', path: '/portfolio' },
  { name: 'Contato', path: '/contato' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-wood-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-wood-gold p-1.5 rounded-sm transition-transform group-hover:rotate-12">
            <Hammer className="w-6 h-6 text-wood-dark" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-white leading-none tracking-tight">PREMIO</span>
            <span className="text-[10px] text-wood-gold tracking-[0.2em] uppercase font-bold">Marcenaria</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-wood-gold',
                location.pathname === link.path ? 'text-wood-gold' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/orcamento"
            className="bg-wood-gold text-wood-dark px-5 py-2 rounded-sm text-sm font-bold hover:bg-white transition-colors"
          >
            ORÇAMENTO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-wood-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-white/5',
                  location.pathname === link.path ? 'text-wood-gold' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setIsOpen(false)}
              className="bg-wood-gold text-wood-dark text-center py-3 rounded-sm font-bold mt-2"
            >
              SOLICITAR ORÇAMENTO
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { AnimatePresence } from 'motion/react';
