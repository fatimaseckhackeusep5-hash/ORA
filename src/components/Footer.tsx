import type { Page } from '../data';
import { TerangaLogoIcon } from './AfricanPattern';

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-[#180E07] text-[#FAF6F0] border-t border-[#311E11]">
      {/* Newsletter band */}
      <div className="border-b border-[#2C1A0E] bg-[#1F130B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#D4A359] uppercase mb-3">
              LE CERCLE TERANGA
            </p>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#FAF6F0] mb-3 leading-tight font-normal">
              Entrez dans l'univers de l'élégance africaine.
            </h2>
            <p className="text-xs sm:text-sm text-[#D9C4AC] mb-6 leading-relaxed font-light">
              Recevez en avant-première nos collections d'exception, invitations aux ventes privées et récits de nos maîtres artisans dakarois.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Merci pour votre inscription au Cercle Teranga !');
              }}
              className="flex flex-col sm:flex-row gap-2.5 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                className="grow bg-[#150D07] border border-[#523520] rounded-xs px-4 py-3 text-xs sm:text-sm text-[#FAF6F0] placeholder:text-[#8E6C52] focus:outline-hidden focus:border-[#D4A359] transition-colors"
              />
              <button
                type="submit"
                className="btn-gold px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-xs whitespace-nowrap cursor-pointer shadow-md"
              >
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <TerangaLogoIcon className="w-10 h-10" />
              <div>
                <span className="font-display text-[#FAF6F0] text-xl font-bold tracking-[0.14em] block leading-none">
                  TERANGA
                </span>
                <span className="text-[#D4A359] text-[8px] font-semibold tracking-[0.28em] uppercase mt-1 block leading-none">
                  CHAUSSURES TRADITIONNELLES
                </span>
              </div>
            </div>
            <p className="text-[#D4A359] text-sm italic font-serif mb-4">
              "L'héritage africain au bout des pieds."
            </p>
            <p className="text-xs text-[#BFA690] leading-relaxed max-w-sm mb-6">
              Maison de haute cordonnerie artisanale fondée au Sénégal. Nous unissons le savoir-faire ancestral du cuir et l'exigence contemporaine pour sublimer votre démarche.
            </p>

            {/* Dakar Boutiques */}
            <div className="text-xs text-[#BFA690] space-y-1.5 border-t border-[#311E11] pt-4">
              <p className="font-semibold text-[#FAF6F0]">Nos Salons & Ateliers :</p>
              <p>📍 Dakar Plateau — 14 Rue Victor Hugo</p>
              <p>📍 Almadies — Route du Méridien Président</p>
              <p>📞 +221 77 123 45 67 | ✉️ contact@teranga-chaussures.sn</p>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#D4A359] uppercase mb-4">
              BOUTIQUE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9C4AC]">
              {[
                { label: 'Tous les Modèles', page: 'collection' as Page },
                { label: 'Mocassins Traditionnels', page: 'collection' as Page },
                { label: 'Sandales Royales', page: 'collection' as Page },
                { label: 'Babouches Ciselées', page: 'collection' as Page },
                { label: 'Chaussures Prestige', page: 'collection' as Page },
                { label: 'Éditions Limitées', page: 'collection' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="hover:text-[#D4A359] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison Teranga */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#D4A359] uppercase mb-4">
              MAISON TERANGA
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9C4AC]">
              {[
                { label: 'Notre Histoire', page: 'histoire' as Page },
                { label: 'Nos Maîtres Artisans', page: 'artisans' as Page },
                { label: 'Tannage Végétal de Thiès', page: 'histoire' as Page },
                { label: 'Engagements & Durabilité', page: 'histoire' as Page },
                { label: 'Journal & Blog', page: 'blog' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="hover:text-[#D4A359] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Paiements */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#D4A359] uppercase mb-4">
              SERVICE CLIENT
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9C4AC] mb-5">
              {[
                { label: 'Suivi de Commande', page: 'compte' as Page },
                { label: 'Livraison 24/72h au Sénégal', page: 'contact' as Page },
                { label: 'Guide des Tailles', page: 'contact' as Page },
                { label: 'Échanges & Retours Gratuits', page: 'contact' as Page },
                { label: 'Nous Contacter', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="hover:text-[#D4A359] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Payment options accepted */}
            <div>
              <p className="text-[10px] text-[#A68F78] uppercase tracking-wider mb-2 font-semibold">
                Moyens de paiement acceptés :
              </p>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-bold">
                <span className="bg-[#0099FF] text-white px-2 py-0.5 rounded-xs">Wave</span>
                <span className="bg-[#FF6600] text-white px-2 py-0.5 rounded-xs">Orange Money</span>
                <span className="bg-[#3D2515] text-[#D4A359] px-2 py-0.5 rounded-xs border border-[#523520]">Free Money</span>
                <span className="bg-[#24150C] text-[#FAF6F0] px-2 py-0.5 rounded-xs border border-[#523520]">Visa / CB</span>
                <span className="bg-[#2E5E3A] text-white px-2 py-0.5 rounded-xs">Paiement Livraison</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[#2A180D] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#78593F]">
          <p>© 2026 TERANGA — Chaussures Traditionnelles du Sénégal. Tous droits réservés.</p>
          <div className="flex gap-4">
            <button className="hover:text-[#D4A359] transition-colors">Mentions Légales</button>
            <span>•</span>
            <button className="hover:text-[#D4A359] transition-colors">Politique de Confidentialité</button>
            <span>•</span>
            <button className="hover:text-[#D4A359] transition-colors">CGV</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
