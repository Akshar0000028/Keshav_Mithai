import type { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Kaju Katli",
    description:
      "Premium cashew fudge delicately crafted with finest cashews and pure sugar, adorned with edible silver leaf. Our signature sweet that melts in your mouth.",
    price: 650,
    image: "/images/kaju-katli.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    id: 2,
    name: "Gulab Jamun",
    description:
      "Soft, spongy milk-solid dumplings soaked in rose-flavored sugar syrup infused with cardamom and saffron. A timeless classic from our kitchen.",
    price: 400,
    image: "/images/gulab-jamun.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    id: 3,
    name: "Rasgulla",
    description:
      "Light and spongy cottage cheese balls soaked in delicate sugar syrup. Handmade fresh daily with love and tradition.",
    price: 350,
    image: "/images/rasgulla.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    id: 4,
    name: "Motichoor Laddu",
    description:
      "Exquisite tiny boondi pearls bound together with ghee, sugar, and aromatic cardamom. Perfect round laddus for every celebration.",
    price: 450,
    image: "/images/motichoor-laddu.jpg",
    category: "Laddu",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    id: 5,
    name: "Pista Barfi",
    description:
      "Rich pistachio fudge made with ground pistachios, milk, and sugar. Garnished with slivers of premium pistachios and saffron strands.",
    price: 750,
    image: "/images/pista-barfi.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 6,
    name: "Mysore Pak",
    description:
      "Traditional South Indian sweet made with generous amounts of pure ghee, gram flour, and sugar. Rich, crumbly, and utterly irresistible.",
    price: 500,
    image: "/images/mysore-pak.jpg",
    category: "Traditional",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 7,
    name: "Soan Papdi",
    description:
      "Flaky, melt-in-mouth sweet made with gram flour, ghee, and sugar. Layered with delicate crispy flakes and flavored with cardamom.",
    price: 300,
    image: "/images/soan-papdi.jpg",
    category: "Traditional",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 8,
    name: "Rasmalai",
    description:
      "Soft paneer discs immersed in thick, creamy saffron-flavored milk, garnished with chopped pistachios and almonds. A royal delicacy.",
    price: 500,
    image: "/images/rasmalai.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    id: 9,
    name: "Besan Laddu",
    description:
      "Golden laddus made from roasted gram flour, pure ghee, powdered sugar, and cardamom. A festive favorite handcrafted with care.",
    price: 380,
    image: "/images/besan-laddu.jpg",
    category: "Laddu",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 10,
    name: "Badam Barfi",
    description:
      "Luxurious almond fudge prepared with finely ground almonds, milk, and a hint of saffron. Topped with edible silver foil.",
    price: 700,
    image: "/images/badam-barfi.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 11,
    name: "Jalebi",
    description:
      "Crispy, golden spirals of fermented batter deep-fried and soaked in saffron sugar syrup. Best served warm and fresh.",
    price: 250,
    image: "/images/jalebi.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    id: 12,
    name: "Dry Fruit Mix Box",
    description:
      "An elegant assortment of our finest barfis - Kaju, Pista, Badam, and Coconut. Perfect gift box for festivals and celebrations.",
    price: 1200,
    image: "/images/dry-fruit-box.jpg",
    category: "Gift Boxes",
    weight: "1kg",
    featured: 1,
    inStock: 1,
  },
];

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = products.filter((p) => p.featured === 1 && p.inStock === 1);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  for (const p of products) {
    categories.add(p.category);
  }
  return Array.from(categories).sort();
}

export function getProductById(id: number): Product | null {
  return products.find((p) => p.id === id) ?? null;
}

