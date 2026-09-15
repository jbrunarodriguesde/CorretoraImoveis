import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { JacquelineLogo } from './JacquelineLogo';

export const About: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre imóveis em Pará de Minas com você.'
  );

  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-[var(--color-bg-primary)] relative border-b border-[var(--color-border-subtle)]"
      aria-label="Sobre Jacqueline Almeida"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Fotografia Elegante de Imóvel com Emblema Integrado */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black/30 shadow-xl border border-[var(--color-border-subtle)] relative group rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente arquitetônico sofisticado"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              
              {/* Emblema Oficial da Marca sobreposto de forma elegante */}
              <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md border border-[var(--color-gold)]/40 p-3.5 flex items-center gap-3.5 text-white max-w-xs shadow-lg rounded-xs">
                <div className="w-10 h-10 shrink-0">
                  <JacquelineLogo variant="icon" className="w-full h-full" />
                </div>
                <div>
                  <span className="font-serif text-sm font-medium tracking-wide block text-white">
                    Jacqueline Almeida
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[var(--color-gold)] block">
                    {BROKER_INFO.creci}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pequeno Bloco de Texto + 3 Indicadores Diretos */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] font-semibold block">
                TRAJETÓRIA & CREDIBILIDADE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-main)] font-normal leading-[1.15] tracking-tight">
                20 anos realizando sonhos.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
              Experiência, conhecimento aprofundado do mercado de Pará de Minas - MG e atendimento personalizado para encontrar oportunidades que realmente fazem sentido para você.
            </p>

            {/* Apenas 3 Indicadores Solicitados */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[var(--color-border-subtle)]">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-gold)] block">
                  20 anos
                </span>
                <span className="text-xs text-[var(--color-text-secondary)] block uppercase tracking-wider font-medium">
                  de experiência
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-gold)] block">
                  Compra & venda
                </span>
                <span className="text-xs text-[var(--color-text-secondary)] block uppercase tracking-wider font-medium">
                  de imóveis
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-gold)] block">
                  Investimentos
                </span>
                <span className="text-xs text-[var(--color-text-secondary)] block uppercase tracking-wider font-medium">
                  seguros
                </span>
              </div>
            </div>

            {/* Botão de Contato */}
            <div className="pt-2">
              <a
                id="about-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#0D0D0D] text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-95 rounded-sm"
              >
                Conversar com Jacqueline
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
