import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { img } from '../assets/images';

const categories = ['Todos', 'Cozinhas', 'Quartos', 'Salas', 'Comercial'];

const allProjects = [
  { id: 1, title: 'Cozinha Gourmet Seabra', category: 'Cozinhas', image: img('cozinha.png'), material: 'MDF Grafite + Louro Freijó', time: '25 dias' },
  { id: 2, title: 'Suíte Master Casal', category: 'Quartos', image: img('dormitorio-closets.png'), material: 'MDF Branco Diamante', time: '20 dias' },
  { id: 3, title: 'Painel Home Theater', category: 'Salas', image: img('paineis.png'), material: 'Ripado em Carvalho', time: '15 dias' },
  { id: 4, title: 'Recepção Clínica', category: 'Comercial', image: img('comerciais.png'), material: 'MDF Laqueado', time: '30 dias' },
  { id: 5, title: 'Cozinha Americana', category: 'Cozinhas', image: img('cozinha.png'), material: 'MDF Cinza Sagrado', time: '22 dias' },
  { id: 6, title: 'Closet Walk-in', category: 'Quartos', image: img('dormitorio-closets.png'), material: 'MDF Linho', time: '18 dias' },
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
            src={img('comerciais.png')}
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
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  material={project.material}
                  time={project.time}
                  variant="detailed"
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
