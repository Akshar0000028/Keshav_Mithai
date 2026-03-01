import { getAllCategories, getFeaturedProducts } from "@/lib/productsData";
import HomeClient from "./HomeClient";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(6);
  const categories = getAllCategories();

  return <HomeClient featuredProducts={featuredProducts} categories={categories} />;
}

