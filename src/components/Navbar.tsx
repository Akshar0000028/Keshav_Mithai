"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Our Sweets" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-ivory/90 backdrop-blur-xl sticky top-0 z-50 border-b border-stone shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-all duration-300"
            >
              <Image
                src="/images/LOGO.png"
                alt="Keshav Mithai logo"
                fill
                className="object-contain"
                sizes="80px"
                priority
              />
            </motion.div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-primary-deep leading-tight tracking-wide">
                Keshav Mithai
              </h1>
              <p className="text-[10px] text-accent-gold-dark tracking-[0.25em] uppercase font-bold">
                Est. Since Generations
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-midnight/80 hover:text-primary-deep font-medium text-sm tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="relative p-2.5 text-primary-deep hover:text-primary transition-colors rounded-full hover:bg-stone/50"
            >
              <ShoppingCart size={24} strokeWidth={1.5} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-accent-gold text-midnight text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm border border-ivory"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-primary-deep">
              <ShoppingCart size={24} strokeWidth={1.5} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-accent-gold text-midnight text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary-deep focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-stone"
            >
              <div className="py-4 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-midnight/80 hover:text-primary-deep hover:bg-stone/50 rounded-lg font-medium text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

