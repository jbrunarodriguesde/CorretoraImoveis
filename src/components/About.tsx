import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import jacquelineConsultingPhoto from '../assets/images/jacqueline_consulting_1789494624345.jpg';

export const About: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Gostaria de conversar e agendar um atendimento personalizado com você.'
  );

  return (
    <section
      id="sobre"
      className="py-24 sm:py-36 bg-[#FAF8F4] relative"
      aria-label="Sobre Jacqueline Almeida"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Fotografia grande da Jacqueline */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#F1ECE4]">
                <img
                  src={jacquelineConsultingPhoto}
                  alt="Jacqueline Almeida - Atendimento consultivo e estratégico"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#5A4636]">
                <span className="font-serif italic text-sm text-[#292725]">Atendimento consultivo e estratégico</span>
                <span className="text-[11px] uppercase tracking-wider text-[#B8944A] font-medium">{BROKER_INFO.creci}</span>
              </div>
            </div>
          </div>

          {/* Texto editorial diretamente sobre o fundo */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
                Trajetória & Credibilidade
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.18] tracking-tight">
                Experiência para cuidar de <span className="italic">grandes decisões.</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#5A4636] text-base sm:text-lg leading-relaxed font-normal">
              <p className="font-serif text-xl sm:text-2xl text-[#292725] font-normal leading-snug">
                Há 20 anos, Jacqueline Almeida atua no mercado imobiliário ajudando pessoas a encontrar o imóvel ideal, realizar planos familiares e estruturar investimentos consistentes.
              </p>

              <p>
                Seu atendimento é fundamentado na escuta cuidadosa, no conhecimento técnico dos bairros e condomínios da região e na avaliação criteriosa de cada oportunidade antes de qualquer recomendação.
              </p>

              <p className="text-sm sm:text-base text-[#5A4636]/90">
                A aquisição ou venda de um imóvel exige mais do que um catálogo: requer análise documental detalhada, compreensão de tendências de valorização e uma negociação conduzida com discrição e serenidade.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <a
                id="about-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
              >
                Falar com Jacqueline
              </a>

              <span className="text-xs text-[#5A4636]/80 italic">
                {BROKER_INFO.experienceBadge}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

