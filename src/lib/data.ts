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

export const features = [
  {
    icon: "❄",
    title: "Extreme Cooling",
    description: "Sensasi dingin sampai tarikan terakhir.",
  },
  {
    icon: "⚡",
    title: "Premium Flavor",
    description: "Rasa lebih pekat dan bersih.",
  },
  {
    icon: "💨",
    title: "Smooth Clouds",
    description: "Asap tebal tanpa harsh.",
  },
  {
    icon: "🧊",
    title: "Imported Ingredients",
    description: "Food Grade Premium.",
  },
];
