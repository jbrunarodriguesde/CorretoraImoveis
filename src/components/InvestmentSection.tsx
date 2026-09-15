import React from 'react';
import { createWhatsAppUrl } from '../data/content';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export const InvestmentSection: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Gostaria de conhecer as oportunidades de investimento imobiliário disponíveis em Pará de Minas.'
  );

  return (
    <section
      id="investimentos"
      className="py-16 sm:py-24 bg-[var(--color-bg-primary)] relative"
      aria-label="Investimentos Imobiliários"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Bloco Visual de Alto Contraste com Fotografia Forte de Imóvel */}
        <div className="relative overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-2xl rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
            
            {/* Coluna Textual Objetiva */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8 z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[var(--color-gold)] text-xs font-semibold uppercase tracking-[0.28em]">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estratégia Patrimonial</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-[var(--color-text-main)]">
                  Seu imóvel também pode ser um <span className="italic font-normal text-[var(--color-gold)]">investimento.</span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal pt-2">
                  Jacqueline Almeida auxilia clientes na identificação de oportunidades imobiliárias estratégicas em Pará de Minas - MG — analisando liquidez, potencial de valorização e geração de renda com segurança jurídica total.
                </p>
              </div>

              {/* Botão Solicitado */}
              <div className="pt-2">
                <a
                  id="investment-opportunities-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#0D0D0D] text-xs font-bold tracking-widest uppercase transition-all shadow-lg active:scale-95 rounded-sm"
                >
                  <span>CONHEÇA AS OPORTUNIDADES</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna com Fotografia Forte de Empreendimento / Imóvel */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[auto] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Empreendimento imobiliário de alto padrão"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
