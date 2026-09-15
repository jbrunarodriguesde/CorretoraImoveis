import React from 'react';
import { createWhatsAppUrl } from '../data/content';

export const DifferentialsSection: React.FC = () => {
  const whatsappDirect = createWhatsAppUrl(
    'Olá, Jacqueline! Gostaria de entender mais sobre sua assessoria imobiliária em Londrina.'
  );

  const differentials = [
    {
      title: '20 anos de mercado',
      description: 'Duas décadas de experiência prática contínua, acompanhando os ciclos e a consolidação dos principais condomínios de Londrina.',
    },
    {
      title: 'Conhecimento profundo de Londrina',
      description: 'Visão detalhada sobre cada bairro, tendências de valorização por metro quadrado e novas áreas de expansão da cidade.',
    },
    {
      title: 'Atendimento direto com a corretora',
      description: 'Sem intermediários ou atendimentos impessoais. Cada etapa do processo é conduzida pessoalmente por Jacqueline Almeida.',
    },
    {
      title: 'Negociação discreta',
      description: 'Total sigilo e postura ética rigorosa para clientes que priorizam privacidade patrimonial e tranquilidade.',
    },
    {
      title: 'Curadoria criteriosa de imóveis',
      description: 'Seleção apurada que valoriza padrão construtivo, documentação regular e real coerência de preço com o mercado.',
    },
    {
      title: 'Segurança documental',
      description: 'Acompanhamento minucioso de certidões, contratos e cartórios, protegendo o patrimônio de compradores e vendedores.',
    },
  ];

  return (
    <section
      id="diferenciais"
      className="py-24 sm:py-36 bg-[#F1ECE4] border-t border-[#E8E2D7]"
      aria-label="Diferenciais"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Pilares de Atuação
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
            Por que contar com Jacqueline Almeida
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
            Uma abordagem fundamentada em compromisso ético, precisão técnica e relacionamento duradouro com cada cliente.
          </p>
        </div>

        {/* Blocos Editoriais Integrados à Página (Sem Caixas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16 border-t border-[#E8E2D7] pt-12">
          {differentials.map((item, index) => (
            <div key={index} className="space-y-2">
              <span className="text-xs font-mono text-[#B8944A] tracking-wider block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl text-[#292725] font-normal">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4636] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Linha de contato sutil */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E8E2D7] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-xs text-[#5A4636] font-normal">
            Deseja avaliar um imóvel ou receber assessoria personalizada?
          </p>
          <a
            id="diff-whatsapp-cta"
            href={whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors self-start sm:self-auto"
          >
            Falar com Jacqueline
          </a>
        </div>

      </div>
    </section>
  );
};

