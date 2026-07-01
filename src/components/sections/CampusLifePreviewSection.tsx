"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Music,
  Trophy,
  Users,
  Library,
  Laptop,
  Trees,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Student Organizations",
    description: "Over 30 accredited organizations spanning academic, cultural, social, and special interest groups.",
    stat: "30+",
    statLabel: "Organizations",
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "Varsity teams and intramural programs in basketball, volleyball, badminton, and more.",
    stat: "10+",
    statLabel: "Varsity Teams",
  },
  {
    icon: Music,
    title: "Arts & Culture",
    description: "Theater, dance, music, and visual arts groups that celebrate creativity and cultural heritage.",
    stat: "15+",
    statLabel: "Annual Events",
  },
  {
    icon: HeartHandshake,
    title: "Community Service",
    description: "Outreach programs and volunteer initiatives that create meaningful social impact.",
    stat: "1,500+",
    statLabel: "Student Body",
  },
];

const facilities = [
  { icon: Library, label: "Modern Library" },
  { icon: Laptop, label: "Computer Labs" },
  { icon: Trees, label: "Campus Grounds" },
  { icon: Palette, label: "Creative Studios" },
];

export default function CampusLifePreviewSection() {
  return (
    <section id="student-life" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Student Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide mt-2">
            Student Life
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            College is more than academics. Discover a vibrant community where
            you can grow, connect, and create unforgettable memories.
          </p>
          <div className="mt-4 w-16 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((fac, index) => {
              const Icon = fac.icon;
              return (
                <motion.div
                  key={fac.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                  className="bg-light-gray rounded-2xl p-5 md:p-6 text-center group hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-subheading font-semibold text-gray-800">{fac.label}</span>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="col-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 md:p-6 text-center"
            >
              <span className="text-white/80 text-sm font-body">
                State-of-the-art facilities designed for learning, collaboration, and growth.
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                  className="bg-light-gray rounded-2xl p-5 md:p-6 group hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-subheading font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-heading text-gold">{item.stat}</span>
                    <span className="text-xs text-gray-400">{item.statLabel}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
