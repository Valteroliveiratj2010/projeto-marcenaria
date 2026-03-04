import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award } from 'lucide-react';

export const PremiumBadge = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed right-4 bottom-24 z-50 md:right-8 md:bottom-8"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-wood-gold via-yellow-200 to-wood-gold rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative flex items-center gap-3 bg-wood-dark border border-wood-gold/30 px-4 py-3 rounded-full shadow-2xl">
          <div className="bg-wood-gold p-2 rounded-full">
            <Award className="w-5 h-5 text-wood-dark" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-wood-gold font-bold leading-none">Premiada</span>
            <span className="text-xs text-white font-serif font-bold">Melhor Marcenaria Seabra</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
