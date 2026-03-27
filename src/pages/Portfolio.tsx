import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Maximize2 } from 'lucide-react';

const categories = ['Todos', 'Cozinhas', 'Quartos', 'Salas', 'Comercial'];

const allProjects = [
  { id: 1, title: 'Cozinha Gourmet Seabra', category: 'Cozinhas', image: '/IMG/portfolio-1.jpg', material: 'MDF Grafite + Louro Freijó', time: '25 dias' },
  { id: 2, title: 'Suíte Master Casal', category: 'Quartos', image: '/IMG/portfolio-2.jpg', material: 'MDF Branco Diamante', time: '20 dias' },
  { id: 3, title: 'Painel Home Theater', category: 'Salas', image: '/IMG/portfolio-3.jpg', material: 'Ripado em Carvalho', time: '15 dias' },
  { id: 4, title: 'Recepção Clínica', category: 'Comercial', image: '/IMG/portfolio-4.jpg', material: 'MDF Laqueado', time: '30 dias' },
  { id: 5, title: 'Cozinha Americana', category: 'Cozinhas', image: '/IMG/portfolio-5.jpg', material: 'MDF Cinza Sagrado', time: '22 dias' },
  { id: 6, title: 'Closet Walk-in', category: 'Quartos', image: '/IMG/portfolio-6.jpg', material: 'MDF Linho', time: '18 dias' },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-wood-light overflow-hidden">
      <section className="bg-wood-dark pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/IMG/portfolio-bg.jpg"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Nosso Portfólio</h1>
          <p className="text-slate-400">Inspire-se com alguns de nossos projetos entregues.</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-wood-gold text-wood-dark shadow-lg'
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={project.title}
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
                        <span className="text-wood-gold text-[10px] font-bold uppercase tracking-widest block mb-1">{project.category}</span>
                        <h3 className="text-xl font-serif font-bold text-wood-dark">{project.title}</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Material</span>
                        <span className="text-xs font-medium text-slate-700">{project.material}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Execução</span>
                        <span className="text-xs font-medium text-slate-700">{project.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
