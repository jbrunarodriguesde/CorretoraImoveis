import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';

interface CtaSectionProps {
  onViewProperties: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de agendar uma conversa sobre imóveis.'
  );

  return (
    <section
      id="cta-final"
      className="py-24 sm:py-36 bg-[#F1ECE4] border-t border-[#E8E2D7]"
      aria-label="Agendamento"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
        
        <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
          Próximo Passo
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight max-w-2xl mx-auto">
          Vamos conversar sobre o seu próximo imóvel?
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#5A4636] max-w-xl mx-auto leading-relaxed font-normal">
          Seja para morar, investir ou negociar seu patrimônio com discrição em Londrina, tenha uma assessoria técnica do início ao fim.
        </p>

        <div className="pt-4">
          <a
            id="cta-final-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
          >
            Conversar com Jacqueline
          </a>
        </div>

        <p className="text-xs text-[#5A4636] pt-4 font-normal">
          Atendimento personalizado • {BROKER_INFO.phoneDisplay}
        </p>

      </div>
    </section>
  );
};

