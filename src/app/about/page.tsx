import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-royal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A legacy of sweetness, crafted with passion and perfected over generations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-shop.jpg"
                alt="Keshav Mithai Shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
                Where Tradition Meets Taste
              </h2>
              <div className="ornament-divider justify-start">
                <span className="text-accent-gold text-xl">&#10043;</span>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Keshav Mithai was born from a simple belief: that the best sweets are made with the purest
                  ingredients, time-honored recipes, and an abundance of love. What started as a small family
                  kitchen has grown into a beloved destination for sweet lovers across the region.
                </p>
                <p>
                  Our founder, inspired by the rich tradition of Indian mithai-making, set out to preserve
                  the authentic flavors that make our festivals, celebrations, and everyday moments truly
                  special. Every piece we create carries forward this commitment to excellence.
                </p>
                <p>
                  Today, our master halwais continue to use traditional copper vessels, pure desi ghee,
                  A-grade dry fruits, and hand-selected saffron strands. We believe shortcuts have no place
                  in the kitchen, and every sweet is a testament to that philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Our Values
            </h2>
            <div className="ornament-divider">
              <span className="text-accent-gold text-2xl">&#10043;</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌾",
                title: "Purity",
                desc: "Only the finest natural ingredients make it to our kitchen. No preservatives, no artificial colors.",
              },
              {
                icon: "🏺",
                title: "Tradition",
                desc: "Age-old recipes passed down through generations, keeping the authentic taste alive.",
              },
              {
                icon: "💛",
                title: "Passion",
                desc: "Every sweet is handcrafted by artisans who pour their heart and soul into their craft.",
              },
              {
                icon: "🤝",
                title: "Trust",
                desc: "Building lasting relationships with our customers through consistent quality and honest practices.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-cream rounded-2xl p-8 text-center border border-stone-dark hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl font-bold text-maroon mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding pattern-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Our Process
            </h2>
            <div className="ornament-divider">
              <span className="text-accent-gold text-2xl">&#10043;</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Source", desc: "Premium ingredients sourced from trusted suppliers" },
              { step: "02", title: "Craft", desc: "Handmade by expert halwais using traditional methods" },
              { step: "03", title: "Quality", desc: "Every batch tested for taste, texture, and freshness" },
              { step: "04", title: "Deliver", desc: "Carefully packaged and delivered fresh to your door" },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 text-center shadow-md border border-stone-dark">
                <div className="font-heading text-5xl font-bold text-accent-gold/20 mb-2">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold text-maroon mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-gold py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Keshav Difference
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Taste what generations of craftsmanship and love for sweets feels like.
          </p>
          <a href="/products" className="btn-secondary text-lg">
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}

