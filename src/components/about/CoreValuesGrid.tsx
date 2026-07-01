"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Star } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty, transparency, and ethical conduct in all academic and administrative endeavors. We stand firm in our principles.",
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Fostering a culture of empathy, kindness, and genuine care for others within and beyond the campus community. We believe in treating every individual with dignity and respect.",
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Striving for the highest quality in everything we do — from academic instruction to community service — inspiring students and staff to reach their fullest potential.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CoreValuesGrid() {
  return (
    <section className="relative py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Our Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Core Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Three core principles that guide everything we do — from the classroom
            to the community, shaping our students into ethical and compassionate
            leaders.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 ${value.bgLight} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${value.textColor}`} />
                </div>
                <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span
                    className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${value.color}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
