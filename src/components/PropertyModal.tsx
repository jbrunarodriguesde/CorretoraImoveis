import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const handleInterestClick = () => {
    const message = `Olá, Jacqueline! Gostaria de falar sobre o imóvel "${property.title}" (Ref: ${property.code}) no valor de ${property.priceFormatted}.`;
    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      id="property-detail-modal"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292725]/60 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container: Arquitetura Limpa e Cantos Retos */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F4] border border-[#E8E2D7] my-auto z-10 max-h-[92vh] flex flex-col shadow-2xl">
        
        {/* Barra superior */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D7]">
          <div className="flex items-center gap-3 text-xs text-[#5A4636]">
            <span className="font-mono text-[#B8944A]">Ref: {property.code}</span>
            <span>•</span>
            <span className="uppercase tracking-wider">{property.typeName}</span>
            <span>•</span>
            <span>{property.city}</span>
          </div>

          <button
            onClick={onClose}
            id="close-property-modal"
            className="p-1 text-[#292725] hover:text-[#5A4636] focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Conteúdo */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Galeria de Fotos */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1ECE4]">
            <img
              src={images[activeImageIndex]}
              alt={`${property.title} - Foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#FAF8F4]/90 hover:bg-[#FAF8F4] text-[#292725] transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#FAF8F4]/90 hover:bg-[#FAF8F4] text-[#292725] transition-colors"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#292725]/80 text-[#FAF8F4] text-[11px] font-mono">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Miniaturas se houver mais de 1 foto */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-14 shrink-0 overflow-hidden border transition-all ${
                    activeImageIndex === index
                      ? 'border-[#5A4636] opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Título & Valor */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#E8E2D7] pb-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#292725]">
                {property.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#5A4636] mt-1">
                {property.location}, {property.city}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#5A4636] block">
                Valor
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#292725]">
                {property.priceFormatted}
              </span>
            </div>
          </div>

          {/* Informações Básicas / Especificações */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 border-b border-[#E8E2D7] text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#5A4636] block">Área</span>
              <span className="font-serif text-lg text-[#292725] font-normal">{property.areaM2} m²</span>
            </div>
            {property.bedrooms !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#5A4636] block">Dormitórios</span>
                <span className="font-serif text-lg text-[#292725] font-normal">{property.bedrooms} quartos</span>
              </div>
            )}
            {property.suites !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#5A4636] block">Suítes</span>
                <span className="font-serif text-lg text-[#292725] font-normal">{property.suites} suítes</span>
              </div>
            )}
            {property.parkingSpots !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#5A4636] block">Vagas</span>
                <span className="font-serif text-lg text-[#292725] font-normal">{property.parkingSpots} vagas</span>
              </div>
            )}
          </div>

          {/* Descrição Editorial */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#5A4636] font-medium">
              Apresentação do Imóvel
            </h4>
            <p className="text-sm text-[#5A4636] leading-relaxed font-normal">
              {property.fullDescription || property.description}
            </p>
          </div>

          {/* Diferenciais em lista simples */}
          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#5A4636] font-medium">
                Características
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A4636]">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#B8944A]">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 border-t border-[#E8E2D7] bg-[#F1ECE4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A4636]">
            Atendimento direto com {BROKER_INFO.name} ({BROKER_INFO.creci})
          </p>

          <button
            id="modal-direct-whatsapp-btn"
            onClick={handleInterestClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] text-xs font-medium tracking-widest uppercase transition-colors"
          >
            Falar com Jacqueline
          </button>
        </div>

      </div>
    </div>
  );
};

