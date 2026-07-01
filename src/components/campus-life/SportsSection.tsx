"use client";

import { motion } from "framer-motion";
import { Trophy, Goal, Heart, Target } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const sports = [
  { name: "Basketball", description: "Men's and Women's varsity teams competing in intercollegiate leagues." },
  { name: "Volleyball", description: "Dynamic teams known for teamwork, agility, and competitive spirit." },
  { name: "Badminton", description: "Singles and doubles teams excelling in regional tournaments." },
  { name: "Track & Field", description: "Athletes competing in sprints, relays, jumps, and throws." },
  { name: "Chess", description: "Strategic minds representing TCGC in intellectual competitions." },
  { name: "Table Tennis", description: "Fast-paced matches showcasing precision and reflexes." },
];

const stats = [
  { icon: Trophy, value: "10+", label: "Varsity Teams" },
  { icon: Goal, value: "25+", label: "Tournaments Joined" },
  { icon: Heart, value: "200+", label: "Student Athletes" },
  { icon: Target, value: "15+", label: "Championship Titles" },
];

export default function SportsSection() {
  return (
    <section className="py-20 md:py-28 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Athletics
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Sports &amp; Athletics
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Build discipline, teamwork, and school pride through our varsity
            sports programs and intramural competitions.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <span className="text-2xl md:text-3xl font-heading text-primary block">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 font-subheading">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <PlaceholderImage
              aspectRatio="16/10"
              label="TCGC Basketball — Varsity Team"
              className="shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <PlaceholderImage
              aspectRatio="16/10"
              label="TCGC — Intramural Sports Event"
              className="shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-base font-subheading font-semibold text-gray-900">
                {sport.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {sport.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
