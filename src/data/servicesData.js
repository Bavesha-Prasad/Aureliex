/**
 * AURELIX Hair Atelier — Services Data
 * 
 * Fictional portfolio-demo service catalog organized into three categories:
 * 1. Cuts & Styling
 * 2. Colour
 * 3. Treatments
 * 
 * NOTE: All prices, durations, and offerings are illustrative examples
 * created exclusively for this portfolio showcase and do not represent
 * actual salon offers or commercial pricing.
 */

export const SERVICE_CATEGORIES = [
  {
    id: 'cuts-styling',
    name: 'Cuts & Styling',
    eyebrow: 'Precision & Silhouette',
    tagline: 'Tailored architecture shaped to your features, texture, and natural movement.',
    image: '/images/haircut-styling.jpg',
    imageAlt: 'Stylist precision cutting and sculpting hair in a bright, modern salon setting',
  },
  {
    id: 'colour',
    name: 'Colour',
    eyebrow: 'Lustre & Dimension',
    tagline: 'Multidimensional gloss, gentle ammonia-free formulas, and seamless balayage placement.',
    image: '/images/hair-colouring.jpg',
    imageAlt: 'Colourist applying gentle balayage highlights using precision sectioning foils',
  },
  {
    id: 'treatments',
    name: 'Treatments',
    eyebrow: 'Restoration & Health',
    tagline: 'Deep molecular bond rebuilding, intensive hydration, and holistic scalp therapy.',
    image: '/images/hair-treatment.jpg',
    imageAlt: 'Close-up of radiant, glossy hair fibers after deep restorative conditioning treatment',
  },
]

export const SERVICES_DATA = [
  /* ------------------------------------------------------------------ */
  /*  Category 1: Cuts & Styling                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'signature-haircut',
    categoryId: 'cuts-styling',
    categoryName: 'Cuts & Styling',
    title: 'Signature Haircut',
    subtitle: 'Consultation, Precision Cut & Blowout',
    description:
      'A thorough 1-on-1 consultation followed by customized precision cutting to complement your bone structure, hair density, and lifestyle. Completed with a relaxing botanical cleanse and our signature polished blowout.',
    priceFrom: '£65',
    duration: '60 min',
    isFictionalDemo: true,
    highlights: [
      'Face-shape & texture analysis',
      'Botanical wash & conditioning rinse',
      'Protective styling & blowout finish',
    ],
  },
  {
    id: 'restyle-and-cut',
    categoryId: 'cuts-styling',
    categoryName: 'Cuts & Styling',
    title: 'Restyle & Cut',
    subtitle: 'Complete Silhouette Transformation',
    description:
      'Designed for major length changes or reshaping tired styles. Includes an extended aesthetic evaluation, sculptural weight removal, dry-refinement cutting, and a dedicated at-home styling walkthrough.',
    priceFrom: '£85',
    duration: '75 min',
    isFictionalDemo: true,
    highlights: [
      'In-depth 360° style consultation',
      'Architectural weight redistribution',
      'At-home styling guidance & product advice',
    ],
  },
  {
    id: 'blowout-and-styling',
    categoryId: 'cuts-styling',
    categoryName: 'Cuts & Styling',
    title: 'Blowout & Styling',
    subtitle: 'Sculptural Volume & Mirror Shine',
    description:
      'Revitalizing double cleanse, intensive moisture glaze, and an editorial finish tailored to your occasion — from high-gloss liquid straight to bouncy, effortless waves with long-lasting weightless hold.',
    priceFrom: '£45',
    duration: '45 min',
    isFictionalDemo: true,
    highlights: [
      'Revitalizing double cleanse',
      'Thermal shield & UV heat protection',
      'Bespoke iron or brush finish',
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Category 2: Colour                                                */
  /* ------------------------------------------------------------------ */
  {
    id: 'root-touch-up',
    categoryId: 'colour',
    categoryName: 'Colour',
    title: 'Root Touch-Up',
    subtitle: 'Regrowth Coverage & Tonal Blend',
    description:
      'Seamless root regrowth matching and precision grey coverage using gentle, ammonia-free liquid gloss pigments. Formulated with conditioning botanical lipids that lock in shine and respect scalp comfort.',
    priceFrom: '£70',
    duration: '75 min',
    isFictionalDemo: true,
    highlights: [
      'Ammonia-free conditioning formula',
      'Custom colour-matched blend',
      'Includes post-colour gloss seal',
    ],
  },
  {
    id: 'full-colour',
    categoryId: 'colour',
    categoryName: 'Colour',
    title: 'Full Colour',
    subtitle: 'All-Over Radiant Saturation',
    description:
      'All-over single-process color transformation from roots to tips. Whether enriching natural espresso, soft pearl silver, or luminous cool ash, this service saturates hair with deep reflectivity and multidimensional tone.',
    priceFrom: '£110',
    duration: '105 min',
    isFictionalDemo: true,
    highlights: [
      'Full root-to-end saturation',
      'Cuticle-smoothing acidic gloss rinse',
      'Deep colour-locking moisture bath',
    ],
  },
  {
    id: 'highlights-and-balayage',
    categoryId: 'colour',
    categoryName: 'Colour',
    title: 'Highlights & Balayage',
    subtitle: 'Hand-Painted Ribbons of Light',
    description:
      'Artisan freehand French balayage or micro-foil placements tailored to catch ambient light effortlessly. Includes bond-rebuilding infusion, customized toner bath, and a lustrous mirror-like gloss treatment.',
    priceFrom: '£145',
    duration: '150 min',
    isFictionalDemo: true,
    highlights: [
      'Artisan freehand placement',
      'Integrated bond-fortifying shield',
      'Customized tone glaze & neutralizing rinse',
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Category 3: Treatments                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'deep-conditioning',
    categoryId: 'treatments',
    categoryName: 'Treatments',
    title: 'Deep Conditioning',
    subtitle: 'Intense Lipid Moisture Replenishment',
    description:
      'High-potency hydration mask infused under gentle micro-steam to open the cuticle and deliver concentrated plant lipids, amino acids, and silk proteins directly to dehydrated hair shafts.',
    priceFrom: '£45',
    duration: '40 min',
    isFictionalDemo: true,
    highlights: [
      'Hydro-vapour cuticle infusion',
      'Replenishes essential lipid barrier',
      'Restores elasticity and softness',
    ],
  },
  {
    id: 'repair-treatment',
    categoryId: 'treatments',
    categoryName: 'Treatments',
    title: 'Repair Treatment',
    subtitle: 'Molecular Bond Reconnection',
    description:
      'Patented multi-step bond rebuilder designed for hair fatigued by chemical lightening, colour processing, or repeated thermal styling. Permanently reconnects broken disulfide bonds from within.',
    priceFrom: '£60',
    duration: '50 min',
    isFictionalDemo: true,
    highlights: [
      'Re-links broken disulfide bonds',
      'Clinically reverses structural fatigue',
      'Increases tensile hair strength up to 3x',
    ],
  },
  {
    id: 'scalp-care',
    categoryId: 'treatments',
    categoryName: 'Treatments',
    title: 'Scalp Care',
    subtitle: 'Detoxifying Scrub & Microbiome Balance',
    description:
      'A holistic scalp purification treatment utilizing a soothing volcanic clay and zinc scrub to remove buildup, followed by peptide-rich follicle nourishment and a revitalizing cryo-pressure scalp massage.',
    priceFrom: '£50',
    duration: '45 min',
    isFictionalDemo: true,
    highlights: [
      'Gentle enzymatic exfoliating scrub',
      'Acupressure circulation massage',
      'Microbiome balancing tonic',
    ],
  },
]
