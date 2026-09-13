"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(56,217,169,0.15)",
        boxShadow: "0 -4px 30px rgba(56,217,169,0.08)",
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href="tel:+447732693857"
          className="flex-1 flex items-center justify-center gap-2 bg-[#38d9a9] hover:bg-[#2cb87e] text-black font-bold text-sm py-3.5 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(56,217,169,0.35)]"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="https://wa.me/447732693857?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20car%20detailing."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#38d9a9]/30 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
