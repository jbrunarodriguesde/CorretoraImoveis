import { Property, CategoryCard, Testimonial, InstagramPostItem, HeroSlide, RealEstateService } from '../types';

export const BROKER_INFO = {
  name: 'Jacqueline Almeida',
  role: 'Corretora de Imóveis & Especialista em Investimentos',
  creci: 'CRECI 24.891-MG',
  experienceYears: '20 anos',
  experienceBadge: '20 anos realizando sonhos',
  slogan: 'Ajudo você a investir com inteligência no mercado imobiliário.',
  phoneDisplay: '+55 37 99871-7249',
  phoneRaw: '5537998717249',
  instagramHandle: '@jacquelinealmeida_corretora',
  instagramUrl: 'https://www.instagram.com/jacquelinealmeida_corretora/',
  email: 'contato@jacquelinealmeidacorretora.com.br',
  region: 'Pará de Minas - MG e Região',
  hours: 'Segunda a Sábado, das 08h às 19h (Atendimento com hora marcada)',
};

export const createWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BROKER_INFO.phoneRaw}?text=${encoded}`;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    title: 'Casas de Alto Padrão com Piscina',
    tag: 'Condomínio Fechado'
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    title: 'Fachadas e Projetos Contemporâneos',
    tag: 'Arquitetura Moderna'
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
    title: 'Apartamentos & Penthouses Exclusivas',
    tag: 'Pará de Minas & Região'
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85',
    title: 'Lotes e Terrenos em Condomínio',
    tag: 'Pará de Minas - MG'
  },
  {
    id: 'slide-5',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85',
    title: 'Residências com Área de Lazer Completa',
    tag: 'Piscina & Varanda Gourmet'
  },
  {
    id: 'slide-6',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85',
    title: 'Grandes Oportunidades em Pará de Minas',
    tag: 'Valorização Imobiliária'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-pm-1',
    code: 'JA-201',
    title: 'Casa em Pará de Minas',
    type: 'casa',
    typeName: 'Casa Contemporânea',
    price: 1250000,
    priceFormatted: 'R$ 1.250.000',
    location: 'Bairro Residencial Nobre',
    neighborhood: 'Residencial Nobre',
    city: 'Pará de Minas - MG',
    description: 'Casa moderna com fachada imponente, 3 suítes, living com pé-direito elevado e espaço gourmet com piscina aquecida.',
    fullDescription: 'Excelente imóvel com acabamentos de primeira linha em porcelanato acetinado e bancadas em quartzo. Projeto luminotécnico em LED, suíte master com closet generoso, cozinha em ilha integrada ao espaço gourmet com churrasqueira e piscina privativa com cascata.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 280,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 3,
    features: [
      'Piscina aquecida com hidro e cascata',
      'Área gourmet completa com churrasqueira',
      'Pé-direito duplo no living',
      'Garagem coberta para 3 veículos',
      'Pré-disposição para energia solar'
    ],
    badge: 'Destaque',
    featured: true,
  },
  {
    id: 'prop-pm-2',
    code: 'JA-202',
    title: 'Apartamento em Pará de Minas',
    type: 'apartamento',
    typeName: 'Apartamento de Alto Padrão',
    price: 890000,
    priceFormatted: 'R$ 890.000',
    location: 'Região Nobre Central',
    neighborhood: 'Centro Nobre',
    city: 'Pará de Minas - MG',
    description: 'Apartamento elegante com varanda gourmet, 3 quartos, vista livre definitiva e acabamentos refinados.',
    fullDescription: 'Localização privilegiada no coração nobre de Pará de Minas. Edifício moderno com portaria, salão de festas e academia equipada. Unidade com marcenaria planejada, suíte espaçosa e 2 vagas de garagem demarcadas.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 115,
    bedrooms: 3,
    suites: 1,
    bathrooms: 3,
    parkingSpots: 2,
    features: [
      'Varanda gourmet com vista panorâmica',
      'Prédio moderno com lazer completo',
      'Piscina e academia no condomínio',
      '2 vagas de garagem demarcadas',
      'Segurança e controle de acesso'
    ],
    badge: 'Oportunidade',
    featured: true,
  },
  {
    id: 'prop-pm-3',
    code: 'JA-203',
    title: 'Lote em condomínio fechado',
    type: 'lote',
    typeName: 'Lote em Condomínio Fechado',
    price: 320000,
    priceFormatted: 'R$ 320.000',
    location: 'Condomínio Fechado Residencial',
    neighborhood: 'Reserva das Palmeiras',
    city: 'Pará de Minas - MG',
    description: 'Terreno plano de 500 m² pronto para construir em condomínio com portaria 24h, lago e área de lazer completa.',
    fullDescription: 'Excelente lote com topografia 100% plana, facilitando o custo de fundação da sua obra em Pará de Minas. Localizado na parte alta do condomínio, garantindo ventilação constante e vista permanente. Infraestrutura completa com asfalto, água, energia, clube privativo e quadras esportivas.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 500,
    features: [
      'Topografia 100% plana e pronta para construir',
      'Portaria blindada e controle de acesso 24h',
      'Clube com piscina e quadras de tênis',
      'Fácil acesso ao centro da cidade',
      'Documentação regularizada e escritura imediata'
    ],
    badge: 'Mais Buscado',
    featured: true,
  },
  {
    id: 'prop-1',
    code: 'JA-101',
    title: 'Mansão Contemporânea em Condomínio',
    type: 'casa',
    typeName: 'Casa em Condomínio Fechado',
    price: 3450000,
    priceFormatted: 'R$ 3.450.000',
    location: 'Condomínio Fechado Residencial',
    neighborhood: 'Setor Nobre',
    city: 'Pará de Minas - MG',
    description: 'Mansão contemporânea com pé-direito duplo de 6m, living integrado à piscina com borda infinita e vista panorâmica definitiva.',
    fullDescription: 'Projeto arquitetônico assinado com acabamentos refinados em mármore travertino e esquadrias termoacústicas. Amplo living para 3 ambientes, espaço gourmet climatizado com churrasqueira, adega climatizada, sauna a vapor integrada à piscina aquecida com borda infinita, e 4 amplas suítes com closet e banheiras de imersão.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 520,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parkingSpots: 4,
    features: [
      'Piscina aquecida com borda infinita',
      'Energia fotovoltaica instalada',
      'Automação residencial completa',
      'Adega privativa climatizada',
      'Segurança e portaria 24 horas',
      'Vista definitiva para as montanhas'
    ],
    badge: 'Exclusividade',
    featured: true,
  },
  {
    id: 'prop-2',
    code: 'JA-102',
    title: 'Penthouse Lumina Sky Garden',
    type: 'apartamento',
    typeName: 'Apartamento Alto Padrão',
    price: 2890000,
    priceFormatted: 'R$ 2.890.000',
    location: 'Setor Nobre Central',
    neighborhood: 'Centro / Bela Vista',
    city: 'Pará de Minas - MG',
    description: 'Cobertura duplex cinematográfica com spa privativo na varanda e 360º de skyline deslumbrante.',
    fullDescription: 'Um conceito inigualável de viver nas alturas. Pavimento inferior com 3 confortáveis suítes, copa íntima e master com banheira freestanding. Pavimento superior dedicado ao lazer e entretenimento sofisticado, contendo solarium, jacuzzi aquecida, deck em madeira nobre e bancada gourmet.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 340,
    bedrooms: 3,
    suites: 3,
    bathrooms: 5,
    parkingSpots: 3,
    features: [
      'Jacuzzi privativa ao ar livre',
      'Elevador privativo com biometria',
      'Cozinha com ilha gourmet',
      'Isolamento acústico nas lajes',
      'Edifício sustentável e seguro'
    ],
    badge: 'Lançamento',
    featured: true,
  },
  {
    id: 'prop-3',
    code: 'JA-103',
    title: 'Lote Exclusive Forest Hills',
    type: 'lote',
    typeName: 'Lote em Condomínio',
    price: 680000,
    priceFormatted: 'R$ 680.000',
    location: 'Reserva Ecológica Privativa',
    neighborhood: 'Bosque dos Nobres',
    city: 'Pará de Minas - MG',
    description: 'Terreno plano de 1.250 m² em localização privilegiada com bosque nativo ao fundo e topografia perfeita.',
    fullDescription: 'Excelente topografia plana com leve declive suave favorável para projeto com vista aberta para o pôr do sol em Pará de Minas. Condomínio com infraestrutura completa: portaria 24h, quadras de tênis de saibro, beach tennis, clube social e fiação subterrânea.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 1250,
    features: [
      'Topografia 100% aproveitável',
      'Fiação subterrânea e iluminação LED',
      'Clube privativo com quadras de tênis',
      'Segurança armada 24h',
      'Alta valorização projetada'
    ],
    badge: 'Oportunidade',
    featured: true,
  },
  {
    id: 'prop-4',
    code: 'JA-104',
    title: 'Corporate Plaza & Hub Médico',
    type: 'investimento',
    typeName: 'Investimento Comercial',
    price: 1650000,
    priceFormatted: 'R$ 1.650.000',
    location: 'Eixo Comercial Central',
    neighborhood: 'Centro Empresarial',
    city: 'Pará de Minas - MG',
    description: 'Conjunto corporativo unificado com locação corporativa garantida e rentabilidade líquida imediata.',
    fullDescription: 'Imóvel de alto rendimento para investidores focados em renda passiva consistente e segurança patrimonial em Pará de Minas. Locado para grupo consolidado por contrato de longo prazo. Yield mensal estimado de 0,78% a.m. líquido de impostos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 185,
    bathrooms: 3,
    parkingSpots: 3,
    yieldRate: '0,78% a.m.',
    features: [
      'Inquilino consolidado com contrato de 5 anos',
      'Retorno superior a aplicações de renda fixa',
      'Prédio corporativo com recepção e segurança',
      'Gerador de emergência dedicado',
      'Localização em polo de saúde e negócios'
    ],
    badge: 'Alta Rentabilidade',
    featured: true,
  },
  {
    id: 'prop-5',
    code: 'JA-105',
    title: 'Residência Villa Imperial com Lazer Completo',
    type: 'casa',
    typeName: 'Casa Contemporânea',
    price: 4200000,
    priceFormatted: 'R$ 4.200.000',
    location: 'Condomínio Fechado de Chácaras Nobres',
    neighborhood: 'Chácaras Nobres',
    city: 'Pará de Minas - MG',
    description: 'Propriedade de alto luxo com área verde privativa, piscina aquecida, espaço gourmet e 5 suítes master.',
    fullDescription: 'Viva momentos inesquecíveis em meio à tranquilidade com toda a sofisticação da arquitetura moderna. Projeto integrado com pé-direito monumental, adega climatizada, espaço de churrasqueira parrilla e área de lazer privativa completa.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 680,
    bedrooms: 5,
    suites: 5,
    bathrooms: 7,
    parkingSpots: 6,
    features: [
      'Piscina com borda infinita aquecida',
      'Espaço gourmet completo integrado ao living',
      'Acabamento em pedras nobres e marcenaria de alto padrão',
      'Garagem coberta para 6 veículos',
      'Segurança e portaria 24 horas'
    ],
    badge: 'Super Luxo',
    featured: false,
  },
  {
    id: 'prop-6',
    code: 'JA-106',
    title: 'Edifício Saint Germain Premium Residence',
    type: 'apartamento',
    typeName: 'Apartamento de Luxo',
    price: 1950000,
    priceFormatted: 'R$ 1.950.000',
    location: 'Bairro Nobre Tradicional',
    neighborhood: 'Setor Nobre',
    city: 'Pará de Minas - MG',
    description: '1 apartamento por andar com 240 m² privativos, varanda gourmet integrada e acabamentos de altíssimo padrão.',
    fullDescription: 'Privacidade absoluta para você e sua família em Pará de Minas. Planta inteligente com iluminação natural em todos os cômodos, suíte master com hidro e closet sr. e sra., além de infraestrutura pronta para ar-condicionado e automação.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 240,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parkingSpots: 3,
    features: [
      'Apenas 1 unidade por andar',
      'Varanda gourmet com churrasqueira',
      'Janelas com persianas integradas e automação',
      'Área de lazer completa com piscina aquecida e academia'
    ],
    badge: 'Exclusividade',
    featured: false,
  },
  {
    id: 'prop-7',
    code: 'JA-107',
    title: 'Lote Comercial & Misto no Eixo de Expansão',
    type: 'lote',
    typeName: 'Terreno Comercial',
    price: 1200000,
    priceFormatted: 'R$ 1.200.000',
    location: 'Avenida Principal de Acesso',
    neighborhood: 'Eixo Comercial',
    city: 'Pará de Minas - MG',
    description: 'Área nobre de 980 m² de esquina com altíssimo fluxo veicular e excelente coeficiente de aproveitamento.',
    fullDescription: 'Ideal para construção de polo comercial, clínicas especializadas ou prédio residencial boutique. Zona comercial aprovada com estudo de viabilidade econômica e topografia nivelada em Pará de Minas - MG.',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 980,
    features: [
      'Esquina estratégica em avenida duplicada',
      'Testada principal com 42 metros lineares',
      'Estudo de viabilidade de implantação já concluído',
      'Documentação 100% desembaraçada e escriturada'
    ],
    badge: 'Comercial',
    featured: false,
  },
  {
    id: 'prop-8',
    code: 'JA-108',
    title: 'Portfólio de Studios para Renda Imobiliária',
    type: 'investimento',
    typeName: 'Fundo Imobiliário / Renda',
    price: 890000,
    priceFormatted: 'R$ 890.000',
    location: 'Polo Central de Negócios',
    neighborhood: 'Centro Nobre',
    city: 'Pará de Minas - MG',
    description: 'Conjunto de 3 studios mobiliados para locação com rentabilidade consistente de 1,1% a.m.',
    fullDescription: 'Excelente alternativa para quem quer diversificar em imóveis de alta liquidez em Pará de Minas - MG. Todas as unidades contam com fechadura digital, ar condicionado inverter, mobília planejada e gestão facilitada.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    areaM2: 96,
    bedrooms: 3,
    bathrooms: 3,
    yieldRate: '1,1% a.m.',
    features: [
      '3 studios totalmente montados e decorados',
      'Fechadura eletrônica em todas as unidades',
      'Recebimento direto via contrato garantido',
      'Excelente localização no centro de Pará de Minas'
    ],
    badge: 'Yield Alto',
    featured: false,
  }
];

export const CATEGORIES: CategoryCard[] = [
  {
    id: 'cat-casas',
    title: 'CASAS',
    slug: 'casa',
    description: 'Mansões e casas de alto padrão em condomínios fechados com piscina e lazer privativo em Pará de Minas - MG.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Alto Padrão & Condomínios'
  },
  {
    id: 'cat-aptos',
    title: 'APARTAMENTOS',
    slug: 'apartamento',
    description: 'Unidades nobres, coberturas e penthouses nas melhores localizações de Pará de Minas - MG.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Coberturas & Penthouses'
  },
  {
    id: 'cat-lotes',
    title: 'LOTES',
    slug: 'lote',
    description: 'Terrenos planos e topografias privilegiadas para construir em condomínios fechados de Pará de Minas - MG.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Lotes em Condomínio'
  },
  {
    id: 'cat-invest',
    title: 'INVESTIMENTOS',
    slug: 'investimento',
    description: 'Ativos estratégicos com rentabilidade imediata e alto potencial de valorização em Pará de Minas - MG.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Renda & Valorização'
  }
];

export const REAL_ESTATE_SERVICES: RealEstateService[] = [
  {
    id: 'srv-compra',
    title: 'Curadoria & Compra de Imóveis',
    description: 'Assessoria completa e confidencial na busca e seleção do imóvel ideal em Pará de Minas - MG, alinhado ao seu estilo de vida ou objetivos patrimoniais.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de uma assessoria para compra de imóvel em Pará de Minas - MG.'
  },
  {
    id: 'srv-venda',
    title: 'Comercialização & Venda Exclusiva',
    description: 'Estratégia de marketing imobiliário com produção fotográfica profissional, qualificação rigorosa de compradores e ampla divulgação dirigida.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de anunciar e vender meu imóvel em Pará de Minas com sua assessoria.'
  },
  {
    id: 'srv-invest',
    title: 'Consultoria de Investimento Imobiliário',
    description: 'Análise de viabilidade financeira, taxa de retorno (yield), estudo de potencial de valorização e estruturação de portfólio de ativos.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de agendar uma consultoria sobre investimentos imobiliários em Pará de Minas.'
  },
  {
    id: 'srv-avaliacao',
    title: 'Avaliação Mercadológica & Regularização',
    description: 'Parecer técnico de avaliação mercadológica de precisão e acompanhamento de documentação imobiliária com segurança jurídica e cartorária.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de solicitar uma avaliação técnica e mercadológica do meu imóvel em Pará de Minas.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Diagnóstico & Alinhamento',
    description: 'Entendemos suas necessidades, preferências de localização e parâmetros orçamentários com total sigilo.',
  },
  {
    step: '02',
    title: 'Curadoria Seletiva',
    description: 'Filtramos imóveis que realmente atendem ao padrão exigido, poupando seu tempo de visitas improdutivas.',
  },
  {
    step: '03',
    title: 'Visitas Dirigidas',
    description: 'Acompanhamento detalhado em cada imóvel selecionado, com análise técnica e estrutural da propriedade.',
  },
  {
    step: '04',
    title: 'Negociação & Conclusão',
    description: 'Segurança jurídica, redação de contratos e apoio completo em cartório até a entrega das chaves.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Eduardo Vasconcelos',
    clientRole: 'Médico Cirurgião',
    city: 'Pará de Minas - MG',
    content: 'A Jacqueline conduziu todo o processo de aquisição da nossa casa em condomínio com uma transparência e competência exemplares. Cuidou de cada detalhe documental e nos deu total segurança.',
    rating: 5,
    transactionType: 'Compra de Casa em Condomínio',
  },
  {
    id: 'test-2',
    clientName: 'Mariana Guimarães',
    clientRole: 'Empresária',
    city: 'Pará de Minas - MG',
    content: 'Comprar um imóvel de alto padrão exige confiança mútua. A discrição e o bom gosto da Jacqueline na seleção dos imóveis foram determinantes para encontrarmos a propriedade dos nossos sonhos.',
    rating: 5,
    transactionType: 'Compra de Imóvel de Alto Padrão',
  },
  {
    id: 'test-3',
    clientName: 'Roberto e Cláudia Silveira',
    clientRole: 'Investidores Imobiliários',
    city: 'Pará de Minas - MG',
    content: 'Já realizamos três operações com a Jacqueline nos últimos anos. Todas superaram as expectativas de valorização e rentabilidade. É uma profissional indispensável no mercado.',
    rating: 5,
    transactionType: 'Investimentos Imobiliários',
  }
];

export const INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: 'ig-1',
    caption: 'Mansão contemporânea com arquitetura de ponta e espaço gourmet integrado.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    likes: 142,
    comments: 18,
    tag: 'Arquitetura'
  },
  {
    id: 'ig-2',
    caption: 'Detalhes que transformam uma casa em uma verdadeira obra de arte.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    likes: 198,
    comments: 24,
    tag: 'Design'
  },
  {
    id: 'ig-3',
    caption: 'Como escolher o terreno ideal para o projeto da sua família.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    likes: 115,
    comments: 12,
    tag: 'Condomínio'
  },
  {
    id: 'ig-4',
    caption: 'Pôr do sol da varanda da nossa cobertura em Pará de Minas.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    likes: 230,
    comments: 31,
    tag: 'Exclusivo'
  }
];
