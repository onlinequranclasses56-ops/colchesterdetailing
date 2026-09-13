"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Sparkles, Eye } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Fully Insured",
    desc: "Complete peace of mind. We carry full public liability insurance and care, custody & control (CCC) cover, so your vehicle is protected throughout every detail.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "We Come to You",
    desc: "No dropping your car off or waiting at a detailing unit. We bring a full professional setup to your home or workplace — you barely have to lift a finger.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Professional-Grade Products",
    desc: "We use the same professional ceramic coatings, machine polishes, and detailing chemicals used by top-level detailing studios — not supermarket shelf products.",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Showroom-Level Results",
    desc: "Every vehicle receives the same meticulous attention to detail — from paint to leather to glass. We don't cut corners; every inch is treated with care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            The Mint Difference
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Why Choose Mint Detail?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            We&apos;re not a budget car wash — we&apos;re a professional detailing
            service that happens to come to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#38d9a9]/10 border border-[#38d9a9]/20 flex items-center justify-center text-[#38d9a9]">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display font-bold text-white text-xl">
              Ready to see the Mint Detail difference?
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Serving Earls Colne, Colchester, Halstead, Braintree & all of North Essex.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#38d9a9] hover:bg-[#2cb87e] text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,217,169,0.45)] whitespace-nowrap"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
