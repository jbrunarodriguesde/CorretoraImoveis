import React, { useState } from 'react';
import { BROKER_INFO, createWhatsAppUrl } from '../data/content';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Comprar imóvel',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const directWhatsAppUrl = createWhatsAppUrl(
    'Olá, Jacqueline! Acessei seu site e gostaria de conversar sobre oportunidades imobiliárias.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `*Contato via Site*\n\n*Nome:* ${formData.name}\n*Telefone/WhatsApp:* ${formData.phone}\n*Interesse:* ${formData.interest}\n*Mensagem:* ${formData.message || 'Gostaria de agendar um atendimento.'}`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-24 bg-[#14100D] text-white relative overflow-hidden"
      aria-label="Contato com Jacqueline Almeida"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto Principal + Grande Botão WhatsApp + Informações */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                ATENDIMENTO DIRETO
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F4] font-normal tracking-tight leading-[1.1]">
                Vamos encontrar seu <span className="italic font-normal text-[#E8DCC4]">próximo imóvel?</span>
              </h2>

              <p className="font-sans text-base sm:text-xl text-white/80 leading-relaxed font-normal max-w-xl pt-1">
                Fale com Jacqueline e encontre uma oportunidade que combine com seus objetivos.
              </p>
            </div>

            {/* Botão Grande Solicitado */}
            <div className="pt-2">
              <a
                id="contact-whatsapp-main-btn"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm sm:text-base font-bold tracking-wider uppercase transition-all shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] active:scale-95"
              >
                {/* Ícone Oficial do WhatsApp */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.147-1.023-1.921-2.288-2.146-2.673-.225-.385-.024-.593.126-.742.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.628-.925-2.228-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.027-1.05 2.504 0 1.477 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.124 4.53 3.009 1.3 3.009.867 3.559.813.55-.054 1.78-.727 2.03-1.428.25-.701.25-1.302.175-1.428-.075-.126-.275-.2-.575-.35zM12.04 2C6.516 2 2.022 6.484 2.022 12c0 1.98.577 3.824 1.578 5.378L2.247 22l4.767-1.332A9.974 9.974 0 0012.04 22c5.524 0 10.018-4.484 10.018-10S17.564 2 12.04 2zm0 18.27a8.23 8.23 0 01-4.204-1.155l-.302-.18-3.125.873.834-3.045-.198-.315A8.256 8.256 0 013.784 12c0-4.552 3.704-8.256 8.256-8.256s8.256 3.704 8.256 8.256-3.704 8.27-8.256 8.27z" />
                </svg>
                <span>FALAR PELO WHATSAPP</span>
              </a>
            </div>

            {/* Informações Institucionais Compactas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs text-white/70">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BROKER_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BROKER_INFO.region}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BROKER_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BROKER_INFO.creci}</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Grande Fotografia de Casa Bonita */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] sm:aspect-square overflow-hidden border border-white/15 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Casa contemporânea de alto padrão"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-xs text-white/90">
                <p className="font-serif text-lg text-white font-normal mb-0.5">
                  Atendimento com hora marcada
                </p>
                <p className="text-[11px] text-[#D4AF37] uppercase tracking-wider">
                  20 Anos de Experiência no Mercado Imobiliário
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
