import React, { useState } from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Comprar imóvel em Pará de Minas',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const directWhatsAppUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre oportunidades imobiliárias em Pará de Minas - MG.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `*Contato via Site*\n\n*Nome:* ${formData.name}\n*Telefone/WhatsApp:* ${formData.phone}\n*Interesse:* ${formData.interest}\n*Mensagem:* ${formData.message || 'Gostaria de agendar um atendimento para imóveis em Pará de Minas.'}`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-24 bg-[var(--color-bg-secondary)] text-[var(--color-text-main)] relative overflow-hidden border-t border-[var(--color-border-subtle)]"
      aria-label="Contato com Jacqueline Almeida"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto Principal + Grande Botão WhatsApp + Informações */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold block">
                ATENDIMENTO DIRETO
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--color-text-main)] font-normal tracking-tight leading-[1.1]">
                Vamos encontrar seu <span className="italic font-normal text-[var(--color-gold)]">próximo imóvel?</span>
              </h2>

              <p className="font-sans text-base sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-normal max-w-xl pt-1">
                Fale com Jacqueline e encontre uma oportunidade em Pará de Minas - MG que combine com seus objetivos.
              </p>
            </div>

            {/* Botão Grande de WhatsApp Verde Oficial */}
            <div className="pt-2">
              <a
                id="contact-whatsapp-main-btn"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm sm:text-base font-bold tracking-wider uppercase transition-all shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] active:scale-95 rounded-sm"
              >
                {/* Ícone Oficial do WhatsApp */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.18-.543-1.897-.788-3.116-2.739-3.21-2.865-.094-.127-.768-1.021-.768-1.947 0-.925.485-1.381.657-1.571.172-.19.375-.238.5-.238.125 0 .25 0 .36.006.115.006.27-.044.422.324.156.378.532 1.3.578 1.395.047.094.078.204.016.328-.063.125-.094.204-.188.312-.094.11-.198.245-.282.329-.094.094-.193.197-.083.385.11.19.489.807 1.05 1.306.721.642 1.328.841 1.516.935.188.094.297.078.406-.047.11-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.063 1.094.516 1.281.61.188.094.312.141.36.219.047.078.047.453-.097.858z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.399C8.423 21.499 10.147 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.637 0-3.151-.486-4.424-1.321l-.317-.208-2.962.831.848-2.909-.228-.333C4.019 14.897 3.518 13.491 3.518 12c0-4.677 3.805-8.482 8.482-8.482 4.677 0 8.482 3.805 8.482 8.482 0 4.677-3.805 8.482-8.482 8.482z" />
                </svg>
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>

            {/* Informações de Atendimento */}
            <div className="pt-6 border-t border-[var(--color-border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>Pará de Minas - MG (Atendimento presencial e digital)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>{BROKER_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>{BROKER_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>{BROKER_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Direto de Contato */}
          <div className="lg:col-span-5 bg-[var(--color-bg-primary)] p-6 sm:p-8 border border-[var(--color-border-subtle)] rounded-sm shadow-xl">
            <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text-main)] mb-2">
              Envie uma mensagem
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mb-6">
              Preencha os campos abaixo para abrir uma conversa direta no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-1 font-medium">
                  Seu Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nome completo"
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] focus:border-[var(--color-gold)] px-3.5 py-2.5 text-xs text-[var(--color-text-main)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none transition-colors rounded-xs"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-1 font-medium">
                  Telefone / WhatsApp
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(37) 99999-9999"
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] focus:border-[var(--color-gold)] px-3.5 py-2.5 text-xs text-[var(--color-text-main)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none transition-colors rounded-xs"
                />
              </div>

              <div>
                <label htmlFor="contact-interest" className="block text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-1 font-medium">
                  Interesse Principal
                </label>
                <select
                  id="contact-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] focus:border-[var(--color-gold)] px-3.5 py-2.5 text-xs text-[var(--color-text-main)] focus:outline-none transition-colors rounded-xs"
                >
                  <option value="Comprar imóvel em Pará de Minas">Comprar imóvel em Pará de Minas</option>
                  <option value="Vender meu imóvel">Vender meu imóvel</option>
                  <option value="Investimentos Imobiliários">Investimentos Imobiliários</option>
                  <option value="Avaliação de Imóvel">Avaliação e Regularização</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-1 font-medium">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva o que procura (número de quartos, condomínio, etc)..."
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] focus:border-[var(--color-gold)] px-3.5 py-2.5 text-xs text-[var(--color-text-main)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none transition-colors resize-none rounded-xs"
                />
              </div>

              <button
                type="submit"
                id="submit-contact-form-btn"
                className="w-full py-3.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#0D0D0D] text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-xs"
              >
                <span>Enviar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
