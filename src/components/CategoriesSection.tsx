import React from 'react';
import { CATEGORIES } from '../data/content';
import { PropertyType } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (category: PropertyType) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const featured = CATEGORIES[0]; // Casas
  const others = CATEGORIES.slice(1); // Lotes, Aptos, Investimentos

  return (
    <section
      id="categorias"
      className="py-24 sm:py-32 bg-[#FAF8F4] border-t border-[#E8E2D7]"
      aria-label="Categorias de Imóveis"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header editorial */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
            Segmentos de Atuação
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.18] tracking-tight">
            Curadoria para cada <span className="italic">momento de vida.</span>
          </h2>
          <p className="font-sans text-base text-[#5A4636] leading-relaxed">
            Seja para residência própria ou ampliação de patrimônio, cada categoria conta com propriedades selecionadas com rigor.
          </p>
        </div>

        {/* Layout Assimétrico Editorial: Fotografia Grande + Lista Arquitetônica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Categoria em Destaque (Casas) - Fotografia Ampla */}
          <div
            id={`category-card-${featured.id}`}
            onClick={() => onSelectCategory(featured.slug)}
            className="lg:col-span-7 group cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#F1ECE4] relative">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
            </div>

            <div className="pt-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8944A]">01 • Destaque</span>
                <span className="text-xs text-[#5A4636] font-medium group-hover:text-[#292725] transition-colors">
                  Ver imóveis →
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] font-normal">
                {featured.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4636] leading-relaxed max-w-xl">
                {featured.description}
              </p>
            </div>
          </div>

          {/* Outras Categorias - Coluna Editorial com 3 itens */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-[#E8E2D7]">
            {others.map((cat, idx) => (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.slug)}
                className="py-6 first:pt-0 last:pb-0 group cursor-pointer flex gap-5 items-start"
              >
                <div className="w-28 sm:w-32 aspect-[4/3] shrink-0 overflow-hidden bg-[#F1ECE4]">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8944A] block">
                    0{idx + 2}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#292725] group-hover:text-[#5A4636] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#5A4636] line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="inline-block text-xs text-[#292725] font-medium pt-1 group-hover:translate-x-1 transition-transform">
                    Ver opções →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

