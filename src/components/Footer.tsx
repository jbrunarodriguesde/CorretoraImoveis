import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { JacquelineLogo } from './JacquelineLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', target: 'inicio' },
    { label: 'Imóveis', target: 'imoveis' },
    { label: 'Categorias', target: 'categorias' },
    { label: 'Sobre', target: 'sobre' },
    { label: 'Investimentos', target: 'investimentos' },
    { label: 'Serviços', target: 'servicos' },
    { label: 'Contato', target: 'contato' },
  ];

  const whatsappDirect = createWhatsAppUrl('Olá, Jacqueline! Acessei seu site institucional.');

  return (
    <footer className="bg-[#FAF8F4] border-t border-[#E8E2D7] py-16 sm:py-20 text-[#5A4636]" id="main-footer">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E2D7]">
          
          {/* Informações Institucionais */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#060606] border border-[#B8944A]/40 shrink-0 p-1 flex items-center justify-center">
                <JacquelineLogo variant="icon" className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif text-2xl text-[#292725] tracking-tight block">
                  Jacqueline Almeida
                </span>
                <p className="text-xs uppercase tracking-widest text-[#B8944A] mt-1">
                  Corretora de Imóveis • {BROKER_INFO.creci}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#5A4636] leading-relaxed max-w-md font-normal">
              Assessoria imobiliária especializada em Nova Serrana, Belo Horizonte e região. Duas décadas dedicadas à seleção de oportunidades e orientação patrimonial.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs uppercase tracking-widest">
              <a
                id="footer-whatsapp-link"
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4636] hover:text-[#292725] transition-colors"
              >
                WhatsApp
              </a>
              <a
                id="footer-instagram-link"
                href={BROKER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4636] hover:text-[#292725] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Links Discretos */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#292725] font-medium">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onNavigate(link.target)}
                    className="text-[#5A4636] hover:text-[#292725] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Localização & Contato */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#292725] font-medium">
              Atendimento
            </h4>
            <div className="space-y-2 text-xs text-[#5A4636]">
              <p className="text-[#292725]">{BROKER_INFO.phoneDisplay}</p>
              <p>{BROKER_INFO.email}</p>
              <p className="pt-2">{BROKER_INFO.region}</p>
            </div>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5A4636]/80 font-normal">
          <p>© {new Date().getFullYear()} Jacqueline Almeida. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="text-[11px] uppercase tracking-widest text-[#5A4636] hover:text-[#292725] transition-colors"
          >
            Voltar ao topo ↑
          </button>
        </div>

      </div>
    </footer>
  );
};

