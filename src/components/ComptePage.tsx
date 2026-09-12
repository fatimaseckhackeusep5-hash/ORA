import { useState } from 'react';
import type { Page } from '../data';

interface ComptePageProps {
  navigate: (page: Page) => void;
}

type Tab = 'commandes' | 'favoris' | 'profil' | 'adresses';

const mockOrders = [
  {
    id: 'HS-2026-0423',
    date: '12 août 2026',
    products: 'Oxford Sahel — Cognac / 42',
    amount: 189000,
    status: 'Livré' as const,
  },
  {
    id: 'HS-2026-0387',
    date: '3 juillet 2026',
    products: 'Sandale Kora — Or Naturel / 38',
    amount: 125000,
    status: 'En cours de livraison' as const,
  },
  {
    id: 'HS-2026-0291',
    date: '15 mai 2026',
    products: 'Mule Savane — Caramel / 39 · Derby Baobab — Cognac / 41',
    amount: 298000,
    status: 'Livré' as const,
  },
];

const statusColor: Record<string, string> = {
  'Livré': 'bg-[#F0E5D3] text-[#5C3A1E]',
  'En cours de livraison': 'bg-[#2C1A0E]/10 text-[#2C1A0E]',
  'En préparation': 'bg-[#E8D5B7] text-[#7A4F2C]',
};

const statusSteps = ['Confirmée', 'Préparation', 'Expédition', 'Livrée'];

export default function ComptePage({ navigate }: ComptePageProps) {
  const [tab, setTab] = useState<Tab>('commandes');
  const [selectedOrder, setSelectedOrder] = useState<(typeof mockOrders)[0] | null>(null);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'commandes', label: 'Mes commandes' },
    { key: 'favoris', label: 'Mes favoris' },
    { key: 'adresses', label: 'Mes adresses' },
    { key: 'profil', label: 'Mon profil' },
  ];

  return (
    <main className="min-h-screen bg-[#FDFAF5] pt-16 lg:pt-20">
      {/* Header */}
      <div className="bg-[#F0E5D3] border-b border-[#E8D5B7] py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="label-caps text-[#9B6B42] mb-2">Espace personnel</p>
          <h1
            className="text-[#2C1A0E]"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 3rem)' }}
          >
            Bonjour, Amadou.
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar tabs */}
          <aside>
            <nav className="space-y-1">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`w-full text-left px-4 py-3 label-caps transition-colors ${
                    tab === t.key
                      ? 'bg-[#2C1A0E] text-[#F5EFE6]'
                      : 'text-[#7A4F2C] hover:bg-[#F0E5D3] hover:text-[#2C1A0E]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
              <button className="w-full text-left px-4 py-3 label-caps text-[#C9A87C] hover:text-[#9B6B42] transition-colors mt-6">
                Se déconnecter
              </button>
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Commandes */}
            {tab === 'commandes' && (
              <div className="animate-fade-in">
                {selectedOrder ? (
                  <div>
                    <button
                      onClick={() => setSelectedOrder(null)}
                      className="label-caps text-[#9B6B42] hover:text-[#5C3A1E] transition-colors mb-6 flex items-center gap-2"
                    >
                      ← Retour à mes commandes
                    </button>
                    <div className="border border-[#E8D5B7] p-6 bg-[#FDFAF5]">
                      <div className="flex flex-wrap justify-between gap-4 mb-6">
                        <div>
                          <p className="label-caps text-[#9B6B42] mb-1">Commande</p>
                          <p className="text-[#2C1A0E] font-semibold" style={{ fontFamily: 'Fraunces, serif' }}>
                            {selectedOrder.id}
                          </p>
                        </div>
                        <span className={`label-caps px-3 py-1.5 text-[0.6rem] self-start ${statusColor[selectedOrder.status]}`}>
                          {selectedOrder.status}
                        </span>
                      </div>
                      {/* Progress */}
                      <div className="mb-8">
                        <p className="label-caps text-[#9B6B42] mb-4">Suivi de commande</p>
                        <div className="flex items-center gap-0">
                          {statusSteps.map((s, i) => (
                            <div key={s} className="flex items-center flex-1">
                              <div className="flex flex-col items-center">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    i <= 3 ? 'bg-[#C9A87C]' : 'bg-[#E8D5B7]'
                                  }`}
                                />
                                <span className="text-[0.55rem] label-caps text-[#9B6B42] mt-1 text-center w-16">
                                  {s}
                                </span>
                              </div>
                              {i < statusSteps.length - 1 && (
                                <div className={`h-px flex-1 mx-1 ${i < 3 ? 'bg-[#C9A87C]' : 'bg-[#E8D5B7]'}`} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-[#7A4F2C]">
                        <div className="flex justify-between">
                          <span className="label-caps text-[#9B6B42]">Date</span>
                          <span>{selectedOrder.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="label-caps text-[#9B6B42]">Produits</span>
                          <span className="text-right">{selectedOrder.products}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-[#2C1A0E] pt-2 border-t border-[#E8D5B7]">
                          <span style={{ fontFamily: 'Fraunces, serif' }}>Total</span>
                          <span>{new Intl.NumberFormat('fr-FR').format(selectedOrder.amount)} FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2
                      className="text-[#2C1A0E] mb-6"
                      style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
                    >
                      Mes commandes
                    </h2>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <button
                          key={order.id}
                          onClick={() => setSelectedOrder(order)}
                          className="w-full flex flex-wrap items-center justify-between gap-4 border border-[#E8D5B7] p-5 text-left hover:border-[#C9A87C] transition-colors bg-[#FDFAF5]"
                        >
                          <div>
                            <p className="label-caps text-[#9B6B42] text-[0.6rem] mb-1">
                              {order.id} · {order.date}
                            </p>
                            <p className="text-sm text-[#2C1A0E]" style={{ fontFamily: 'Fraunces, serif' }}>
                              {order.products}
                            </p>
                            <p className="text-sm text-[#7A4F2C] mt-1">
                              {new Intl.NumberFormat('fr-FR').format(order.amount)} FCFA
                            </p>
                          </div>
                          <span className={`label-caps px-3 py-1.5 text-[0.6rem] ${statusColor[order.status]}`}>
                            {order.status}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Favoris */}
            {tab === 'favoris' && (
              <div className="animate-fade-in">
                <h2
                  className="text-[#2C1A0E] mb-6"
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
                >
                  Mes favoris
                </h2>
                <div className="text-center py-16 text-[#C9A87C]">
                  <svg className="mx-auto mb-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <p style={{ fontFamily: 'Fraunces, serif' }} className="text-lg text-[#7A4F2C]">
                    Aucun favori pour l'instant
                  </p>
                  <button
                    onClick={() => navigate('collection')}
                    className="mt-6 border border-[#C9A87C] text-[#5C3A1E] px-8 py-3 label-caps hover:bg-[#F0E5D3] transition-colors text-xs"
                  >
                    Découvrir la collection →
                  </button>
                </div>
              </div>
            )}

            {/* Adresses */}
            {tab === 'adresses' && (
              <div className="animate-fade-in">
                <h2
                  className="text-[#2C1A0E] mb-6"
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
                >
                  Mes adresses
                </h2>
                <div className="border border-[#E8D5B7] p-6">
                  <p className="label-caps text-[#9B6B42] mb-1">Adresse principale</p>
                  <p className="text-sm text-[#5C3A1E] mt-2">Amadou Koné</p>
                  <p className="text-sm text-[#7A4F2C]">Rue 10, Villa 25 · Almadies · Dakar · Sénégal</p>
                  <button className="label-caps text-[#9B6B42] text-[0.6rem] mt-3 hover:text-[#5C3A1E] link-under">
                    Modifier
                  </button>
                </div>
              </div>
            )}

            {/* Profil */}
            {tab === 'profil' && (
              <div className="animate-fade-in">
                <h2
                  className="text-[#2C1A0E] mb-6"
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
                >
                  Mon profil
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Prénom', value: 'Amadou' },
                    { label: 'Nom', value: 'Koné' },
                    { label: 'Email', value: 'amadou@exemple.com' },
                    { label: 'Téléphone', value: '+221 77 000 00 00' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="label-caps text-[#7A4F2C] block mb-2">{f.label}</label>
                      <input
                        type="text"
                        defaultValue={f.value}
                        className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] focus:outline-none focus:border-[#2C1A0E] transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-[#2C1A0E] text-[#F5EFE6] px-8 py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press">
                  Enregistrer les modifications
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
