export type PropertyType = 'todos' | 'casa' | 'apartamento' | 'lote' | 'investimento';

export interface Property {
  id: string;
  code: string;
  title: string;
  type: 'casa' | 'apartamento' | 'lote' | 'investimento';
  typeName: string;
  price: number;
  priceFormatted: string;
  location: string;
  neighborhood: string;
  city: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  areaM2: number;
  bedrooms?: number;
  suites?: number;
  bathrooms?: number;
  parkingSpots?: number;
  features: string[];
  badge?: string;
  yieldRate?: string;
  featured?: boolean;
}

export interface CategoryCard {
  id: string;
  title: string;
  slug: PropertyType;
  description: string;
  imageUrl: string;
  countLabel: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  city: string;
  content: string;
  rating: number;
  transactionType: string;
}

export interface InstagramPostItem {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  link: string;
  isReel?: boolean;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  interest: string;
  message: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  tag: string;
}

export interface RealEstateService {
  id: string;
  title: string;
  description: string;
  whatsappMessage: string;
}

