import React from 'react';
import { HOW_IT_WORKS, createWhatsAppUrl } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Gostaria de contar o que estou procurando no mercado imobiliário.'
  );

  return (
    <section
      id="como-funciona"
      className="py-24 sm:py-36 bg-[#F1ECE4] border-t border-[#E8E2D7]"
      aria-label="Processo de atendimento"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Editorial */}
        <div className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Etapas Claras
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
            Como funciona a assessoria
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
            Um processo direto e criterioso para conduzir sua busca ou venda com eficiência e serenidade.
          </p>
        </div>

        {/* 4 Passos Editoriais (Sem cards, sem caixas) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 border-t border-[#E8E2D7] pt-12">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              id={`step-${item.step}`}
              className="space-y-3"
            >
              <span className="text-xs font-mono text-[#B8944A] tracking-wider block">
                {item.step}
              </span>
              <h3 className="font-serif text-lg text-[#292725] font-normal">
                {item.title}
              </h3>
              <p className="text-xs text-[#5A4636] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão Editorial */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E8E2D7]">
          <a
            id="how-it-works-start-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
          >
            Agendar uma conversa
          </a>
        </div>

      </div>
    </section>
  );
};

