import React from 'react';
import { REAL_ESTATE_SERVICES, createWhatsAppUrl } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicos"
      className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-subtle)] relative"
      aria-label="Serviços Imobiliários"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] font-semibold block">
            ATUAÇÃO PROFISSIONAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-main)] font-normal tracking-tight">
            Serviços
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            Soluções completas com discrição, agilidade e segurança jurídica para cada etapa da sua jornada imobiliária em Pará de Minas - MG.
          </p>
        </div>

        {/* Lista Visual Simples e Elegante (Sem cards grandes) */}
        <div className="divide-y divide-[var(--color-border-subtle)] border-t border-b border-[var(--color-border-subtle)]">
          {REAL_ESTATE_SERVICES.map((serv, index) => {
            const waUrl = createWhatsAppUrl(serv.whatsappMessage);
            return (
              <a
                key={serv.id}
                id={`service-item-${serv.id}`}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-[var(--color-bg-secondary)] px-4 -mx-4 rounded-sm"
              >
                <div className="flex items-start sm:items-center gap-6 sm:gap-8">
                  {/* Número em estilo editorial */}
                  <span className="font-mono text-xs sm:text-sm text-[var(--color-gold)] tracking-wider pt-1 sm:pt-0 shrink-0 font-semibold">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text-main)] group-hover:text-[var(--color-gold)] transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1 max-w-xl font-normal leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[var(--color-text-secondary)] group-hover:text-[var(--color-gold)] font-medium shrink-0 self-end sm:self-center transition-colors">
                  <span>Conversar</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
