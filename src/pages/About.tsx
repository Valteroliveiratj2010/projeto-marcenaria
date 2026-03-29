import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Users, History, Target } from 'lucide-react';
import { img } from '../assets/images';

export const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-wood-dark pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={img('sobre.png')}
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-wood-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Nossa Essência
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
          >
            Sobre a Marcenaria Premio
          </motion.h1>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-wood-gold/10 rounded-full flex items-center justify-center">
                <History className="w-6 h-6 text-wood-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-wood-dark">Nossa História</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Fundada em Seabra, a Marcenaria Premio começou como um pequeno sonho familiar. Com o passar dos anos, a paixão pela madeira e o compromisso com a perfeição nos transformaram em uma referência regional.
              </p>
              <p>
                Cada projeto que sai de nossa oficina carrega consigo décadas de conhecimento técnico aliado às tendências globais de design. Não entregamos apenas móveis; entregamos soluções que otimizam espaços e elevam o padrão de vida de nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="bg-wood-light p-6 rounded-sm border-l-4 border-wood-gold">
                <Target className="w-8 h-8 text-wood-gold mb-4" />
                <h3 className="font-serif font-bold text-wood-dark mb-2">Missão</h3>
                <p className="text-sm text-slate-500">Transformar ambientes através de móveis planejados de alta qualidade e design exclusivo.</p>
              </div>
              <div className="bg-wood-light p-6 rounded-sm border-l-4 border-wood-dark">
                <Users className="w-8 h-8 text-wood-dark mb-4" />
                <h3 className="font-serif font-bold text-wood-dark mb-2">Valores</h3>
                <p className="text-sm text-slate-500">Ética, transparência, pontualidade e busca incessante pela perfeição no acabamento.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <img
                src={img('sobre.png')}
                className="w-full h-full object-cover"
                alt="Oficina"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-wood-gold/10 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 px-6 bg-wood-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block p-4 bg-wood-gold rounded-full mb-8">
            <Award className="w-12 h-12 text-wood-dark" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Reconhecimento de Excelência</h2>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-sm">
            <p className="text-xl md:text-2xl text-wood-gold font-serif italic mb-6">
              "Eleita a Melhor Marcenaria em Seabra – BA pelo CPB (Centro de Pesquisa Brasileiro)."
            </p>
            <p className="text-slate-400 leading-relaxed">
              Este prêmio é o reflexo de anos de dedicação, investimento em tecnologia e, acima de tudo, do respeito que temos por cada cliente. Ser reconhecido como a melhor da região nos motiva a elevar ainda mais nossos padrões de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wood-dark">Por que escolher a Marcenaria Premio?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Reconhecimento Local', desc: 'A marca mais premiada de Seabra.' },
              { title: 'Atendimento Premium', desc: 'Consultoria personalizada para seu projeto.' },
              { title: 'Acabamento Superior', desc: 'Precisão milimétrica em cada detalhe.' },
              { title: 'Entrega no Prazo', desc: 'Respeito total ao cronograma acordado.' },
              { title: 'Projeto Exclusivo', desc: 'Seu móvel será único, como você.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-wood-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-6 h-6 text-wood-gold" />
                </div>
                <h3 className="font-serif font-bold text-wood-dark mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
