"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const galleryImages = [
  { id: 1, label: "TCGC Campus — Aerial View", category: "Campus" },
  { id: 2, label: "College of Education — Graduation Day", category: "Events" },
  { id: 3, label: "Science Laboratory — Research Session", category: "Academics" },
  { id: 4, label: "Student Council Induction Ceremony", category: "Events" },
  { id: 5, label: "SINAG — Publication Team at Work", category: "Organizations" },
  { id: 6, label: "TCGC Chorale — Christmas Concert", category: "Arts" },
  { id: 7, label: "Basketball Varsity — Championship Game", category: "Sports" },
  { id: 8, label: "Campus Grounds — Garden Walkway", category: "Campus" },
  { id: 9, label: "Computer Lab — IT Class in Session", category: "Academics" },
  { id: 10, label: "Intramural Games — Volleyball Tournament", category: "Sports" },
  { id: 11, label: "Performing Arts Guild — Stage Play", category: "Arts" },
  { id: 12, label: "Community Outreach — Barangay Visit", category: "Events" },
];

const categories = ["All", "Campus", "Academics", "Events", "Sports", "Arts", "Organizations"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filtered.length : null
      );
    }
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
      );
    }
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section className="py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Moments That Matter
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Campus Gallery
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A visual journey through the people, places, and moments that define
            life at Tangub City Global College.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-subheading font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((img, index) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                whileHover={{ y: -3 }}
              >
                <PlaceholderImage
                  aspectRatio="4/3"
                  label={img.label}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <span className="text-xs text-gold font-subheading font-semibold uppercase tracking-wider">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium mt-0.5 truncate">
                      {img.label}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderImage
                aspectRatio="16/9"
                label={filtered[lightboxIndex].label}
                className="shadow-2xl"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-subheading font-medium">
                    {filtered[lightboxIndex].label}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {filtered[lightboxIndex].category}
                  </p>
                </div>
                <span className="text-gray-400 text-sm">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
