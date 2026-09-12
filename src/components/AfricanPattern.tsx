import React from 'react';

/**
 * Reusable African geometric pattern ribbons and decorative motifs
 * matching the authentic Teranga Senegalese visual identity.
 */

export function AfricanPatternRibbon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-full h-3 sm:h-3.5 bg-repeat-x bg-[length:24px_14px] ${className}`}
      style={{
        backgroundColor: '#1E120A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='14' viewBox='0 0 24 14'%3E%3Cpath d='M0 0 L12 7 L24 0 L24 3 L12 10 L0 3 Z M0 7 L12 14 L24 7 L24 10 L12 17 L0 10 Z' fill='%23C59A58' opacity='0.85'/%3E%3Cpath d='M12 2 L19 6 L12 10 L5 6 Z' fill='none' stroke='%23C59A58' stroke-width='0.75'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export function AfricanPatternVertical({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-5 sm:w-7 h-full bg-repeat-y bg-[length:20px_28px] opacity-90 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='28' viewBox='0 0 20 28'%3E%3Crect width='20' height='28' fill='%23FAF6F0'/%3E%3Cpath d='M10 0 L20 14 L10 28 L0 14 Z' fill='none' stroke='%23C59A58' stroke-width='1.2'/%3E%3Cpath d='M10 5 L16 14 L10 23 L4 14 Z' fill='%23EADBC5'/%3E%3Cpath d='M10 8 L14 14 L10 20 L6 14 Z' fill='%23A77038'/%3E%3Ccircle cx='10' cy='14' r='1.5' fill='%23FAF6F0'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

/**
 * Geometric Diamond Monogram Logo for TERANGA
 */
export function TerangaLogoIcon({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="44" height="44" rx="2" fill="#24150C" />
      {/* Outer Diamond */}
      <polygon points="24,6 42,24 24,42 6,24" stroke="#D4A359" strokeWidth="2" fill="#382113" />
      {/* Nested Geometric Cross and Diamonds */}
      <polygon points="24,12 36,24 24,36 12,24" stroke="#F5DFC0" strokeWidth="1.5" fill="#24150C" />
      <polygon points="24,17 31,24 24,31 17,24" fill="#D4A359" />
      {/* Corner chevrons */}
      <path d="M10 10 L15 15 M38 10 L33 15 M10 38 L15 33 M38 38 L33 33" stroke="#D4A359" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2.5" fill="#24150C" />
    </svg>
  );
}

/**
 * Circular Stamp "FAIT MAIN AVEC FIERTÉ"
 */
export function FaitMainStamp({ className = 'w-28 h-28' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 160 160" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="textPathCircle"
            d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          />
        </defs>
        {/* Outer and Inner circles */}
        <circle cx="80" cy="80" r="75" stroke="#D4A359" strokeWidth="2" strokeDasharray="3 3" fill="none" opacity="0.9" />
        <circle cx="80" cy="80" r="70" stroke="#D4A359" strokeWidth="1" fill="#1C1109" fillOpacity="0.85" />
        <circle cx="80" cy="80" r="48" stroke="#D4A359" strokeWidth="1" strokeDasharray="2 2" fill="#2A190D" />
        
        {/* Curved Circular Text */}
        <text className="text-[11px] font-semibold tracking-[0.24em] fill-[#F3E3CD] uppercase">
          <textPath href="#textPathCircle" startOffset="50%" textAnchor="middle">
            ✦ FAIT MAIN ✦ AVEC FIERTÉ ✦
          </textPath>
        </text>
      </svg>
      {/* Center Icon: Crafting hands / diamond */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#D4A359]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Africa Continent Silhouette Icon
 */
export function AfricaContinentIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10 C 26 8, 38 7, 44 11 C 48 14, 52 18, 48 23 C 44 28, 48 33, 44 38 C 40 43, 38 48, 34 54 C 31 58, 28 58, 27 53 C 25 45, 23 39, 21 33 C 18 29, 15 26, 17 21 C 18 16, 19 12, 22 10 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
