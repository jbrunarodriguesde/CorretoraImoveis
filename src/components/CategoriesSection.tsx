import React from 'react';
import { CATEGORIES } from '../data/content';
import { PropertyType } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: PropertyType) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section
      id="categorias"
      className="py-16 sm:py-24 bg-[var(--color-bg-secondary)] text-[var(--color-text-main)] relative overflow-hidden border-t border-b border-[var(--color-border-subtle)]"
      aria-label="Categorias de Imóveis"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Objetivo */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold block">
            CATEGORIAS DE IMÓVEIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--color-text-main)]">
            Encontre o imóvel ideal para você
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            Selecione uma categoria para explorar propriedades selecionadas com alto padrão e liquidez em Pará de Minas - MG.
          </p>
        </div>

        {/* 4 Grandes Imagens para cada Categoria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              onClick={() => onSelectCategory(category.slug)}
              className="group cursor-pointer relative h-80 sm:h-96 overflow-hidden border border-[var(--color-border-subtle)] hover:border-[var(--color-gold)] transition-all duration-500 flex flex-col justify-end p-6 rounded-sm shadow-sm hover:shadow-xl"
            >
              {/* Fotografia Grande com Zoom no Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />

              {/* Camada de Contraste Elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent group-hover:via-black/35 transition-colors" />

              {/* Informações Resumidas */}
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold-light)] font-medium block">
                  {category.countLabel}
                </span>

                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-white font-medium tracking-wide">
                    {category.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[var(--color-gold)] group-hover:text-[#0D0D0D] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-white/80 line-clamp-2 pt-1 font-normal leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
