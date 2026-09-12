import { useState } from 'react';
import { products, formatPrice, type Product, type Page } from '../data';
import { AfricanPatternRibbon } from './AfricanPattern';

interface CollectionPageProps {
  navigate: (page: Page, productId?: string) => void;
  onAddToCart: (product: Product, size?: number, color?: string) => void;
}

type FilterCategory = 'all' | 'homme' | 'femme' | 'unisexe' | 'enfant';
type FilterCollection = 'all' | 'signature' | 'artisanale' | 'royale' | 'prestige';
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

export default function CollectionPage({ navigate, onAddToCart }: CollectionPageProps) {
  const [category, setCategory] = useState<FilterCategory>('all');
  const [collection, setCollection] = useState<FilterCollection>('all');
  const [sort, setSort] = useState<SortOption>('default');
  const [priceMax, setPriceMax] = useState(100000);
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = products
    .filter((p) => (category === 'all' ? true : p.category === category))
    .filter((p) => (collection === 'all' ? true : p.collection === collection))
    .filter((p) => p.price <= priceMax)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const handleAdd = (product: Product) => {
    onAddToCart(product, product.sizes[2] || product.sizes[0] || 42, product.colors[0]?.name || 'Standard');
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] py-8">
      {/* Header Banner */}
      <div className="bg-[#1C1109] text-[#FAF6F0] py-12 px-4 sm:px-8 border-b border-[#3A2213]">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-xs font-semibold text-[#D4A359] tracking-[0.24em] uppercase block mb-2">
            MAISON TERANGA DAKAR
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#FAF6F0] mb-3">
            Boutique & Collections
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C4AC] max-w-xl mx-auto font-light leading-relaxed">
            Mocassins ajourés, sandales royales et babouches ciselées, façonnées à la main par nos maîtres cordonniers au Sénégal.
          </p>
        </div>
      </div>
      <AfricanPatternRibbon />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10">
        {/* Filter Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5DACB]">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                category === 'all'
                  ? 'bg-[#24150C] text-[#FAF6F0]'
                  : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
              }`}
            >
              Tous ({products.length})
            </button>
            <button
              onClick={() => setCategory('homme')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                category === 'homme'
                  ? 'bg-[#24150C] text-[#FAF6F0]'
                  : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
              }`}
            >
              Homme
            </button>
            <button
              onClick={() => setCategory('femme')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                category === 'femme'
                  ? 'bg-[#24150C] text-[#FAF6F0]'
                  : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
              }`}
            >
              Femme
            </button>
            <button
              onClick={() => setCategory('unisexe')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                category === 'unisexe'
                  ? 'bg-[#24150C] text-[#FAF6F0]'
                  : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
              }`}
            >
              Unisexe
            </button>
            <button
              onClick={() => setCategory('enfant')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                category === 'enfant'
                  ? 'bg-[#24150C] text-[#FAF6F0]'
                  : 'bg-[#EDE3D2] text-[#24150C] hover:bg-[#E2D2BC]'
              }`}
            >
              Enfants & Bébés
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-[#5C3A1E]">
            <label className="font-semibold uppercase tracking-wider">Trier par :</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-[#FAF6F0] border border-[#C59A58] rounded-xs px-3 py-1.5 text-xs text-[#24150C] focus:outline-hidden"
            >
              <option value="default">Recommandés</option>
              <option value="price-asc">Prix : croissant</option>
              <option value="price-desc">Prix : décroissant</option>
              <option value="name">Nom alphabétique</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card bg-[#EDE3D2]/40 rounded-xs border border-[#E5DACB] p-3 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div
                onClick={() => navigate('product', product.id)}
                className="relative aspect-square rounded-xs overflow-hidden bg-[#24150C] cursor-pointer mb-3.5 group"
              >
                <img
                  src={product.images[0]}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-[#190E07]/90 text-[#FAF6F0] text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border border-[#5A381F]/50">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col grow">
                <h3
                  onClick={() => navigate('product', product.id)}
                  className="font-display font-bold text-sm tracking-wider text-[#24150C] uppercase hover:text-[#9E672E] cursor-pointer transition-colors"
                >
                  {product.name}
                </h3>

                <p className="text-xs font-semibold text-[#80502A] mt-1 mb-2.5">
                  {formatPrice(product.price)}
                </p>

                {/* Color swatches */}
                <div className="flex items-center gap-2 mb-3.5">
                  {product.colors.map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={() => handleAdd(product)}
                  className={`w-full py-2.5 px-3 border rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    addedId === product.id
                      ? 'bg-[#2E5E3A] border-[#2E5E3A] text-white'
                      : 'border-[#C59A58] bg-[#FAF6F0]/80 hover:bg-[#24150C] hover:text-[#FAF6F0] text-[#3D2515]'
                  }`}
                >
                  {addedId === product.id ? (
                    <>
                      <span>✓ AJOUTÉ</span>
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
          ))}
        </div>
      </div>
    </main>
  );
}
