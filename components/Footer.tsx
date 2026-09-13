import { Phone, MapPin, Clock, Star } from "lucide-react";

const quickLinks = [
  { label: "Services",  href: "#services"  },
  { label: "Packages",  href: "#packages"  },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Reviews",   href: "#reviews"   },
  { label: "Areas",     href: "#areas"     },
  { label: "FAQ",       href: "#faq"       },
  { label: "Contact",   href: "#contact"   },
];

const services = [
  "Ceramic Coating",
  "Paint Correction",
  "Machine Polishing",
  "Full Valet",
  "Mini Valet",
  "Interior Detailing",
  "Engine Bay Detail",
  "Paint Protection Film",
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-16 pb-8">
      {/* Top glow border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38d9a9]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#38d9a9]/10 border border-[#38d9a9]/40 flex items-center justify-center">
                <span className="text-[#38d9a9] font-display font-bold text-sm leading-none">MD</span>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                Mint<span className="text-[#38d9a9]">Detail</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Fully insured mobile car detailing and ceramic coating across
              North Essex. Premium results. Professional service.
              Delivered to your door.
            </p>
            <div className="flex items-center gap-1.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#38d9a9] text-[#38d9a9]" />
              ))}
              <span className="text-gray-400 text-sm ml-1 font-semibold">5.0</span>
              <span className="text-gray-600 text-xs">/ 27 reviews</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/mintdetailuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mint Detail on Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-[#38d9a9] hover:border-[#38d9a9]/30 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mintdetailuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mint Detail on Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-[#38d9a9] hover:border-[#38d9a9]/30 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#38d9a9] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-[#38d9a9] text-sm transition-colors duration-200"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+447732693857"
                  className="flex items-start gap-3 text-gray-500 hover:text-[#38d9a9] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[#38d9a9] transition-colors" />
                  <span className="text-sm">+44 7732 693857</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <address className="not-italic text-sm leading-relaxed">
                    55 Foundry Ln<br />
                    Earls Colne<br />
                    Colchester CO6 2SB
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <div className="text-sm leading-relaxed">
                    <p>Mon–Fri: 8:00am – 6:00pm</p>
                    <p>Saturday: 8:00am – 5:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} Mint Detail. All rights reserved.
            Mobile car detailing serving North Essex &amp; surrounding areas.
          </p>
          <p>
            Reg. address: 55 Foundry Ln, Earls Colne, Colchester CO6 2SB, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
