import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-void text-ivory relative overflow-hidden border-t-4 border-accent-gold">
      <div className="absolute inset-0 pattern-overlay opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-lg">
                <span className="text-dark-void font-heading text-2xl font-bold">K</span>
              </div>
              <h3 className="font-heading text-3xl font-bold tracking-wide text-ivory">Keshav Mithai</h3>
            </div>
            <p className="text-ivory/60 leading-relaxed text-sm font-medium">
              Crafting authentic Indian sweets with love and tradition since generations.
              Every piece tells a story of royalty and taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent-gold tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Our Sweets" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-accent-gold transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent-gold tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-ivory/60 text-sm font-medium">
                <MapPin size={18} className="mt-0.5 text-accent-gold shrink-0" />
                <span>123 Royal Lane, Mithai Bazaar, Ahmedabad, Gujarat 380001</span>
              </li>
              <li className="flex items-center gap-4 text-ivory/60 text-sm font-medium">
                <Phone size={18} className="text-accent-gold shrink-0" />
                <span className="hover:text-accent-gold transition-colors cursor-pointer">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-ivory/60 text-sm font-medium">
                <Mail size={18} className="text-accent-gold shrink-0" />
                <span className="hover:text-accent-gold transition-colors cursor-pointer">info@keshavmithai.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent-gold tracking-wide">
              Store Hours
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-ivory/60 text-sm font-medium">
                <Clock size={18} className="text-accent-gold shrink-0" />
                <div>
                  <p className="font-bold text-ivory/90 mb-0.5 uppercase tracking-wider text-[10px]">Mon - Sat</p>
                  <p>8:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-4 text-ivory/60 text-sm font-medium">
                <Clock size={18} className="text-accent-gold shrink-0" />
                <div>
                  <p className="font-bold text-ivory/90 mb-0.5 uppercase tracking-wider text-[10px]">Sunday</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-ivory/40 text-xs tracking-widest font-medium uppercase">
          <p>&copy; {new Date().getFullYear()} Keshav Mithai. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Handcrafted with <span className="text-primary-muted mx-1 text-lg leading-none">&hearts;</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

