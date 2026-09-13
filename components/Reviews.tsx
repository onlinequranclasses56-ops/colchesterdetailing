"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  date: string;
  vehicle: string;
  rating: number;
  body: string;
}

const reviews: Review[] = [
  {
    name: "James T.",
    location: "Earls Colne",
    date: "Verified Google Review",
    vehicle: "Nissan 350Z",
    rating: 5,
    body: "Had a pre-sale detail done on my Nissan 350Z right on the driveway. I can't overstate how professional this was — hours of meticulous attention to every panel, every crease, every bit of chrome. The car was transformed. It sold within 24 hours of listing. Whether it was the detail that did it or not, I'll never use anyone else. Absolutely incredible service.",
  },
  {
    name: "Sarah M.",
    location: "Colchester",
    date: "Verified Google Review",
    vehicle: "BMW M3",
    rating: 5,
    body: "Booked Mint Detail for a full valet on my M3. I'm fussy about my car and don't let just anyone near it. But from the moment they turned up with all their professional kit, I knew I was in safe hands. The paint looked better than when I bought it. I genuinely couldn't believe the transformation. Five stars isn't enough.",
  },
  {
    name: "Tom K.",
    location: "Halstead",
    date: "Verified Google Review",
    vehicle: "VW Golf R",
    rating: 5,
    body: "Had the ceramic coating package done on my new Golf R. Flawless results — the paint has incredible depth and the water just sheets straight off. Really professional attitude from start to finish, great communication, and the price is more than fair for the quality of work involved. Already booked in for a maintenance wash. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            Customer Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            What Our Customers Say
          </h2>

          {/* Big star display */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#38d9a9] text-[#38d9a9]" />
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-5xl text-white">5.0</span>
              <span className="text-gray-500 text-lg">/ 5</span>
            </div>
            <p className="text-gray-400 text-sm">
              Based on <span className="text-white font-semibold">27 Google reviews</span>
            </p>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#38d9a9]/20 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#38d9a9] text-[#38d9a9]" />
                ))}
              </div>

              {/* Review body */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* Footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-gray-600 text-xs">{review.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#38d9a9]/60 text-xs font-medium">
                    {review.vehicle}
                  </span>
                  <p className="text-gray-700 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://g.page/r/mintdetail/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass glass-hover text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:text-[#38d9a9]"
          >
            <Star className="w-4 h-4 text-[#38d9a9]" />
            Leave a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
