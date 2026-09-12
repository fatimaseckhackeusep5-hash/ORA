import { useState } from 'react';
import { products, formatPrice, getArtisan, type Page, type Product } from '../data';
import { TerangaLogoIcon } from './AfricanPattern';
import heroShoes from '@/assets/images/hero_shoes.jpg';
import artisanMain from '@/assets/images/artisan_main.jpg';

interface ProductPageProps {
  productId: string;
  navigate: (page: Page, productId?: string) => void;
  onAddToCart: (product: Product, size: number, color: string) => void;
}

export default function ProductPage({ productId, navigate, onAddToCart }: ProductPageProps) {
  const product = products.find((p) => p.id === productId) ?? products[0];
  const artisan = getArtisan(product.artisanId);

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[2] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Naturel');
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'histoire' | 'artisan'>('description');
  const [zoomed, setZoomed] = useState(false);

  const galleryImages = [
    product.images[0],
    product.images[1] ?? product.images[0],
    heroShoes,
    artisanMain,
  ];

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAF6F0] py-8">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 mb-4">
        <nav className="flex items-center gap-2 text-xs text-[#7A4F2C]">
          <button onClick={() => navigate('home')} className="hover:text-[#24150C] transition-colors cursor-pointer">
            Accueil
          </button>
          <span>/</span>
          <button onClick={() => navigate('collection')} className="hover:text-[#24150C] transition-colors cursor-pointer">
            Boutique
          </button>
          <span>/</span>
          <span className="text-[#24150C] font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main product presentation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery - 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative aspect-4/3 sm:aspect-square bg-[#24150C] rounded-xs overflow-hidden cursor-zoom-in border border-[#E5DACB]"
              onClick={() => setZoomed(!zoomed)}
            >
              <img
                src={galleryImages[activeImg]}
                alt={product.imageAlt}
                className={`w-full h-full object-cover transition-transform duration-500 ${zoomed ? 'scale-130' : 'scale-100'}`}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#190E07]/90 text-[#FAF6F0] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-[#5A381F]/50">
                  {product.badge}
                </span>
              )}
              <span className="absolute bottom-3 right-3 text-[10px] text-white/80 bg-black/40 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                {zoomed ? 'Cliquer pour réduire' : 'Cliquer pour zoomer'}
              </span>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveImg(i); setZoomed(false); }}
                  className={`aspect-square rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImg === i ? 'border-[#A76D32] scale-102' : 'border-[#E5DACB] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Purchase Panel - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A76D32] uppercase tracking-widest mb-1.5">
                <TerangaLogoIcon className="w-4 h-4" />
                <span>TERANGA DAKAR • COLLECTION {product.collection.toUpperCase()}</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#24150C] font-bold uppercase tracking-wider mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-bold text-[#A76D32]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-[#2E5E3A] font-semibold bg-[#E4EFE7] px-2.5 py-0.5 rounded-full">
                  En Stock • Livraison Offerte
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5C3A1E] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24150C] mb-2">
                  Couleur : <span className="font-normal text-[#A76D32]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xs border text-xs transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#A76D32] bg-[#EFE5D3] font-semibold'
                          : 'border-[#DAC7B0] bg-[#FAF6F0]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#24150C]">
                    Pointure (EU) : <span className="text-[#A76D32]">{selectedSize}</span>
                  </label>
                  <span className="text-[11px] text-[#A76D32] underline cursor-pointer">
                    Guide des pointures
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 rounded-xs text-xs font-bold transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-[#24150C] text-[#FAF6F0] shadow-sm'
                          : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center border border-[#C59A58] rounded-xs bg-[#FAF6F0]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-11 flex items-center justify-center text-sm font-bold text-[#24150C] hover:bg-[#EDE3D2] cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-10 h-11 flex items-center justify-center text-sm font-bold text-[#24150C]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-11 flex items-center justify-center text-sm font-bold text-[#24150C] hover:bg-[#EDE3D2] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`grow py-3.5 px-6 rounded-xs text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all ${
                    addedFeedback
                      ? 'bg-[#2E5E3A] text-white'
                      : 'btn-gold'
                  }`}
                >
                  {addedFeedback ? (
                    <>
                      <span>✓ AJOUTÉ AU PANIER !</span>
                    </>
                  ) : (
                    <>
                      <span>AJOUTER AU PANIER • {formatPrice(product.price * quantity)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#EDE3D2]/60 rounded-xs p-4 border border-[#DAC7B0] text-xs space-y-2 text-[#5C3A1E]">
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span><strong>Livraison gratuite</strong> partout au Sénégal (24 à 72h).</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔄</span>
                  <span><strong>Échanges gratuits</strong> sous 14 jours en cas de mauvaise pointure.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🛡️</span>
                  <span><strong>Garantie cuir véritable 2 ans</strong> sur coutures et semelles.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story / Craft Tabs */}
        <div className="mt-16 border-t border-[#DAC7B0] pt-10">
          <div className="flex gap-6 border-b border-[#DAC7B0] pb-3 mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 cursor-pointer ${
                activeTab === 'description' ? 'border-[#A76D32] text-[#24150C]' : 'border-transparent text-[#7A4F2C]'
              }`}
            >
              Matériaux & Savoir-Faire
            </button>
            <button
              onClick={() => setActiveTab('histoire')}
              className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 cursor-pointer ${
                activeTab === 'histoire' ? 'border-[#A76D32] text-[#24150C]' : 'border-transparent text-[#7A4F2C]'
              }`}
            >
              Histoire du Modèle
            </button>
            <button
              onClick={() => setActiveTab('artisan')}
              className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 cursor-pointer ${
                activeTab === 'artisan' ? 'border-[#A76D32] text-[#24150C]' : 'border-transparent text-[#7A4F2C]'
              }`}
            >
              L'Artisan Créateur
            </button>
          </div>

          <div className="max-w-3xl text-sm text-[#4E2E1A] leading-relaxed">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p><strong>Matière première :</strong> {product.story.material}</p>
                <p><strong>Technique de fabrication :</strong> {product.story.craft}</p>
                <p><strong>Temps de fabrication :</strong> {product.story.time}</p>
              </div>
            )}
            {activeTab === 'histoire' && (
              <p>{product.story.origin}</p>
            )}
            {activeTab === 'artisan' && artisan && (
              <div className="flex items-start gap-4">
                <img src={artisan.image} alt={artisan.name} className="w-16 h-16 rounded-full object-cover border border-[#C59A58]" />
                <div>
                  <h4 className="font-bold text-[#24150C]">{artisan.name} ({artisan.region})</h4>
                  <p className="text-xs text-[#A76D32] mb-1">{artisan.specialty} • {artisan.experience}</p>
                  <p className="text-xs text-[#5C3A1E]">{artisan.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-10 border-t border-[#DAC7B0]">
          <h3 className="font-serif-luxury text-2xl text-[#24150C] mb-6">
            Vous aimerez aussi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  navigate('product', p.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#EDE3D2]/40 rounded-xs border border-[#E5DACB] p-3 cursor-pointer hover:-translate-y-1 transition-all"
              >
                <div className="aspect-square rounded-xs overflow-hidden bg-[#24150C] mb-3">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-display text-xs font-bold text-[#24150C] uppercase truncate">{p.name}</h4>
                <p className="text-xs font-semibold text-[#A76D32] mt-1">{formatPrice(p.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
