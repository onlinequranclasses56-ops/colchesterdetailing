"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Phone, ChevronDown, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80"
          alt="Premium black BMW — Mint Detail mobile car detailing North Essex"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        {/* Mint radial glow */}
        <div className="absolute inset-0 bg-radial-mint-hero" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#38d9a9] text-[#38d9a9]"
              />
            ))}
          </div>
          <span className="text-white font-semibold text-sm">5.0</span>
          <span className="text-white/20">|</span>
          <span className="text-gray-300 text-sm">27 Google Reviews</span>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="text-gray-300 text-sm hidden sm:flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#38d9a9]" />
            Fully Insured
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display font-bold text-white leading-[1.05] mb-3"
        >
          <span className="block text-4xl sm:text-5xl lg:text-7xl">
            Mobile Car Detailing &amp;
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl text-mint-gradient">
            Ceramic Coating
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mt-3">
            in Earls Colne, North Essex
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-200 font-light mt-6 mb-3"
        >
          Showroom-Finish Detailing, Delivered to Your Driveway
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
        >
          Fully insured mobile car detailing and valeting across Earls Colne,
          Colchester, Halstead, Braintree, Coggeshall, Sudbury and all of North
          Essex. From a mini valet to full ceramic coating protection — we come
          to you.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38d9a9] hover:bg-[#2cb87e] text-black font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,217,169,0.5)]"
          >
            Book Your Detail
          </a>
          <a
            href="tel:+447732693857"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass glass-hover text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 hover:text-[#38d9a9]"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        {/* Secondary trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-gray-500"
        >
          <span>✓ No travel required — we come to you</span>
          <span>✓ Fully insured &amp; professional</span>
          <span>✓ 5★ rated by 27 customers</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#38d9a9] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
