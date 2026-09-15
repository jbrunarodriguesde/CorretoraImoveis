import React from 'react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-36 bg-[#FAF8F4] border-t border-[#E8E2D7]"
      aria-label="Depoimentos"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Confiança & Relacionamento
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
            A voz de quem confiou suas decisões
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
            Relatos de clientes assessorados com dedicação, discrição e segurança em Londrina.
          </p>
        </div>

        {/* Citações Elegantes (Sem cards, sem estrelas, sem caixas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-[#E8E2D7] pt-12">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-${test.id}`}
              className="space-y-6 flex flex-col justify-between"
            >
              <blockquote className="font-serif text-lg sm:text-xl text-[#292725] font-normal leading-relaxed italic">
                &ldquo;{test.content}&rdquo;
              </blockquote>

              <div className="space-y-1 pt-4 border-t border-[#E8E2D7]/60">
                <p className="text-sm font-medium text-[#292725]">
                  {test.clientName}
                </p>
                <p className="text-xs text-[#5A4636]">
                  {test.transactionType} • {test.clientRole}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

