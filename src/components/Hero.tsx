import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import jacquelinePhoto from '../assets/images/jacqueline_portrait_1789491921605.jpg';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de falar sobre imóveis e oportunidades com você.'
  );

  return (
    <section
      id="inicio"
      className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#FAF8F4] relative"
      aria-label="Apresentação inicial"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto Editorial */}
          <div className="lg:col-span-7 space-y-8">
            
            <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
              Especialista em Investimentos Imobiliários • 20 Anos
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292725] font-normal leading-[1.12] tracking-tight">
              Seu próximo imóvel começa com uma{' '}
              <span className="italic font-normal text-[#5A4636]">boa escolha.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#5A4636] max-w-xl leading-relaxed font-normal">
              Experiência, discrição e atendimento personalizado para ajudar você a comprar, vender ou investir em propriedades com segurança.
            </p>

            {/* Botões simples e retos */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
              >
                Conhecer imóveis
              </button>

              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#5A4636] text-[#5A4636] hover:bg-[#5A4636] hover:text-[#FAF8F4] text-xs font-medium tracking-widest uppercase text-center transition-colors"
              >
                Fale comigo
              </a>
            </div>

            <p className="text-xs text-[#5A4636]/70 italic pt-2">
              &ldquo;{BROKER_INFO.slogan}&rdquo;
            </p>

          </div>

          {/* Coluna de Fotografia Editorial */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-[#F1ECE4]">
                <img
                  src={jacquelinePhoto}
                  alt="Jacqueline Almeida - Corretora de Imóveis"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#5A4636]">
                <span className="font-serif italic text-sm text-[#292725]">Jacqueline Almeida</span>
                <span className="text-[11px] tracking-wider uppercase text-[#B8944A] font-medium">{BROKER_INFO.creci}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


