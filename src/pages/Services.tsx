import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Cozinhas Planejadas',
    image: '/IMG/service-kitchen.jpg',
    desc: 'Otimização inteligente de espaço com materiais resistentes à umidade e calor. Design que une beleza e praticidade para o dia a dia.',
    benefits: ['MDF de alta densidade', 'Ferragens com amortecimento', 'Divisores organizadores', 'Iluminação em LED integrada'],
  },
  {
    title: 'Dormitórios & Closets',
    image: '/IMG/service-bedroom.jpg',
    desc: 'Soluções de armazenamento que maximizam cada centímetro. Closets abertos ou fechados com acabamentos sofisticados.',
    benefits: ['Portas de correr suaves', 'Cabideiros iluminados', 'Gavetas aveludadas', 'Espelhos integrados'],
  },
  {
    title: 'Home Theater & Painéis',
    image: '/IMG/service-living.jpg',
    desc: 'Integração perfeita de tecnologia e design. Painéis ripados, laqueados ou amadeirados com fiação totalmente oculta.',
    benefits: ['Gestão de cabos inteligente', 'Nicho para equipamentos', 'Acabamentos em alto brilho', 'Design contemporâneo'],
  },
  {
    title: 'Projetos Comerciais',
    image: '/IMG/service-commercial.jpg',
    desc: 'Móveis que transmitem a identidade da sua marca. Balcões de atendimento, expositores e estações de trabalho ergonômicas.',
    benefits: ['Durabilidade para alto tráfego', 'Identidade visual aplicada', 'Ergonomia garantida', 'Montagem rápida'],
  },
];

export const Services = () => {
  return (
    <div className="overflow-hidden">
      <section className="bg-wood-dark pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/IMG/services-bg.jpg"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-wood-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Especialidades</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Oferecemos soluções completas em marcenaria de alto padrão, do projeto à instalação final.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-serif font-bold text-wood-dark mb-6">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-wood-gold shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 bg-wood-dark text-white px-8 py-4 rounded-sm font-bold hover:bg-wood-gold hover:text-wood-dark transition-all group"
                >
                  Solicitar orçamento deste serviço
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-wood-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wood-dark">Como Trabalhamos</h2>
            <p className="text-slate-500 mt-4">Transparência e profissionalismo em cada etapa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultoria', desc: 'Entendemos suas necessidades e estilo de vida.' },
              { step: '02', title: 'Projeto 3D', desc: 'Visualização realista do seu ambiente planejado.' },
              { step: '03', title: 'Produção', desc: 'Execução precisa com materiais de alto padrão.' },
              { step: '04', title: 'Instalação', desc: 'Montagem limpa, rápida e com garantia.' },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-sm shadow-sm border-t-4 border-wood-gold">
                <span className="text-4xl font-serif font-bold text-wood-gold/20 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-serif font-bold text-wood-dark mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
