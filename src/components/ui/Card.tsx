"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  index?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${
        hover ? "transition-shadow duration-300 hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
