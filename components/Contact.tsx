"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, CheckCircle, Send } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Mini Valet",
  "Full Valet",
  "Premium Detail",
  "Ceramic Coating",
  "Paint Correction",
  "Machine Polish",
  "Interior Detail",
  "Engine Bay Detail",
  "Other / Not sure",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", vehicle: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.phone.trim())   e.phone   = "Phone number is required.";
    if (!form.vehicle.trim()) e.vehicle = "Vehicle make/model is required.";
    if (!form.service)        e.service = "Please select a service.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // TODO: wire up to form backend (e.g. Netlify Forms, Formspree, or server action)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-white/3 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 focus:border-[#38d9a9]/60 focus:bg-white/5 ${
      errors[field] ? "border-red-500/60" : "border-white/8"
    }`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px glow-line" />
      <div className="absolute inset-0 bg-radial-mint-sm pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#38d9a9] text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
            Book Your Detail
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Ready for a showroom finish? Call, WhatsApp, or fill in the form
            below and we&apos;ll get back to you with a quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Call card */}
            <a
              href="tel:+447732693857"
              className="glass glass-hover rounded-2xl p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#38d9a9]/10 border border-[#38d9a9]/20 flex items-center justify-center text-[#38d9a9] group-hover:bg-[#38d9a9]/20 transition-colors shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-0.5">
                  Call Us
                </p>
                <p className="text-white font-display font-bold text-lg">
                  +44 7732 693857
                </p>
                <p className="text-gray-600 text-xs mt-0.5">Mon–Fri 8am–6pm · Sat 8am–5pm</p>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/447732693857?text=Hi%2C%20I%27d%20like%20to%20book%20a%20detail%20with%20Mint%20Detail."
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-2xl p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-0.5">
                  WhatsApp
                </p>
                <p className="text-white font-display font-bold text-lg">
                  Message Us
                </p>
                <p className="text-gray-600 text-xs mt-0.5">Fastest response — usually within hours</p>
              </div>
            </a>

            {/* Address */}
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Address
              </p>
              <address className="not-italic text-gray-300 text-sm leading-relaxed">
                Mint Detail<br />
                55 Foundry Ln<br />
                Earls Colne<br />
                Colchester CO6 2SB<br />
                United Kingdom
              </address>
              <p className="text-gray-600 text-xs mt-3">
                Mobile service — we come to you.
              </p>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Opening Hours
              </p>
              <ul className="text-sm space-y-1.5">
                {[
                  { day: "Monday",    hours: "8:00am – 6:00pm" },
                  { day: "Tuesday",   hours: "8:00am – 6:00pm" },
                  { day: "Wednesday", hours: "8:00am – 6:00pm" },
                  { day: "Thursday",  hours: "8:00am – 6:00pm" },
                  { day: "Friday",    hours: "8:00am – 6:00pm" },
                  { day: "Saturday",  hours: "8:00am – 5:00pm" },
                  { day: "Sunday",    hours: "Closed" },
                ].map((row) => (
                  <li key={row.day} className="flex justify-between">
                    <span className="text-gray-500">{row.day}</span>
                    <span className={row.hours === "Closed" ? "text-gray-700" : "text-gray-300"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#38d9a9]/10 border border-[#38d9a9]/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#38d9a9]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Thanks — we&apos;ll be in touch shortly with your quote. For
                      faster response, WhatsApp us or give us a call.
                    </p>
                  </div>
                  <a
                    href="tel:+447732693857"
                    className="bg-[#38d9a9] text-black font-bold px-8 py-3 rounded-full hover:bg-[#2cb87e] transition-colors"
                  >
                    Call +44 7732 693857
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-white text-xl">
                    Request a Free Quote
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="07700 900000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass("phone")}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vehicle" className="block text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Vehicle *
                      </label>
                      <input
                        id="vehicle"
                        name="vehicle"
                        type="text"
                        placeholder="e.g. BMW M3, Ford Focus"
                        value={form.vehicle}
                        onChange={handleChange}
                        className={inputClass("vehicle")}
                      />
                      {errors.vehicle && <p className="text-red-400 text-xs mt-1">{errors.vehicle}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass("service")} appearance-none`}
                      >
                        <option value="" disabled>Select a service…</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your vehicle's condition, any specific concerns, preferred date, or location…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass("message")} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 bg-[#38d9a9] hover:bg-[#2cb87e] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,217,169,0.4)]"
                  >
                    {submitting ? (
                      <span>Sending…</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send My Request
                      </>
                    )}
                  </button>

                  <p className="text-gray-700 text-xs text-center">
                    We respond to all enquiries within a few hours during opening hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
