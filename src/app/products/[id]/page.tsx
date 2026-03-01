"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowLeft, Minus, Plus, Star } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/types";

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${params.id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-saffron text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-xl">Product not found.</p>
        <Link href="/products" className="btn-primary">
          Back to Sweets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-maroon hover:text-saffron-dark transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Our Sweets</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-cream border border-cream-dark">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.featured === 1 && (
              <span className="absolute top-4 left-4 gradient-gold text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                Bestseller
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-sm bg-cream text-saffron-dark px-3 py-1 rounded-full font-medium w-fit mb-4">
              {product.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-saffron">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(128 reviews)</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-dark mb-8">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold text-maroon">
                  &#8377;{product.price}
                </span>
                <span className="text-gray-500 text-lg mb-1">/ {product.weight}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-cream-dark rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-cream transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 py-3 font-semibold text-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-cream transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md ${
                  added
                    ? "bg-pistachio text-white"
                    : "bg-saffron hover:bg-saffron-dark text-white hover:shadow-lg"
                }`}
              >
                <ShoppingCart size={22} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Pure Ghee", icon: "🥛" },
                { label: "Fresh Daily", icon: "✨" },
                { label: "No Preservatives", icon: "🌿" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-cream rounded-xl p-3 border border-cream-dark"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-xs font-medium text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
