import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const HowICanHelpSection: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Compra de imóveis',
      description: 'Curadoria focada em condomínios fechados, casas de alto padrão e terrenos na região nobre de Londrina.',
      message: 'Olá, Jacqueline! Gostaria de sua assessoria para encontrar e comprar um imóvel.',
    },
    {
      number: '02',
      title: 'Venda de imóveis',
      description: 'Divulgação discreta e qualificada para compradores selecionados, com precificação precisa e acompanhamento total.',
      message: 'Olá, Jacqueline! Desejo cadastrar e vender meu imóvel com sua assessoria.',
    },
    {
      number: '03',
      title: 'Investimentos imobiliários',
      description: 'Estruturação de carteira para rentabilidade em locação ou valorização de capital em loteamentos nobres.',
      message: 'Olá, Jacqueline! Tenho interesse em entender oportunidades de investimento imobiliário.',
    },
    {
      number: '04',
      title: 'Consultoria imobiliária',
      description: 'Análise de viabilidade, avaliação de mercado e orientação documental para tomadas de decisão seguras.',
      message: 'Olá, Jacqueline! Gostaria de agendar uma consultoria imobiliária personalizada.',
    },
  ];

  return (
    <section
      id="como-posso-ajudar"
      className="py-24 sm:py-36 bg-[#FAF8F4] border-t border-[#E8E2D7]"
      aria-label="Serviços e Consultoria"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Editorial */}
        <div className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Atuação Profissional
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
            Como posso ajudar você
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
            Atendimento direto e individualizado, garantindo discrição em cada etapa da negociação.
          </p>
        </div>

        {/* Lista Editorial: 01, 02, 03, 04 com divisores finos, sem cards */}
        <div className="border-t border-[#E8E2D7]">
          {services.map((item) => {
            const url = createWhatsAppUrl(item.message);
            return (
              <a
                key={item.number}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-8 sm:py-10 border-b border-[#E8E2D7] flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-8 transition-colors hover:bg-[#F1ECE4]/40 px-2 sm:px-4"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="text-xs font-mono text-[#B8944A] tracking-wider shrink-0">
                    {item.number}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#292725] group-hover:text-[#5A4636] transition-colors font-normal">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4636] max-w-xl leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A4636] group-hover:text-[#292725] shrink-0 self-end md:self-baseline pt-2 md:pt-0">
                  <span>Conversar</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

