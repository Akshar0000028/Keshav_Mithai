"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-royal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a question, bulk order request, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: ["123 Sweet Lane", "Mithai Bazaar, Ahmedabad", "Gujarat 380001"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+91 98765 43210", "+91 98765 43211"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@keshavmithai.com", "orders@keshavmithai.com"],
                },
                {
                  icon: Clock,
                  title: "Store Hours",
                  lines: ["Mon-Sat: 8AM - 9PM", "Sunday: 9AM - 8PM"],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-md border border-stone-dark flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-maroon mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-stone-dark">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pistachio/20 flex items-center justify-center">
                    <Send size={32} className="text-pistachio" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="btn-primary mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-dark"
                >
                  <h2 className="font-heading text-2xl font-bold text-maroon mb-6">Send Us a Message</h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-dark rounded-xl focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-cream/30"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-dark rounded-xl focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-cream/30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-dark rounded-xl focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-cream/30"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-dark rounded-xl focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-cream/30"
                      >
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Corporate Gifting">Corporate Gifting</option>
                        <option value="Wedding Orders">Wedding Orders</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-dark rounded-xl focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-cream/30 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

