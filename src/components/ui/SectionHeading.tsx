"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mx-auto mb-12 md:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading uppercase tracking-wide leading-none ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`h-1 rounded-full bg-gold ${
          align === "center" ? "mx-auto" : ""
        } mt-4`}
      />
    </motion.div>
  );
}
