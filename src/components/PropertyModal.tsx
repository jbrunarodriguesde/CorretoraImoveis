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
    const message = `Olá, Jacqueline! Gostaria de falar sobre o imóvel "${property.title}" (Ref: ${property.code}) no valor de ${property.priceFormatted} em ${property.city}.`;
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
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container: Arquitetura Limpa e Cantos Retos */}
      <div className="relative w-full max-w-4xl bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] my-auto z-10 max-h-[92vh] flex flex-col shadow-2xl rounded-sm">
        
        {/* Barra superior */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
            <span className="font-mono text-[var(--color-gold)] font-semibold">Ref: {property.code}</span>
            <span>•</span>
            <span className="uppercase tracking-wider">{property.typeName}</span>
            <span>•</span>
            <span>{property.city}</span>
          </div>

          <button
            onClick={onClose}
            id="close-property-modal"
            className="p-1 text-[var(--color-text-main)] hover:text-[var(--color-gold)] focus:outline-none transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Conteúdo */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Galeria de Fotos */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 rounded-sm">
            <img
              src={images[activeImageIndex]}
              alt={`${property.title} - Foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/80 text-white transition-colors rounded-full"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/80 text-white transition-colors rounded-full"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-[11px] font-mono rounded">
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
                  className={`relative w-20 h-14 shrink-0 overflow-hidden border transition-all rounded-xs ${
                    activeImageIndex === index
                      ? 'border-[var(--color-gold)] opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Título & Valor */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--color-text-main)]">
                {property.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mt-1">
                {property.location}, {property.city}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-secondary)] block">
                Valor de Avaliação
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                {property.priceFormatted}
              </span>
            </div>
          </div>

          {/* Informações Básicas / Especificações */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 border-b border-[var(--color-border-subtle)] text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block">Área</span>
              <span className="font-serif text-lg text-[var(--color-text-main)] font-normal">{property.areaM2} m²</span>
            </div>
            {property.bedrooms !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block">Dormitórios</span>
                <span className="font-serif text-lg text-[var(--color-text-main)] font-normal">{property.bedrooms} quartos</span>
              </div>
            )}
            {property.suites !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block">Suítes</span>
                <span className="font-serif text-lg text-[var(--color-text-main)] font-normal">{property.suites} suítes</span>
              </div>
            )}
            {property.parkingSpots !== undefined && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] block">Vagas</span>
                <span className="font-serif text-lg text-[var(--color-text-main)] font-normal">{property.parkingSpots} vagas</span>
              </div>
            )}
          </div>

          {/* Descrição Editorial */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-medium">
              Apresentação do Imóvel
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
              {property.fullDescription || property.description}
            </p>
          </div>

          {/* Diferenciais em lista simples */}
          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-medium">
                Características & Infraestrutura
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-secondary)]">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[var(--color-gold)] font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Atendimento direto com {BROKER_INFO.name} ({BROKER_INFO.creci})
          </p>

          <button
            id="modal-direct-whatsapp-btn"
            onClick={handleInterestClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-gold)] text-[#0D0D0D] hover:bg-[var(--color-gold-light)] text-xs font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Falar com Jacqueline
          </button>
        </div>

      </div>
    </div>
  );
};
