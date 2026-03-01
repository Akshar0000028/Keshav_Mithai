"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const url = selectedCategory === "All"
        ? "/api/products"
        : `/api/products?category=${encodeURIComponent(selectedCategory)}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    async function fetchAll() {
      const res = await fetch("/api/products");
      const data: Product[] = await res.json();
      const cats = [...new Set(data.map((p) => p.category))].sort();
      setCategories(cats);
    }
    fetchAll();
  }, []);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-royal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Our Sweets Collection
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Handcrafted with love using the finest ingredients. Each sweet is a celebration of Indian culinary heritage.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "gradient-gold text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-stone-dark border border-stone-dark"
              }`}
            >
              All Sweets
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "gradient-gold text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-stone-dark border border-stone-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="card-elegant animate-pulse">
                  <div className="aspect-square bg-stone-dark" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-stone-dark rounded w-3/4" />
                    <div className="h-4 bg-stone-dark rounded w-full" />
                    <div className="h-4 bg-stone-dark rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No sweets found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen">
        <section className="gradient-royal py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
              Our Sweets Collection
            </h1>
          </div>
        </section>
        <div className="flex justify-center py-20">
          <div className="animate-pulse text-accent-gold text-xl">Loading...</div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

