"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  {
    name: "Earls Colne",
    badge: "Home Base",
    desc: "Based at 55 Foundry Lane, Earls Colne, this is where Mint Detail started. We know the local roads, the local community, and we're minutes from your door. Whether you've picked up road grime from the country lanes or want a full ceramic coating ahead of a vehicle sale, no one covers Earls Colne like we do.",
  },
  {
    name: "Colchester",
    badge: null,
    desc: "Serving North Colchester and the wider borough, we bring showroom-finish detailing to one of East Anglia's largest towns. From Stanway to Mile End, Lexden to Wivenhoe — we've detailed everything from daily drivers and fleet vehicles to collector's cars across Colchester.",
  },
  {
    name: "Halstead",
    badge: null,
    desc: "A short drive from our base in Earls Colne, Halstead is one of our most regularly served areas. Whether you need a quick mini valet or a full multi-day paint correction, we look after cars across the town and the beautiful surrounding Colne Valley villages.",
  },
  {
    name: "Braintree",
    badge: null,
    desc: "Serving Braintree, Bocking, Rayne, and the surrounding villages throughout the Braintree district. Our fully mobile setup means there's no need to seek out a local car wash or detailing unit. We bring the professional detail to your driveway wherever you are in Braintree.",
  },
  {
    name: "Coggeshall",
    badge: null,
    desc: "This historic market town sits firmly within our regular service radius. Coggeshall residents and those in the surrounding villages can access the full Mint Detail service menu — from a routine exterior wash to a multi-stage paint correction and full ceramic coating project.",
  },
  {
    name: "Sudbury",
    badge: "Into Suffolk",
    desc: "Crossing the border into South Suffolk, we regularly travel to Sudbury and the surrounding villages including Great Cornard, Long Melford, and Glemsford. Distance is never a barrier when you care as much about cars as we do — get in touch and we'll confirm coverage.",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
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
            Coverage
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Areas We Cover
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Based in Earls Colne, we cover all of North Essex and parts of South
            Suffolk. If your area isn&apos;t listed, just ask — we travel further
            than you&apos;d think.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38d9a9]/10 border border-[#38d9a9]/20 flex items-center justify-center text-[#38d9a9] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">
                    {area.name}
                  </h3>
                </div>
                {area.badge && (
                  <span className="shrink-0 bg-[#38d9a9]/10 border border-[#38d9a9]/30 text-[#38d9a9] text-xs font-semibold px-2.5 py-1 rounded-full">
                    {area.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl overflow-hidden border border-white/5 hover:border-[#38d9a9]/20 transition-colors duration-300"
        >
          <iframe
            title="Mint Detail location — 55 Foundry Ln, Earls Colne, Colchester CO6 2SB"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.6!2d0.686!3d51.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8dd6e8b4b8f0f%3A0x0!2s55+Foundry+Ln%2C+Earls+Colne%2C+Colchester+CO6+2SB!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="360"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <p className="text-center text-gray-600 text-xs mt-3">
          Map: 55 Foundry Ln, Earls Colne, Colchester CO6 2SB
        </p>
      </div>
    </section>
  );
}
