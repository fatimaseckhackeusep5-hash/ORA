import { formatPrice, type Product } from '../data';

export interface CartItem {
  product: Product;
  size: number;
  color: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: string, size: number) => void;
  onQuantityChange: (productId: string, size: number, qty: number) => void;
  onCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 25000;

export default function CartSidebar({
  isOpen,
  onClose,
  items,
  onRemove,
  onQuantityChange,
  onCheckout,
}: CartSidebarProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = items.length === 0 ? 0 : isFreeShipping ? 0 : 2500;
  const total = subtotal + shipping;

  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF6F0] flex flex-col h-full shadow-2xl z-10 border-l border-[#E5DACB]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DACB] bg-[#F4EDE0]">
          <div>
            <h2 className="font-display text-lg font-bold text-[#24150C] uppercase tracking-wider">
              Mon Panier Teranga
            </h2>
            <p className="text-[11px] text-[#7A4F2C]">
              {items.length} modèle{items.length > 1 ? 's' : ''} sélectionné{items.length > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E8DFC0]/60 hover:bg-[#E8DFC0] text-[#24150C] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer le panier"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Tracker */}
        <div className="bg-[#EFE5D3] px-6 py-3 border-b border-[#E0D2BC]">
          {isFreeShipping ? (
            <p className="text-xs font-semibold text-[#2E5E3A] flex items-center gap-1.5">
              <span>✓</span> Félicitations ! La livraison partout au Sénégal vous est offerte.
            </p>
          ) : (
            <p className="text-xs text-[#5C3A1E]">
              Ajoutez <span className="font-bold text-[#24150C]">{formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}</span> pour bénéficier de la <span className="font-semibold text-[#9E672E]">livraison offerte</span> !
            </p>
          )}
          <div className="w-full h-1.5 bg-[#DDCBB5] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#9E672E] rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EADBC5]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#EFE5D3] flex items-center justify-center text-[#9E672E] mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="font-serif-luxury text-xl text-[#24150C] mb-2 font-normal">
                Votre panier est vide
              </h3>
              <p className="text-xs text-[#7A4F2C] max-w-xs mb-6">
                Découvrez nos mocassins, babouches et sandales d'exception façonnés à la main.
              </p>
              <button
                onClick={onClose}
                className="btn-gold px-6 py-2.5 rounded-xs text-xs font-semibold tracking-wider uppercase cursor-pointer"
              >
                Explorer la Boutique
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="py-4 flex gap-4 items-center"
              >
                {/* Thumbnail */}
                <div className="w-18 h-18 rounded-xs overflow-hidden bg-[#24150C] shrink-0 border border-[#DAC7B0]">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-xs font-bold text-[#24150C] uppercase tracking-wide truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-[#7A4F2C] mt-0.5">
                    Pointure {item.size} • {item.color}
                  </p>
                  <p className="text-xs font-semibold text-[#9E672E] mt-1">
                    {formatPrice(item.product.price)}
                  </p>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#C59A58] rounded-xs bg-[#FAF6F0]">
                      <button
                        onClick={() =>
                          onQuantityChange(
                            item.product.id,
                            item.size,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#24150C] hover:bg-[#EFE5D3] cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#24150C]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onQuantityChange(
                            item.product.id,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#24150C] hover:bg-[#EFE5D3] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove item button */}
                    <button
                      onClick={() => onRemove(item.product.id, item.size)}
                      className="text-[11px] text-[#A64B2A] hover:underline cursor-pointer"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E5DACB] bg-[#F5EEE4] space-y-3">
            <div className="space-y-1.5 text-xs text-[#5C3A1E]">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-semibold text-[#24150C]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison Sénégal</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-[#2E5E3A] font-bold">OFFERTE</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#24150C] pt-2 border-t border-[#DDCBB5]">
                <span>TOTAL</span>
                <span className="text-[#9E672E]">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onCheckout();
              }}
              className="w-full btn-gold py-3.5 rounded-xs text-xs font-bold tracking-widest uppercase cursor-pointer shadow-md text-center block"
            >
              COMMANDER EN TOUTE SÉCURITÉ
            </button>

            <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-[#7A4F2C]">
              <span>🔒 Paiement à la livraison ou via Wave & OM</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
