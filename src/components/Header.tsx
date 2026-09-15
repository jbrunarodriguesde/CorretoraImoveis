import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', target: 'inicio' },
    { label: 'Imóveis', target: 'imoveis' },
    { label: 'Categorias', target: 'categorias' },
    { label: 'Sobre', target: 'sobre' },
    { label: 'Investimentos', target: 'investimentos' },
    { label: 'Serviços', target: 'servicos' },
    { label: 'Contato', target: 'contato' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  const whatsappDirect = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de falar sobre imóveis e investimentos.'
  );

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[var(--color-border-subtle)] py-3.5 sm:py-4 shadow-sm'
            : 'py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Nome à esquerda */}
          <button
            onClick={() => handleLinkClick('inicio')}
            className="text-left focus:outline-none group"
            aria-label="Ir para o início"
            id="header-logo-btn"
          >
            <span className="font-serif text-lg sm:text-xl tracking-[0.14em] text-[var(--color-text-main)] block font-medium group-hover:text-[var(--color-gold)] transition-colors">
              JACQUELINE ALMEIDA
            </span>
            {/* <span className="font-sans text-[10px] tracking-[0.24em] text-[var(--color-text-secondary)] block uppercase mt-0.5">
              Corretora de Imóveis • CRECI 24.891
            </span> */}
          </button>

          {/* Menu à direita (Desktop) */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
            <nav className="flex items-center space-x-6 lg:space-x-7" aria-label="Menu principal">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`nav-${link.target}`}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-xs tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors py-1 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Seletor Discreto de Tema */}
            <div className="pl-2 border-l border-[var(--color-border-subtle)]">
              <ThemeToggle />
            </div>

            <a
              id="header-whatsapp-cta"
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-primary)] text-xs font-medium tracking-widest uppercase transition-colors"
            >
              Fale comigo
            </a>
          </div>

          {/* Mobile Actions: ThemeToggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle minimal />
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--color-text-main)] hover:text-[var(--color-gold)] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-[var(--color-bg-primary)] p-8 pt-28 flex flex-col justify-between"
          id="mobile-menu-overlay"
        >
          <nav className="space-y-6" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-nav-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="block text-left font-serif text-2xl text-[var(--color-text-main)] hover:text-[var(--color-gold)] transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-[var(--color-border-subtle)] space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">Aparência</span>
              <ThemeToggle />
            </div>

            <a
              id="mobile-drawer-whatsapp"
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 bg-[var(--color-gold)] text-[#0D0D0D] text-xs font-bold tracking-widest uppercase"
            >
              Fale comigo
            </a>
            <p className="text-xs text-[var(--color-text-secondary)] text-center">
              {BROKER_INFO.phoneDisplay} • {BROKER_INFO.creci}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
