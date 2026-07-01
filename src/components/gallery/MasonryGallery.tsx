"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  label: string;
  category: "Campus" | "Events" | "Students" | "Facilities";
  aspect: string;
  span: "tall" | "wide" | "large" | "square";
}

const galleryImages: GalleryImage[] = [
  { id: 1, label: "TCGC Main Building — Aerial View", category: "Campus", aspect: "16/9", span: "wide" },
  { id: 2, label: "Administration Building Entrance", category: "Campus", aspect: "3/4", span: "tall" },
  { id: 3, label: "College Graduation — Batch Photo", category: "Events", aspect: "4/3", span: "square" },
  { id: 4, label: "Intramural Opening Ceremony", category: "Events", aspect: "21/9", span: "wide" },
  { id: 5, label: "Students at the Campus Quad", category: "Students", aspect: "3/4", span: "tall" },
  { id: 6, label: "Library Study Hall", category: "Facilities", aspect: "4/3", span: "square" },
  { id: 7, label: "Student Council — Leadership Summit", category: "Students", aspect: "1/1", span: "square" },
  { id: 8, label: "Science Laboratory Equipment", category: "Facilities", aspect: "3/4", span: "tall" },
  { id: 9, label: "Foundation Day Celebration", category: "Events", aspect: "16/9", span: "wide" },
  { id: 10, label: "Computer Laboratory Room", category: "Facilities", aspect: "4/3", span: "square" },
  { id: 11, label: "TCGC Chorale Performance", category: "Events", aspect: "3/4", span: "tall" },
  { id: 12, label: "Campus Walkway — Garden Path", category: "Campus", aspect: "16/9", span: "wide" },
  { id: 13, label: "Group Study Session Outdoors", category: "Students", aspect: "4/3", span: "square" },
  { id: 14, label: "Basketball Court — Sports Complex", category: "Facilities", aspect: "16/9", span: "wide" },
  { id: 15, label: "Freshmen Orientation Program", category: "Events", aspect: "3/4", span: "tall" },
  { id: 16, label: "Campus Sunset View", category: "Campus", aspect: "21/9", span: "wide" },
  { id: 17, label: "Student Organization Fair", category: "Students", aspect: "1/1", span: "square" },
  { id: 18, label: "Multipurpose Hall Setup", category: "Facilities", aspect: "3/4", span: "tall" },
  { id: 19, label: "Outdoor Classroom Session", category: "Campus", aspect: "4/3", span: "square" },
  { id: 20, label: "Volleyball Tournament Finals", category: "Events", aspect: "16/9", span: "wide" },
  { id: 21, label: "TCGC Alumni Homecoming", category: "Students", aspect: "3/4", span: "tall" },
  { id: 22, label: "Audio-Visual Room", category: "Facilities", aspect: "4/3", span: "square" },
];

const categories = ["All", "Campus", "Events", "Students", "Facilities"];

const aspectMap: Record<string, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-[1/1]",
  "21/9": "aspect-[21/9]",
};

const gradients = [
  "from-blue-400/20 to-blue-600/20",
  "from-emerald-400/20 to-emerald-600/20",
  "from-amber-400/20 to-amber-600/20",
  "from-purple-400/20 to-purple-600/20",
  "from-rose-400/20 to-rose-600/20",
  "from-teal-400/20 to-teal-600/20",
];

export default function MasonryGallery() {
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
        prev !== null ? (prev + 1) % filtered.length : null,
      );
    }
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <section className="py-20 md:py-28 bg-light-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-subheading font-medium rounded-full transition-all duration-300 ${
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
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((img, index) => (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  onClick={() => openLightbox(index)}
                  className="group relative w-full overflow-hidden rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 break-inside-avoid"
                  whileHover={{ y: -3 }}
                >
                  <div
                    className={`w-full bg-gradient-to-br ${gradients[index % gradients.length]} ${aspectMap[img.aspect]} flex items-center justify-center`}
                  >
                    <div className="text-center p-6">
                      <svg
                        className="w-10 h-10 mx-auto text-gray-400/60 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                        />
                      </svg>
                      <p className="text-xs font-medium text-gray-400/80">
                        {img.label}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
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
      </section>

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
              <div
                className={`w-full bg-gradient-to-br ${gradients[lightboxIndex % gradients.length]} aspect-[16/9] rounded-2xl flex items-center justify-center shadow-2xl`}
              >
                <div className="text-center p-8">
                  <svg
                    className="w-16 h-16 mx-auto text-white/30 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                  <p className="text-white/50 text-sm font-medium">
                    {filtered[lightboxIndex].label}
                  </p>
                </div>
              </div>
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
    </>
  );
}
