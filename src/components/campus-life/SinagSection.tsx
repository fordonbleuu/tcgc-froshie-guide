"use client";

import { motion } from "framer-motion";
import { Sun, Pen, Camera, Mic } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const sinagPillars = [
  { icon: Pen, label: "Publications" },
  { icon: Camera, label: "Media Production" },
  { icon: Mic, label: "Broadcasting" },
  { icon: Sun, label: "Creative Arts" },
];

export default function SinagSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Featured Organization
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            <span className="text-gold">SINAG</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The official student publication and media organization of Tangub City
            Global College. SINAG is the voice, the lens, and the story of the TCGC
            community.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <PlaceholderImage
              aspectRatio="4/3"
              label="SINAG — The Official Student Publication"
              className="shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-heading text-primary uppercase tracking-wide">
              The Light of the Campus
            </h3>
            <p className="text-gray-600 leading-relaxed">
              SINAG, meaning &quot;ray of light&quot; in Filipino, embodies the
              organization&apos;s mission to illuminate truth, foster creativity, and
              amplify the voices of the TCGC student body. As the official student
              publication, SINAG covers campus news, features, literary works, and
              multimedia content that reflects the vibrant life of the college.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From news writing and photojournalism to broadcast production and
              digital media, SINAG provides students with a platform to hone their
              skills in journalism, communication, and creative expression while
              serving as the bridge between the administration and the student body.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {sinagPillars.map((p) => {
                const PIcon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="flex flex-col items-center gap-2 p-3 bg-light-gray rounded-xl"
                  >
                    <PIcon className="w-5 h-5 text-gold" />
                    <span className="text-xs font-subheading font-medium text-gray-700 text-center">
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {["SINAG — News & Publications Team", "SINAG — Creative & Design", "SINAG — Broadcast & Media"].map(
            (label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <PlaceholderImage
                  aspectRatio="16/10"
                  label={label}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
