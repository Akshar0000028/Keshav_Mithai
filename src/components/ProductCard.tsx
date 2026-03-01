"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/types";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card-elegant group bg-white"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-stone">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.featured === 1 && (
          <span className="absolute top-3 left-3 bg-gradient-gold text-midnight text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
            Bestseller
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-primary-deep p-3.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white shadow-xl transform translate-y-4 group-hover:translate-y-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>

      <div className="p-6">
        <span className="text-[10px] text-accent-gold-dark font-bold uppercase tracking-[0.25em] mb-2 block">
          {product.category}
        </span>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-heading text-2xl font-bold text-midnight hover:text-primary transition-colors leading-tight mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-midnight/60 text-sm line-clamp-2 leading-relaxed mb-5 font-medium">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-stone-dark/40">
          <div>
            <span className="text-2xl font-heading font-bold text-primary-deep">
              &#8377;{product.price}
            </span>
            <span className="text-midnight/40 text-xs ml-1.5 font-medium">/ {product.weight}</span>
          </div>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-deep transition-colors tracking-widest uppercase md:hidden"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

