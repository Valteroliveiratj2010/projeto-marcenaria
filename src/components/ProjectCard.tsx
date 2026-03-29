import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  id: number | string;
  title: string;
  category: string;
  image: string;
  material?: string;
  time?: string;
  variant?: 'simple' | 'detailed';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  material,
  time,
  variant = 'simple'
}) => {
  if (variant === 'simple') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
      >
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <span className="text-wood-gold text-xs font-bold uppercase tracking-widest mb-2">{category}</span>
          <h4 className="text-white text-xl font-serif font-bold">{title}</h4>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-wood-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white p-3 rounded-full text-wood-dark transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Maximize2 className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-wood-gold text-[10px] font-bold uppercase tracking-widest block mb-1">{category}</span>
            <h3 className="text-xl font-serif font-bold text-wood-dark">{title}</h3>
          </div>
        </div>
        {(material || time) && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {material && (
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Material</span>
                <span className="text-xs font-medium text-slate-700">{material}</span>
              </div>
            )}
            {time && (
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Execução</span>
                <span className="text-xs font-medium text-slate-700">{time}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
