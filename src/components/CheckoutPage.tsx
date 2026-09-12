import { useState } from 'react';
import { formatPrice, type Page } from '../data';
import type { CartItem } from './CartSidebar';

interface CheckoutPageProps {
  cart: CartItem[];
  navigate: (page: Page) => void;
  onOrderComplete: () => void;
}

type Step = 1 | 2 | 3 | 4;

export default function CheckoutPage({ cart, navigate, onOrderComplete }: CheckoutPageProps) {
  const [step, setStep] = useState<Step>(1);
  const [orderDone, setOrderDone] = useState(false);
  const [info, setInfo] = useState({ prenom: '', nom: '', tel: '', email: '' });
  const [adresse, setAdresse] = useState({ region: '', ville: '', quartier: '', rue: '' });
  const [livraison, setLivraison] = useState<'domicile' | 'relais' | 'boutique'>('domicile');
  const [paiement, setPaiement] = useState<'wave' | 'orange' | 'carte' | 'livraison'>('wave');

  const subtotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const isFreeShipping = subtotal >= 25000;
  const shipping = isFreeShipping ? 0 : 2500;
  const total = subtotal + shipping;

  const steps = [
    { num: 1, label: 'Informations' },
    { num: 2, label: 'Adresse' },
    { num: 3, label: 'Livraison' },
    { num: 4, label: 'Paiement' },
  ];

  const handleComplete = () => {
    setOrderDone(true);
    onOrderComplete();
  };

  if (orderDone) {
    return (
      <main className="min-h-screen bg-[#FDFAF5] pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#2C1A0E] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A87C" strokeWidth="1.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1
            className="text-[#2C1A0E] mb-4 text-3xl"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 300 }}
          >
            Commande confirmée !
          </h1>
          <p className="text-[#7A4F2C] mb-3 leading-relaxed">
            Merci pour votre confiance. Votre commande a bien été enregistrée.
          </p>
          <p className="text-sm text-[#9B6B42] mb-10">
            Vous recevrez un email de confirmation dans quelques instants.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('compte')}
              className="bg-[#2C1A0E] text-[#F5EFE6] px-8 py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press"
            >
              Mes commandes
            </button>
            <button
              onClick={() => navigate('home')}
              className="border border-[#C9A87C] text-[#5C3A1E] px-8 py-4 label-caps hover:bg-[#F0E5D3] transition-colors btn-press"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFAF5] pt-16 lg:pt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 text-xs text-[#9B6B42] hover:text-[#5C3A1E] transition-colors mb-8 label-caps"
        >
          ← Continuer mes achats
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form area */}
          <div className="lg:col-span-2">
            {/* Step indicators */}
            <div className="flex items-center gap-0 mb-10">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center text-xs font-semibold transition-colors ${
                        step === s.num
                          ? 'bg-[#2C1A0E] text-[#F5EFE6]'
                          : step > s.num
                          ? 'bg-[#C9A87C] text-[#1E0F05]'
                          : 'border border-[#D9C09A] text-[#B8895E]'
                      }`}
                    >
                      {step > s.num ? '✓' : s.num}
                    </div>
                    <span className="label-caps text-[0.55rem] text-[#9B6B42] mt-1 hidden sm:block">
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-px w-8 sm:w-16 mx-1 transition-colors ${
                        step > s.num ? 'bg-[#C9A87C]' : 'bg-[#E8D5B7]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1 — Informations */}
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.6rem' }} className="text-[#2C1A0E]">
                  Vos informations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'prenom', label: 'Prénom', placeholder: 'Amadou' },
                    { key: 'nom', label: 'Nom', placeholder: 'Koné' },
                    { key: 'tel', label: 'Téléphone', placeholder: '+221 77 000 00 00' },
                    { key: 'email', label: 'Email', placeholder: 'amadou@exemple.com' },
                  ].map((f) => (
                    <div key={f.key} className={f.key === 'email' ? 'sm:col-span-2' : ''}>
                      <label className="label-caps text-[#7A4F2C] block mb-2">{f.label}</label>
                      <input
                        type={f.key === 'email' ? 'email' : f.key === 'tel' ? 'tel' : 'text'}
                        placeholder={f.placeholder}
                        value={info[f.key as keyof typeof info]}
                        onChange={(e) => setInfo({ ...info, [f.key]: e.target.value })}
                        className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] placeholder:text-[#C9A87C] focus:outline-none focus:border-[#2C1A0E] transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#2C1A0E] text-[#F5EFE6] py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press mt-4"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Step 2 — Adresse */}
            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.6rem' }} className="text-[#2C1A0E]">
                  Adresse de livraison
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'region', label: 'Région', placeholder: 'Dakar' },
                    { key: 'ville', label: 'Ville', placeholder: 'Dakar' },
                    { key: 'quartier', label: 'Quartier', placeholder: 'Almadies' },
                    { key: 'rue', label: 'Adresse complète', placeholder: 'Rue 10, Villa 25' },
                  ].map((f) => (
                    <div key={f.key} className={f.key === 'rue' ? 'sm:col-span-2' : ''}>
                      <label className="label-caps text-[#7A4F2C] block mb-2">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        value={adresse[f.key as keyof typeof adresse]}
                        onChange={(e) => setAdresse({ ...adresse, [f.key]: e.target.value })}
                        className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] placeholder:text-[#C9A87C] focus:outline-none focus:border-[#2C1A0E] transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-[#D9C09A] text-[#7A4F2C] px-8 py-4 label-caps hover:bg-[#F0E5D3] transition-colors btn-press"
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#2C1A0E] text-[#F5EFE6] py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press"
                  >
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 — Livraison */}
            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.6rem' }} className="text-[#2C1A0E]">
                  Mode de livraison
                </h2>
                <div className="space-y-3">
                  {[
                    { value: 'domicile', label: 'Livraison à domicile', sub: '2–3 jours ouvrables · 5 000 FCFA (offerte dès 200 000 FCFA)' },
                    { value: 'relais', label: 'Point relais', sub: '3–5 jours ouvrables · Gratuit' },
                    { value: 'boutique', label: 'Retrait en boutique', sub: 'Disponible sous 24h · Gratuit · Dakar uniquement' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setLivraison(opt.value as typeof livraison)}
                      className={`w-full flex items-start gap-4 p-4 border text-left transition-colors ${
                        livraison === opt.value
                          ? 'border-[#2C1A0E] bg-[#F0E5D3]'
                          : 'border-[#E8D5B7] hover:border-[#C9A87C]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border-2 rounded-full mt-0.5 flex-shrink-0 transition-colors ${
                          livraison === opt.value ? 'border-[#2C1A0E] bg-[#2C1A0E]' : 'border-[#C9A87C]'
                        }`}
                      />
                      <div>
                        <p className="label-caps text-[#2C1A0E] text-xs mb-1">{opt.label}</p>
                        <p className="text-xs text-[#9B6B42]">{opt.sub}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(2)} className="border border-[#D9C09A] text-[#7A4F2C] px-8 py-4 label-caps hover:bg-[#F0E5D3] transition-colors btn-press">← Retour</button>
                  <button onClick={() => setStep(4)} className="flex-1 bg-[#2C1A0E] text-[#F5EFE6] py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press">Continuer →</button>
                </div>
              </div>
            )}

            {/* Step 4 — Paiement */}
            {step === 4 && (
              <div className="animate-fade-in space-y-6">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.6rem' }} className="text-[#2C1A0E]">
                  Mode de paiement
                </h2>
                <div className="space-y-3">
                  {[
                    { value: 'wave', label: 'Wave', sub: 'Paiement mobile instantané' },
                    { value: 'orange', label: 'Orange Money', sub: 'Paiement mobile Orange' },
                    { value: 'carte', label: 'Carte bancaire', sub: 'Visa, Mastercard — paiement 3D Secure' },
                    { value: 'livraison', label: 'Paiement à la livraison', sub: 'Disponible uniquement pour Dakar' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPaiement(opt.value as typeof paiement)}
                      className={`w-full flex items-start gap-4 p-4 border text-left transition-colors ${
                        paiement === opt.value ? 'border-[#2C1A0E] bg-[#F0E5D3]' : 'border-[#E8D5B7] hover:border-[#C9A87C]'
                      }`}
                    >
                      <div className={`w-4 h-4 border-2 rounded-full mt-0.5 flex-shrink-0 transition-colors ${paiement === opt.value ? 'border-[#2C1A0E] bg-[#2C1A0E]' : 'border-[#C9A87C]'}`} />
                      <div>
                        <p className="label-caps text-[#2C1A0E] text-xs mb-1">{opt.label}</p>
                        <p className="text-xs text-[#9B6B42]">{opt.sub}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="bg-[#F5EFE6] border border-[#E8D5B7] p-4 text-xs text-[#9B6B42] leading-relaxed">
                  ⚠️ Aucun paiement réel ne sera prélevé. La passerelle de paiement sera connectée prochainement.
                </div>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(3)} className="border border-[#D9C09A] text-[#7A4F2C] px-8 py-4 label-caps hover:bg-[#F0E5D3] transition-colors btn-press">← Retour</button>
                  <button onClick={handleComplete} className="flex-1 bg-[#2C1A0E] text-[#F5EFE6] py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press">Confirmer la commande ✓</button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F5EFE6] border border-[#E8D5B7] p-6 sticky top-24">
              <h3
                className="text-[#2C1A0E] mb-5"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 400 }}
              >
                Récapitulatif
              </h3>
              <ul className="space-y-4 mb-6">
                {cart.map((item) => (
                  <li key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <div className="w-12 h-14 bg-[#E8D5B7] overflow-hidden flex-shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#2C1A0E] font-medium leading-snug" style={{ fontFamily: 'Fraunces, serif' }}>{item.product.name}</p>
                      <p className="text-[0.6rem] text-[#9B6B42] mt-0.5">{item.color} · {item.size} · ×{item.quantity}</p>
                      <p className="text-xs text-[#5C3A1E] mt-1">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#E8D5B7] pt-4 space-y-2">
                <div className="flex justify-between text-sm text-[#7A4F2C]">
                  <span>Sous-total</span><span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#7A4F2C]">
                  <span>Livraison</span><span>{shipping === 0 ? 'Offerte' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-semibold text-[#2C1A0E] pt-2 border-t border-[#E8D5B7]" style={{ fontFamily: 'Fraunces, serif' }}>
                  <span>Total</span><span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
