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

export default function App() {
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
    <div className="min-h-screen bg-[#FAF8F4] text-[#292725] flex flex-col font-sans selection:bg-[#E8E2D7] selection:text-[#292725]">
      {/* Header Institucional */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Flow: FOTO → IMÓVEIS → FOTO → TEXTO CURTO → FOTO → CONTATO */}
      <main className="flex-1" id="main-content">
        {/* 1. HERO CAROUSEL / SLIDESHOW: Quase tela inteira com fotos automáticas de imóveis */}
        <Hero onExploreClick={() => scrollToSection('imoveis')} />

        {/* 2. IMÓVEIS EM DESTAQUE: Logo após o hero, fotos grandes, pouco texto */}
        <PropertiesSection selectedCategoryFilter={categoryFilter} />

        {/* 3. CATEGORIAS DE IMÓVEIS: Casas, Apartamentos, Lotes, Investimentos em grandes fotos */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 4. SOBRE JACQUELINE: 20 anos realizando sonhos, foto elegante, 3 indicadores objetivos */}
        <About />

        {/* 5. INVESTIMENTOS: Visual e objetiva, fotografia marcante, botão direto */}
        <InvestmentSection />

        {/* 6. SERVIÇOS: Lista visual simples e elegante (sem cards grandes) */}
        <ServicesSection />

        {/* 7. CONTATO: Grande fotografia de casa, texto objetivo e botão grande de WhatsApp */}
        <ContactSection />
      </main>

      {/* 8. Rodapé */}
      <Footer onNavigate={scrollToSection} />

      {/* 9. Botão Fixo Oficial do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
