import type { Page } from '../data';
import { AfricanPatternRibbon, TerangaLogoIcon, FaitMainStamp } from './AfricanPattern';

interface HistoirePageProps {
  navigate: (page: Page) => void;
}

export default function HistoirePage({ navigate }: HistoirePageProps) {
  const values = [
    { label: 'Authenticité & Teranga', text: 'Chaque paire honore l\'hospitalité et la noblesse sénégalaise — des cuirs véritables non altérés.' },
    { label: 'Fait Main avec Fierté', text: 'Zéro travail à la chaîne. Chaque paire est découpée, perforée et cousue manuellement à Dakar.' },
    { label: 'Transmission Vivante', text: 'Nous formons et finançons les jeunes apprentis cordonniers de la Médina et de Thiès.' },
    { label: 'Excellence du Détail', text: 'Des patrons millimétrés, des coutures renforcées et des semelles qui épousent la voûte plantaire.' },
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F0] py-8">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-[#1C1109] text-[#FAF6F0] overflow-hidden border-b border-[#3A2213]">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero_shoes.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1109] via-[#1C1109]/80 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 py-16 text-center">
          <div className="flex justify-center mb-3">
            <TerangaLogoIcon className="w-12 h-12" />
          </div>
          <span className="text-xs font-semibold text-[#D4A359] tracking-[0.24em] uppercase block mb-2">
            MAISON DE HAUTE CORDONNERIE SÉNÉGALAISE
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#FAF6F0] mb-4">
            Notre Histoire & Héritage
          </h1>
          <p className="text-sm sm:text-base text-[#D9C4AC] max-w-2xl mx-auto font-light leading-relaxed">
            "Teranga n'est pas seulement un nom, c'est l'âme du Sénégal : l'art de sublimer l'autre et d'honorer nos racines à chaque pas."
          </p>
        </div>
      </section>
      <AfricanPatternRibbon />

      {/* Origine & Savoir-faire */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-xs font-bold text-[#A76D32] tracking-widest uppercase mb-2 block">
                AUX ORIGINES DE TERANGA
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#24150C] mb-6">
                Le Souffle de la Médina & la Noblesse du Cuir
              </h2>
              <p className="text-sm text-[#5C3A1E] leading-relaxed mb-4">
                Fondée à Dakar, la Maison Teranga est née du désir de redonner ses lettres de noblesse à la cordonnerie artisanale d'Afrique de l'Ouest.
              </p>
              <p className="text-sm text-[#5C3A1E] leading-relaxed mb-6">
                Dans les ruelles vibrantes de la Médina, nos maîtres artisans perpétuent les gestes précis : la découpe du cuir de veau, les perforations géométriques minutieuses et la pose de patines naturelles à base de karité et de cire d'abeille.
              </p>
              <button
                onClick={() => navigate('collection')}
                className="btn-gold px-6 py-3 rounded-xs text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                Découvrir Nos Créations
              </button>
            </div>

            <div className="relative rounded-xs overflow-hidden border border-[#DAC7B0] bg-[#24150C] shadow-xl">
              <img
                src="/images/artisan_main.jpg"
                alt="Maître artisan dans l'atelier Teranga"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <FaitMainStamp className="w-24 h-24" />
              </div>
            </div>
          </div>

          {/* Pillars of value */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#E5DACB]">
            {values.map((v) => (
              <div key={v.label} className="bg-[#EDE3D2]/40 p-6 rounded-xs border border-[#E5DACB]">
                <h3 className="font-serif-luxury text-lg font-bold text-[#24150C] mb-2">
                  {v.label}
                </h3>
                <p className="text-xs text-[#5C3A1E] leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
