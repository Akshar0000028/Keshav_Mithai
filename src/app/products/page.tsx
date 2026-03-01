"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products as allProducts } from "@/lib/productsData";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");

  const categories = useMemo(
    () => [...new Set(allProducts.map((p) => p.category))].sort(),
    []
  );

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

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
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No sweets found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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

