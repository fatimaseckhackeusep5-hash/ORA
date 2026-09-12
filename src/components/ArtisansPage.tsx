import { artisans } from '../data';
import { AfricanPatternRibbon, TerangaLogoIcon } from './AfricanPattern';

export default function ArtisansPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] py-8">
      {/* Header */}
      <div className="bg-[#1C1109] py-14 lg:py-20 relative overflow-hidden border-b border-[#3A2213]">
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <div className="flex justify-center mb-3">
            <TerangaLogoIcon className="w-10 h-10" />
          </div>
          <span className="text-xs font-semibold text-[#D4A359] tracking-[0.24em] uppercase block mb-2">
            LES MAÎTRES DE L'ATELIER TERANGA
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#FAF6F0] mb-4">
            Nos Maîtres Artisans
          </h1>
          <p className="text-sm text-[#D9C4AC] italic font-serif max-w-xl mx-auto">
            "Chaque soulier Teranga est le testament vivant d'un artisan et de ses mains expertes."
          </p>
        </div>
      </div>
      <AfricanPatternRibbon />

      {/* Intro */}
      <section className="bg-[#EDE3D2]/50 py-10 border-b border-[#E0D2BC]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 text-center">
          <p className="text-[#3D2515] text-base sm:text-lg leading-relaxed font-serif">
            Maison Teranga collabore avec les artisans les plus talentueux de la Médina de Dakar, de Thiès et de Saint-Louis. Rémunérés au juste prix, ils perpétuent des techniques de découpe et de piquage vieilles de plusieurs siècles.
          </p>
        </div>
      </section>

      {/* Artisans list */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 space-y-16">
          {artisans.map((artisan, i) => (
            <div
              key={artisan.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#EDE3D2]/30 p-6 sm:p-8 rounded-xs border border-[#E5DACB] ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-5 aspect-4/3 sm:aspect-square rounded-xs overflow-hidden bg-[#24150C] border border-[#DAC7B0]">
                <img
                  src={artisan.image}
                  alt={`${artisan.name} — Maître artisan Teranga`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text info */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#A76D32] tracking-widest uppercase mb-1">
                  📍 {artisan.region}
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#24150C] font-semibold mb-1">
                  {artisan.name}
                </h2>
                <p className="text-xs font-semibold text-[#80502A] mb-3">
                  {artisan.specialty} • {artisan.experience}
                </p>

                <p className="text-xs sm:text-sm text-[#5C3A1E] leading-relaxed mb-5">
                  {artisan.bio}
                </p>

                <div className="bg-[#FAF6F0] p-4 rounded-xs border-l-4 border-[#A76D32]">
                  <p className="text-[11px] font-bold text-[#24150C] uppercase tracking-wider mb-1">
                    Techniques d'art maîtrisées :
                  </p>
                  <p className="text-xs text-[#7A4F2C] italic font-serif">
                    {artisan.technique}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
