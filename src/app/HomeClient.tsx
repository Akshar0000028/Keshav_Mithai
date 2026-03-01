"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Truck, Leaf, Award, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";
import HomeProducts from "./HomeProducts";
import { motion, Variants } from "framer-motion";

export default function HomeClient({
    featuredProducts,
    categories,
}: {
    featuredProducts: Product[];
    categories: string[];
}) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-dark-void">
                <div className="absolute inset-0 gradient-royal z-0 opacity-90" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-muted/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 texture-overlay z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={containerVariants}
                        className="text-ivory"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-accent-gold-light px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-accent-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                            <Leaf size={14} className="text-accent-gold" />
                            <span>Handcrafted with Pure Ingredients</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight text-white drop-shadow-lg">
                            Taste the <br />
                            <span className="text-accent-gold italic font-medium">Tradition</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg text-ivory/70 mb-10 leading-relaxed max-w-md font-medium">
                            At Keshav Mithai, every sweet is a masterpiece crafted with pure ingredients,
                            generations of expertise, and an unwavering love for Indian traditions.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
                            <Link href="/products" className="btn-secondary flex items-center gap-2">
                                Explore Collection
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/about"
                                className="border border-ivory/20 text-ivory hover:bg-ivory/10 hover:border-ivory/40 font-bold py-3.5 px-9 rounded-full transition-all duration-300 tracking-wide"
                            >
                                Our Story
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-6 mt-16 pt-8 border-t border-ivory/10">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-midnight/80 border-2 border-primary flex items-center justify-center text-accent-gold text-xs font-bold z-10">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex text-accent-gold gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-ivory/50 text-xs mt-1 font-medium tracking-wide">Loved by 10,000+ patrons</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto z-20">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-accent-gold/20">
                                <Image
                                    src="/images/hero-mithai.jpg"
                                    alt="Premium Indian Sweets"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-void/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 bg-ivory rounded-xl p-5 shadow-2xl border-b-4 border-accent-gold z-30"
                            >
                                <p className="text-[10px] text-midnight/50 uppercase tracking-widest font-bold">Made with</p>
                                <p className="font-heading font-bold text-primary-deep text-xl mt-1">Pure Desi Ghee</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-6 -right-6 bg-ivory rounded-xl p-5 shadow-2xl border-t-4 border-primary z-30"
                            >
                                <p className="font-heading font-bold text-accent-gold-dark text-3xl">50+</p>
                                <p className="text-[10px] text-midnight/50 uppercase tracking-widest font-bold mt-1">Varieties</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Strip */}
            <section className="bg-stone border-y border-stone-dark/50 relative overflow-hidden">
                <div className="absolute inset-0 pattern-overlay opacity-[0.03] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                    {[
                        { icon: Truck, text: "Complimentary Delivery above ₹500" },
                        { icon: Leaf, text: "100% Pure & Fresh Ingredients" },
                        { icon: Award, text: "Generations of Royal Expertise" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-center gap-3 text-midnight py-2"
                        >
                            <item.icon size={20} className="text-primary" />
                            <span className="text-sm font-bold tracking-wide uppercase">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding bg-ivory relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-accent-gold-dark text-xs font-bold uppercase tracking-[0.3em] mb-4">Explore</p>
                        <h2 className="font-heading text-5xl md:text-6xl font-bold text-midnight mb-4">
                            Our Collections
                        </h2>
                        <div className="ornament-divider">
                            <span className="text-accent-gold text-2xl">&#10022;</span>
                        </div>
                        <p className="text-midnight/60 max-w-xl mx-auto leading-relaxed font-medium">
                            Explore our exquisite range of traditional Indian sweets, each category a celebration of taste and heritage.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {categories.map((cat, i) => (
                            <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative bg-white rounded-2xl p-8 text-center border border-stone-dark shadow-sm hover:shadow-2xl hover:border-accent-gold/30 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-stone flex items-center justify-center text-3xl group-hover:bg-primary/5 transition-colors duration-500 shadow-inner">
                                        {["🍯", "🟡", "🍮", "🎁", "✨"][i % 5]}
                                    </div>
                                    <h3 className="font-heading font-bold text-midnight text-xl group-hover:text-primary transition-colors">
                                        {cat}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-padding bg-white border-t border-stone">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-accent-gold-dark text-xs font-bold uppercase tracking-[0.3em] mb-4">Popular Picks</p>
                        <h2 className="font-heading text-5xl md:text-6xl font-bold text-midnight mb-4">
                            Our Bestsellers
                        </h2>
                        <div className="ornament-divider">
                            <span className="text-accent-gold text-2xl">&#10022;</span>
                        </div>
                        <p className="text-midnight/60 max-w-xl mx-auto leading-relaxed font-medium">
                            Discover the sweets our customers can&apos;t get enough of. Handpicked favorites that define our legacy.
                        </p>
                    </motion.div>

                    <HomeProducts products={featuredProducts} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <Link href="/products" className="btn-outline inline-flex items-center gap-2 border-primary-deep text-primary-deep hover:bg-primary hover:border-primary">
                            View All Sweets
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-midnight text-ivory relative overflow-hidden">
                <div className="absolute inset-0 texture-overlay opacity-20" />
                <div className="absolute inset-0 pattern-overlay opacity-[0.05]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Us</p>
                        <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
                            The Keshav Promise
                        </h2>
                        <div className="ornament-divider">
                            <span className="text-accent-gold text-2xl">&#10022;</span>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Pure Ingredients",
                                desc: "We use only the finest desi ghee, premium dry fruits, pure saffron, and fresh milk. No shortcuts, no compromises.",
                                icon: "🥛",
                            },
                            {
                                title: "Handcrafted Daily",
                                desc: "Every sweet is made fresh daily by our master halwais who carry forward generations of expertise and secret recipes.",
                                icon: "👐",
                            },
                            {
                                title: "Traditional Recipes",
                                desc: "Our recipes have been passed down through generations, preserving the authentic taste of Indian festive sweets.",
                                icon: "📜",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 text-center border border-accent-gold/10 hover:border-accent-gold/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                            >
                                <div className="text-5xl mb-6 bg-accent-gold/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center">{item.icon}</div>
                                <h3 className="font-heading text-3xl font-bold text-accent-gold-light mb-4">{item.title}</h3>
                                <p className="text-ivory/70 leading-relaxed text-sm font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-gradient-gold py-24 relative overflow-hidden">
                <div className="absolute inset-0 pattern-overlay opacity-10" />
                <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-dark-void/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">For Every Occasion</p>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-dark-void mb-6 leading-tight">
                            Celebrate Every Moment <br className="hidden sm:block" />with Royalty
                        </h2>
                        <p className="text-dark-void/80 text-lg mb-12 max-w-lg mx-auto font-medium leading-relaxed">
                            Whether it&apos;s Diwali, a wedding, or just a Tuesday - life is always better with Keshav Mithai.
                        </p>
                        <Link href="/products" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
                            Order Now
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

