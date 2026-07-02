"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InstituteModal from "@/components/academics/InstituteModal";
import { institutes, type InstituteData } from "@/lib/institutes-data";

export default function AcademicInstitutesSection() {
  const [selectedInstitute, setSelectedInstitute] = useState<InstituteData | null>(null);

  return (
    <section id="academic-institutes" className="relative py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Academic Excellence
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Our Institutes
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Six specialized institutes offering diverse programs designed to
            equip you with the knowledge, skills, and values for a successful
            career.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {institutes.map((inst, index) => {
            return (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${inst.bgLight} flex items-center justify-center mb-5 p-1.5`}>
                  <img
                    src={inst.logo}
                    alt={`${inst.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2 leading-snug">
                  {inst.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {inst.shortDesc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <motion.button
                    onClick={() => setSelectedInstitute(inst)}
                    className="text-xs font-subheading font-semibold uppercase tracking-wider text-primary"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore Program
                  </motion.button>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <InstituteModal
        institute={selectedInstitute}
        onClose={() => setSelectedInstitute(null)}
      />
    </section>
  );
}
