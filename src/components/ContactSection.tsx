import React, { useState } from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    email: '',
    interest: 'Comprar um imóvel',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const contactReasons = [
    'Comprar um imóvel',
    'Vender meu imóvel',
    'Investimentos imobiliários',
    'Busca de imóvel específico',
    'Avaliação imobiliária',
    'Outro assunto',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);

      const fullText = `*Contato via Site*\n\n*Nome:* ${formData.name}\n*WhatsApp:* ${formData.whatsapp}\n*E-mail:* ${formData.email}\n*Objetivo:* ${formData.interest}\n*Mensagem:* ${formData.message || 'Sem mensagem adicional'}`;
      const url = createWhatsAppUrl(fullText);
      window.open(url, '_blank');
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      interest: 'Comprar um imóvel',
      message: '',
    });
  };

  return (
    <section
      id="contato"
      className="py-24 sm:py-36 bg-[#FAF8F4] border-t border-[#E8E2D7]"
      aria-label="Contato"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Atendimento Exclusivo
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
            Iniciar conversa
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
            Dê o primeiro passo para o seu próximo imóvel ou investimento com discrição e orientação técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start border-t border-[#E8E2D7] pt-12">
          
          {/* Coluna Esquerda: Informações Tipográficas Limpas (Sem caixas) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-[#292725] font-normal mb-1">
                {BROKER_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B8944A]">
                {BROKER_INFO.role} • {BROKER_INFO.creci}
              </p>
              <p className="text-xs text-[#5A4636] mt-1 font-normal">
                {BROKER_INFO.experienceYears} de experiência no mercado imobiliário
              </p>
            </div>

            <div className="space-y-6 text-xs text-[#5A4636]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#5A4636]/70 block mb-1">
                  WhatsApp & Telefone
                </span>
                <a
                  href={createWhatsAppUrl('Olá, Jacqueline! Gostaria de falar sobre imóveis.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-base text-[#292725] hover:text-[#5A4636] transition-colors"
                >
                  {BROKER_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#5A4636]/70 block mb-1">
                  E-mail Direto
                </span>
                <a
                  href={`mailto:${BROKER_INFO.email}`}
                  className="font-sans text-sm text-[#292725] hover:text-[#5A4636] transition-colors"
                >
                  {BROKER_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#5A4636]/70 block mb-1">
                  Instagram
                </span>
                <a
                  href={BROKER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[#292725] hover:text-[#5A4636] transition-colors"
                >
                  {BROKER_INFO.instagramHandle}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#5A4636]/70 block mb-1">
                  Região de Atuação
                </span>
                <p className="font-sans text-sm text-[#292725]">
                  {BROKER_INFO.region}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#5A4636] leading-relaxed pt-6 border-t border-[#E8E2D7]">
              Atendimentos presenciais com hora marcada e visitas previamente organizadas para respeitar a sua agenda.
            </p>
          </div>

          {/* Coluna Direita: Formulário Editorial com Linhas e Espaçamento Natural */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 space-y-4">
                <h3 className="font-serif text-2xl text-[#292725] font-normal">
                  Mensagem encaminhada.
                </h3>
                <p className="text-sm text-[#5A4636] leading-relaxed">
                  Sua mensagem foi direcionada para o WhatsApp de Jacqueline Almeida. Você receberá um retorno em breve.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs uppercase tracking-widest text-[#5A4636] underline underline-offset-4 hover:text-[#292725]"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-widest text-[#5A4636] mb-2 font-medium">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-transparent border-b border-[#E8E2D7] py-3 text-sm text-[#292725] placeholder-[#5A4636]/40 focus:outline-none focus:border-[#5A4636] transition-colors rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-[10px] uppercase tracking-widest text-[#5A4636] mb-2 font-medium">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="contact-whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="(43) 99999-9999"
                      className="w-full bg-transparent border-b border-[#E8E2D7] py-3 text-sm text-[#292725] placeholder-[#5A4636]/40 focus:outline-none focus:border-[#5A4636] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-widest text-[#5A4636] mb-2 font-medium">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full bg-transparent border-b border-[#E8E2D7] py-3 text-sm text-[#292725] placeholder-[#5A4636]/40 focus:outline-none focus:border-[#5A4636] transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-reason" className="block text-[10px] uppercase tracking-widest text-[#5A4636] mb-2 font-medium">
                    Objetivo
                  </label>
                  <select
                    id="contact-reason"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E8E2D7] py-3 text-sm text-[#292725] focus:outline-none focus:border-[#5A4636] transition-colors rounded-none"
                  >
                    {contactReasons.map((reason, idx) => (
                      <option key={idx} value={reason} className="bg-[#FAF8F4] text-[#292725]">
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-widest text-[#5A4636] mb-2 font-medium">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Região preferida, perfil do imóvel ou objetivo de investimento..."
                    className="w-full bg-transparent border-b border-[#E8E2D7] py-3 text-sm text-[#292725] placeholder-[#5A4636]/40 focus:outline-none focus:border-[#5A4636] transition-colors resize-none rounded-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    id="btn-submit-contact"
                    disabled={isSending}
                    className="px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors disabled:opacity-50"
                  >
                    {isSending ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

