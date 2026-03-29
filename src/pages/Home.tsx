import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star, Quote, MessageCircle, ChefHat, Bed, Monitor, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { img } from '../assets/images';

const services = [
  { title: 'Cozinhas Planejadas', icon: ChefHat, desc: 'Funcionalidade e design para o coração da sua casa.' },
  { title: 'Dormitórios', icon: Bed, desc: 'Conforto e organização sob medida para seu descanso.' },
  { title: 'Home Office', icon: Monitor, desc: 'Ambientes produtivos com ergonomia e sofisticação.' },
  { title: 'Projetos Comerciais', icon: Building2, desc: 'Sua marca refletida em móveis de alto padrão.' },
];

const projects = [
  { id: 1, title: 'Cozinha Gourmet Esmeralda', category: 'Cozinha', image: img('cozinha.png') },
  { id: 2, title: 'Suíte Master Minimalista', category: 'Quarto', image: img('dormitorio-closets.png') },
  { id: 3, title: 'Escritório Executivo', category: 'Comercial', image: img('comerciais.png') },
];

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wood-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={img('hero-section.png')}
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
            alt="Marcenaria Real"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-transparent to-wood-dark"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-wood-gold/10 border border-wood-gold/30 px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 text-wood-gold fill-wood-gold" />
              <span className="text-wood-gold text-xs font-bold tracking-[0.2em] uppercase">Eleita a melhor de Seabra</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Móveis Planejados <br />
              <span className="text-wood-gold">Sob Medida</span> em Seabra
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Qualidade, precisão e acabamento impecável para transformar seus sonhos em ambientes extraordinários.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/orcamento"
                className="w-full sm:w-auto bg-wood-gold text-wood-dark px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-white transition-all group"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Ver Projetos
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-wood-gold to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img
                src={img('premio-marcenaria.png')}
                className="w-full h-full object-cover"
                alt="Trabalho de Marcenaria"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-wood-dark p-8 rounded-sm shadow-xl hidden md:block">
              <div className="text-wood-gold text-4xl font-serif font-bold mb-1">15+</div>
              <div className="text-white text-xs uppercase tracking-widest font-bold">Anos de Experiência</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-wood-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark mb-8 leading-tight">
              A Marcenaria Premio nasceu para transformar madeira em arte.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Com reconhecimento como a **Melhor Marcenaria de Seabra**, entregamos qualidade, compromisso e excelência em cada detalhe. Nossa missão é criar móveis que não apenas preencham espaços, mas que contem histórias e facilitem a vida de nossos clientes.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Utilizamos as melhores matérias-primas e ferragens do mercado, aliando técnicas tradicionais de marcenaria com o que há de mais moderno em design de interiores.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-2 text-wood-dark font-bold hover:text-wood-gold transition-colors group">
              Conheça mais sobre nós
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-wood-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-wood-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">O que fazemos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">Soluções Sob Medida</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform inline-block">
                  <service.icon className="w-10 h-10 text-wood-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-wood-dark mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/servicos" className="text-wood-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  Saiba mais <ChevronRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-wood-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Portfólio</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">Projetos em Destaque</h2>
            </div>
            <Link to="/portfolio" className="bg-wood-dark text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-wood-gold hover:text-wood-dark transition-all">
              Ver Portfólio Completo
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                variant="simple"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-wood-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-wood-gold mx-auto mb-6 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-slate-400">A satisfação de quem confiou em nosso trabalho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 rounded-sm">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-wood-gold fill-wood-gold" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">
                  "O trabalho da Marcenaria Premio superou todas as minhas expectativas. A atenção aos detalhes e o cumprimento do prazo foram impecáveis. Minha cozinha ficou exatamente como eu sonhei!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-wood-gold/20 flex items-center justify-center font-bold text-wood-gold">
                    {i === 1 ? 'MA' : i === 2 ? 'JS' : 'RC'}
                  </div>
                  <div>
                    <div className="font-bold text-sm">Maria Almeida</div>
                    <div className="text-xs text-slate-500">Seabra - BA</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-wood-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wood-dark mb-8">
            Quer transformar seu ambiente?
          </h2>
          <p className="text-wood-dark/80 text-lg mb-12 font-medium">
            Solicite agora um orçamento sem compromisso e descubra como podemos dar vida ao seu projeto.
          </p>
          <a
            href="https://wa.me/5575982884396"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wood-dark text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-white hover:text-wood-dark transition-all shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Fale conosco no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
