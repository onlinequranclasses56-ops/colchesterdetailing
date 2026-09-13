"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

const items: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    alt: "After paint correction and ceramic coating on a Porsche — Mint Detail, Earls Colne",
    label: "After",
    caption: "Paint Correction & Ceramic Coating",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    alt: "Before and after machine polish on a Lamborghini Huracán — North Essex",
    label: "After",
    caption: "Two-Stage Machine Polish",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    alt: "Black BMW after full detail and ceramic coating — Colchester, Essex",
    label: "After",
    caption: "Full Detail — Black BMW",
  },
  {
    src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
    alt: "White Porsche 911 after premium detail and paint correction — Braintree",
    label: "After",
    caption: "Premium Detail — Porsche 911",
  },
  {
    src: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury car interior after full interior detail and leather conditioning — North Essex",
    label: "After",
    caption: "Interior Detail & Leather Care",
  },
  {
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
    alt: "Dark sports car after ceramic coating application by Mint Detail — Halstead",
    label: "After",
    caption: "Ceramic Coating Application",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#070707]">
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
            Our Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Before &amp; After Gallery
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Results speak louder than words. Every vehicle that leaves our care
            is showroom-ready — here&apos;s the proof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[#38d9a9]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(56,217,169,0.1)] aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Label badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#38d9a9] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.label}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm font-display">
                  {item.caption}
                </p>
              </div>
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
          Placeholder images shown — real before &amp; after shots will replace these.
          Follow{" "}
          <a
            href="https://www.instagram.com/mintdetailuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38d9a9] hover:underline"
          >
            @mintdetailuk
          </a>{" "}
          for the latest results.
        </motion.p>
      </div>
    </section>
  );
}
