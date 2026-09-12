import { blogPosts, type Page } from '../data';
import { AfricanPatternRibbon } from './AfricanPattern';

interface BlogPageProps {
  navigate: (page: Page) => void;
}

export default function BlogPage({ navigate }: BlogPageProps) {
  return (
    <main className="min-h-screen bg-[#FAF6F0] py-8">
      {/* Header */}
      <div className="bg-[#1C1109] text-[#FAF6F0] py-12 px-4 sm:px-8 border-b border-[#3A2213]">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-xs font-semibold text-[#D4A359] tracking-[0.24em] uppercase block mb-2">
            LE JOURNAL TERANGA
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#FAF6F0] mb-3">
            Histoires, Cuir & Artisanat
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C4AC] max-w-xl mx-auto font-light leading-relaxed">
            Plongez dans les coulisses de la cordonnerie africaine d'excellence et l'art de vivre au Sénégal.
          </p>
        </div>
      </div>
      <AfricanPatternRibbon />

      {/* Blog list */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#EDE3D2]/50 border border-[#E5DACB] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all"
            >
              <div className="aspect-16/9 bg-[#24150C] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#A76D32] mb-2 font-semibold">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span className="text-[#7A4F2C] font-normal">{post.date}</span>
                    <span>•</span>
                    <span className="text-[#7A4F2C] font-normal">{post.readTime}</span>
                  </div>

                  <h2 className="font-serif-luxury text-xl text-[#24150C] font-semibold mb-3 group-hover:text-[#A76D32] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5C3A1E] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => navigate('histoire')}
                  className="text-xs font-bold text-[#A76D32] uppercase tracking-wider flex items-center gap-1.5 hover:text-[#24150C] transition-colors cursor-pointer self-start"
                >
                  <span>Lire l'article complet</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
