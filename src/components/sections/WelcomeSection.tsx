"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Globe, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "CHED-recognized programs delivered by experienced educators committed to your success.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International-standard curriculum preparing you for a connected world.",
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "A nurturing environment where every student is valued and guided.",
  },
  {
    icon: BookOpen,
    title: "Holistic Growth",
    description: "Beyond academics, we develop character, leadership, and lifelong skills.",
  },
];

export default function WelcomeSection() {
  return (
    <section id="welcome" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em] mb-4"
          >
            Welcome to
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-primary uppercase tracking-wide leading-none"
          >
            Tangub City
            <br />
            <span className="text-gold">Global College</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            As you begin this exciting new chapter, we welcome you to a community
            where academic excellence meets genuine care for every student.
            At TCGC, we believe in nurturing not just your mind, but your
            character, your dreams, and your potential to make a difference in
            the world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            This guide is designed to help you navigate everything TCGC has to
            offer — from our academic programs and campus facilities to student
            life and the resources you need to thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 w-16 h-1 bg-gold rounded-full mx-auto"
          />
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group text-center p-6 md:p-8 rounded-2xl bg-light-gray hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
