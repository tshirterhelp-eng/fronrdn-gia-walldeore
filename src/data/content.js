/**
 * Imagery note: every image on the site is an art-directed crop of the
 * supplied GIA hero photograph, so the whole site carries one consistent
 * light and palette. Replace with GIA's own product and project photography
 * as it becomes available — keep the same file names, or update paths here.
 *
 * Collection names follow the brief's suggested categories and are marked
 * `pendingVerification` until confirmed against GIA's real range.
 */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'Contact', href: '#contact' },
];

export const collections = [
  {
    id: 'statement',
    index: '01',
    title: 'Statement Wall Art',
    description:
      'Expansive compositions conceived as the focal point of a room — scaled to anchor a sofa wall, a foyer or a double-height space.',
    image: '/images/art-full.webp',
    alt: 'Illuminated sculptural landscape wall art with a golden tree, mountains and moon above a cream sofa',
    layout: 'wide',
    pendingVerification: true,
  },
  {
    id: 'sculptural',
    index: '02',
    title: 'Sculptural Wall Pieces',
    description:
      'Layered, dimensional forms that catch the light and cast soft shadow, bringing depth to a plain wall.',
    image: '/images/art-tree.webp',
    alt: 'Detail of a layered sculptural tree with golden foliage, softly backlit',
    layout: 'tall',
    pendingVerification: true,
  },
  {
    id: 'contemporary',
    index: '03',
    title: 'Contemporary Wall Decor',
    description:
      'Quieter pieces with clean silhouettes and warm metallic tones, designed to sit comfortably in modern interiors.',
    image: '/images/art-moon-birds.webp',
    alt: 'Golden moon disc with a flight of birds over snow-capped peaks',
    layout: 'square',
    pendingVerification: true,
  },
];

export const showcase = {
  main: {
    src: '/images/art-mountains.webp',
    alt: 'Backlit mountain and lake wall art glowing amber against a taupe wall',
    caption: 'Layered peaks, lit from behind',
  },
  details: [
    {
      src: '/images/art-tree.webp',
      alt: 'Close view of hand-finished golden leaves on a sculptural tree',
      caption: 'Gilded foliage',
    },
    {
      src: '/images/art-reflection.webp',
      alt: 'Mirror-still lake reflection with a warm halo of light along its edge',
      caption: 'Reflection & halo',
    },
  ],
};

export const inspiration = [
  {
    src: '/images/room-lounge.webp',
    alt: 'Cream sectional sofa with a bronze coffee table and soft rug in warm evening light',
    caption: 'The evening lounge',
    shape: 'landscape',
  },
  {
    src: '/images/room-pendant.webp',
    alt: 'Glass globe pendant light beside dark timber slats',
    caption: 'Timber & glass',
    shape: 'portrait',
  },
  {
    src: '/images/room-table.webp',
    alt: 'Bronze drum coffee table styled with books, a vase of blossom and candles',
    caption: 'A considered table',
    shape: 'square',
  },
  {
    src: '/images/room-shelf.webp',
    alt: 'Floating lit shelves with trailing plants and bronze vessels',
    caption: 'Lit shelving',
    shape: 'portrait',
  },
  {
    src: '/images/room-throw.webp',
    alt: 'Textured knitted throw draped over a cream chaise',
    caption: 'Texture in layers',
    shape: 'square',
  },
  {
    src: '/images/room-plant.webp',
    alt: 'Tall leafy plant in a stone planter, uplit against timber slats',
    caption: 'Living green',
    shape: 'portrait',
  },
  {
    src: '/images/room-cushions.webp',
    alt: 'Velvet cushions in forest green and burnt amber on a cream sofa',
    caption: 'Velvet & amber',
    shape: 'landscape',
  },
];

export const values = [
  {
    title: 'Distinctive design',
    text: 'Pieces chosen for character — forms and finishes that give a wall a point of view rather than simply filling it.',
  },
  {
    title: 'Thoughtful selection',
    text: 'A focused range, considered for how each piece will sit with light, furniture and the proportions of a room.',
  },
  {
    title: 'Personal guidance',
    text: 'Share your space and your ideas, and talk through which piece, size and placement will suit it best.',
  },
  {
    title: 'For every interior',
    text: 'From warm traditional homes to pared-back contemporary spaces — wall decor to suit different styles.',
  },
];
