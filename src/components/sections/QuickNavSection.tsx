"use client";

import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Building2,
  BookHeart,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    id: "nav-about",
    title: "About TCGC",
    description: "Discover our history, mission, vision, and the values that define our institution.",
    icon: Compass,
    href: "#about-preview",
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "nav-academics",
    title: "Academic Institutes",
    description: "Explore our eight colleges offering diverse programs for your future career.",
    icon: GraduationCap,
    href: "#academic-institutes",
    gradient: "from-gold to-amber-700",
  },
  {
    id: "nav-campus",
    title: "Student Life",
    description: "Experience vibrant student life, organizations, activities, and modern facilities.",
    icon: Building2,
    href: "/student-life",
    gradient: "from-primary-dark to-primary",
  },
  {
    id: "nav-resources",
    title: "Student Resources",
    description: "Access scholarships, support services, and everything you need to succeed.",
    icon: BookHeart,
    href: "#student-life",
    gradient: "from-amber-700 to-gold",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function QuickNavSection() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <section id="quick-nav" className="relative py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
            Explore
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary uppercase tracking-wide mt-2">
            Your Guide to TCGC
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to know as a freshman, all in one place.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.id}
                variants={cardVariants}
                onClick={() => handleClick(card.href)}
                className="group relative text-left bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -6 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="p-6 md:p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-subheading font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
