"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ImageWithZoomProps {
  src?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ImageWithZoom({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  children,
}: ImageWithZoomProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          children
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black/0 pointer-events-none"
        animate={{ backgroundColor: isHovered ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0)" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
