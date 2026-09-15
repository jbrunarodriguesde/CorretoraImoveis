import React from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { JacquelineLogo } from './JacquelineLogo';
import { ThemeToggle } from './ThemeToggle';

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
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border-subtle)] py-16 sm:py-20 text-[var(--color-text-secondary)]" id="main-footer">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-border-subtle)]">
          
          {/* Informações Institucionais */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black border border-[var(--color-gold)]/40 shrink-0 p-1 flex items-center justify-center rounded-xs">
                <JacquelineLogo variant="icon" className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif text-2xl text-[var(--color-text-main)] tracking-tight block font-medium">
                  Jacqueline Almeida
                </span>
                <p className="text-xs uppercase tracking-widest text-[var(--color-gold)] mt-1">
                  Corretora de Imóveis • {BROKER_INFO.creci}
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-md font-normal">
              Assessoria imobiliária especializada em Pará de Minas - MG e região. Duas décadas dedicadas à seleção de oportunidades e orientação patrimonial.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs uppercase tracking-widest">
              <a
                id="footer-whatsapp-link"
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                id="footer-instagram-link"
                href={BROKER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
              >
                Instagram
              </a>
              <a
                id="footer-email-link"
                href={`mailto:${BROKER_INFO.email}`}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[var(--color-gold)] block font-semibold">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    id={`footer-nav-${link.target}`}
                    onClick={() => onNavigate(link.target)}
                    className="hover:text-[var(--color-gold)] text-[var(--color-text-secondary)] transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Localização e Atendimento */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[var(--color-gold)] block font-semibold">
              Atendimento
            </span>
            <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              <p className="font-medium text-[var(--color-text-main)]">Pará de Minas - MG</p>
              <p>Minas Gerais, Brasil</p>
              <p className="pt-1">{BROKER_INFO.phoneDisplay}</p>
              <p>{BROKER_INFO.creci}</p>
              
              <div className="pt-3">
                <ThemeToggle />
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--color-text-secondary)] gap-4">
          <p>© {new Date().getFullYear()} Jacqueline Almeida. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span>Pará de Minas - MG</span>
            <button
              onClick={scrollToTop}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors focus:outline-none uppercase tracking-widest text-[10px]"
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
