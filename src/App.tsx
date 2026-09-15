import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertiesSection } from './components/PropertiesSection';
import { CategoriesSection } from './components/CategoriesSection';
import { About } from './components/About';
import { InvestmentSection } from './components/InvestmentSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PropertyType } from './types';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [categoryFilter, setCategoryFilter] = useState<PropertyType>('todos');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategory = (category: PropertyType) => {
    setCategoryFilter(category);
    scrollToSection('imoveis');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-main)] flex flex-col font-sans selection:bg-[var(--color-gold)]/25 selection:text-[var(--color-text-main)]">
      {/* Header Institucional com seletor de tema integrado */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Flow: FOTO → IMÓVEIS → FOTO → TEXTO CURTO → FOTO → CONTATO */}
      <main className="flex-1" id="main-content">
        {/* 1. HERO CAROUSEL: Fotografia arquitetônica com tipografia editorial */}
        <Hero onExploreClick={() => scrollToSection('imoveis')} />

        {/* 2. IMÓVEIS EM DESTAQUE: Grade de imóveis em Pará de Minas - MG */}
        <PropertiesSection selectedCategoryFilter={categoryFilter} />

        {/* 3. CATEGORIAS DE IMÓVEIS: Casas, Apartamentos, Lotes, Investimentos */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 4. SOBRE JACQUELINE: 20 anos realizando sonhos, credibilidade e expertise */}
        <About />

        {/* 5. INVESTIMENTOS: Visual e objetiva com chamada para oportunidades */}
        <InvestmentSection />

        {/* 6. SERVIÇOS: Lista editorial refinada */}
        <ServicesSection />

        {/* 7. CONTATO: Atendimento direto e formulário integrado ao WhatsApp */}
        <ContactSection />
      </main>

      {/* 8. Rodapé */}
      <Footer onNavigate={scrollToSection} />

      {/* 9. Botão Flutuante de WhatsApp Oficial */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
