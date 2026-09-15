import React from 'react';
import { createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const directUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre imóveis em Pará de Minas - MG.'
  );

  return (
    <aside
      aria-label="Contato direto via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      id="floating-whatsapp-widget"
    >
      {/* Tooltip elegante em desktop */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-main)] text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl whitespace-nowrap font-medium rounded-xs">
        Falar no WhatsApp
      </span>

      {/* Botão Oficial do WhatsApp com verde oficial inalterado em ambos os temas */}
      <a
        id="floating-whatsapp-toggle"
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Jacqueline Almeida no WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        title="Conversar com Jacqueline Almeida no WhatsApp"
      >
        {/* Símbolo Oficial Real do WhatsApp */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.147-1.023-1.921-2.288-2.146-2.673-.225-.385-.024-.593.126-.742.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.628-.925-2.228-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.027-1.05 2.504 0 1.477 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.124 4.53 3.009 1.3 3.009.867 3.559.813.55-.054 1.78-.727 2.03-1.428.25-.701.25-1.302.175-1.428-.075-.126-.275-.2-.575-.35zM12.04 2C6.516 2 2.022 6.484 2.022 12c0 1.98.577 3.824 1.578 5.378L2.247 22l4.767-1.332A9.974 9.974 0 0012.04 22c5.524 0 10.018-4.484 10.018-10S17.564 2 12.04 2zm0 18.27a8.23 8.23 0 01-4.204-1.155l-.302-.18-3.125.873.834-3.045-.198-.315A8.256 8.256 0 013.784 12c0-4.552 3.704-8.256 8.256-8.256s8.256 3.704 8.256 8.256-3.704 8.27-8.256 8.27z" />
        </svg>
      </a>
    </aside>
  );
};
