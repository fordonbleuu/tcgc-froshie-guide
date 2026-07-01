"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function VisionMissionCards() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Our Direction
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Vision &amp; Mission
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Guided by a clear purpose and a bold vision for the future, TCGC
            strives to transform lives through education.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-subheading font-bold text-gold uppercase tracking-[0.15em]">
                Our Mission
              </span>
              <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide mt-1">
                Mission
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To equip the faculty and staff through continuing professional
                development programs to produce Globally Competitive graduates by
                ensuring a holistic approach to education.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Faculty Development", "Global Competitiveness", "Holistic Education"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-subheading font-medium text-primary bg-primary/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs font-subheading font-bold text-gold uppercase tracking-[0.15em]">
                Our Vision
              </span>
              <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide mt-1">
                Vision
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                TCGC is the leading Higher Education Institution in Northwest
                Mindanao providing quality education and producing God-Centered
                citizens committed to be the Light of the World.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Leading HEI", "Quality Education", "God-Centered", "Light of the World"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-subheading font-medium text-gold bg-gold/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
