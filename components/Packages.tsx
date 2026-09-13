"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

const packages: Package[] = [
  {
    id: "mini",
    name: "Mini Valet",
    tagline: "Quick refresh",
    price: "£75",
    features: [
      "Exterior hand wash & dry",
      "Snow foam pre-wash",
      "Wheel & tyre clean",
      "Exterior window clean",
      "Interior vacuum",
      "Dashboard & plastics wipe-down",
      "Tyre dressing",
      "Air freshener",
    ],
    cta: "Book Mini Valet",
  },
  {
    id: "full",
    name: "Full Valet",
    tagline: "Best value clean",
    price: "£145",
    features: [
      "Everything in Mini Valet",
      "Clay bar decontamination",
      "Hand polish & wax",
      "Door shuts & jambs cleaned",
      "Seat shampooing",
      "Carpet & upholstery cleaning",
      "Leather conditioning",
      "Interior glass clean",
    ],
    cta: "Book Full Valet",
  },
  {
    id: "premium",
    name: "Premium Detail",
    tagline: "Most popular",
    price: "£295",
    popular: true,
    features: [
      "Everything in Full Valet",
      "Single-stage machine polish",
      "Ceramic spray protection",
      "Engine bay clean & dress",
      "Steam interior clean",
      "Full decontamination treatment",
      "Hydrophobic spray sealant",
      "Interior scenting",
    ],
    cta: "Book Premium Detail",
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "Ultimate protection",
    price: "£595",
    features: [
      "Everything in Premium Detail",
      "Two-stage machine polish",
      "Paint correction prep",
      "Professional ceramic coating",
      "2–5 year paint protection",
      "Ceramic glass coating",
      "Wheel ceramic coating",
      "Free maintenance wash (6 mo.)",
    ],
    cta: "Book Ceramic Package",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 lg:py-28 bg-[#070707]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial-mint-sm pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            Signature Packages
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Choose Your Detail
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Four curated packages designed to suit every vehicle and budget —
            all delivered to your door, all using professional-grade products.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#38d9a9]/8 border border-[#38d9a9]/40 shadow-[0_0_40px_rgba(56,217,169,0.12)]"
                  : "glass glass-hover"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#38d9a9] text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    <Star className="w-3 h-3 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">
                  {pkg.tagline}
                </p>
                <h3 className="font-display font-bold text-white text-xl">
                  {pkg.name}
                </h3>
                <div className="flex items-end gap-1 mt-2">
                  <span
                    className={`font-display font-bold text-4xl ${
                      pkg.popular ? "text-[#38d9a9]" : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm pb-1">
                    from / car
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`h-px ${
                  pkg.popular
                    ? "bg-[#38d9a9]/20"
                    : "bg-white/5"
                }`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        pkg.popular ? "text-[#38d9a9]" : "text-[#38d9a9]/70"
                      }`}
                    />
                    <span className="text-gray-400 text-sm leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-2 w-full text-center font-semibold text-sm py-3 rounded-xl transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#38d9a9] text-black hover:bg-[#2cb87e] hover:shadow-[0_0_25px_rgba(56,217,169,0.4)]"
                    : "border border-white/10 text-white hover:border-[#38d9a9]/40 hover:text-[#38d9a9]"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Prices vary by vehicle size and condition.{" "}
          <a href="tel:+447732693857" className="text-[#38d9a9] hover:underline">
            Call for a free quote.
          </a>
        </p>
      </div>
    </section>
  );
}
