import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-[#FAF8F4] ${
          isScrolled ? 'border-b border-[#E8E2D7] py-4' : 'py-6 sm:py-7'
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
            <span className="font-serif text-lg sm:text-xl tracking-[0.14em] text-[#292725] block font-medium group-hover:text-[#5A4636] transition-colors">
              JACQUELINE ALMEIDA
            </span>
            {/* <span className="font-sans text-[10px] tracking-[0.24em] text-[#5A4636] block uppercase mt-0.5">
              Corretora de Imóveis • CRECI 24.891
            </span> */}
          </button>

          {/* Menu à direita (Desktop) */}
          <div className="hidden md:flex items-center space-x-9">
            <nav className="flex items-center space-x-8" aria-label="Menu principal">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`nav-${link.target}`}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-xs tracking-wider uppercase text-[#292725]/80 hover:text-[#292725] transition-colors py-1 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <a
              id="header-whatsapp-cta"
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#5A4636] text-[#5A4636] hover:bg-[#5A4636] hover:text-[#FAF8F4] text-xs font-medium tracking-widest uppercase transition-colors"
            >
              Fale comigo
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292725] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#FAF8F4] p-8 pt-28 flex flex-col justify-between" id="mobile-menu-overlay">
          <nav className="space-y-6" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-nav-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="block text-left font-serif text-2xl text-[#292725] hover:text-[#5A4636] transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#E8E2D7] space-y-4">
            <a
              id="mobile-drawer-whatsapp"
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 bg-[#5A4636] text-[#FAF8F4] text-xs font-medium tracking-widest uppercase"
            >
              Fale comigo
            </a>
            <p className="text-xs text-[#5A4636] text-center">
              {BROKER_INFO.phoneDisplay} • {BROKER_INFO.creci}
            </p>
          </div>
        </div>
      )}
    </>
  );
};


