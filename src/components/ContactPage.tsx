import { useState } from 'react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E8D5B7]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm text-[#2C1A0E] font-medium" style={{ fontFamily: 'Fraunces, serif' }}>
          {question}
        </span>
        <svg
          className={`flex-shrink-0 ml-3 transition-transform text-[#9B6B42] ${open ? 'rotate-180' : ''}`}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 animate-fade-in">
          <p className="text-sm text-[#7A4F2C] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5] pt-16 lg:pt-20">
      <div className="bg-[#F0E5D3] border-b border-[#E8D5B7] py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="label-caps text-[#9B6B42] mb-3">Nous contacter</p>
          <h1
            className="text-[#2C1A0E]"
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            Contact & FAQ
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <h2
              className="text-[#2C1A0E] mb-6"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
            >
              Envoyez-nous un message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Prénom', 'Nom'].map((f) => (
                  <div key={f}>
                    <label className="label-caps text-[#7A4F2C] block mb-2">{f}</label>
                    <input
                      type="text"
                      className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] placeholder:text-[#C9A87C] focus:outline-none focus:border-[#2C1A0E] transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="label-caps text-[#7A4F2C] block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] focus:outline-none focus:border-[#2C1A0E] transition-colors"
                />
              </div>
              <div>
                <label className="label-caps text-[#7A4F2C] block mb-2">Sujet</label>
                <select className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#5C3A1E] focus:outline-none focus:border-[#2C1A0E] transition-colors">
                  <option>Commande et livraison</option>
                  <option>Retours et échanges</option>
                  <option>Guide des tailles</option>
                  <option>Produit personnalisé</option>
                  <option>Partenariat artisan</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="label-caps text-[#7A4F2C] block mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-[#D9C09A] bg-transparent px-4 py-3 text-sm text-[#2C1A0E] focus:outline-none focus:border-[#2C1A0E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2C1A0E] text-[#F5EFE6] py-4 label-caps hover:bg-[#3D2410] transition-colors btn-press"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h2
              className="text-[#2C1A0E] mb-6"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '1.8rem' }}
            >
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Comment choisir ma taille ?',
                  a: "Mesurez votre pied de l'extrémité du talon jusqu'au bout du grand orteil. Référez-vous à notre tableau de correspondance. En cas de doute entre deux tailles, choisissez la taille supérieure.",
                },
                {
                  q: 'Quels sont les délais de livraison ?',
                  a: "La livraison à domicile prend 2 à 3 jours ouvrables pour Dakar et jusqu'à 7 jours pour les autres régions. Certains modèles en édition limitée peuvent nécessiter 7 à 14 jours.",
                },
                {
                  q: 'Puis-je retourner une paire ?',
                  a: "Vous disposez de 30 jours pour retourner vos articles dans leur état d'origine. Les frais de retour sont à votre charge. Les articles personnalisés ne sont pas échangeables.",
                },
                {
                  q: 'Comment entretenir mes chaussures ?',
                  a: "Nos chaussures en cuir végétal se bonifient avec le temps. Brossez-les régulièrement et appliquez une cire d'entretien naturelle. Évitez l'exposition prolongée à l'eau.",
                },
                {
                  q: 'Comment puis-je personnaliser une paire ?',
                  a: "Contactez-nous par ce formulaire pour discuter de votre projet. Nous vous proposerons les options disponibles selon le modèle choisi.",
                },
              ].map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 border border-[#E8D5B7] p-6">
              <p className="label-caps text-[#9B6B42] mb-4">Nos coordonnées</p>
              <div className="space-y-3 text-sm text-[#7A4F2C]">
                <p>📍 Almadies, Dakar — Sénégal</p>
                <p>✉️ contact@heritageshoes.com</p>
                <p>📞 +221 77 000 00 00</p>
                <p className="text-xs text-[#9B6B42] mt-4">Lundi – Vendredi · 9h – 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
