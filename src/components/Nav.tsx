import { useState, useEffect } from 'react';
import type { Page } from '../data';
import { TerangaLogoIcon, AfricanPatternRibbon } from './AfricanPattern';

interface NavProps {
  currentPage: Page;
  navigate: (page: Page, productId?: string) => void;
  cartCount: number;
  onCartOpen: () => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'ACCUEIL', page: 'home' },
  { label: 'BOUTIQUE', page: 'collection' },
  { label: 'COLLECTIONS', page: 'collection' },
  { label: 'ARTISANAT', page: 'artisans' },
  { label: 'À PROPOS', page: 'histoire' },
  { label: 'BLOG', page: 'blog' },
  { label: 'CONTACT', page: 'contact' },
];

export default function Nav({ currentPage, navigate, cartCount, onCartOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#190F08] text-[#E7D6C1] text-[10px] sm:text-[11px] tracking-wider py-2 px-4 border-b border-[#311F13]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Free delivery notice */}
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#D4A359] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span className="font-medium tracking-wide">
              LIVRAISON OFFERTE PARTOUT AU SÉNÉGAL DÈS 25 000 FCFA D'ACHAT
            </span>
          </div>

          {/* Center: Secure payment */}
          <div className="hidden md:flex items-center gap-1.5 text-[#D4A359]">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-[#E7D6C1] font-medium uppercase tracking-wider">
              PAIEMENT SÉCURISÉ
            </span>
          </div>

          {/* Right: Customer Service and Phone */}
          <div className="flex items-center gap-4 text-[#E7D6C1]">
            <div className="hidden sm:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#D4A359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              <span className="uppercase font-medium">SERVICE CLIENT</span>
            </div>
            <a
              href="tel:+221771234567"
              className="flex items-center gap-1 text-[#D4A359] hover:text-[#F3DFC2] transition-colors font-medium tracking-wide"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+221 77 123 45 67</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={`bg-[#FAF6F0] transition-colors duration-200 border-b border-[#E8DFC0]/60 ${scrolled ? 'bg-[#FAF6F0]/98 backdrop-blur-md shadow-xs' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-hidden"
          >
            <TerangaLogoIcon className="w-9 h-9 sm:w-11 sm:h-11 shadow-xs" />
            <div className="flex flex-col">
              <span className="font-display text-[#221309] text-xl sm:text-2xl font-bold tracking-[0.12em] leading-none">
                TERANGA
              </span>
              <span className="text-[#84522A] text-[7.5px] sm:text-[9px] font-semibold tracking-[0.28em] uppercase mt-1 leading-none">
                CHAUSSURES TRADITIONNELLES
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.page || (item.page === 'collection' && currentPage === 'product');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.page)}
                  className={`text-[12px] font-medium tracking-[0.15em] transition-all py-1.5 relative ${
                    isActive
                      ? 'text-[#23150C] font-semibold'
                      : 'text-[#6D482C] hover:text-[#23150C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59A58] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Search, User, Cart, Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-5 text-[#2B180D]">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 text-[#3A2213] hover:text-[#A76D32] transition-colors focus:outline-hidden"
              aria-label="Recherche"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Account Icon */}
            <button
              onClick={() => handleNav('compte')}
              className="p-1.5 text-[#3A2213] hover:text-[#A76D32] transition-colors focus:outline-hidden"
              aria-label="Mon Compte"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Shopping Cart Bag with Count */}
            <button
              onClick={onCartOpen}
              className="relative p-1.5 text-[#3A2213] hover:text-[#A76D32] transition-colors focus:outline-hidden"
              aria-label="Panier d'achat"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-[#24150C] text-[#F3DFC2] text-[10px] font-bold rounded-full flex items-center justify-center border border-[#FAF6F0]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#2B180D] focus:outline-hidden"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="border-t border-[#E8DFC0] bg-[#FAF6F0] px-4 py-3 animate-fade-in">
            <div className="max-w-[800px] mx-auto relative">
              <input
                type="text"
                placeholder="Rechercher des mocassins, sandales royales, babouches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    navigate('collection');
                    setSearchOpen(false);
                  }
                }}
                className="w-full bg-[#FFFFFF] border border-[#C59A58] rounded-md px-4 py-2.5 text-sm text-[#24150C] placeholder-[#9E7B58] focus:outline-hidden focus:ring-1 focus:ring-[#A76D32]"
                autoFocus
              />
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    navigate('collection');
                    setSearchOpen(false);
                  }
                }}
                className="absolute right-2 top-2 bg-[#24150C] text-[#F3DFC2] text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-[#382012]"
              >
                Rechercher
              </button>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8DFC0] bg-[#FAF6F0] px-6 py-4 shadow-lg animate-fade-in">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.page)}
                  className={`text-left py-2 text-xs font-semibold tracking-wider border-b border-[#EFE5D3] ${
                    currentPage === item.page ? 'text-[#A76D32]' : 'text-[#3E2514]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => handleNav('compte')}
                  className="w-full text-center py-2.5 bg-[#24150C] text-[#FAF6F0] text-xs font-semibold tracking-wider rounded-sm"
                >
                  MON COMPTE TERANGA
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* 3. Decorative African Tribal Geometric Border Ribbon */}
      <AfricanPatternRibbon />
    </header>
  );
}
