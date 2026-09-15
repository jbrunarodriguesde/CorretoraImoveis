import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { BROKER_INFO, createWhatsAppUrl, HERO_SLIDES } from '../data/content';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slideshow smoothly every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const whatsappUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre imóveis em Minas Gerais.'
  );

  return (
    <section
      id="inicio"
      className="relative w-full h-[88vh] min-h-[580px] max-h-[920px] bg-[#14100D] overflow-hidden select-none"
      aria-label="Apresentação de Imóveis e Oportunidades"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sequence of high-resolution architectural photographs */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image with subtle slow zoom for life and depth */}
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Contrast Overlay with warm brown / charcoal tones for text legibility without obscuring the architecture */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/90 via-[#14100D]/45 to-[#14100D]/65" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        );
      })}

      {/* Caption discreta da fotografia em exibição no topo à direita */}
      <div className="absolute top-28 sm:top-32 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2 bg-[#14100D]/60 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 text-[11px] text-white/80 uppercase tracking-widest font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        {HERO_SLIDES[currentSlide].tag} • {HERO_SLIDES[currentSlide].title}
      </div>

      {/* Conteúdo textual objetivo e direto sobreposto */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-24">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Tag de Autoridade */}
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 sm:w-10 bg-[#D4AF37]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E8DCC4] font-medium drop-shadow-sm">
              20 ANOS DE EXPERIÊNCIA
            </span>
          </div>

          {/* Título Principal Curto e Elegante */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF8F4] font-normal tracking-tight leading-[1.08] drop-shadow-md">
            Encontre seu <span className="italic font-normal text-[#E8DCC4]">próximo imóvel.</span>
          </h1>

          {/* Frase Curta Solicitada */}
          <p className="font-sans text-base sm:text-xl text-[#F1ECE4] font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            Casas, apartamentos, lotes e oportunidades de investimento.
          </p>

          {/* Botões Solicitados */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
            <button
              id="hero-ver-imoveis-btn"
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#FAF8F4] text-[#292725] hover:bg-[#E8DCC4] text-xs font-semibold tracking-widest uppercase transition-all shadow-lg text-center active:scale-95"
            >
              VER IMÓVEIS
            </button>

            <a
              id="hero-fale-com-jacqueline-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#5A4636]/80 hover:bg-[#3A2C20] backdrop-blur-md text-[#FAF8F4] border border-white/20 hover:border-[#D4AF37] text-xs font-medium tracking-widest uppercase text-center transition-all shadow-lg active:scale-95"
            >
              FALE COM JACQUELINE
            </a>
          </div>

        </div>

        {/* Barra Inferior com Indicadores e "Deslize para explorar" */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-white/15 flex items-center justify-between">
          
          {/* Navegação por Bullets com barras elegantes */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir para fotografia ${idx + 1}`}
                className={`h-1.5 transition-all duration-500 ${
                  idx === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
            <span className="ml-3 text-[11px] font-mono text-white/70 tracking-wider">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Indicação Discreta: "Deslize para explorar" */}
          <button
            onClick={onExploreClick}
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-[0.2em] font-medium"
            aria-label="Deslize para explorar os imóveis"
          >
            <span>Deslize para explorar</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>

        </div>
      </div>

      {/* Setas Laterais Elegantes com Backdrop Blur */}
      <button
        onClick={prevSlide}
        aria-label="Fotografia anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-colors hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próxima fotografia"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-colors hidden md:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </section>
  );
};
