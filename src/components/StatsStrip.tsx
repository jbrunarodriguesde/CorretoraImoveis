import React from 'react';

export const StatsStrip: React.FC = () => {
  const pillars = [
    {
      title: '20 Anos de Mercado',
      description: 'Credibilidade e solidez construídas em duas décadas de atuação contínua.',
    },
    {
      title: 'Atendimento Direto',
      description: 'Condução pessoal e consultiva de Jacqueline em cada etapa da negociação.',
    },
    {
      title: 'Curadoria Rigorosa',
      description: 'Filtro criterioso de propriedades com alto padrão arquitetônico e documental.',
    },
    {
      title: 'Visão Patrimonial',
      description: 'Estratégia para preservação de capital e identificação de valorização real.',
    },
  ];

  return (
    <section
      id="trajetoria"
      className="bg-[#F1ECE4] py-16 sm:py-20 border-y border-[#E8E2D7]"
      aria-label="Trajetória e pilares de atuação"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[11px] font-mono text-[#B8944A] tracking-wider uppercase block">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#292725] font-normal">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4636] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

