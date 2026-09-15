import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, BROKER_INFO } from '../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="py-24 sm:py-36 bg-[#F1ECE4] border-t border-[#E8E2D7]"
      aria-label="Instagram"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#5A4636] font-medium">
              Diário & Bastidores
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292725] font-normal leading-[1.2] tracking-tight">
              Acompanhe no Instagram
            </h2>
            <p className="font-sans text-base text-[#5A4636] leading-relaxed font-normal">
              Imóveis em destaque, novidades do mercado e o cotidiano da corretagem em Londrina.
            </p>
          </div>

          <a
            id="instagram-follow-btn"
            href={BROKER_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#292725] transition-colors self-start sm:self-baseline"
          >
            <span>{BROKER_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Galeria Editorial de Imagens (Cantos retos, proporções elegantes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-[#E8E2D7] pt-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              id={`instagram-post-${post.id}`}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-3"
              title="Ver publicação no Instagram"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF8F4]">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B8944A] block">
                  {post.tag}
                </span>
                <p className="text-xs text-[#5A4636] line-clamp-2 leading-relaxed font-normal group-hover:text-[#292725] transition-colors">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

