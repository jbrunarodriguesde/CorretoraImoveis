import { Property, CategoryCard, Testimonial, InstagramPostItem } from '../types';

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
  region: 'Minas Gerais & Região Centro-Oeste / Alto Padrão',
  hours: 'Segunda a Sábado, das 08h às 19h (Atendimento com hora marcada)',
};

export const createWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BROKER_INFO.phoneRaw}?text=${encoded}`;
};

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    code: 'JA-101',
    title: 'Residência Villa Imperial Alphaville',
    type: 'casa',
    typeName: 'Casa em Condomínio',
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
    title: 'CASAS À VENDA',
    slug: 'casa',
    description: 'Mansões em condomínios fechados, residências de alto padrão e projetos com privacidade e lazer total.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    countLabel: 'Propriedades exclusivas'
  },
  {
    id: 'cat-lotes',
    title: 'LOTES À VENDA',
    slug: 'lote',
    description: 'Terrenos nobres para construir a casa dos seus sonhos ou investir em loteamentos de alta valorização.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    countLabel: 'Topografias selecionadas'
  },
  {
    id: 'cat-aptos',
    title: 'APARTAMENTOS À VENDA',
    slug: 'apartamento',
    description: 'Coberturas, penthouses e unidades exclusivas nos endereços mais prestigiados da região.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    countLabel: 'Penthouses e residências'
  },
  {
    id: 'cat-invest',
    title: 'OPORTUNIDADES DE INVESTIMENTO',
    slug: 'investimento',
    description: 'Ativos corporativos, galpões e ativos geradores de renda com estratégia e segurança jurídica.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    countLabel: 'Renda e valorização sólida'
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
