import db from "@/db";
import type { Product } from "@/lib/types";
import HomeClient from "./HomeClient";

function getProducts(): Product[] {
  return db.prepare("SELECT * FROM products WHERE featured = 1 AND inStock = 1 LIMIT 6").all() as Product[];
}

function getAllCategories(): string[] {
  const rows = db.prepare("SELECT DISTINCT category FROM products ORDER BY category").all() as { category: string }[];
  return rows.map((r) => r.category);
}

export default function HomePage() {
  const featuredProducts = getProducts();
  const categories = getAllCategories();

  return <HomeClient featuredProducts={featuredProducts} categories={categories} />;
}

