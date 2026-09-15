import React, { useState } from 'react';
import { Search, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Property, PropertyType } from '../types';
import { PROPERTIES, createWhatsAppUrl } from '../data/content';
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
    { id: 'todos', label: 'Todos os Imóveis' },
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

  const handleQuickWhatsApp = (e: React.MouseEvent, property: Property) => {
    e.stopPropagation();
    const msg = `Olá, Jacqueline! Gostaria de mais informações sobre o imóvel: ${property.title} (${property.priceFormatted}) localizado em ${property.city}.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section
      id="imoveis"
      className="py-16 sm:py-24 bg-[#FAF8F4] relative scroll-mt-20"
      aria-label="Imóveis em Destaque"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Visual e Direto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-[#E8E2D7] pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-semibold block">
              PORTFÓLIO EXCLUSIVO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal tracking-tight">
              IMÓVEIS EM DESTAQUE
            </h2>
            <p className="text-sm sm:text-base text-[#5A4636]">
              Casas, apartamentos, lotes e oportunidades com alto padrão arquitetônico em Minas Gerais.
            </p>
          </div>

          {/* Busca Rápida de Imóvel */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              id="property-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por cidade ou código..."
              className="w-full bg-[#F1ECE4]/80 border border-[#E8E2D7] focus:border-[#5A4636] px-4 py-2.5 pr-10 text-xs sm:text-sm text-[#292725] placeholder-[#5A4636]/60 focus:outline-none transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A4636]/60 pointer-events-none" />
          </div>
        </div>

        {/* Filtros em Barra Editorial */}
        <div className="mb-10 flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeType === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-${tab.id}`}
                onClick={() => setActiveType(tab.id)}
                className={`text-xs uppercase tracking-wider px-4 py-2.5 whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#292725] text-[#FAF8F4] border-[#292725] font-medium shadow-sm'
                    : 'bg-white/60 text-[#5A4636] border-[#E8E2D7] hover:border-[#5A4636] hover:text-[#292725]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grade Editorial com Fotografias Grandes e Informações Resumidas */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-[#F1ECE4] p-8 max-w-xl mx-auto space-y-4">
            <p className="font-serif text-2xl text-[#292725]">Nenhum imóvel encontrado nesta categoria.</p>
            <p className="text-sm text-[#5A4636]">
              Entre em contato direto com a Jacqueline para opções privativas e lançamentos off-market.
            </p>
            <button
              onClick={() => {
                setActiveType('todos');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#5A4636] text-[#FAF8F4] text-xs font-medium uppercase tracking-widest hover:bg-[#292725] transition-colors"
            >
              Ver todos os imóveis
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                id={`property-card-${property.id}`}
                className="group cursor-pointer bg-white border border-[#E8E2D7] hover:border-[#5A4636]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden"
                onClick={() => setSelectedProperty(property)}
              >
                <div>
                  {/* Fotografia Grande Principal */}
                  <div className="aspect-[16/11] overflow-hidden bg-[#1E1915] relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tag de categoria / cidade sobre a imagem */}
                    <div className="absolute top-3 left-3 bg-[#14100D]/75 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium">
                      {property.typeName}
                    </div>

                    {/* Badge lateral se houver */}
                    {property.badge && (
                      <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#14100D] font-bold px-2 py-1 text-[10px] uppercase tracking-wider">
                        {property.badge}
                      </div>
                    )}

                    {/* Overlay sutil no hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 text-[#292725] text-xs uppercase tracking-widest px-4 py-2 font-medium shadow-md flex items-center gap-1.5">
                        Ver detalhes <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Informações Resumidas e Diretas */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-[#5A4636] uppercase tracking-wider font-mono">
                      <span>{property.city}</span>
                      {property.areaM2 > 0 && <span>{property.areaM2} m²</span>}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#292725] font-normal leading-tight group-hover:text-[#5A4636] transition-colors line-clamp-1">
                      {property.title}
                    </h3>

                    <p className="font-serif text-xl font-bold text-[#292725] tracking-tight">
                      {property.priceFormatted}
                    </p>

                    <p className="text-xs text-[#5A4636] line-clamp-2 leading-relaxed pt-1">
                      {property.description}
                    </p>
                  </div>
                </div>

                {/* Rodapé do Card com Ação Rápida WhatsApp */}
                <div className="px-5 pb-5 pt-2 border-t border-[#F1ECE4] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#5A4636] font-medium group-hover:text-[#292725] flex items-center gap-1">
                    Conferir fotos ({property.gallery?.length || 1}) →
                  </span>

                  <button
                    onClick={(e) => handleQuickWhatsApp(e, property)}
                    className="p-2 text-[#25D366] hover:bg-[#25D366]/10 rounded transition-colors"
                    title="Consultar este imóvel no WhatsApp"
                    aria-label={`Consultar ${property.title} no WhatsApp`}
                  >
                    <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Modal de Detalhes e Galeria de Fotos em Alta Resolução */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
