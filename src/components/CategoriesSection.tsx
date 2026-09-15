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
      className="py-16 sm:py-24 bg-[#1E1915] text-[#FAF8F4] relative overflow-hidden"
      aria-label="Categorias de Imóveis"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Objetivo */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            CATEGORIAS DE IMÓVEIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF8F4]">
            Encontre o imóvel ideal para você
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Selecione uma categoria para explorar propriedades selecionadas com alto padrão e liquidez.
          </p>
        </div>

        {/* 4 Grandes Imagens para cada Categoria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              onClick={() => onSelectCategory(category.slug)}
              className="group cursor-pointer relative h-80 sm:h-96 overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-end p-6"
            >
              {/* Fotografia Grande com Zoom no Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />

              {/* Camada de Contraste Elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100D] via-[#14100D]/50 to-transparent group-hover:via-[#14100D]/40 transition-colors" />

              {/* Informações Resumidas */}
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
                  {category.countLabel}
                </span>

                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-white font-medium tracking-wide">
                    {category.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-[#14100D] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
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
