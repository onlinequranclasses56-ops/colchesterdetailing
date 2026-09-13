"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services",  href: "#services"  },
  { label: "Packages",  href: "#packages"  },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Reviews",   href: "#reviews"   },
  { label: "Areas",     href: "#areas"     },
  { label: "FAQ",       href: "#faq"       },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#38d9a9]/10 border border-[#38d9a9]/40 flex items-center justify-center group-hover:bg-[#38d9a9]/20 transition-colors duration-300">
              <span className="text-[#38d9a9] font-display font-bold text-sm leading-none">
                MD
              </span>
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Mint<span className="text-[#38d9a9]">Detail</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-[#38d9a9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+447732693857"
            className="hidden lg:inline-flex items-center gap-2 bg-[#38d9a9] hover:bg-[#2cb87e] text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,217,169,0.4)]"
          >
            <Phone className="w-4 h-4" />
            +44 7732 693857
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/97 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
              <span className="font-display font-bold text-white text-lg">
                Mint<span className="text-[#38d9a9]">Detail</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white hover:text-[#38d9a9] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-6 py-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="text-2xl font-display font-semibold text-white hover:text-[#38d9a9] py-3 border-b border-white/5 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10 flex flex-col gap-3">
              <a
                href="tel:+447732693857"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#38d9a9] text-black font-bold text-lg py-4 rounded-2xl hover:bg-[#2cb87e] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call +44 7732 693857
              </a>
              <a
                href="https://wa.me/447732693857"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold text-lg py-4 rounded-2xl hover:border-[#38d9a9]/40 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
