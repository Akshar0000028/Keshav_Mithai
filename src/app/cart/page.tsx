"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-24 h-24 rounded-full bg-cream flex items-center justify-center">
          <ShoppingBag size={48} className="text-accent-gold" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-maroon">Your Cart is Empty</h2>
        <p className="text-gray-500 text-center max-w-md">
          Looks like you haven&apos;t added any sweets yet. Explore our collection and treat yourself!
        </p>
        <Link href="/products" className="btn-primary">
          Browse Our Sweets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="gradient-royal py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
            Your Cart
          </h1>
          <p className="text-white/70">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex gap-4 md:gap-6 border border-stone-dark"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0 bg-cream">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/products/${item.product.id}`}>
                      <h3 className="font-heading text-lg font-semibold text-maroon hover:text-accent-gold-dark transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm">{item.product.weight}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-stone-dark rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-cream transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-semibold min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-cream transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-maroon text-lg">
                        &#8377;{item.product.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-400 hover:text-red-600 transition-colors p-2"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-stone-dark sticky top-24">
              <h3 className="font-heading text-2xl font-bold text-maroon mb-6">
                Order Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>&#8377;{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className={totalPrice >= 500 ? "text-pistachio font-medium" : ""}>
                    {totalPrice >= 500 ? "FREE" : "₹50"}
                  </span>
                </div>
                <div className="border-t border-stone-dark pt-3 flex justify-between">
                  <span className="font-bold text-lg text-maroon">Total</span>
                  <span className="font-bold text-lg text-maroon">
                    &#8377;{totalPrice + (totalPrice >= 500 ? 0 : 50)}
                  </span>
                </div>
              </div>
              {totalPrice < 500 && (
                <p className="text-sm text-accent-gold-dark bg-cream rounded-lg p-3 mb-4">
                  Add &#8377;{500 - totalPrice} more for free delivery!
                </p>
              )}
              <Link
                href="/checkout"
                className="btn-primary w-full flex items-center justify-center gap-2 text-center"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="block text-center mt-4 text-accent-gold-dark hover:text-maroon transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

