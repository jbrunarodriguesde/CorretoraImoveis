import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { CategoriesSection } from './components/CategoriesSection';
import { PropertiesSection } from './components/PropertiesSection';
import { InvestmentSection } from './components/InvestmentSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { HowICanHelpSection } from './components/HowICanHelpSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { CtaSection } from './components/CtaSection';
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
      {/* Editorial Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1" id="main-content">
        {/* 1. Hero Section */}
        <Hero onExploreClick={() => scrollToSection('imoveis')} />

        {/* 2. Stats Editorial Strip */}
        <StatsStrip />

        {/* 3. Sobre Jacqueline */}
        <About />

        {/* 4. Categorias de Imóveis */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 5. Imóveis com Filtros e Modal */}
        <PropertiesSection selectedCategoryFilter={categoryFilter} />

        {/* 6. Investimentos Imobiliários */}
        <InvestmentSection />

        {/* 7. Diferenciais */}
        <DifferentialsSection />

        {/* 8. Como Posso Ajudar (4 opções para WhatsApp) */}
        <HowICanHelpSection />

        {/* 9. Depoimentos */}
        <TestimonialsSection />

        {/* 10. Instagram */}
        <InstagramSection />

        {/* 11. CTA Final */}
        <CtaSection onViewProperties={() => scrollToSection('imoveis')} />

        {/* 12. Contato */}
        <ContactSection />
      </main>

      {/* 13. Rodapé */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
