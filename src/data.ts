import heroShoes from '@/assets/images/hero_shoes.jpg';
import heroArtisanWorkshop from '@/assets/images/hero_artisan_workshop.jpg';
import sandaleEmmarh from '@/assets/images/sandale_emmarh_prestige.png';
import muleDaim from '@/assets/images/mule_daim_glands.png';
import sandaleDoubleBride from '@/assets/images/sandale_double_bride_noir.png';
import sandaleMinimaliste from '@/assets/images/sandale_minimaliste_vamp.png';

import sandaleFemmeIndigo from '@/assets/images/sandale_femme_indigo.jpg';
import sandaleFemmeEbene from '@/assets/images/sandale_femme_ebene.jpg';
import sandaleFemmeMandingue from '@/assets/images/sandale_femme_mandingue.jpg';
import sandaleFemmeRoyale from '@/assets/images/sandale_femme_royale.jpg';

import sandaleTresseNoir from '@/assets/images/sandale_tresse_noir_boucle.png';
import mocassinImg from '@/assets/images/mocassin.jpg';
import sandaleImg from '@/assets/images/sandale.jpg';
import baboucheImg from '@/assets/images/babouche.jpg';
import prestigeImg from '@/assets/images/prestige.jpg';
import artisanMainImg from '@/assets/images/artisan_main.jpg';

import sandaleBebeFleurs from '@/assets/images/sandale_bebe_fleurs_crochet.png';
import sandaleBebeCroise from '@/assets/images/sandale_bebe_crochet_croise.png';
import sandaleEnfantNoir from '@/assets/images/sandale_enfant_cuir_noir.png';
import sandaleEnfantBlanc from '@/assets/images/sandale_enfant_tressage_blanc.png';

export type Page =
  | 'home'
  | 'boutique'
  | 'collection'
  | 'product'
  | 'artisans'
  | 'histoire'
  | 'blog'
  | 'contact'
  | 'checkout'
  | 'compte'
  | 'livraison';

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  region: string;
  experience: string;
  bio: string;
  technique: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'homme' | 'femme' | 'unisexe' | 'enfant';
  collection: 'signature' | 'artisanale' | 'royale' | 'prestige';
  badge?: 'NOUVEAU' | 'BEST-SELLER' | 'ÉDITION LIMITÉE' | 'FAIT MAIN' | 'ÉDITION PRESTIGE' | 'DESIGN ÉPURÉ' | 'DOUCEUR' | 'CONFORT';
  colors: { name: string; hex: string }[];
  sizes: number[];
  images: string[];
  imageAlt: string;
  description: string;
  story: {
    material: string;
    craft: string;
    origin: string;
    time: string;
  };
  artisanId: string;
  featured?: boolean;
}

export const artisans: Artisan[] = [
  {
    id: 'amadou-sow',
    name: 'Maître Amadou Sow',
    specialty: 'Maître Cordonnier — Perforation & Montage Manuel',
    region: 'Médina, Dakar, Sénégal',
    experience: '28 ans de maîtrise',
    bio: 'Héritier d\'une lignée de trois générations de maîtres cordonniers de la Médina de Dakar, Amadou façonne chaque paire selon les méthodes artisanales traditionnelles sénégalaises.',
    technique: 'Perforation manuelle, couture Blake renforcée, patine naturelle au karité',
    image: artisanMainImg,
  },
  {
    id: 'aminata-diallo',
    name: 'Aminata Diallo',
    specialty: 'Artisane Maroquinière — Tressage & Sandales Royales',
    region: 'Saint-Louis, Sénégal',
    experience: '19 ans de savoir-faire',
    bio: 'Formée aux traditions du cuir de Saint-Louis et aux secrets des motifs royaux, Aminata conçoit des sandales d\'apparat où le confort moderne épouse la majesté de l\'artisanat ouest-africain.',
    technique: 'Tressage cuir pleine fleur, crochet d\'art en fil de coton doux, finitions cirées',
    image: 'https://images.unsplash.com/photo-1625646741211-711bdd65c570?w=600&h=800&fit=crop&auto=format',
  },
  {
    id: 'cheikh-ndiaye',
    name: 'Cheikh Ndiaye',
    specialty: 'Maître Tanneur — Cuirs Végétaux & Teintures Naturelles',
    region: 'Thiès, Sénégal',
    experience: '32 ans d\'expertise',
    bio: 'Dans sa tannerie familiale de Thiès, Cheikh sélectionne exclusivement les plus nobles peaux et réalise un tannage 100% végétal aux extraits d\'acacia et de mimosa.',
    technique: 'Tannage végétal lent à l\'acacia, séchage sous brise marine, lustrage à la cire d\'abeille',
    image: 'https://images.unsplash.com/photo-1599694522028-65abc96dfd2f?w=600&h=800&fit=crop&auto=format',
  },
];

export const products: Product[] = [
  // =========================================================================
  // 1. PREMIÈRE RANGÉE DU CATALOGUE : NOUVEAUTÉS PRESTIGE (HOMME & UNISEXE)
  // =========================================================================
  {
    id: 'sandale-royale-grainee',
    name: 'SANDALE ROYALE GRAINÉE MONOGRAMME',
    price: 38500,
    category: 'homme',
    collection: 'prestige',
    badge: 'ÉDITION PRESTIGE',
    colors: [
      { name: 'Chocolat Grainé', hex: '#4A2A1A' },
      { name: 'Brun Havane', hex: '#633922' },
      { name: 'Noir Ébène', hex: '#1C1917' },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    images: [
      sandaleEmmarh,
      heroShoes,
    ],
    imageAlt: 'Sandale Royale en cuir grainé chocolat avec monogramme métallique Teranga Dakar',
    description:
      'L\'incarnation suprême du luxe décontracté africain. Façonnée dans un cuir de veau grainé pleine fleur d\'une souplesse incomparable, ornée d\'un monogramme géométrique en métal bruni forgé main et d\'une semelle ergonomique débordante au confort royal.',
    story: {
      material: 'Cuir de veau pleine fleur grainé au tannage végétal, applique métallique forgée, semelle amortissante profilée.',
      craft: 'Montage cousu trépointe manuel, bordures rabattues et cirées à la cire d\'abeille de Casamance.',
      origin: 'Conçue pour les personnalités exigeantes de Dakar, unissant prestance traditionnelle et design contemporain.',
      time: '36 heures de fabrication artisanale',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'mule-suede-glands',
    name: 'MULE SUÈDE NOBLESSE & GLANDS',
    price: 35900,
    category: 'unisexe',
    collection: 'signature',
    badge: 'BEST-SELLER',
    colors: [
      { name: 'Camel Saharien', hex: '#B87D42' },
      { name: 'Chocolat Profond', hex: '#482C1B' },
      { name: 'Noir Nappa', hex: '#1A1817' },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      muleDaim,
      sandaleEmmarh,
    ],
    imageAlt: 'Mule en cuir suédé avec pompons glands artisanaux Teranga',
    description:
      'Raffinement et douceur au toucher. Cette mule en daim suédé soyeux est sublimée par un pompon gland en cuir découpé à la main. La première de propreté en cuir lisse repose sur une semelle d\'usure crantée élégante et ultra-durable.',
    story: {
      material: 'Suède de chèvre velours et cuir de veau lisse, doublure intégrale cuir respirant.',
      craft: 'Glands façonnés brin par brin, découpe anatomique et surpiqûres sellier.',
      origin: 'Inspirée des souliers d\'apparat des cours royales d\'Afrique de l\'Ouest.',
      time: '28 heures de travail minutieux',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'sandale-double-bride-noir',
    name: 'SANDALE DOUBLE BRIDE MINIMALISTE',
    price: 32500,
    category: 'homme',
    collection: 'artisanale',
    badge: 'DESIGN ÉPURÉ',
    colors: [
      { name: 'Noir Minéral Mat', hex: '#1C1B1A' },
      { name: 'Havane Fumé', hex: '#483325' },
      { name: 'Cognac Ambré', hex: '#8C562B' },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    images: [
      sandaleDoubleBride,
      sandaleMinimaliste,
    ],
    imageAlt: 'Sandale plate double bride en cuir noir lisse architectural Teranga',
    description:
      'Lignes épurées, design architectural et maintien parfait. Deux larges brides en cuir noir satiné épousent le cou-de-pied avec souplesse, montées sur une semelle anatomique noire ultra-légère.',
    story: {
      material: 'Cuir pleine fleur semi-mat résistant à l\'eau et à la chaleur, semelle intérieure amortissante.',
      craft: 'Coupe franche millimétrée au laser puis teintée sur tranche à la main.',
      origin: 'Minimalisme urbain dakarois alliant modernité et confort thermique optimal.',
      time: '22 heures de confection artisanale',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'sandale-minimaliste-vamp',
    name: 'SANDALE SCULPTURALE V-VAMP NOIR',
    price: 36900,
    category: 'unisexe',
    collection: 'prestige',
    badge: 'FAIT MAIN',
    colors: [
      { name: 'Noir Intense Glacé', hex: '#141312' },
      { name: 'Caramel Doré', hex: '#9E6838' },
      { name: 'Brun Acajou', hex: '#522D1B' },
    ],
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      sandaleMinimaliste,
      sandaleDoubleBride,
    ],
    imageAlt: 'Sandale sculpturale v-vamp en cuir noir luxueux Teranga',
    description:
      'Une pièce haute couture d\'une élégance rare. L\'empeigne triangulaire en cuir lisse lustré se prolonge en un anneau d\'orteil ergonomique épuré. La semelle plate en cuir véritable est frappée des armoiries dorées de la Maison Teranga.',
    story: {
      material: 'Cuir box-calf de première sélection, marquage à chaud feuille d\'or 24 carats.',
      craft: 'Empeigne formée d\'une seule pièce de cuir sans couture apparente sur le dessus.',
      origin: 'Création exclusive célébrant la grâce et la pureté des lignes sénégalaises.',
      time: '30 heures de fabrication d\'art',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },

  // =========================================================================
  // 2. DEUXIÈME RANGÉE : CAPSULE FEMME SUR PEAU NOIRE ÉCLATANTE
  // =========================================================================
  {
    id: 'sandale-denim-indigo',
    name: 'SANDALE DENIM & CUIR INDIGO',
    price: 32900,
    category: 'femme',
    collection: 'artisanale',
    badge: 'NOUVEAU',
    colors: [
      { name: 'Bleu Denim & Cuir', hex: '#3B4E6B' },
      { name: 'Indigo Nuit', hex: '#1C2942' },
      { name: 'Havane Sable', hex: '#9E7448' },
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    images: [
      sandaleFemmeIndigo,
      sandaleFemmeRoyale,
    ],
    imageAlt: 'Sandale plate femme en denim indigo et lanières cuir sur pied noir Teranga',
    description:
      'Élégance décontractée dakaroise par excellence. Cette sandale plate associe une large bride en toile denim texturée ornée de surpiqûres sellier fines et une bride fine en cuir naturel.',
    story: {
      material: 'Toile denim brute renforcée, cuir de veau pleine fleur, semelle d\'usure flexible et anti-glisse.',
      craft: 'Découpe asymétrique et surpiqûres à espacement régulier 2mm.',
      origin: 'Inspirée de la jeunesse créative des Almadies.',
      time: '18 heures de fabrication artisanale',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'mule-lin-ebene',
    name: 'MULE LIN NATUREL & ÉBÈNE',
    price: 28900,
    category: 'femme',
    collection: 'artisanale',
    badge: 'BEST-SELLER',
    colors: [
      { name: 'Lin Écru & Ébène', hex: '#D2C5B0' },
      { name: 'Lin Doré & Cognac', hex: '#B89B72' },
      { name: 'Noir Total', hex: '#1A1817' },
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    images: [
      sandaleFemmeEbene,
      sandaleFemmeMandingue,
    ],
    imageAlt: 'Mule plate femme à bout carré en lin tissé et cuir noir sur pied noir Teranga',
    description:
      'Silhouette à bout carré moderne avec une élégante bride croisée en lin natté respirant et cuir noir mat. La pièce maîtresse pour sublimer les tenues d\'été.',
    story: {
      material: 'Lin pur natté artisanalement, cuir pleine fleur doux teinté noir ébène.',
      craft: 'Montage sur forme carrée anatomique avec première de propreté rembourrée.',
      origin: 'Inspirée du métissage architectural de Saint-Louis.',
      time: '20 heures de travail minutieux',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'sandale-graphique-mandingue',
    name: 'SANDALE GRAPHIQUE MANDINGUE',
    price: 34900,
    category: 'femme',
    collection: 'signature',
    badge: 'ÉDITION LIMITÉE',
    colors: [
      { name: 'Noir & Blanc Géométrique', hex: '#262423' },
      { name: 'Chocolat & Écru', hex: '#483020' },
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    images: [
      sandaleFemmeMandingue,
      sandaleFemmeEbene,
    ],
    imageAlt: 'Sandale plate femme motifs géométriques mandingues sur pied noir Teranga',
    description:
      'Une création audacieuse aux motifs chevrons noir et blanc évoquant les nattes traditionnelles d\'Afrique de l\'Ouest, doublée de brides côtelées.',
    story: {
      material: 'Ruban tissé jacquard à motif tribal traditionnel, assise plantaire rainurée.',
      craft: 'Tissage haute densité et bordage manuel à la ganse de cuir.',
      origin: 'Symboles géométriques protecteurs du pays Mandingue.',
      time: '26 heures de fabrication artisanale',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'sandale-royale-bicolore',
    name: 'SANDALE ROYALE ASYMÉTRIQUE',
    price: 36900,
    category: 'femme',
    collection: 'royale',
    badge: 'FAIT MAIN',
    colors: [
      { name: 'Caramel & Noir', hex: '#A36838' },
      { name: 'Ocre & Havane', hex: '#874B20' },
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    images: [
      sandaleFemmeRoyale,
      sandaleFemmeIndigo,
    ],
    imageAlt: 'Sandale asymétrique femme bicolore cuir caramel et noir sur pied noir Teranga',
    description:
      'Le mariage sublime du cuir cognac chaud et du cuir noir d\'apparat. Bride coup-de-pied asymétrique avec boucle d\'orfèvrerie argentée.',
    story: {
      material: 'Double cuir pleine fleur sélectionné, bouclerie en alliage argenté inoxydable.',
      craft: 'Trépointe piquée main et bordures polies à la cire végétale.',
      origin: 'Parures de cérémonie féminines du Baol.',
      time: '32 heures de confection d\'art',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },

  // =========================================================================
  // 3. TROISIÈME RANGÉE : SOULIERS & MOCASSINS TRADITIONNELS SÉNÉGALAIS
  // =========================================================================
  {
    id: 'mocassin-traditionnel',
    name: 'MOCASSIN TRADITIONNEL AJOURÉ',
    price: 39900,
    category: 'homme',
    collection: 'signature',
    badge: 'NOUVEAU',
    colors: [
      { name: 'Cognac Doré', hex: '#A86438' },
      { name: 'Marron Foncé', hex: '#4A2A1A' },
      { name: 'Noir Ébène', hex: '#1C1917' },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      mocassinImg,
      sandaleTresseNoir,
    ],
    imageAlt: 'Mocassin Traditionnel en cuir cognac perforé Teranga Sénégal',
    description:
      'Chef-d\'œuvre de notre atelier dakarois, le Mocassin Traditionnel réinvente le mocassin d\'élégance grâce à une empeigne finement ajourée selon des motifs géométriques sénégalais.',
    story: {
      material: 'Cuir pleine fleur de veau sénégalais, tannage végétal à l\'acacia de Thiès. Semelle intérieure matelassée.',
      craft: '48 heures de confection artisanale, découpe et perforation manuelle de plus de 320 motifs par paire.',
      origin: 'Inspiré des motifs traditionnels mandingues et wolofs de l\'artisanat d\'apparat.',
      time: '48 heures de travail minutieux',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'sandale-royale',
    name: 'SANDALE ROYALE CLASSIQUE',
    price: 32900,
    category: 'unisexe',
    collection: 'royale',
    badge: 'BEST-SELLER',
    colors: [
      { name: 'Brun Havane', hex: '#523424' },
      { name: 'Chocolat Profond', hex: '#311F17' },
      { name: 'Noir Nuit', hex: '#171515' },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    images: [
      sandaleImg,
      sandaleTresseNoir,
    ],
    imageAlt: 'Sandale Royale en cuir véritable brun Teranga',
    description:
      'Portée lors des grandes cérémonies et prisée pour son maintien ergonomique exceptionnel. La Sandale Royale associe lanières croisées en cuir graissé et boucle d\'ajustement.',
    story: {
      material: 'Cuir épais huilé de première qualité, boucle laiton brossé antique, semelle anti-dérapante.',
      craft: 'Assemblage traditionnel à double surpiqûre au fil ciré imputrescible.',
      origin: 'Héritage des parures traditionnelles de la royauté du Cayor.',
      time: '24 heures de fabrication artisanale',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'babouche-artisanale',
    name: 'BABOUCHE ARTISANALE CISELÉE',
    price: 29900,
    category: 'homme',
    collection: 'artisanale',
    badge: 'FAIT MAIN',
    colors: [
      { name: 'Miel Doré', hex: '#C2864C' },
      { name: 'Terre de Sienne', hex: '#63371E' },
      { name: 'Bleu Touareg', hex: '#1C2738' },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      baboucheImg,
      sandaleTresseNoir,
    ],
    imageAlt: 'Babouche Artisanale en cuir naturel ciselé main Teranga',
    description:
      'Symbole de raffinement et de détente souveraine, la Babouche Artisanale Teranga se distingue par son gaufrage géométrique en losanges et sa doublure en peau ultra-douce.',
    story: {
      material: 'Cuir naturel souple gravé au fer chaud, talonnettes amortissantes intégrées.',
      craft: 'Emboutis et ciselures réalisés à la main par nos maîtres artisans.',
      origin: 'Dessins ancestraux sahéliens revisités avec pureté.',
      time: '36 heures de façonnage',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'chaussure-prestige',
    name: 'SLIDE TRESSÉ NOIR BOUCLE ARGENT',
    price: 34900,
    category: 'homme',
    collection: 'prestige',
    badge: 'FAIT MAIN',
    colors: [
      { name: 'Noir Tressé & Caramel', hex: '#1C1B1A' },
      { name: 'Brun Ébène & Cognac', hex: '#3B2214' },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      sandaleTresseNoir,
      prestigeImg,
    ],
    imageAlt: 'Chaussure Prestige Richelieu brogues gravées main Teranga',
    description:
      'L\'alliance ultime du soulier d\'apparat international et de la signature artisanale africaine. Un richelieu aux perforations nobles et à la patine ombrée appliquée manuellement.',
    story: {
      material: 'Cuir de veau pleine fleur glacé à la main, semelle cuir gravée Teranga Dakar.',
      craft: 'Montage cousu trépointe, finitions patinées à la mèche de coton et cires naturelles.',
      origin: 'Création exclusive Teranga Dakar célébrant l\'excellence du gentleman africain.',
      time: '60 heures de confection d\'art',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },

  // =========================================================================
  // 4. DERNIÈRE RANGÉE DU CATALOGUE : NOUVELLE COLLECTION BÉBÉ & ENFANT ARTISANALE
  // =========================================================================
  {
    id: 'sandale-bebe-fleurs-crochet',
    name: 'SANDALE BÉBÉ FLEURS & PERLES AU CROCHET',
    price: 18900,
    category: 'enfant',
    collection: 'artisanale',
    badge: 'DOUCEUR',
    colors: [
      { name: 'Écru & Blanc Perlé', hex: '#EBE2D3' },
      { name: 'Beige Lin Pur', hex: '#D6C7B2' },
    ],
    sizes: [18, 19, 20, 21, 22, 23],
    images: [
      sandaleBebeFleurs,
      sandaleBebeCroise,
    ],
    imageAlt: 'Sandale bébé en crochet artisanal beige et fleurs blanches avec perles Teranga',
    description:
      'Tricotée à la main avec une infinie délicatesse en fil de coton biologique ultra-doux. Ornée de fleurs en crochet brodées au centre de perles nacrées et d\'un ruban de serrage doux à la cheville pour protéger les premiers pas de bébé.',
    story: {
      material: 'Fil de coton peigné 100% hypoallergénique, semelle souple molletonnée, perles lisses anti-arrachement.',
      craft: 'Crocheté à la main par nos artisanes de Saint-Louis, point par point.',
      origin: 'Cadeau de naissance traditionnel bénissant les premiers pas de l\'enfant.',
      time: '14 heures de crochet minutieux',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'sandale-bebe-crochet-croise',
    name: 'SANDALE BÉBÉ CROISÉE LIN & BOUCLE OR',
    price: 17500,
    category: 'enfant',
    collection: 'artisanale',
    badge: 'FAIT MAIN',
    colors: [
      { name: 'Blanc Neige & Lin', hex: '#FFFFFF' },
      { name: 'Sable Doré', hex: '#DBC7A6' },
    ],
    sizes: [18, 19, 20, 21, 22],
    images: [
      sandaleBebeCroise,
      sandaleBebeFleurs,
    ],
    imageAlt: 'Sandale bébé lanières croisées en crochet blanc et semelle tressée Teranga',
    description:
      'Une adorable sandale premier pas alliant semelle souple en raphia doux tressé et brides croisées en tricot blanc neige avec boucle dorée latérale ajustable.',
    story: {
      material: 'Fibres de coton peigné doux et semelle intérieure aérée anti-frottement.',
      craft: 'Tressage circulaire sans couture intérieure pour un confort absolu.',
      origin: 'Atelier de maroquinerie douce Teranga.',
      time: '12 heures de tricot d\'art',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
  {
    id: 'sandale-enfant-cuir-noir',
    name: 'SANDALE JUNIOR CUIR NOIR ERGONOMIQUE',
    price: 22900,
    category: 'enfant',
    collection: 'signature',
    badge: 'CONFORT',
    colors: [
      { name: 'Noir Cuir Mat', hex: '#1C1B1A' },
      { name: 'Camel Fauve', hex: '#875128' },
    ],
    sizes: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    images: [
      sandaleEnfantNoir,
      sandaleEnfantBlanc,
    ],
    imageAlt: 'Sandale enfant junior en cuir noir souple avec bride velcro et semelle liège Teranga',
    description:
      'La robustesse et le confort pour les petits explorateurs. Brides croisées en cuir véritable de veau souple, attache velcro facile et lit de pied anatomique en liège et suède amortissant.',
    story: {
      material: 'Cuir pleine fleur résistant, semelle anatomique en liège naturel et gomme anti-dérapante.',
      craft: 'Coutures renforcées adaptées aux mouvements et aux jeux des enfants.',
      origin: 'Conçue à Dakar pour offrir aux enfants l\'élégance et la liberté de mouvement.',
      time: '16 heures de fabrication artisanale',
    },
    artisanId: 'amadou-sow',
    featured: true,
  },
  {
    id: 'sandale-enfant-tressage-blanc',
    name: 'SANDALE JUNIOR TRESSÉE BLANC ÉPURÉ',
    price: 24500,
    category: 'enfant',
    collection: 'royale',
    badge: 'BEST-SELLER',
    colors: [
      { name: 'Blanc Cérémonie', hex: '#FAFAFA' },
      { name: 'Caramel Doré', hex: '#9E6838' },
    ],
    sizes: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    images: [
      sandaleEnfantBlanc,
      sandaleEnfantNoir,
    ],
    imageAlt: 'Sandale enfant fille tressage multi-brides en cuir blanc cérémonie Teranga',
    description:
      'La chaussure idéale pour les fêtes de famille, baptêmes et sorties du dimanche. Multitude de lanières tressées en cuir blanc immaculé avec bride cheville à boucle en laiton vieilli.',
    story: {
      material: 'Cuir souple sélectionné blanc mat, semelle d\'usure flexible et première cuir matelassée.',
      craft: 'Entrelacs artisanal manuel des lanières assurant une aération maximale du pied.',
      origin: 'Inspirée des tenues traditionnelles de fête au Sénégal.',
      time: '18 heures de façonnage soigné',
    },
    artisanId: 'aminata-diallo',
    featured: true,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
};

export const getArtisan = (id: string): Artisan | undefined =>
  artisans.find((a) => a.id === id);

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'secrets-du-cuir-senegalais',
    title: 'Les secrets ancestraux du tannage végétal à Thiès',
    date: '14 Mai 2026',
    readTime: '4 min de lecture',
    category: 'Savoir-Faire',
    image: artisanMainImg,
    excerpt: 'Plongée au cœur de la tannerie artisanale de Cheikh Ndiaye, où l\'écorce d\'acacia transforme les cuirs les plus fins.',
    content: 'Le tannage végétal sénégalais est un art séculaire...',
  },
  {
    id: 'l-art-du-mocassin-ajoure',
    title: 'Comment reconnaître une véritable chaussure artisanale faite main',
    date: '28 Avril 2026',
    readTime: '6 min de lecture',
    category: 'Artisanat & Style',
    image: mocassinImg,
    excerpt: 'Points de couture, patine vivante et perforations d\'exception : le guide pour apprécier l\'excellence Teranga.',
    content: 'Une chaussure artisanale respire et s\'embellit avec les années...',
  },
  {
    id: 'collection-enfants-premiers-pas',
    title: 'Ligne Enfants & Bébés : La délicatesse du fait main pour les premiers pas',
    date: '10 Juin 2026',
    readTime: '4 min de lecture',
    category: 'Ligne Enfant',
    image: sandaleBebeFleurs,
    excerpt: 'Crochet de coton doux, perles fines et cuirs souples : découvrez nos créations pensées pour les plus petits.',
    content: 'Parce que l\'amour de l\'artisanat commence dès le berceau...',
  },
];
