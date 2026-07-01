"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FileCardProps {
  title: string;
  description: string;
  qrSrc: string;
  index: number;
}

export default function FileCard({
  title,
  description,
  qrSrc,
  index,
}: FileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="p-8 md:p-10 flex flex-col items-center text-center">
        <div className="relative w-40 h-52 mb-6">
          <Image
            src={qrSrc}
            alt={`QR code for ${title}`}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-heading text-primary uppercase tracking-wide mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
