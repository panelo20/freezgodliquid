export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  cooling: number;
  sweetness: number;
  freshness: number;
  color: string;
  gradient: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "ice-mint",
    name: "Ice Mint",
    tagline: "Arctic Peppermint Blast",
    price: 135000,
    cooling: 5,
    sweetness: 1,
    freshness: 5,
    color: "#9DDFFF",
    gradient: "from-cyan-400/20 to-blue-600/20",
    image: "/images/products/ice-mint.jpeg",
  },
  {
    id: "berry-freeze",
    name: "Berry Freeze",
    tagline: "Mixed Berries Sub-Zero",
    price: 135000,
    cooling: 4,
    sweetness: 3,
    freshness: 4,
    color: "#C084FC",
    gradient: "from-purple-400/20 to-pink-600/20",
    image: "/images/products/berry.jpeg",
  },
  {
    id: "grape-ice",
    name: "Grape Ice",
    tagline: "Frozen Concord Grape",
    price: 135000,
    cooling: 4,
    sweetness: 3,
    freshness: 3,
    color: "#A78BFA",
    gradient: "from-violet-400/20 to-purple-600/20",
    image: "/images/products/grape.jpeg",
  },
  {
    id: "lemon-frost",
    name: "Lemon Frost",
    tagline: "Citrus Ice Storm",
    price: 135000,
    cooling: 4,
    sweetness: 2,
    freshness: 5,
    color: "#FDE047",
    gradient: "from-yellow-400/20 to-lime-600/20",
    image: "/images/products/lemon.jpeg",
  },
  {
    id: "blue-energy",
    name: "Blue Energy",
    tagline: "Frozen Energy Rush",
    price: 145000,
    cooling: 5,
    sweetness: 2,
    freshness: 4,
    color: "#60A5FA",
    gradient: "from-blue-400/20 to-indigo-600/20",
    image: "/images/products/blue-energy.jpeg",
  },
  {
    id: "mint-blast",
    name: "Mint Blast",
    tagline: "Double Mint Avalanche",
    price: 135000,
    cooling: 5,
    sweetness: 1,
    freshness: 5,
    color: "#34D399",
    gradient: "from-emerald-400/20 to-teal-600/20",
    image: "/images/products/mint-blast.jpeg",
  },
  {
    id: "watermelon-ice",
    name: "Watermelon Ice",
    tagline: "Frozen Summer Slice",
    price: 135000,
    cooling: 3,
    sweetness: 4,
    freshness: 4,
    color: "#FB7185",
    gradient: "from-rose-400/20 to-red-600/20",
    image: "/images/products/watermelon.jpeg",
  },
  {
    id: "cola-freeze",
    name: "Cola Freeze",
    tagline: "Frozen Classic Cola",
    price: 135000,
    cooling: 3,
    sweetness: 3,
    freshness: 3,
    color: "#F97316",
    gradient: "from-orange-400/20 to-amber-600/20",
    image: "/images/products/cola.jpeg",
  },
];

export const heroProduct = products[0];

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ryan",
    text: "Liquid paling dingin yang pernah saya coba. Sensasinya benar-benar seperti menghirup udara pegunungan.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dimas",
    text: "Berry Freeze favorit saya. Rasa berry-nya pekat tapi cooling-nya tetap mantap sampai tetes terakhir.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ayu",
    text: "Sudah coba banyak brand ice liquid tapi FREEZEGOD beda level. Cloud-nya tebal dan smooth banget.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bagas",
    text: "Cola Freeze itu unik banget. Cola klasik dikombinasi cooling yang pas. Nagih parah.",
    rating: 4,
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  tag: string;
}

export const features: Feature[] = [
  {
    icon: "❄",
    title: "Extreme Cooling",
    description: "Experience an intense cooling sensation engineered to stay consistent from the first puff to the last. Every inhale delivers a refreshing Arctic-style finish without overwhelming the flavor.",
    bullets: [
      "Long-lasting cooling effect",
      "Balanced throat sensation",
      "Smooth icy finish",
    ],
    tag: "Freeze Index ★★★★★",
  },
  {
    icon: "⚡",
    title: "Premium Flavor",
    description: "Crafted using carefully selected food-grade flavor concentrates for a cleaner, richer, and more natural taste profile. Every recipe is balanced to maximize flavor without excessive sweetness.",
    bullets: [
      "High-quality flavor concentrates",
      "Rich and layered taste",
      "Consistent flavor delivery",
    ],
    tag: "Premium Blend",
  },
  {
    icon: "☁",
    title: "Smooth Clouds",
    description: "Optimized VG/PG ratio provides dense, silky clouds while maintaining a smooth inhale. Designed to reduce harshness and improve overall vaping comfort.",
    bullets: [
      "Thick vapor production",
      "Smooth throat hit",
      "Stable performance",
    ],
    tag: "Cloud Optimized",
  },
  {
    icon: "🧊",
    title: "Imported Ingredients",
    description: "Made with premium imported ingredients sourced from trusted international suppliers. Every batch is produced with strict quality standards to ensure purity, consistency, and reliability.",
    bullets: [
      "Food-grade ingredients",
      "International quality standards",
      "Consistent batch control",
    ],
    tag: "Premium Quality",
  },
];
