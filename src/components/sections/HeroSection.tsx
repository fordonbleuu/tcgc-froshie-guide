"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const decorativeElements = [
  { icon: "★", position: "top-[15%] left-[8%]", size: "text-3xl md:text-4xl", delay: 0 },
  { icon: "✦", position: "top-[25%] right-[12%]", size: "text-2xl md:text-3xl", delay: 0.5 },
  { icon: "◇", position: "bottom-[30%] left-[5%]", size: "text-xl md:text-2xl", delay: 1 },
  { icon: "○", position: "bottom-[20%] right-[8%]", size: "text-2xl md:text-3xl", delay: 1.5 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToNext = () => {
    const el = document.querySelector("#welcome");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-primary/50 opacity-30" />

      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {decorativeElements.map((el) => (
        <motion.div
          key={el.icon}
          className={`absolute ${el.position} ${el.size} opacity-[0.08] text-white pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: el.delay + 0.5, duration: 1.5, ease: "easeOut" }}
        >
          {el.icon}
        </motion.div>
      ))}


      <motion.div style={{ y: parallaxY }} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 md:mt-0 will-change-transform">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-sm font-subheading font-medium tracking-wider">
              <Sparkles className="w-4 h-4 text-gold" />
              Official Digital Freshmen Guide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white uppercase tracking-wide leading-none"
          >
            Tangub City
            <br />
            <span className="text-gold">Global College</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-3 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-gold/90 font-subheading text-sm md:text-base font-medium tracking-[0.25em] uppercase">
              Light of the World &bull; Lux Mundi
            </span>
            <span className="w-8 h-px bg-gold/60" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-200/80 font-body leading-relaxed font-light"
          >
            Your journey to global excellence begins here. Discover a vibrant
            community dedicated to academic excellence, holistic growth, and
            shaping the leaders of tomorrow.
          </motion.p>


        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
          whileHover={{ y: 3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 text-white/70" />
        </motion.button>
      </motion.div>
    </section>
  );
}
