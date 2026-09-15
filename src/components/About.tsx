import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { JacquelineLogo } from './JacquelineLogo';

export const About: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre imóveis com você.'
  );

  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-[#FAF8F4] relative border-b border-[#E8E2D7]"
      aria-label="Sobre Jacqueline Almeida"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Fotografia Elegante de Imóvel com Emblema Integrado */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#1E1915] shadow-xl border border-[#E8E2D7] relative group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente arquitetônico sofisticado"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              
              {/* Emblema Oficial da Marca sobreposto de forma elegante */}
              <div className="absolute bottom-4 left-4 bg-[#060606]/90 backdrop-blur-md border border-[#B8944A]/40 p-3.5 flex items-center gap-3.5 text-white max-w-xs shadow-lg">
                <div className="w-10 h-10 shrink-0">
                  <JacquelineLogo variant="icon" className="w-full h-full" />
                </div>
                <div>
                  <span className="font-serif text-sm font-medium tracking-wide block text-[#FAF8F4]">
                    Jacqueline Almeida
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#B8944A] block">
                    {BROKER_INFO.creci}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pequeno Bloco de Texto + 3 Indicadores Diretos */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-semibold block">
                TRAJETÓRIA & CREDIBILIDADE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.15] tracking-tight">
                20 anos realizando sonhos.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#5A4636] leading-relaxed font-normal">
              Experiência, conhecimento de mercado e atendimento personalizado para encontrar oportunidades que realmente fazem sentido para você.
            </p>

            {/* Apenas 3 Indicadores Solicitados */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#E8E2D7]">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#292725] block">
                  20 anos
                </span>
                <span className="text-xs text-[#5A4636] block uppercase tracking-wider font-medium">
                  de experiência
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#292725] block">
                  Compra & venda
                </span>
                <span className="text-xs text-[#5A4636] block uppercase tracking-wider font-medium">
                  de imóveis
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#292725] block">
                  Investimentos
                </span>
                <span className="text-xs text-[#5A4636] block uppercase tracking-wider font-medium">
                  imobiliários
                </span>
              </div>
            </div>

            {/* Botão Direto */}
            <div className="pt-2">
              <a
                id="about-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#292725] text-[#FAF8F4] hover:bg-[#5A4636] text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                FALAR COM JACQUELINE
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
