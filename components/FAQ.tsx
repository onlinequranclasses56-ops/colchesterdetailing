"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Do you come to my home or workplace?",
    a: "Yes — that's the whole point of Mint Detail. We're fully mobile and bring our complete professional detailing setup directly to you. Whether you're at home or at work, all we need is access to your vehicle and enough space to operate safely. You don't need to travel anywhere.",
  },
  {
    q: "What's the difference between a valet and a full detail?",
    a: "A valet is primarily a cleaning service — exterior wash, interior vacuum, glass clean, and a wipe-down. A full detail goes much deeper: machine polishing to remove paint defects and swirl marks, clay bar decontamination, steam cleaning of the interior, leather conditioning, and the application of protective coatings. Think of a valet as a thorough clean and a detail as a complete restoration and protection treatment.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "A professionally applied ceramic coating typically lasts 2–5 years, depending on the specific product used, the condition of the paint beforehand, and how the vehicle is maintained afterwards. We recommend a maintenance wash every 3–4 months using pH-neutral shampoo to maximise longevity and keep your coating performing at its best.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Earls Colne and cover all of North Essex including Colchester, Halstead, Braintree, Coggeshall, and Sudbury. We also travel to surrounding villages across the region. If you're not sure whether we cover your area, just get in touch — we travel further than you might expect.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes, absolutely. We carry full public liability insurance and care, custody & control (CCC) insurance. CCC cover specifically protects your vehicle while it is in our care — so you have complete peace of mind from the moment we arrive to the moment we leave.",
  },
  {
    q: "How long does a full detail take?",
    a: "It depends on the service. A mini valet typically takes 1.5–2 hours. A full valet takes 3–4 hours. A premium detail including machine polishing can take 6–8 hours. A full ceramic coating package, including paint correction prep, may span a full day or two depending on the vehicle size and paint condition. We'll always give you a realistic time estimate before we start.",
  },
  {
    q: "Do I need to prepare my car beforehand?",
    a: "Not at all — we handle everything. The only things we ask are: clear, unobstructed access to your vehicle, and that any personal items you'd like to keep safe are removed from the interior before we begin. Everything else is down to us.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#070707]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Everything you need to know before booking your detail.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-[#38d9a9]/25 shadow-[0_0_20px_rgba(56,217,169,0.06)]"
                  : "glass-hover"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-white text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-[#38d9a9]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-[#38d9a9] hover:underline">
            Get in touch
          </a>{" "}
          or{" "}
          <a href="tel:+447732693857" className="text-[#38d9a9] hover:underline">
            give us a call.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
