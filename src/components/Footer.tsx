import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-wood-gold p-1.5 rounded-sm">
              <Hammer className="w-6 h-6 text-wood-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white leading-none tracking-tight">PREMIO</span>
              <span className="text-[10px] text-wood-gold tracking-[0.2em] uppercase font-bold">Marcenaria</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Transformando madeira em obras de arte duráveis e funcionais. Excelência em móveis planejados em Seabra e toda a região da Chapada Diamantina.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-wood-gold hover:text-wood-dark transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-wood-gold hover:text-wood-dark transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-wood-gold">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors">Nossos Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
            <li><Link to="/orcamento" className="hover:text-white transition-colors">Orçamento</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-wood-gold">Nossos Serviços</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>Cozinhas Planejadas</li>
            <li>Dormitórios & Closets</li>
            <li>Home Theater & Painéis</li>
            <li>Projetos Comerciais</li>
            <li>Móveis Corporativos</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-wood-gold">Contato</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-wood-gold shrink-0" />
              <span>Seabra - BA<br />Centro, CEP 46900-000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-wood-gold shrink-0" />
              <span>(75) 982884396</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-wood-gold shrink-0" />
              <span>WhatsApp: (75) 982884396</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 Marcenaria Premio. Todos os direitos reservados.</p>
        <p>Desenvolvido com excelência.</p>
      </div>
    </footer>
  );
};
