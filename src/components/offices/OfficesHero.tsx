"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";

export default function OfficesHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <pattern id="office-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#office-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 md:pt-28 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-xs sm:text-sm font-subheading font-medium tracking-wider mb-6">
            <Building className="w-3.5 h-3.5 text-gold" />
            Student Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-white uppercase tracking-wide leading-none"
        >
          Campus
          <br />
          <span className="text-gold">Offices</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-gray-300 font-body leading-relaxed text-sm sm:text-base"
        >
          Discover the offices dedicated to supporting your academic journey,
          personal growth, and overall well-being at TCGC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 w-16 h-1 bg-gold rounded-full mx-auto"
        />
      </div>
    </section>
  );
}
