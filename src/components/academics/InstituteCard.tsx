"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InstituteCardProps {
  logo: string;
  title: string;
  description: string;
  index: number;
  onLearnMore: () => void;
}

export default function InstituteCard({
  logo,
  title,
  description,
  index,
  onLearnMore,
}: InstituteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="p-6 md:p-8">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 p-1.5 border border-gray-200 shadow-sm">
          <img
            src={logo}
            alt={`${title} logo`}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-heading text-primary uppercase tracking-wide mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <motion.button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 text-sm font-subheading font-semibold text-gold group/btn"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span className="relative">
            Learn More
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}
