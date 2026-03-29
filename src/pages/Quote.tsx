import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, Upload, CheckCircle } from 'lucide-react';
import { img } from '../assets/images';

export const Quote = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-wood-dark flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 text-center rounded-sm shadow-2xl border-t-4 border-wood-gold relative z-10"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-wood-dark mb-4">Solicitação Enviada!</h2>
          <p className="text-slate-600 mb-8">
            Recebemos seus detalhes. Nossa equipe entrará em contato em até 24h para agendar uma consultoria ou enviar o orçamento prévio.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-wood-dark text-white px-8 py-3 rounded-sm font-bold hover:bg-wood-gold hover:text-wood-dark transition-all"
          >
            Voltar ao formulário
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wood-light overflow-hidden">
      <section className="bg-wood-dark pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={img('orcamento.png')}
            className="w-full h-full object-cover"
            alt="Workshop Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Solicitar Orçamento</h1>
          <p className="text-slate-400">Dê o primeiro passo para o seu novo ambiente planejado.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nome Completo</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Telefone / WhatsApp</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                      placeholder="(75) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tipo de Projeto</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-wood-gold transition-colors appearance-none">
                    <option>Cozinha Planejada</option>
                    <option>Dormitório / Closet</option>
                    <option>Sala / Home Theater</option>
                    <option>Comercial / Escritório</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Descrição do Projeto</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                    placeholder="Conte-nos um pouco sobre o que você imagina (medidas aproximadas, cores, etc.)"
                  ></textarea>
                </div>

                <div className="border-2 border-dashed border-slate-200 rounded-sm p-8 text-center hover:border-wood-gold transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-wood-gold transition-colors" />
                  <p className="text-sm text-slate-500">
                    Arraste ou clique para enviar uma foto do local ou referência
                  </p>
                  <span className="text-[10px] text-slate-400 uppercase font-bold mt-2 block">(Opcional)</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-wood-dark text-white py-5 rounded-sm font-bold text-lg flex items-center justify-center gap-3 hover:bg-wood-gold hover:text-wood-dark transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-wood-dark text-white p-8 rounded-sm">
              <h3 className="text-xl font-serif font-bold text-wood-gold mb-6">Atendimento Rápido</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Prefere falar diretamente conosco? Clique no botão abaixo e inicie uma conversa agora mesmo.
              </p>
              <a
                href="https://wa.me/5575982884396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-sm font-bold hover:bg-green-500 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direto
              </a>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-wood-dark mb-6">O que acontece depois?</h3>
              <ul className="space-y-6">
                {[
                  { step: '1', title: 'Análise', desc: 'Analisamos seus dados e referências.' },
                  { step: '2', title: 'Contato', desc: 'Ligamos para tirar dúvidas e agendar visita.' },
                  { step: '3', title: 'Orçamento', desc: 'Enviamos a proposta detalhada em 24h.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="w-8 h-8 bg-wood-gold/10 text-wood-gold rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-sm text-wood-dark">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
