"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield, Heart, ArrowRight } from "lucide-react";

export default function AboutPreviewSection() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-preview" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
              About the College
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide leading-none mt-3">
              A Legacy of
              <br />
              <span className="text-gold">Excellence</span>
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mt-6" />
            <p className="mt-6 text-gray-600 leading-relaxed">
              Tangub City Global College started as Tangub City College (TCC) in
              1984 under the late Mayor Alfonso D. Tan. Over the years, it
              evolved through several names — GADTMC, ADTC, GADTC — before
              becoming the global institution it is today.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our campus is a place where students are empowered to explore their
              potential, pursue their passions, and prepare for meaningful careers
              in an ever-changing world.
            </p>
            <motion.button
              onClick={scrollToAbout}
              className="mt-8 inline-flex items-center gap-2 text-primary font-subheading font-semibold group"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative">
                Learn more about TCGC
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-light-gray rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading text-primary uppercase tracking-wide mb-2">Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To equip the faculty and staff through continuing professional development programs to produce Globally Competitive graduates by ensuring a holistic approach to education.
              </p>
            </div>
            <div className="bg-light-gray rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading text-primary uppercase tracking-wide mb-2">Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                TCGC is the leading Higher Education Institution in Northwest Mindanao providing quality education and producing God-Centered citizens committed to be the Light of the World.
              </p>
            </div>
            <div className="bg-light-gray rounded-2xl p-6 sm:p-8 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading text-primary uppercase tracking-wide">Core Values</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Integrity", "Compassion", "Excellence"].map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-full text-xs font-subheading font-medium text-primary"
                  >
                    <Heart className="w-3 h-3" />
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
