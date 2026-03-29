import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Instagram, Mail, Clock } from 'lucide-react';
import { img } from '../assets/images';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="bg-wood-dark pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={img('sobre.png')}
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Contato</h1>
          <p className="text-slate-400">Estamos prontos para atender você em Seabra e região.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-wood-dark mb-12">Fale Conosco</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-wood-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-wood-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-wood-dark mb-2">Endereço</h3>
                  <p className="text-slate-600">Rua da Marcenaria, 123 - Centro<br />Seabra - BA, CEP 46900-000</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-wood-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-wood-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-wood-dark mb-2">Telefone & WhatsApp</h3>
                  <p className="text-slate-600">(75) 982884396</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-wood-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-wood-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-wood-dark mb-2">Horário de Atendimento</h3>
                  <p className="text-slate-600">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-slate-600">Sábado: 08:00 às 12:00</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-6">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-sm border border-slate-200 hover:border-wood-gold hover:text-wood-gold transition-all group">
                    <Instagram className="w-5 h-5" />
                    <span className="font-bold text-sm">@marcenariapremio</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-sm border border-slate-200 hover:border-wood-gold hover:text-wood-gold transition-all group">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-bold text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-auto bg-slate-100 rounded-sm overflow-hidden shadow-inner relative">
            {/* Placeholder for Google Maps - In a real app we'd use an iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15617.52550186544!2d-41.7766185!3d-12.4194444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743387799999999%3A0x743387799999999!2sSeabra%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Marcenaria Premio"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-wood-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Pronto para começar seu projeto?</h2>
          <p className="text-slate-400 mb-12">
            Não deixe para amanhã o ambiente que você pode planejar hoje. Entre em contato e agende uma visita técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5575982884396" className="bg-wood-gold text-wood-dark px-10 py-4 rounded-sm font-bold hover:bg-white transition-all">
              WhatsApp Agora
            </a>
            <a href="mailto:contato@marcenariapremio.com" className="bg-white/5 border border-white/20 px-10 py-4 rounded-sm font-bold hover:bg-white/10 transition-all">
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
