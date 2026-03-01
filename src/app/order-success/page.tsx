"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-stone-dark">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pistachio/20 flex items-center justify-center">
          <CheckCircle size={48} className="text-pistachio" />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-3">
          Order Placed!
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for your order! Your delicious sweets are being prepared with love and care.
        </p>

        {orderId && (
          <div className="bg-cream rounded-xl p-4 mb-6 border border-stone-dark">
            <div className="flex items-center justify-center gap-2 text-accent-gold-dark mb-1">
              <Package size={18} />
              <span className="font-medium">Order ID</span>
            </div>
            <p className="font-heading text-2xl font-bold text-maroon">#{orderId}</p>
          </div>
        )}

        <div className="bg-cream/50 rounded-xl p-4 mb-8 text-sm text-gray-600 space-y-2">
          <p>We&apos;ll send you an order confirmation via email.</p>
          <p>Expected delivery: <strong className="text-maroon">1-2 business days</strong></p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products" className="btn-primary flex items-center justify-center gap-2">
            Order More Sweets
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/"
            className="border-2 border-maroon/20 text-maroon hover:bg-cream font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent-gold text-xl">Loading...</div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}

