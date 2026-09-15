import React from 'react';
import { createWhatsAppUrl } from '../data/content';

export const InvestmentSection: React.FC = () => {
  const handleInvestmentChat = () => {
    const msg = 'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre investimentos e oportunidades imobiliárias.';
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const differentials = [
    {
      number: '01',
      title: 'Análise de Oportunidades',
      description: 'Avaliação técnica de custo por metro quadrado, vocação da região e projeção realista de valorização antes de qualquer compromisso.',
    },
    {
      number: '02',
      title: 'Orientação Personalizada',
      description: 'Direcionamento alinhado ao seu horizonte de tempo, seja para retorno mensal com locação ou ganho expressivo de capital.',
    },
    {
      number: '03',
      title: 'Conhecimento de Mercado',
      description: 'Duas décadas de atuação direta vivenciando ciclos econômicos, novos eixos de expansão urbana e segurança jurídica documental.',
    },
  ];

  return (
    <section
      id="investimentos"
      className="py-24 sm:py-36 bg-[#F1ECE4] border-t border-[#E8E2D7]"
      aria-label="Investimentos Imobiliários"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Editorial */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Investimentos Imobiliários
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight max-w-3xl">
            &ldquo;Investir em imóveis exige mais do que encontrar um bom imóvel.&rdquo;
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#5A4636] leading-relaxed max-w-3xl font-normal">
            Exige compreender localização, liquidez, momento de mercado e objetivos de curto, médio e longo prazo. Com 20 anos de atuação contínua, Jacqueline Almeida auxilia na identificação de ativos sólidos e na estruturação de decisões seguras.
          </p>
        </div>

        {/* Diferenciais em Lista Simples (Sem Cards) */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#E8E2D7] grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {differentials.map((item) => (
            <div key={item.number} className="space-y-3">
              <span className="text-xs font-mono text-[#B8944A] tracking-wider uppercase block">
                {item.number}
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

        {/* Ação simples e elegante */}
        <div className="mt-16 sm:mt-20 pt-8 flex items-center">
          <button
            id="investment-whatsapp-btn"
            onClick={handleInvestmentChat}
            className="px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
          >
            Falar sobre investimentos
          </button>
        </div>

      </div>
    </section>
  );
};
