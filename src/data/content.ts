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
  region: 'Minas Gerais (Nova Serrana, Belo Horizonte, Divinópolis e Região)',
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
    tag: 'Belo Horizonte & Região'
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85',
    title: 'Lotes e Terrenos em Condomínio',
    tag: 'Paisagens de Minas Gerais'
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
    title: 'Grandes Oportunidades em Nova Serrana & MG',
    tag: 'Valorização Imobiliária'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-ns-1',
    code: 'JA-201',
    title: 'Casa em Nova Serrana',
    type: 'casa',
    typeName: 'Casa Contemporânea',
    price: 1250000,
    priceFormatted: 'R$ 1.250.000',
    location: 'Bairro Residencial Nobre',
    neighborhood: 'Park Dona Zeli',
    city: 'Nova Serrana / MG',
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
    id: 'prop-bh-1',
    code: 'JA-202',
    title: 'Apartamento em Belo Horizonte',
    type: 'apartamento',
    typeName: 'Apartamento de Alto Padrão',
    price: 890000,
    priceFormatted: 'R$ 890.000',
    location: 'Região Nobre Sul',
    neighborhood: 'Funcionários / Savassi',
    city: 'Belo Horizonte / MG',
    description: 'Apartamento elegante com varanda gourmet, 3 quartos, vista livre definitiva e acabamentos refinados.',
    fullDescription: 'Localização privilegiada próximo aos melhores pontos da capital mineira. Edifício moderno com portaria 24h, lazer completo, piscina climatizada, salão de festas e academia equipada. Unidade com marcenaria planejada, suíte espaçosa e 2 vagas de garagem demarcadas.',
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
      'Segurança e portaria 24h'
    ],
    badge: 'Oportunidade',
    featured: true,
  },
  {
    id: 'prop-lote-1',
    code: 'JA-203',
    title: 'Lote em condomínio',
    type: 'lote',
    typeName: 'Lote em Condomínio Fechado',
    price: 320000,
    priceFormatted: 'R$ 320.000',
    location: 'Condomínio Fechado Residencial',
    neighborhood: 'Reserva das Palmeiras',
    city: 'Nova Serrana / MG',
    description: 'Terreno plano de 500 m² pronto para construir em condomínio com portaria 24h, lago e área de lazer completa.',
    fullDescription: 'Excelente lote com topografia 100% plana, facilitando o custo de fundação da sua obra. Localizado na parte alta do condomínio, garantindo ventilação constante e vista permanente para a serra. Infraestrutura com asfalto ecológico, água, energia, clube privativo e quadras esportivas.',
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
    title: 'Mansão Villa Imperial Alphaville',
    type: 'casa',
    typeName: 'Casa em Condomínio Fechado',
    price: 3450000,
    priceFormatted: 'R$ 3.450.000',
    location: 'Condomínio Fechado Alphaville',
    neighborhood: 'Alphaville',
    city: 'Nova Lima / BH',
    description: 'Mansão contemporânea com pé-direito duplo de 6m, living integrado à piscina com borda infinita e vista panorâmica definitiva.',
    fullDescription: 'Projeto arquitetônico assinado com acabamentos refinados em mármore travertino e esquadrias termoacústicas. Amplo living para 3 ambientes, espaço gourmet climatizado com churrasqueira a gás, adega climatizada para 300 rótulos, sauna a vapor integrada à piscina aquecida com borda infinita, e 4 amplas suítes com closet e banheiras de imersão.',
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
    city: 'Divinópolis / MG',
    description: 'Cobertura duplex cinematográfica com spa privativo na varanda e 360º de skyline deslumbrante.',
    fullDescription: 'Um conceito inigualável de viver nas alturas. Pavimento inferior com 3 confortáveis suítes, copa íntima e master com banheira freestanding. Pavimento superior dedicado ao lazer e entretenimento sofisticado, contendo solarium, jacuzzi aquecida, deck em madeira nobre e bancada gourmet em quartzo negro.',
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
    city: 'Nova Serrana / MG',
    description: 'Terreno plano de 1.250 m² em localização privilegiada com bosque nativo ao fundo e topografia perfeita.',
    fullDescription: 'Excelente topografia plana com leve declive suave favorável para projeto com vista aberta para o pôr do sol. Condomínio com infraestrutura de resort: heliponto homologado, hípica, quadras de tênis de saibro, beach tennis, clube social e fiação 100% subterrânea.',
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
      'Heliponto e segurança armada 24h',
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
    location: 'Eixo Comercial Financeiro',
    neighborhood: 'Parque das Nações',
    city: 'Divinópolis / MG',
    description: 'Conjunto corporativo unificado com locação corporativa garantida e rentabilidade líquida imediata.',
    fullDescription: 'Imóvel de alto rendimento para investidores focados em renda passiva consistente e segurança patrimonial. Locado para grupo médico consolidado por contrato atípico de longo prazo (5 anos restantes, reajuste por IPCA). Yield mensal estimado de 0,78% a.m. líquido de impostos.',
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
      'Inquilino AAA com contrato de 5 anos',
      'Retorno superior a aplicações de renda fixa',
      'Prédio corporativo com auditório e concierge',
      'Gerador de emergência dedicado',
      'Localização em polo de saúde e negócios'
    ],
    badge: 'Alta Rentabilidade',
    featured: true,
  },
  {
    id: 'prop-5',
    code: 'JA-105',
    title: 'Mansão Bauhaus com Lago Particular',
    type: 'casa',
    typeName: 'Casa Contemporânea',
    price: 4200000,
    priceFormatted: 'R$ 4.200.000',
    location: 'Enseada dos Lagos',
    neighborhood: 'Condomínio Náutico',
    city: 'Capitólio / MG',
    description: 'Propriedade náutica de tirar o fôlego com deck privativo para lancha, spa aquecido e 5 suítes master.',
    fullDescription: 'Viva momentos inesquecíveis em frente às águas cristalinas com toda a sofisticação da arquitetura moderna. Projeto integrado com pé-direito monumental, adega de vidro suspensa, espaço de churrasqueira parrilla argentina e pier privativo.',
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
      'Acesso privativo à represa com rampa e pier',
      'Piscina com borda infinita debruçada sobre a água',
      'Totalmente mobiliada com móveis de design',
      'Garagem coberta para embarcações e 6 carros',
      'Heliponto comunitário a 500m'
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
    neighborhood: 'Santa Mônica',
    city: 'Divinópolis / MG',
    description: '1 apartamento por andar com 240 m² privativos, varanda gourmet integrada e acabamentos de altíssimo padrão.',
    fullDescription: 'Privacidade absoluta para você e sua família. Planta inteligente com iluminação natural em todos os cômodos, suíte master com hidro e closet sr. e sra., além de infraestrutura pronta para ar-condicionado VRF e aspiração central.',
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
      'Varanda gourmet com churrasqueira a carvão',
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
    neighborhood: 'Vila Santo Antônio',
    city: 'Itaúna / MG',
    description: 'Área nobre de 980 m² de esquina com altíssimo fluxo veicular e excelente coeficiente de aproveitamento.',
    fullDescription: 'Ideal para construção de strip mall, clínicas especializadas ou prédio residencial boutique. Zona comercial aprovada com estudo de viabilidade econômica e topografia 100% nivelada.',
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
    title: 'Portfólio Fracionado de Studios para Locação',
    type: 'investimento',
    typeName: 'Fundo Imobiliário / Renda',
    price: 890000,
    priceFormatted: 'R$ 890.000',
    location: 'Polo Universitário & Tecnológico',
    neighborhood: 'Sidil / Universitário',
    city: 'Divinópolis / MG',
    description: 'Kit de 3 studios mobiliados com gestão de locação short-stay profissional, rendimento médio de 1,1% a.m.',
    fullDescription: 'Excelente alternativa para quem quer diversificar em imóveis de alta liquidez. Todas as unidades contam com fechadura digital, ar condicionado inverter, mobília planejada e gestão automatizada de reservas.',
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
      'Gestão por operadora especializada',
      'Recebimento direto via plataforma',
      'Histórico de ocupação média de 82%'
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
    description: 'Mansões e casas de alto padrão em condomínios fechados com piscina e lazer privativo.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Alto Padrão & Condomínios'
  },
  {
    id: 'cat-aptos',
    title: 'APARTAMENTOS',
    slug: 'apartamento',
    description: 'Unidades nobres, coberturas e penthouses nas melhores localizações de Belo Horizonte e região.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Coberturas & Penthouses'
  },
  {
    id: 'cat-lotes',
    title: 'LOTES',
    slug: 'lote',
    description: 'Terrenos planos e topografias privilegiadas para construir em condomínios de alto padrão.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Lotes em Condomínio'
  },
  {
    id: 'cat-invest',
    title: 'INVESTIMENTOS',
    slug: 'investimento',
    description: 'Ativos estratégicos com rentabilidade imediata e alto potencial de valorização futura.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    countLabel: 'Renda & Valorização'
  }
];

export const REAL_ESTATE_SERVICES: RealEstateService[] = [
  {
    id: 'serv-1',
    title: 'Compra de imóveis',
    description: 'Curadoria criteriosa de casas, apartamentos e áreas nobres com assessoria segura do início ao registro.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de assessoria para compra de um imóvel.'
  },
  {
    id: 'serv-2',
    title: 'Venda de imóveis',
    description: 'Posicionamento qualificado, discrição e acesso direto a compradores e investidores selecionados.',
    whatsappMessage: 'Olá, Jacqueline! Desejo cadastrar meu imóvel para venda com sua assessoria.'
  },
  {
    id: 'serv-3',
    title: 'Lotes e terrenos',
    description: 'Seleção de lotes em condomínios fechados, topografias privilegiadas e áreas de expansão em Minas Gerais.',
    whatsappMessage: 'Olá, Jacqueline! Estou procurando lotes e terrenos para construir ou investir.'
  },
  {
    id: 'serv-4',
    title: 'Investimentos imobiliários',
    description: 'Identificação de ativos com rentabilidade consistente, segurança documental e ganho patrimonial.',
    whatsappMessage: 'Olá, Jacqueline! Quero conhecer as melhores oportunidades de investimento imobiliário.'
  },
  {
    id: 'serv-5',
    title: 'Consultoria imobiliária',
    description: 'Due diligence completa, avaliação mercadológica precisa e atendimento pessoal direto com 20 anos de mercado.',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de agendar uma consultoria imobiliária personalizada.'
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Roberto Mendonça',
    clientRole: 'Médico & Investidor',
    city: 'Divinópolis / MG',
    content: 'A Jacqueline não é apenas uma corretora; ela é uma estrategista imobiliária completa. Assessorou a compra do meu terreno e posteriormente a estruturação de duas salas corporativas com excelente taxa de retorno.',
    rating: 5,
    transactionType: 'Investimento Comercial & Residencial'
  },
  {
    id: 'test-2',
    clientName: 'Mariana & Carlos Silveira',
    clientRole: 'Empresários',
    city: 'Nova Lima / MG',
    content: 'Procurávamos uma casa para a família há mais de 1 ano. Em duas semanas de consultoria com a Jacqueline, ela encontrou a propriedade exata no condomínio que queríamos, conduzindo a negociação com discrição e maestria impecáveis.',
    rating: 5,
    transactionType: 'Compra de Casa em Condomínio'
  },
  {
    id: 'test-3',
    clientName: 'Patrícia Guimarães',
    clientRole: 'Arquiteta & Urbanista',
    city: 'Belo Horizonte / MG',
    content: 'A seriedade com que a Jacqueline analisa a documentação e os detalhes de zoneamento me impressionou. Seus 20 anos de mercado fazem toda a diferença na segurança de qualquer transação imobiliária.',
    rating: 5,
    transactionType: 'Consultoria para Terrenos'
  }
];

export const INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    caption: 'Detalhes que transformam uma casa em uma experiência de vida inesquecível. Conheça esta mansão em condomínio fechado. ✨',
    likes: 342,
    comments: 28,
    tag: 'Tour Exclusivo',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    isReel: true,
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    caption: '3 fatores indispensáveis para analisar antes de investir em imóveis em 2026. Acompanhe a consultoria completa no vídeo.',
    likes: 489,
    comments: 42,
    tag: 'Educação Financeira',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    isReel: true,
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    caption: 'Mais um sonho concretizado hoje com as chaves entregues! Gratidão aos clientes pela confiança nessa jornada de 20 anos.',
    likes: 615,
    comments: 54,
    tag: 'Sonho Realizado',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    caption: 'Cobertura com vista livre para o horizonte. Um refúgio suspenso feito para quem valoriza momentos únicos.',
    likes: 524,
    comments: 39,
    tag: 'Oportunidade',
    link: 'https://www.instagram.com/jacquelinealmeida_corretora/',
    isReel: true,
  }
];

export const DIFFERENTIALS = [
  {
    icon: 'ShieldCheck',
    title: '20 anos de experiência',
    description: 'Duas décadas de atuação sólida, acompanhando as oscilações do mercado e gerando negócios consistentes e seguros.'
  },
  {
    icon: 'UserCheck',
    title: 'Atendimento próximo e personalizado',
    description: 'Entendimento aprofundado dos seus desejos, perfil familiar e capacidade de investimento, sem soluções genéricas.'
  },
  {
    icon: 'TrendingUp',
    title: 'Conhecimento do mercado imobiliário',
    description: 'Domínio detalhado de zoneamento, tendências de valorização regional e precificação justa com embasamento técnico.'
  },
  {
    icon: 'Target',
    title: 'Foco em oportunidades reais',
    description: 'Acesso a imóveis antes do mercado aberto (off-market) e identificação precisa de ativos com potencial de ganho de capital.'
  },
  {
    icon: 'Briefcase',
    title: 'Consultoria para compradores e investidores',
    description: 'Apoio de ponta a ponta: avaliação mercadológica, due diligence documental, análise de contratos e assessoria jurídica.'
  },
  {
    icon: 'MessageCircle',
    title: 'Atendimento direto via WhatsApp',
    description: 'Comunicação ágil, transparente e sem burocracia, direto com a especialista para responder suas dúvidas em tempo real.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Conte o que você procura',
    description: 'Em uma conversa informal e objetiva, alinhamos seu objetivo de moradia ou investimento, localização ideal e expectativa financeira.'
  },
  {
    step: '02',
    title: 'Receba opções selecionadas',
    description: 'Filtramos criteriosamente apenas as oportunidades que atendem com precisão às suas métricas, poupando seu tempo precioso.'
  },
  {
    step: '03',
    title: 'Analise as melhores oportunidades',
    description: 'Apresentamos um dossiê detalhado com potencial de valorização, histórico da região, custos e visitas guiadas personalizadas.'
  },
  {
    step: '04',
    title: 'Tome sua decisão com segurança',
    description: 'Condução ética da proposta, negociação de valores e assessoria documental completa até a formalização e registro da escritura.'
  }
];

export const HELP_OPTIONS = [
  {
    id: 'comprar',
    title: 'QUERO COMPRAR',
    description: 'Encontre a casa, apartamento ou lote ideal com curadoria rigorosa e assessoria em todas as etapas.',
    actionText: 'Quero comprar um imóvel',
    whatsappMessage: 'Olá, Jacqueline! Estou interessado(a) em comprar um imóvel e gostaria de conhecer as opções disponíveis.'
  },
  {
    id: 'vender',
    title: 'QUERO VENDER',
    description: 'Avaliação mercadológica precisa, posicionamento estratégico e discrição para comercializar seu patrimônio.',
    actionText: 'Quero vender meu imóvel',
    whatsappMessage: 'Olá, Jacqueline! Gostaria de conversar sobre a venda do meu imóvel com sua assessoria.'
  },
  {
    id: 'investir',
    title: 'QUERO INVESTIR',
    description: 'Identificação de ativos com potencial de ganho de capital, renda de locação consistente e segurança jurídica.',
    actionText: 'Quero investir com estratégia',
    whatsappMessage: 'Olá, Jacqueline! Tenho interesse em investir no mercado imobiliário e gostaria de uma orientação estratégica.'
  },
  {
    id: 'procurando',
    title: 'ESTOU PROCURANDO UM IMÓVEL',
    description: 'Busca personalizada sob demanda: você nos conta suas necessidades específicas e nós encontramos para você.',
    actionText: 'Falar o que estou procurando',
    whatsappMessage: 'Olá, Jacqueline! Estou procurando um imóvel com características específicas e gostaria da sua ajuda para encontrar.'
  }
];

export const STATS_STRIP = [
  {
    value: '20+',
    label: 'Anos de experiência',
    detail: 'No mercado imobiliário'
  },
  {
    value: 'Atendimento',
    label: 'Personalizado',
    detail: 'Foco exclusivo no seu perfil'
  },
  {
    value: 'Imóveis',
    label: 'Oportunidades',
    detail: 'Curadoria criteriosa de ativos'
  },
  {
    value: 'Investimentos',
    label: 'Estratégia',
    detail: 'Visão patrimonial de longo prazo'
  }
];


export const INVESTMENT_PILLARS = [
  {
    id: 'p-1',
    title: 'Análise de oportunidades',
    subtitle: 'Avaliação de imóveis e possibilidades de investimento',
    description: 'Estudo criterioso de viabilidade, comparativo de metro quadrado, liquidez projetada e risco-retorno antes de qualquer aporte de capital.',
    icon: 'BarChart3'
  },
  {
    id: 'p-2',
    title: 'Orientação personalizada',
    subtitle: 'Atendimento de acordo com os objetivos de cada cliente',
    description: 'Estratégia sob medida para diversificação de portfólio, proteção contra inflação, ganho de capital na valorização ou renda passiva mensal.',
    icon: 'Compass'
  },
  {
    id: 'p-3',
    title: 'Visão de mercado',
    subtitle: 'Experiência para identificar boas oportunidades imobiliárias',
    description: '20 anos de discernimento prático para enxergar potenciais de valorização antes que se tornem evidentes para o público geral.',
    icon: 'Sparkles'
  }
];
