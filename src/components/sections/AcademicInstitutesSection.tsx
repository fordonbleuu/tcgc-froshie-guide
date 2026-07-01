"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const institutes = [
  {
    id: "business",
    title: "Institute of Business and Financial Services",
    description: "Developing future business leaders and financial professionals with strong foundations in management, marketing, and finance.",
    logo: "/institutes/ibfs.png",
    bgLight: "bg-emerald-50",
  },
  {
    id: "arts-sciences",
    title: "Institute of Arts and Sciences",
    description: "Fostering critical thinking, effective communication, and a deep understanding of society through the humanities and social sciences.",
    logo: "/institutes/ias.png",
    bgLight: "bg-purple-50",
  },
  {
    id: "computer-studies",
    title: "Institute of Computer Studies",
    description: "Building expertise in computing and information technology to meet the demands of the digital age.",
    logo: "/institutes/ics.png",
    bgLight: "bg-red-50",
  },
  {
    id: "teacher-education",
    title: "Institute of Teacher Education",
    description: "Preparing dedicated and competent educators who shape the minds of future generations.",
    logo: "/institutes/ite.png",
    bgLight: "bg-blue-50",
  },
  {
    id: "criminal-justice",
    title: "Institute of Criminal Justice Education",
    description: "Developing ethical and skilled professionals in criminology and security management for a safer society.",
    logo: "/institutes/icje.png",
    bgLight: "bg-red-50",
  },
  {
    id: "health-sciences",
    title: "Institute of Health Sciences",
    description: "Training compassionate healthcare professionals dedicated to maternal and child health and community well-being.",
    logo: "/institutes/ihs.png",
    bgLight: "bg-pink-50",
  },
];

export default function AcademicInstitutesSection() {
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
                  {inst.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-subheading font-semibold uppercase tracking-wider text-primary">
                    Explore Program
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
