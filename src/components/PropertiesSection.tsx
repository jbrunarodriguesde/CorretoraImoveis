import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Property, PropertyType } from '../types';
import { PROPERTIES } from '../data/content';
import { PropertyModal } from './PropertyModal';

interface PropertiesSectionProps {
  selectedCategoryFilter?: PropertyType;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({ selectedCategoryFilter }) => {
  const [activeType, setActiveType] = useState<PropertyType>(selectedCategoryFilter || 'todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveType(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const filterTabs: { id: PropertyType; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'casa', label: 'Casas' },
    { id: 'apartamento', label: 'Apartamentos' },
    { id: 'lote', label: 'Lotes' },
    { id: 'investimento', label: 'Investimentos' },
  ];

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesType = activeType === 'todos' || property.type === activeType;
    const matchesSearch =
      searchQuery.trim() === '' ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section
      id="imoveis"
      className="py-24 sm:py-36 bg-[#FAF8F4] border-t border-[#E8E2D7]"
      aria-label="Catálogo de Imóveis"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
              Portfólio Selecionado
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.18] tracking-tight">
              Imóveis à venda
            </h2>
            <p className="font-sans text-base text-[#5A4636] leading-relaxed">
              Propriedades residenciais e oportunidades de investimento com curadoria rigorosa.
            </p>
          </div>

          {/* Busca minimalista */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              id="property-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por localização ou código..."
              className="w-full bg-transparent border-b border-[#E8E2D7] py-2.5 pr-8 text-sm text-[#292725] placeholder-[#5A4636]/50 focus:outline-none focus:border-[#5A4636] transition-colors"
            />
            <Search className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A4636]/40 pointer-events-none" />
          </div>
        </div>

        {/* Filtros em texto editorial (sem pílulas) */}
        <div className="mb-12 flex items-center space-x-8 overflow-x-auto pb-3 border-b border-[#E8E2D7]">
          {filterTabs.map((tab) => {
            const isActive = activeType === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-${tab.id}`}
                onClick={() => setActiveType(tab.id)}
                className={`text-xs uppercase tracking-wider whitespace-nowrap pb-2 transition-colors relative focus:outline-none ${
                  isActive
                    ? 'text-[#292725] font-semibold border-b-2 border-[#5A4636]'
                    : 'text-[#5A4636]/70 hover:text-[#292725]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Lista de Imóveis: Foco na Fotografia e Informação Direta */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-[#F1ECE4] p-8 max-w-xl mx-auto space-y-4">
            <p className="font-serif text-2xl text-[#292725]">Nenhum imóvel encontrado.</p>
            <p className="text-sm text-[#5A4636] leading-relaxed">
              Jacqueline Almeida possui acesso a opções exclusivas reservadas que não são expostas publicamente.
            </p>
            <button
              onClick={() => {
                setActiveType('todos');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#5A4636] text-[#FAF8F4] text-xs font-medium uppercase tracking-widest hover:bg-[#292725] transition-colors"
            >
              Limpar busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                id={`property-card-${property.id}`}
                className="group cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProperty(property)}
              >
                <div>
                  {/* Fotografia Principal Ampla */}
                  <div className="aspect-[4/3] overflow-hidden bg-[#F1ECE4] relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Informações Diretas (Sem excesso de ícones ou badges) */}
                  <div className="pt-5 space-y-2">
                    <p className="text-xs uppercase tracking-wider text-[#5A4636]">
                      {property.typeName} • {property.city}
                    </p>

                    <h3 className="font-serif text-xl text-[#292725] font-normal leading-snug group-hover:text-[#5A4636] transition-colors">
                      {property.title}
                    </h3>

                    <p className="font-serif text-lg font-medium text-[#292725]">
                      {property.priceFormatted}
                    </p>
                  </div>
                </div>

                <div className="pt-3">
                  <span className="text-xs uppercase tracking-widest text-[#5A4636] group-hover:text-[#292725] font-medium inline-flex items-center gap-1 transition-colors">
                    Ver imóvel →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Modal Editorial de Detalhes do Imóvel */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};

