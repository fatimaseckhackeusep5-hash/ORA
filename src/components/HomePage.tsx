import { useState } from 'react';
import { products, formatPrice, type Product, type Page } from '../data';
import {
  AfricanPatternVertical,
  AfricanPatternRibbon,
  FaitMainStamp,
  AfricaContinentIcon,
} from './AfricanPattern';

import artisanMain from '@/assets/images/artisan_main.jpg';
import sandaleEmmarh from '@/assets/images/sandale_emmarh_prestige.png';
import muleDaim from '@/assets/images/mule_daim_glands.png';
import sandaleDoubleBride from '@/assets/images/sandale_double_bride_noir.png';
import sandaleMinimaliste from '@/assets/images/sandale_minimaliste_vamp.png';
import sandaleTresseNoir from '@/assets/images/sandale_tresse_noir_boucle.png';
import mocassinImg from '@/assets/images/mocassin.jpg';

interface HomePageProps {
  navigate: (page: Page, productId?: string) => void;
  onAddToCart: (product: Product, size?: number, color?: string) => void;
}

type TabType = 'all' | 'nouveautes_luxe' | 'souliers_tradition' | 'femme_sandales' | 'enfants_bebes';

export default function HomePage({ navigate, onAddToCart }: HomePageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedColorMap, setSelectedColorMap] = useState<Record<string, string>>({});
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Products filter - 4 distinct rows in 'all' (Luxe, Femme, Souliers, Enfants & Bébés)
  const displayedProducts = products.filter((p) => {
    if (activeTab === 'nouveautes_luxe') {
      return ['sandale-royale-grainee', 'mule-suede-glands', 'sandale-double-bride-noir', 'sandale-minimaliste-vamp'].includes(p.id);
    }
    if (activeTab === 'souliers_tradition') {
      return ['mocassin-traditionnel', 'sandale-royale', 'babouche-artisanale', 'chaussure-prestige'].includes(p.id);
    }
    if (activeTab === 'femme_sandales') {
      return ['sandale-denim-indigo', 'mule-lin-ebene', 'sandale-graphique-mandingue', 'sandale-royale-bicolore'].includes(p.id);
    }
    if (activeTab === 'enfants_bebes') {
      return ['sandale-bebe-fleurs-crochet', 'sandale-bebe-crochet-croise', 'sandale-enfant-cuir-noir', 'sandale-enfant-tressage-blanc'].includes(p.id);
    }
    return true;
  });

  const handleSelectColor = (productId: string, hex: string) => {
    setSelectedColorMap((prev) => ({ ...prev, [productId]: hex }));
  };

  const handleAddWithFeedback = (product: Product) => {
    const selectedColor = selectedColorMap[product.id] || product.colors[0]?.name || 'Standard';
    const defaultSize = product.category === 'femme' ? 38 : product.category === 'enfant' ? (product.sizes[0] || 20) : 42;
    onAddToCart(product, defaultSize, selectedColor);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  return (
    <div className="w-full bg-[#FAF6F0] overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — FULLSCREEN ARTISAN WORKSHOP BACKGROUND                  */}
      {/* ========================================================================= */}
      <section className="relative bg-[#190E07] text-[#FAF6F0] overflow-hidden min-h-[88vh] flex items-center">
        {/* Full Artisan Workshop Photo — filling the entire hero */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${artisanMain})`,
            backgroundPosition: 'center 25%',
          }}
        />
        {/* Dark overlay gradient — strong on left so text is readable, fading out to right to show artisan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0602]/92 via-[#130B04]/75 to-[#1A1008]/25" />
        {/* Subtle top vignette */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#190E07]/60 to-transparent" />
        {/* Bottom vignette for seamless section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF6F0]/10 via-[#190E07]/60 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-20 lg:py-28 w-full">
          {/* Left Column: Brand Story & Call to Action — max 45% width to leave room for artisan */}
          <div className="max-w-[520px] flex flex-col justify-center animate-fade-in-up">
            <span className="text-[#D4A359] text-[11px] sm:text-[13px] font-semibold tracking-[0.28em] uppercase mb-5">
              AUTHENTIQUES. ARTISANALES. SÉNÉGALAISES.
            </span>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.6rem] font-normal tracking-tight text-[#FAF6F0] leading-[1.08] mb-6">
              Le savoir-faire
              <br />de nos maîtres,
              <br /><span className="text-[#D4A359] font-medium italic">l'élégance</span>{' '}à vos pieds.
            </h1>

            <p className="text-[#D9C4AC] text-sm sm:text-base leading-relaxed mb-10 font-light">
              Nos chaussures traditionnelles sont fabriquées à la main
              par des artisans passionnés, avec des matières nobles
              sélectionnées pour leur qualité et leur durabilité.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => navigate('collection')}
                className="btn-gold px-7 sm:px-9 py-4 rounded-xs text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer shadow-lg"
              >
                DÉCOUVRIR LA COLLECTION
              </button>
              <button
                onClick={() => setStoryModalOpen(true)}
                className="bg-[#24150C]/90 hover:bg-[#382012] border border-[#6F4622] text-[#F3DFC2] px-6 sm:px-7 py-4 rounded-xs text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <span>NOTRE HISTOIRE</span>
                <span className="w-5 h-5 rounded-full bg-[#D4A359] text-[#190E07] flex items-center justify-center text-[10px] pl-0.5">
                  ▶
                </span>
              </button>
            </div>

            {/* Customer Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#190E07] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                  alt="Client Teranga"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#190E07] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                  alt="Client Teranga"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#190E07] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                  alt="Client Teranga"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-[#FAF6F0]">
                    +2 500 clients satisfaits
                  </span>
                  <div className="flex text-[#D4A359] text-xs">
                    ★★★★★
                  </div>
                </div>
                <span className="text-[11px] text-[#A68F78]">Noté 4.9/5 à Dakar & à l'international</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VALUE PROPOSITION BAR (5 ITEMS)                                        */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF6F0] border-b border-[#E8DFC0]/80 py-6 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E8DFC0]">
          {/* 1. Fabrication Artisanale */}
          <div className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                FABRICATION ARTISANALE
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Chaque paire est fabriquée à la main avec passion
              </p>
            </div>
          </div>

          {/* 2. Cuirs Nobles */}
          <div className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 3h12l4 6-10 13L2 9z" />
                <path d="M2 9h20" />
                <path d="M10 3v6" />
                <path d="M14 3v6" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                CUIRS NOBLES
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Des matériaux de qualité sélectionnés avec soin
              </p>
            </div>
          </div>

          {/* 3. Livraison Rapide */}
          <div className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                LIVRAISON RAPIDE
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Partout au Sénégal en 24 à 72h
              </p>
            </div>
          </div>

          {/* 4. Paiement Sécurisé */}
          <div className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                PAIEMENT SÉCURISÉ
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Paiement à la livraison ou en ligne 100% sécurisé
              </p>
            </div>
          </div>

          {/* 5. Service Client */}
          <div className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                SERVICE CLIENT
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Une équipe à votre écoute 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED COLLECTION — PREMIÈRE RANGÉE AVEC LES 4 NOUVEAUX MODÈLES       */}
      {/* ========================================================================= */}
      <section className="relative py-12 lg:py-16 bg-[#FAF6F0]">
        {/* Left & Right African Pattern Borders */}
        <div className="absolute left-0 top-0 bottom-0 hidden xl:block">
          <AfricanPatternVertical />
        </div>
        <div className="absolute right-0 top-0 bottom-0 hidden xl:block">
          <AfricanPatternVertical />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-14">
          {/* Header row with interactive Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8DFC0] gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#9E672E] text-xs font-semibold tracking-widest uppercase mb-1">
                <span>◈◈◈</span>
                <span>CATALOGUE OFFICIEL TERANGA</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#24150C] font-normal tracking-tight">
                Trouvez votre style
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#24150C] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
                }`}
              >
                Tous les modèles
              </button>
              <button
                onClick={() => setActiveTab('nouveautes_luxe')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'nouveautes_luxe'
                    ? 'bg-[#A76D32] text-white shadow-sm'
                    : 'bg-[#EADBC5] text-[#4A2B17] hover:bg-[#DFC7AA]'
                }`}
              >
                <span>👑 Nouveautés Prestige</span>
              </button>
              <button
                onClick={() => setActiveTab('souliers_tradition')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'souliers_tradition'
                    ? 'bg-[#24150C] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
                }`}
              >
                Souliers & Mocassins
              </button>
              <button
                onClick={() => setActiveTab('femme_sandales')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'femme_sandales'
                    ? 'bg-[#24150C] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
                }`}
              >
                <span>✨ Ligne Femme</span>
              </button>
              <button
                onClick={() => setActiveTab('enfants_bebes')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'enfants_bebes'
                    ? 'bg-[#24150C] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
                }`}
              >
                <span>👶 Bébés & Enfants</span>
              </button>
            </div>

            <button
              onClick={() => navigate('collection')}
              className="mt-2 md:mt-0 inline-flex items-center gap-2 bg-[#24150C] hover:bg-[#3A2213] text-[#FAF6F0] text-xs font-semibold tracking-wider uppercase px-5 py-3 rounded-xs transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>VOIR TOUTES LES COLLECTIONS</span>
              <span>›</span>
            </button>
          </div>

          {/* Product Cards Grid — First Row contains the 4 new luxury models */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => {
              const isFirstRow = index < 4;
              return (
                <div
                  key={product.id}
                  className={`product-card bg-[#EDE3D2]/40 rounded-xs border p-3 flex flex-col justify-between transition-all ${
                    isFirstRow ? 'border-[#C59A58]/80 shadow-md bg-[#FAF4EA]' : 'border-[#E5DACB]'
                  }`}
                >
                  {/* Product Image Area */}
                  <div
                    onClick={() => navigate('product', product.id)}
                    className="relative aspect-square rounded-xs overflow-hidden bg-[#24150C] cursor-pointer mb-3.5 group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#190E07]/90 text-[#FAF6F0] text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border border-[#5A381F]/50 shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick view button overlay on hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="absolute bottom-2.5 right-2.5 bg-[#190E07]/85 hover:bg-[#24150C] text-[#D4A359] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      Aperçu rapide
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col grow">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#9E672E] uppercase tracking-wider">
                        {product.collection === 'prestige' ? '👑 ÉDITION PRESTIGE' : 'MAISON TERANGA'}
                      </span>
                    </div>

                    <h3
                      onClick={() => navigate('product', product.id)}
                      className="font-display font-bold text-sm tracking-wider text-[#24150C] uppercase hover:text-[#9E672E] cursor-pointer transition-colors mt-0.5 line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs font-semibold text-[#80502A] mt-1 mb-2.5">
                      {formatPrice(product.price)}
                    </p>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-2 mb-3.5">
                      {product.colors.map((c) => {
                        const isSelected = (selectedColorMap[product.id] || product.colors[0]?.hex) === c.hex;
                        return (
                          <button
                            key={c.hex}
                            onClick={() => handleSelectColor(product.id, c.hex)}
                            title={c.name}
                            className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                              isSelected ? 'ring-2 ring-[#9E672E] scale-110' : 'border-black/20 hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                          />
                        );
                      })}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddWithFeedback(product)}
                      className={`w-full py-2.5 px-3 border rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        addedProductId === product.id
                          ? 'bg-[#2E5E3A] border-[#2E5E3A] text-white'
                          : 'border-[#C59A58] bg-[#FAF6F0]/90 hover:bg-[#24150C] hover:text-[#FAF6F0] text-[#3D2515]'
                      }`}
                    >
                      {addedProductId === product.id ? (
                        <>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>AJOUTÉ !</span>
                        </>
                      ) : (
                        <>
                          <span>AJOUTER AU PANIER</span>
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ARTISAN CRAFTSMANSHIP BANNER ("Un savoir-faire qui traverse le temps")   */}
      {/* ========================================================================= */}
      <section className="bg-[#1C1109] text-[#FAF6F0] relative overflow-hidden my-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Text Block */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#3D2617]">
            <span className="text-[#D4A359] text-xs font-semibold tracking-[0.24em] uppercase mb-3">
              NOTRE HÉRITAGE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF6F0] font-normal leading-tight mb-5">
              Un savoir-faire qui traverse le temps
            </h2>
            <p className="text-[#D9C4AC] text-sm leading-relaxed mb-8 font-light">
              Chez Teranga, chaque chaussure raconte une histoire. Inspirées de nos traditions
              et fabriquées à la main, elles sont le symbole d'un héritage vivant.
            </p>
            <div>
              <button
                onClick={() => setStoryModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xs text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2 cursor-pointer"
              >
                <span>DÉCOUVRIR NOTRE HISTOIRE</span>
                <span className="w-4 h-4 rounded-full bg-[#1C1109] text-[#FAF6F0] flex items-center justify-center text-[9px] pl-0.5">
                  ▶
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Composition + Circular Stamp */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#160D07] grid grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src={artisanMain}
                alt="Maître artisan cordonnier sénégalais au travail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="relative overflow-hidden">
              <img
                src={sandaleEmmarh}
                alt="Atelier d'artisanat du cuir Teranga Dakar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Circular Gold Stamp "FAIT MAIN AVEC FIERTÉ" floating in the middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl">
              <FaitMainStamp className="w-28 h-28 sm:w-36 sm:h-36" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECOND VALUE PROPOSITION BAR (5 ICONS)                                 */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF6F0] border-y border-[#E8DFC0]/80 py-8 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC0]">
          {/* 1. Soutien à l'artisanat */}
          <div className="flex items-start gap-3 sm:px-3 pt-4 sm:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                SOUTIEN À L'ARTISANAT
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Nous valorisons le travail des artisans locaux.
              </p>
            </div>
          </div>

          {/* 2. Matières nobles */}
          <div className="flex items-start gap-3 sm:px-3 pt-4 sm:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                MATIÈRES NOBLES
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Cuir véritable et matériaux durables sélectionnés.
              </p>
            </div>
          </div>

          {/* 3. Confort & Élégance */}
          <div className="flex items-start gap-3 sm:px-3 pt-4 sm:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                CONFORT & ÉLÉGANCE
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Des chaussures pensées pour votre bien-être et votre style.
              </p>
            </div>
          </div>

          {/* 4. Idées Cadeaux */}
          <div className="flex items-start gap-3 sm:px-3 pt-4 sm:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                IDÉES CADEAUX
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Des modèles uniques pour faire plaisir.
              </p>
            </div>
          </div>

          {/* 5. Fièrement Africain */}
          <div className="flex items-start gap-3 sm:px-3 pt-4 sm:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] shrink-0">
              <AfricaContinentIcon className="w-5 h-5 text-[#9E672E]" />
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#24150C] uppercase">
                FIÈREMENT AFRICAIN
              </h4>
              <p className="text-[11px] text-[#78593F] leading-tight mt-0.5">
                Une marque engagée pour l'Afrique et sa culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INSTAGRAM GALLERY STRIP & SOCIALS                                      */}
      {/* ========================================================================= */}
      <section className="bg-[#170E08] text-[#FAF6F0] py-6 px-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Left: Follow us & social icons */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FAF6F0] mb-3">
              SUIVEZ-NOUS
            </span>
            <div className="flex items-center gap-2 text-[#FAF6F0]">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full border border-[#523520] hover:border-[#D4A359] hover:text-[#D4A359] flex items-center justify-center text-xs transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full border border-[#523520] hover:border-[#D4A359] hover:text-[#D4A359] flex items-center justify-center text-xs transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#tiktok"
                className="w-8 h-8 rounded-full border border-[#523520] hover:border-[#D4A359] hover:text-[#D4A359] flex items-center justify-center text-xs transition-colors"
                aria-label="TikTok"
              >
                ♪
              </a>
              <a
                href="https://wa.me/221771234567"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#523520] hover:border-[#D4A359] hover:text-[#D4A359] flex items-center justify-center text-xs transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-8 h-8 rounded-full border border-[#523520] hover:border-[#D4A359] hover:text-[#D4A359] flex items-center justify-center text-xs transition-colors"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Middle: 5 photo thumbnails */}
          <div className="lg:col-span-7 grid grid-cols-5 gap-2">
            <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C]">
              <img src={sandaleEmmarh} alt="Teranga photo 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C]">
              <img src={muleDaim} alt="Teranga photo 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C]">
              <img src={sandaleDoubleBride} alt="Teranga photo 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C]">
              <img src={sandaleMinimaliste} alt="Teranga photo 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C]">
              <img src={mocassinImg} alt="Teranga photo 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Right: Thank you Card */}
          <div className="lg:col-span-2 border border-[#482D1B] rounded-xs p-3 text-center flex flex-col items-center justify-center bg-[#1E120A]">
            <p className="text-[10px] uppercase tracking-widest text-[#D4A359] font-semibold">
              MERCI POUR VOTRE CONFIANCE
            </p>
            <span className="text-[#D4A359] text-base mt-1">♡</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE STORY MODAL                                                */}
      {/* ========================================================================= */}
      {storyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative bg-[#1A1009] text-[#FAF6F0] border border-[#C59A58] rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setStoryModalOpen(false)}
              className="absolute top-4 right-4 text-[#D4A359] hover:text-white text-xl p-1 cursor-pointer"
              aria-label="Fermer"
            >
              ✕
            </button>

            <span className="text-[#D4A359] text-xs font-semibold tracking-widest uppercase">
              DOCUMENTAIRE TERANGA DAKAR
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl mt-1 mb-4">
              L'Âme du Cuir Sénégalais
            </h3>

            <div className="aspect-video bg-[#000000] rounded-sm overflow-hidden mb-5 relative flex items-center justify-center group">
              <img
                src={artisanMain}
                alt="Maître Artisan"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-[#D4A359] text-[#1A1009] flex items-center justify-center text-2xl font-bold pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <p className="text-xs text-[#FAF6F0] mt-3 font-medium">
                  Reportage exclusif au cœur de nos ateliers à la Médina de Dakar
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D9C4AC] leading-relaxed mb-6">
              Depuis 1994, la Maison Teranga perpétue l'artisanat du soulier cousu main au Sénégal.
              Chaque coupe, chaque perforation et chaque couture célèbrent la fierté et l'élégance de notre continent.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setStoryModalOpen(false);
                  navigate('histoire');
                }}
                className="btn-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer"
              >
                Lire Toute Notre Histoire
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. QUICK VIEW PRODUCT MODAL                                               */}
      {/* ========================================================================= */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-fade-in">
          <div className="relative bg-[#FAF6F0] border border-[#C59A58] rounded-xs max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#24150C]">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-[#7A4F2C] hover:text-[#24150C] text-xl p-1 cursor-pointer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-square bg-[#24150C] rounded-xs overflow-hidden border border-[#DAC7B0]">
                <img
                  src={quickViewProduct.images[0]}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#A76D32] tracking-widest uppercase">
                  {quickViewProduct.collection === 'prestige' ? '👑 ÉDITION PRESTIGE' : 'Maison Teranga Dakar'}
                </span>
                <h3 className="font-display text-xl font-bold text-[#24150C] uppercase mt-1 mb-2">
                  {quickViewProduct.name}
                </h3>
                <p className="text-base font-bold text-[#A76D32] mb-3">
                  {formatPrice(quickViewProduct.price)}
                </p>
                <p className="text-xs text-[#5C3A1E] leading-relaxed mb-4">
                  {quickViewProduct.description}
                </p>

                <div className="flex gap-2 mb-4">
                  {quickViewProduct.colors.map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAddWithFeedback(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="grow btn-gold py-2.5 px-4 text-xs font-bold tracking-wider uppercase rounded-xs cursor-pointer shadow-sm"
                  >
                    Ajouter au Panier
                  </button>
                  <button
                    onClick={() => {
                      const id = quickViewProduct.id;
                      setQuickViewProduct(null);
                      navigate('product', id);
                    }}
                    className="py-2.5 px-4 bg-[#EDE3D2] hover:bg-[#E2D2BC] text-[#24150C] text-xs font-bold uppercase rounded-xs cursor-pointer"
                  >
                    Détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
