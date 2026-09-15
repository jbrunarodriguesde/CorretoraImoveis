import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const directUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre imóveis em Londrina.'
  );

  return (
    <aside aria-label="Contato direto via WhatsApp" className="fixed bottom-6 right-6 z-40" id="floating-whatsapp-widget">
      <a
        id="floating-whatsapp-toggle"
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="w-12 h-12 bg-[#5A4636] text-[#FAF8F4] hover:bg-[#292725] flex items-center justify-center transition-colors shadow-sm"
        title="Conversar com Jacqueline Almeida no WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </aside>
  );
};

