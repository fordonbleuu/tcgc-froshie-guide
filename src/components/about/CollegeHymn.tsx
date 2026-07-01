"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Music } from "lucide-react";

const lyrics = [
  { id: 1, line: "It was the vision of one man" },
  { id: 2, line: "To educate the people of his land" },
  { id: 3, line: "That built this institution" },
  { id: 4, line: "We now so dearly loved" },
  { id: 5, line: "" },
  { id: 6, line: "To you we give our loyalty" },
  { id: 7, line: "To you our faith and fealty" },
  { id: 8, line: "That you may rise in fame" },
  { id: 9, line: "For all the years to come" },
  { id: 10, line: "" },
  { id: 11, line: "We hail you now" },
  { id: 12, line: "We praise you now" },
  { id: 13, line: "We hope you keep your torch burning" },
  { id: 14, line: "And let your spirit live forever" },
  { id: 15, line: "For in your fold we all shall gather" },
  { id: 16, line: "" },
  { id: 17, line: "And be our shining star" },
  { id: 18, line: "Our beacon from afar" },
  { id: 19, line: "You shall forever be" },
  { id: 20, line: "The light of Panguil Bay" },
];

export default function CollegeHymn() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/tcgc-hymm.mp3");
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setActiveLine(null);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setActiveLine(null);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setActiveLine(null);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <pattern id="hymn-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hymn-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Our Anthem
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white uppercase tracking-wide mt-2">
            TCGC Hymn
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A song of pride, legacy, and unwavering spirit — the TCGC Hymn
            honors the vision of our founder and the light of Panguil Bay.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center">
                <Music className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-white font-subheading font-semibold text-lg">
                  TCGC Hymn
                </h3>
                <p className="text-gray-400 text-xs">
                  Official School Anthem
                </p>
              </div>
            </div>

            <motion.button
              onClick={isPlaying ? stopPlayback : togglePlay}
              className="flex items-center gap-2.5 px-6 py-3 bg-gold text-primary-dark font-subheading font-bold text-sm rounded-xl hover:bg-yellow-600 transition-colors shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Play Audio
                </>
              )}
            </motion.button>
          </div>

          <div className="space-y-2 md:space-y-3 text-center">
            {lyrics.map((item) => (
              <motion.p
                key={item.id}
                animate={
                  activeLine === item.id
                    ? { color: "#C9A227", scale: 1.02 }
                    : { color: "rgba(255,255,255,0.7)", scale: 1 }
                }
                transition={{ duration: 0.3 }}
                className={`font-body text-base md:text-lg leading-relaxed transition-all duration-300 ${
                  item.line === ""
                    ? "h-4 md:h-6"
                    : activeLine === item.id
                    ? "text-gold font-medium"
                    : "text-white/70"
                } ${item.line.startsWith("We hail") || item.line.startsWith("And be") ? "font-subheading font-semibold text-lg md:text-xl" : ""}`}
              >
                {item.line || "\u00A0"}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-gray-500 text-xs">
            <Volume2 className="w-3.5 h-3.5" />
            <span>
              {isPlaying
                ? "Now playing"
                : "Press Play Audio to listen"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
