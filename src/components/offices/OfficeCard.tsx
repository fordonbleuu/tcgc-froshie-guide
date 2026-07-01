"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface OfficeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgLight: string;
  textColor: string;
  index: number;
}

export default function OfficeCard({
  icon: Icon,
  title,
  description,
  bgLight,
  textColor,
  index,
}: OfficeCardProps) {
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
        <div
          className={`w-16 h-16 ${bgLight} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-8 h-8 ${textColor}`} />
        </div>

        <h3 className="text-xl md:text-2xl font-heading text-primary uppercase tracking-wide mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
