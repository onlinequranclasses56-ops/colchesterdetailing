"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets, Sparkles, Layers, Shield, Sofa, Settings,
  Package, Zap, Wind, Star, Car, Wrench,
} from "lucide-react";

type Category = "exterior" | "protection" | "interior" | "specialist" | "packages";

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  desc: string;
  price: string;
}

const categories: { id: Category; label: string }[] = [
  { id: "exterior",    label: "Exterior"              },
  { id: "protection",  label: "Protection & Coatings" },
  { id: "interior",    label: "Interior"              },
  { id: "specialist",  label: "Specialist"            },
  { id: "packages",    label: "Packages"              },
];

const services: Record<Category, ServiceItem[]> = {
  exterior: [
    { icon: <Droplets className="w-5 h-5" />, name: "Full Body Hand Wash",        desc: "Thorough hand wash using pH-neutral shampoo, leaving paintwork clean and protected.",            price: "From £25" },
    { icon: <Droplets className="w-5 h-5" />, name: "Snow Foam Pre-Wash",         desc: "Thick pre-wash foam clings to dirt and lubricates the surface before the contact wash.",         price: "From £15" },
    { icon: <Layers    className="w-5 h-5" />, name: "Clay Bar Treatment",         desc: "Removes bonded contamination for a glass-smooth finish ready for polish or coating.",            price: "From £35" },
    { icon: <Sparkles  className="w-5 h-5" />, name: "Hand Polish",               desc: "Restores gloss and removes light surface marks by hand with finishing polish.",                  price: "From £50" },
    { icon: <Sparkles  className="w-5 h-5" />, name: "Single Stage Machine Polish", desc: "One-pass machine polish removes light swirl marks and oxidation, enhancing gloss significantly.", price: "From £95" },
    { icon: <Sparkles  className="w-5 h-5" />, name: "Two Stage Machine Polish",  desc: "Compound and refinement stages for dramatically enhanced clarity and deep gloss.",               price: "From £150" },
    { icon: <Star      className="w-5 h-5" />, name: "Paint Correction",          desc: "Multi-stage correction removes deep swirls, scratches, and defects — paint transformed.",        price: "From £250" },
    { icon: <Sparkles  className="w-5 h-5" />, name: "Paint Enhancement",         desc: "Single-stage machine polish maximising gloss and depth without cutting deep into the clear coat.", price: "From £145" },
    { icon: <Wrench    className="w-5 h-5" />, name: "Light Scratch Removal",     desc: "Targeted machine or hand correction of light surface scratches and scuffs.",                    price: "From £75" },
    { icon: <Zap       className="w-5 h-5" />, name: "Headlight Polishing",       desc: "Restores full clarity to yellowed, hazed, or scratched headlight lenses.",                      price: "From £35" },
    { icon: <Zap       className="w-5 h-5" />, name: "Exhaust Tip Polishing",     desc: "Removes carbon deposits and road grime to restore a mirror-chrome finish.",                     price: "From £20" },
    { icon: <Car       className="w-5 h-5" />, name: "Exterior Decontamination",  desc: "Iron remover, tar remover, and clay bar — the complete decontamination treatment.",             price: "From £45" },
    { icon: <Droplets  className="w-5 h-5" />, name: "Wheel Washing",             desc: "Deep clean of wheels including spokes, barrels, and brake dust removal.",                       price: "From £20" },
    { icon: <Shield    className="w-5 h-5" />, name: "Wheel Ceramic Coating",     desc: "Long-lasting ceramic protection on wheels making them easier to clean and resistant to brake dust.", price: "From £85" },
    { icon: <Droplets  className="w-5 h-5" />, name: "Hydrophobic Spray Sealant", desc: "Quick-apply spray sealant for enhanced water beading between full detail sessions.",            price: "From £25" },
    { icon: <Sparkles  className="w-5 h-5" />, name: "Quick Detailer",            desc: "Light spray detailer for a quick gloss boost, ideal for show prep or between washes.",          price: "From £15" },
  ],
  protection: [
    { icon: <Shield   className="w-5 h-5" />, name: "Ceramic Coating",         desc: "Professional-grade nano-ceramic protection delivering 2–5 year durability, hydrophobic gloss, and hardness.",  price: "From £295" },
    { icon: <Shield   className="w-5 h-5" />, name: "Ceramic Glass Coating",   desc: "Hydrophobic ceramic on all glass surfaces for dramatically improved wet-weather visibility.",                price: "From £85"  },
    { icon: <Layers   className="w-5 h-5" />, name: "Paint Protection Film",   desc: "Self-healing physical film protecting vulnerable areas from stone chips, road debris, and minor abrasions.",  price: "POA"       },
    { icon: <Shield   className="w-5 h-5" />, name: "Upholstery Protection",   desc: "Fabric guard applied to seats, carpets, and trim to repel liquid and prevent staining.",                      price: "From £45"  },
    { icon: <Droplets className="w-5 h-5" />, name: "Glass Protection",        desc: "Hydrophobic coating on all exterior glass for superior water sheeting and clarity in the rain.",               price: "From £65"  },
  ],
  interior: [
    { icon: <Sofa    className="w-5 h-5" />, name: "Interior Vacuuming",           desc: "Full interior vacuum of carpets, seats, boot, and all crevices.",                                    price: "From £20"  },
    { icon: <Droplets className="w-5 h-5" />, name: "Seat Shampooing",            desc: "Hot water extraction and shampoo of fabric seats to remove stains and deep-set grime.",              price: "From £55"  },
    { icon: <Sparkles className="w-5 h-5" />, name: "Leather Seat Care",          desc: "Professional clean, condition, and protect of all leather surfaces to restore suppleness and colour.", price: "From £65"  },
    { icon: <Sofa    className="w-5 h-5" />, name: "Carpet & Upholstery Cleaning", desc: "Powerful hot water extraction leaves carpets and upholstery fresh, clean, and residue-free.",      price: "From £75"  },
    { icon: <Wind    className="w-5 h-5" />, name: "Steam Clean",                 desc: "High-temperature steam sanitises surfaces, blasts grime, and refreshes hard-to-reach areas.",       price: "From £85"  },
    { icon: <Star    className="w-5 h-5" />, name: "Full Interior Detail",         desc: "Complete interior refresh: vacuum, wipe-down, plastic care, glass clean, and door jambs.",          price: "From £120" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Interior Scenting",          desc: "Long-lasting, premium fragrance treatment leaving a subtle, fresh scent throughout.",                price: "From £15"  },
    { icon: <Car     className="w-5 h-5" />, name: "Door Shuts Cleaning",          desc: "Detailed clean of door jambs, sills, and shuts — often neglected but instantly noticed.",           price: "From £25"  },
    { icon: <Sparkles className="w-5 h-5" />, name: "Interior Glass Cleaning",    desc: "Crystal-clear clean of all interior glass and mirrors with anti-smear finish.",                     price: "From £20"  },
    { icon: <Wrench  className="w-5 h-5" />, name: "Grime Remover Treatment",      desc: "Targeted treatment for stubborn interior grime on plastics, vents, and switchgear.",                price: "From £20"  },
  ],
  specialist: [
    { icon: <Star     className="w-5 h-5" />, name: "Full Auto Detail",        desc: "The complete treatment — interior and exterior combined into one immaculate transformation.",         price: "From £200" },
    { icon: <Settings className="w-5 h-5" />, name: "Engine Bay Detailing",    desc: "Safe, thorough engine bay degreasing, clean, and dress — a spotless engine bay is a proud one.",     price: "From £85"  },
    { icon: <Wind     className="w-5 h-5" />, name: "Air Conditioning Service", desc: "AC regas and antimicrobial clean removes bacteria from your ventilation system for fresh air.",      price: "From £55"  },
    { icon: <Zap      className="w-5 h-5" />, name: "Deep Clean / Depth Clean", desc: "Intensive detailing for heavily soiled, neglected, or high-mileage vehicles requiring extra time.", price: "From £150" },
  ],
  packages: [
    { icon: <Package className="w-5 h-5" />, name: "Mini Valet",        desc: "Quick refresh: exterior hand wash, wheel clean, windows, interior vacuum, dashboard wipe, tyre dressing.",               price: "From £75"  },
    { icon: <Package className="w-5 h-5" />, name: "Full Valet",        desc: "Thorough clean: full exterior detail including clay bar and hand polish, plus complete interior deep clean.",              price: "From £145" },
    { icon: <Star    className="w-5 h-5" />, name: "Premium Detailing",  desc: "Full valet + single-stage machine polish + ceramic spray + steam interior clean + leather conditioning.",                 price: "From £295" },
    { icon: <Shield  className="w-5 h-5" />, name: "Ceramic Coating Package", desc: "Paint correction prep, two-stage machine polish, professional ceramic coating, glass coating, wheel ceramic.",      price: "From £595" },
    { icon: <Car     className="w-5 h-5" />, name: "Mobile Valeting",   desc: "Flexible mobile valet packages — we come to your home or workplace at a time that suits you.",                            price: "From £75"  },
    { icon: <Layers  className="w-5 h-5" />, name: "Automotive Valeting", desc: "Professional automotive valeting combining interior and exterior care for a showroom-fresh result.",                   price: "POA"       },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("exterior");

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            From a quick wash to a full ceramic coating system — every service
            is performed with premium products and showroom-level attention to
            detail.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#38d9a9] text-black shadow-[0_0_20px_rgba(56,217,169,0.35)]"
                  : "glass glass-hover text-gray-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {services[activeTab].map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#38d9a9]/10 border border-[#38d9a9]/20 flex items-center justify-center text-[#38d9a9] shrink-0">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm leading-snug mb-1">
                    {svc.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-auto pt-2 border-t border-white/5">
                  <span className="text-[#38d9a9] font-semibold text-sm">
                    {svc.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-gray-600 text-sm mt-8">
          Prices are indicative and vary by vehicle size and condition.{" "}
          <a href="#contact" className="text-[#38d9a9] hover:underline">
            Contact us for a free quote.
          </a>
        </p>
      </div>
    </section>
  );
}
